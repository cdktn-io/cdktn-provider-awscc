# `ecsDaemon` Submodule <a name="`ecsDaemon` Submodule" id="@cdktn/provider-awscc.ecsDaemon"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcsDaemon <a name="EcsDaemon" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon awscc_ecs_daemon}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_daemon.EcsDaemon;

EcsDaemon.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .capacityProviderArns(java.util.List<java.lang.String>)
//  .clusterArn(java.lang.String)
//  .daemonName(java.lang.String)
//  .daemonTaskDefinitionArn(java.lang.String)
//  .deploymentConfiguration(EcsDaemonDeploymentConfiguration)
//  .enableEcsManagedTags(java.lang.Boolean|IResolvable)
//  .enableExecuteCommand(java.lang.Boolean|IResolvable)
//  .propagateTags(java.lang.String)
//  .tags(IResolvable|java.util.List<EcsDaemonTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.capacityProviderArns">capacityProviderArns</a></code> | <code>java.util.List<java.lang.String></code> | The Amazon Resource Names (ARNs) of the capacity providers associated with the daemon. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.clusterArn">clusterArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the cluster that the daemon is running in. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.daemonName">daemonName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#daemon_name EcsDaemon#daemon_name}. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.daemonTaskDefinitionArn">daemonTaskDefinitionArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the daemon task definition used by this revision. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.deploymentConfiguration">deploymentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfiguration">EcsDaemonDeploymentConfiguration</a></code> | The deployment configuration used for this daemon deployment. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.enableEcsManagedTags">enableEcsManagedTags</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether Amazon ECS managed tags are turned on for the daemon tasks. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.enableExecuteCommand">enableExecuteCommand</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether the execute command functionality is turned on for the daemon tasks. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.propagateTags">propagateTags</a></code> | <code>java.lang.String</code> | Specifies whether tags are propagated from the daemon to the daemon tasks. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTags">EcsDaemonTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#tags EcsDaemon#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `capacityProviderArns`<sup>Optional</sup> <a name="capacityProviderArns" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.capacityProviderArns"></a>

- *Type:* java.util.List<java.lang.String>

The Amazon Resource Names (ARNs) of the capacity providers associated with the daemon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#capacity_provider_arns EcsDaemon#capacity_provider_arns}

---

##### `clusterArn`<sup>Optional</sup> <a name="clusterArn" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.clusterArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the cluster that the daemon is running in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#cluster_arn EcsDaemon#cluster_arn}

---

##### `daemonName`<sup>Optional</sup> <a name="daemonName" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.daemonName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#daemon_name EcsDaemon#daemon_name}.

---

##### `daemonTaskDefinitionArn`<sup>Optional</sup> <a name="daemonTaskDefinitionArn" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.daemonTaskDefinitionArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the daemon task definition used by this revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#daemon_task_definition_arn EcsDaemon#daemon_task_definition_arn}

---

##### `deploymentConfiguration`<sup>Optional</sup> <a name="deploymentConfiguration" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.deploymentConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfiguration">EcsDaemonDeploymentConfiguration</a>

The deployment configuration used for this daemon deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#deployment_configuration EcsDaemon#deployment_configuration}

---

##### `enableEcsManagedTags`<sup>Optional</sup> <a name="enableEcsManagedTags" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.enableEcsManagedTags"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether Amazon ECS managed tags are turned on for the daemon tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#enable_ecs_managed_tags EcsDaemon#enable_ecs_managed_tags}

---

##### `enableExecuteCommand`<sup>Optional</sup> <a name="enableExecuteCommand" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.enableExecuteCommand"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether the execute command functionality is turned on for the daemon tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#enable_execute_command EcsDaemon#enable_execute_command}

---

##### `propagateTags`<sup>Optional</sup> <a name="propagateTags" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.propagateTags"></a>

- *Type:* java.lang.String

Specifies whether tags are propagated from the daemon to the daemon tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#propagate_tags EcsDaemon#propagate_tags}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTags">EcsDaemonTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#tags EcsDaemon#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.putDeploymentConfiguration">putDeploymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.resetCapacityProviderArns">resetCapacityProviderArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.resetClusterArn">resetClusterArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.resetDaemonName">resetDaemonName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.resetDaemonTaskDefinitionArn">resetDaemonTaskDefinitionArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.resetDeploymentConfiguration">resetDeploymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.resetEnableEcsManagedTags">resetEnableEcsManagedTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.resetEnableExecuteCommand">resetEnableExecuteCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.resetPropagateTags">resetPropagateTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDeploymentConfiguration` <a name="putDeploymentConfiguration" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.putDeploymentConfiguration"></a>

```java
public void putDeploymentConfiguration(EcsDaemonDeploymentConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.putDeploymentConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfiguration">EcsDaemonDeploymentConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<EcsDaemonTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTags">EcsDaemonTags</a>>

---

##### `resetCapacityProviderArns` <a name="resetCapacityProviderArns" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.resetCapacityProviderArns"></a>

```java
public void resetCapacityProviderArns()
```

##### `resetClusterArn` <a name="resetClusterArn" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.resetClusterArn"></a>

```java
public void resetClusterArn()
```

##### `resetDaemonName` <a name="resetDaemonName" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.resetDaemonName"></a>

```java
public void resetDaemonName()
```

##### `resetDaemonTaskDefinitionArn` <a name="resetDaemonTaskDefinitionArn" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.resetDaemonTaskDefinitionArn"></a>

```java
public void resetDaemonTaskDefinitionArn()
```

##### `resetDeploymentConfiguration` <a name="resetDeploymentConfiguration" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.resetDeploymentConfiguration"></a>

```java
public void resetDeploymentConfiguration()
```

##### `resetEnableEcsManagedTags` <a name="resetEnableEcsManagedTags" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.resetEnableEcsManagedTags"></a>

```java
public void resetEnableEcsManagedTags()
```

##### `resetEnableExecuteCommand` <a name="resetEnableExecuteCommand" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.resetEnableExecuteCommand"></a>

```java
public void resetEnableExecuteCommand()
```

##### `resetPropagateTags` <a name="resetPropagateTags" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.resetPropagateTags"></a>

```java
public void resetPropagateTags()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a EcsDaemon resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ecs_daemon.EcsDaemon;

EcsDaemon.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ecs_daemon.EcsDaemon;

EcsDaemon.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ecs_daemon.EcsDaemon;

EcsDaemon.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ecs_daemon.EcsDaemon;

EcsDaemon.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),EcsDaemon.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a EcsDaemon resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the EcsDaemon to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing EcsDaemon that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the EcsDaemon to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.daemonArn">daemonArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.daemonStatus">daemonStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.deploymentArn">deploymentArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.deploymentConfiguration">deploymentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference">EcsDaemonDeploymentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList">EcsDaemonTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.capacityProviderArnsInput">capacityProviderArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.clusterArnInput">clusterArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.daemonNameInput">daemonNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.daemonTaskDefinitionArnInput">daemonTaskDefinitionArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.deploymentConfigurationInput">deploymentConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfiguration">EcsDaemonDeploymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.enableEcsManagedTagsInput">enableEcsManagedTagsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.enableExecuteCommandInput">enableExecuteCommandInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.propagateTagsInput">propagateTagsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTags">EcsDaemonTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.capacityProviderArns">capacityProviderArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.clusterArn">clusterArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.daemonName">daemonName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.daemonTaskDefinitionArn">daemonTaskDefinitionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.enableEcsManagedTags">enableEcsManagedTags</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.enableExecuteCommand">enableExecuteCommand</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.propagateTags">propagateTags</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `daemonArn`<sup>Required</sup> <a name="daemonArn" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.daemonArn"></a>

```java
public java.lang.String getDaemonArn();
```

- *Type:* java.lang.String

---

##### `daemonStatus`<sup>Required</sup> <a name="daemonStatus" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.daemonStatus"></a>

```java
public java.lang.String getDaemonStatus();
```

- *Type:* java.lang.String

---

##### `deploymentArn`<sup>Required</sup> <a name="deploymentArn" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.deploymentArn"></a>

```java
public java.lang.String getDeploymentArn();
```

- *Type:* java.lang.String

---

##### `deploymentConfiguration`<sup>Required</sup> <a name="deploymentConfiguration" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.deploymentConfiguration"></a>

```java
public EcsDaemonDeploymentConfigurationOutputReference getDeploymentConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference">EcsDaemonDeploymentConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.tags"></a>

```java
public EcsDaemonTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList">EcsDaemonTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `capacityProviderArnsInput`<sup>Optional</sup> <a name="capacityProviderArnsInput" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.capacityProviderArnsInput"></a>

```java
public java.util.List<java.lang.String> getCapacityProviderArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clusterArnInput`<sup>Optional</sup> <a name="clusterArnInput" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.clusterArnInput"></a>

```java
public java.lang.String getClusterArnInput();
```

- *Type:* java.lang.String

---

##### `daemonNameInput`<sup>Optional</sup> <a name="daemonNameInput" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.daemonNameInput"></a>

```java
public java.lang.String getDaemonNameInput();
```

- *Type:* java.lang.String

---

##### `daemonTaskDefinitionArnInput`<sup>Optional</sup> <a name="daemonTaskDefinitionArnInput" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.daemonTaskDefinitionArnInput"></a>

```java
public java.lang.String getDaemonTaskDefinitionArnInput();
```

- *Type:* java.lang.String

---

##### `deploymentConfigurationInput`<sup>Optional</sup> <a name="deploymentConfigurationInput" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.deploymentConfigurationInput"></a>

```java
public IResolvable|EcsDaemonDeploymentConfiguration getDeploymentConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfiguration">EcsDaemonDeploymentConfiguration</a>

---

##### `enableEcsManagedTagsInput`<sup>Optional</sup> <a name="enableEcsManagedTagsInput" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.enableEcsManagedTagsInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableEcsManagedTagsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableExecuteCommandInput`<sup>Optional</sup> <a name="enableExecuteCommandInput" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.enableExecuteCommandInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableExecuteCommandInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `propagateTagsInput`<sup>Optional</sup> <a name="propagateTagsInput" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.propagateTagsInput"></a>

```java
public java.lang.String getPropagateTagsInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.tagsInput"></a>

```java
public IResolvable|java.util.List<EcsDaemonTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTags">EcsDaemonTags</a>>

---

##### `capacityProviderArns`<sup>Required</sup> <a name="capacityProviderArns" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.capacityProviderArns"></a>

```java
public java.util.List<java.lang.String> getCapacityProviderArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.clusterArn"></a>

```java
public java.lang.String getClusterArn();
```

- *Type:* java.lang.String

---

##### `daemonName`<sup>Required</sup> <a name="daemonName" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.daemonName"></a>

```java
public java.lang.String getDaemonName();
```

- *Type:* java.lang.String

---

##### `daemonTaskDefinitionArn`<sup>Required</sup> <a name="daemonTaskDefinitionArn" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.daemonTaskDefinitionArn"></a>

```java
public java.lang.String getDaemonTaskDefinitionArn();
```

- *Type:* java.lang.String

---

##### `enableEcsManagedTags`<sup>Required</sup> <a name="enableEcsManagedTags" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.enableEcsManagedTags"></a>

```java
public java.lang.Boolean|IResolvable getEnableEcsManagedTags();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableExecuteCommand`<sup>Required</sup> <a name="enableExecuteCommand" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.enableExecuteCommand"></a>

```java
public java.lang.Boolean|IResolvable getEnableExecuteCommand();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `propagateTags`<sup>Required</sup> <a name="propagateTags" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.propagateTags"></a>

```java
public java.lang.String getPropagateTags();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EcsDaemonConfig <a name="EcsDaemonConfig" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_daemon.EcsDaemonConfig;

EcsDaemonConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .capacityProviderArns(java.util.List<java.lang.String>)
//  .clusterArn(java.lang.String)
//  .daemonName(java.lang.String)
//  .daemonTaskDefinitionArn(java.lang.String)
//  .deploymentConfiguration(EcsDaemonDeploymentConfiguration)
//  .enableEcsManagedTags(java.lang.Boolean|IResolvable)
//  .enableExecuteCommand(java.lang.Boolean|IResolvable)
//  .propagateTags(java.lang.String)
//  .tags(IResolvable|java.util.List<EcsDaemonTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.capacityProviderArns">capacityProviderArns</a></code> | <code>java.util.List<java.lang.String></code> | The Amazon Resource Names (ARNs) of the capacity providers associated with the daemon. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.clusterArn">clusterArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the cluster that the daemon is running in. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.daemonName">daemonName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#daemon_name EcsDaemon#daemon_name}. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.daemonTaskDefinitionArn">daemonTaskDefinitionArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the daemon task definition used by this revision. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.deploymentConfiguration">deploymentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfiguration">EcsDaemonDeploymentConfiguration</a></code> | The deployment configuration used for this daemon deployment. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.enableEcsManagedTags">enableEcsManagedTags</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether Amazon ECS managed tags are turned on for the daemon tasks. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.enableExecuteCommand">enableExecuteCommand</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether the execute command functionality is turned on for the daemon tasks. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.propagateTags">propagateTags</a></code> | <code>java.lang.String</code> | Specifies whether tags are propagated from the daemon to the daemon tasks. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTags">EcsDaemonTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#tags EcsDaemon#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `capacityProviderArns`<sup>Optional</sup> <a name="capacityProviderArns" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.capacityProviderArns"></a>

```java
public java.util.List<java.lang.String> getCapacityProviderArns();
```

- *Type:* java.util.List<java.lang.String>

The Amazon Resource Names (ARNs) of the capacity providers associated with the daemon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#capacity_provider_arns EcsDaemon#capacity_provider_arns}

---

##### `clusterArn`<sup>Optional</sup> <a name="clusterArn" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.clusterArn"></a>

```java
public java.lang.String getClusterArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the cluster that the daemon is running in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#cluster_arn EcsDaemon#cluster_arn}

---

##### `daemonName`<sup>Optional</sup> <a name="daemonName" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.daemonName"></a>

```java
public java.lang.String getDaemonName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#daemon_name EcsDaemon#daemon_name}.

---

##### `daemonTaskDefinitionArn`<sup>Optional</sup> <a name="daemonTaskDefinitionArn" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.daemonTaskDefinitionArn"></a>

```java
public java.lang.String getDaemonTaskDefinitionArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the daemon task definition used by this revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#daemon_task_definition_arn EcsDaemon#daemon_task_definition_arn}

---

##### `deploymentConfiguration`<sup>Optional</sup> <a name="deploymentConfiguration" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.deploymentConfiguration"></a>

```java
public EcsDaemonDeploymentConfiguration getDeploymentConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfiguration">EcsDaemonDeploymentConfiguration</a>

The deployment configuration used for this daemon deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#deployment_configuration EcsDaemon#deployment_configuration}

---

##### `enableEcsManagedTags`<sup>Optional</sup> <a name="enableEcsManagedTags" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.enableEcsManagedTags"></a>

```java
public java.lang.Boolean|IResolvable getEnableEcsManagedTags();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether Amazon ECS managed tags are turned on for the daemon tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#enable_ecs_managed_tags EcsDaemon#enable_ecs_managed_tags}

---

##### `enableExecuteCommand`<sup>Optional</sup> <a name="enableExecuteCommand" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.enableExecuteCommand"></a>

```java
public java.lang.Boolean|IResolvable getEnableExecuteCommand();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether the execute command functionality is turned on for the daemon tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#enable_execute_command EcsDaemon#enable_execute_command}

---

##### `propagateTags`<sup>Optional</sup> <a name="propagateTags" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.propagateTags"></a>

```java
public java.lang.String getPropagateTags();
```

- *Type:* java.lang.String

Specifies whether tags are propagated from the daemon to the daemon tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#propagate_tags EcsDaemon#propagate_tags}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.tags"></a>

```java
public IResolvable|java.util.List<EcsDaemonTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTags">EcsDaemonTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#tags EcsDaemon#tags}.

---

### EcsDaemonDeploymentConfiguration <a name="EcsDaemonDeploymentConfiguration" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_daemon.EcsDaemonDeploymentConfiguration;

EcsDaemonDeploymentConfiguration.builder()
//  .alarms(EcsDaemonDeploymentConfigurationAlarms)
//  .bakeTimeInMinutes(java.lang.Number)
//  .drainPercent(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfiguration.property.alarms">alarms</a></code> | <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarms">EcsDaemonDeploymentConfigurationAlarms</a></code> | The CloudWatch alarm configuration for the daemon deployment. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfiguration.property.bakeTimeInMinutes">bakeTimeInMinutes</a></code> | <code>java.lang.Number</code> | The amount of time (in minutes) to wait after a successful deployment step before proceeding. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfiguration.property.drainPercent">drainPercent</a></code> | <code>java.lang.Number</code> | The percentage of container instances to drain simultaneously during a daemon deployment. Valid values are between 0.0 and 100.0. |

---

##### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfiguration.property.alarms"></a>

```java
public EcsDaemonDeploymentConfigurationAlarms getAlarms();
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarms">EcsDaemonDeploymentConfigurationAlarms</a>

The CloudWatch alarm configuration for the daemon deployment.

When alarms are triggered during a deployment, the deployment can be automatically rolled back.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#alarms EcsDaemon#alarms}

---

##### `bakeTimeInMinutes`<sup>Optional</sup> <a name="bakeTimeInMinutes" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfiguration.property.bakeTimeInMinutes"></a>

```java
public java.lang.Number getBakeTimeInMinutes();
```

- *Type:* java.lang.Number

The amount of time (in minutes) to wait after a successful deployment step before proceeding.

This allows time to monitor for issues before continuing. The default value is 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#bake_time_in_minutes EcsDaemon#bake_time_in_minutes}

---

##### `drainPercent`<sup>Optional</sup> <a name="drainPercent" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfiguration.property.drainPercent"></a>

```java
public java.lang.Number getDrainPercent();
```

- *Type:* java.lang.Number

The percentage of container instances to drain simultaneously during a daemon deployment. Valid values are between 0.0 and 100.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#drain_percent EcsDaemon#drain_percent}

---

### EcsDaemonDeploymentConfigurationAlarms <a name="EcsDaemonDeploymentConfigurationAlarms" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarms.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_daemon.EcsDaemonDeploymentConfigurationAlarms;

EcsDaemonDeploymentConfigurationAlarms.builder()
//  .alarmNames(java.util.List<java.lang.String>)
//  .enable(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarms.property.alarmNames">alarmNames</a></code> | <code>java.util.List<java.lang.String></code> | The CloudWatch alarm names to monitor during a daemon deployment. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarms.property.enable">enable</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Determines whether to use the CloudWatch alarm option in the daemon deployment process. The default value is ``false``. |

---

##### `alarmNames`<sup>Optional</sup> <a name="alarmNames" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarms.property.alarmNames"></a>

```java
public java.util.List<java.lang.String> getAlarmNames();
```

- *Type:* java.util.List<java.lang.String>

The CloudWatch alarm names to monitor during a daemon deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#alarm_names EcsDaemon#alarm_names}

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarms.property.enable"></a>

```java
public java.lang.Boolean|IResolvable getEnable();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Determines whether to use the CloudWatch alarm option in the daemon deployment process. The default value is ``false``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#enable EcsDaemon#enable}

---

### EcsDaemonTags <a name="EcsDaemonTags" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_daemon.EcsDaemonTags;

EcsDaemonTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTags.property.key">key</a></code> | <code>java.lang.String</code> | One part of a key-value pair that make up a tag. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTags.property.value">value</a></code> | <code>java.lang.String</code> | The optional part of a key-value pair that make up a tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

One part of a key-value pair that make up a tag.

A `key` is a general label that acts like a category for more specific tag values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#key EcsDaemon#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The optional part of a key-value pair that make up a tag.

A `value` acts as a descriptor within a tag category (key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#value EcsDaemon#value}

---

## Classes <a name="Classes" id="Classes"></a>

### EcsDaemonDeploymentConfigurationAlarmsOutputReference <a name="EcsDaemonDeploymentConfigurationAlarmsOutputReference" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_daemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference;

new EcsDaemonDeploymentConfigurationAlarmsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.resetAlarmNames">resetAlarmNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.resetEnable">resetEnable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlarmNames` <a name="resetAlarmNames" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.resetAlarmNames"></a>

```java
public void resetAlarmNames()
```

##### `resetEnable` <a name="resetEnable" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.resetEnable"></a>

```java
public void resetEnable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.property.alarmNamesInput">alarmNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.property.enableInput">enableInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.property.alarmNames">alarmNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.property.enable">enable</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarms">EcsDaemonDeploymentConfigurationAlarms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alarmNamesInput`<sup>Optional</sup> <a name="alarmNamesInput" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.property.alarmNamesInput"></a>

```java
public java.util.List<java.lang.String> getAlarmNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.property.enableInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `alarmNames`<sup>Required</sup> <a name="alarmNames" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.property.alarmNames"></a>

```java
public java.util.List<java.lang.String> getAlarmNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.property.enable"></a>

```java
public java.lang.Boolean|IResolvable getEnable();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.property.internalValue"></a>

```java
public IResolvable|EcsDaemonDeploymentConfigurationAlarms getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarms">EcsDaemonDeploymentConfigurationAlarms</a>

---


### EcsDaemonDeploymentConfigurationOutputReference <a name="EcsDaemonDeploymentConfigurationOutputReference" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_daemon.EcsDaemonDeploymentConfigurationOutputReference;

new EcsDaemonDeploymentConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.putAlarms">putAlarms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.resetAlarms">resetAlarms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.resetBakeTimeInMinutes">resetBakeTimeInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.resetDrainPercent">resetDrainPercent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAlarms` <a name="putAlarms" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.putAlarms"></a>

```java
public void putAlarms(EcsDaemonDeploymentConfigurationAlarms value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.putAlarms.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarms">EcsDaemonDeploymentConfigurationAlarms</a>

---

##### `resetAlarms` <a name="resetAlarms" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.resetAlarms"></a>

```java
public void resetAlarms()
```

##### `resetBakeTimeInMinutes` <a name="resetBakeTimeInMinutes" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.resetBakeTimeInMinutes"></a>

```java
public void resetBakeTimeInMinutes()
```

##### `resetDrainPercent` <a name="resetDrainPercent" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.resetDrainPercent"></a>

```java
public void resetDrainPercent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.alarms">alarms</a></code> | <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference">EcsDaemonDeploymentConfigurationAlarmsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.alarmsInput">alarmsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarms">EcsDaemonDeploymentConfigurationAlarms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.bakeTimeInMinutesInput">bakeTimeInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.drainPercentInput">drainPercentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.bakeTimeInMinutes">bakeTimeInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.drainPercent">drainPercent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfiguration">EcsDaemonDeploymentConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alarms`<sup>Required</sup> <a name="alarms" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.alarms"></a>

```java
public EcsDaemonDeploymentConfigurationAlarmsOutputReference getAlarms();
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference">EcsDaemonDeploymentConfigurationAlarmsOutputReference</a>

---

##### `alarmsInput`<sup>Optional</sup> <a name="alarmsInput" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.alarmsInput"></a>

```java
public IResolvable|EcsDaemonDeploymentConfigurationAlarms getAlarmsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarms">EcsDaemonDeploymentConfigurationAlarms</a>

---

##### `bakeTimeInMinutesInput`<sup>Optional</sup> <a name="bakeTimeInMinutesInput" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.bakeTimeInMinutesInput"></a>

```java
public java.lang.Number getBakeTimeInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `drainPercentInput`<sup>Optional</sup> <a name="drainPercentInput" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.drainPercentInput"></a>

```java
public java.lang.Number getDrainPercentInput();
```

- *Type:* java.lang.Number

---

##### `bakeTimeInMinutes`<sup>Required</sup> <a name="bakeTimeInMinutes" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.bakeTimeInMinutes"></a>

```java
public java.lang.Number getBakeTimeInMinutes();
```

- *Type:* java.lang.Number

---

##### `drainPercent`<sup>Required</sup> <a name="drainPercent" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.drainPercent"></a>

```java
public java.lang.Number getDrainPercent();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|EcsDaemonDeploymentConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfiguration">EcsDaemonDeploymentConfiguration</a>

---


### EcsDaemonTagsList <a name="EcsDaemonTagsList" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_daemon.EcsDaemonTagsList;

new EcsDaemonTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.get"></a>

```java
public EcsDaemonTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTags">EcsDaemonTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EcsDaemonTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTags">EcsDaemonTags</a>>

---


### EcsDaemonTagsOutputReference <a name="EcsDaemonTagsOutputReference" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_daemon.EcsDaemonTagsOutputReference;

new EcsDaemonTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTags">EcsDaemonTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|EcsDaemonTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTags">EcsDaemonTags</a>

---



