# `codestarconnectionsSyncConfiguration` Submodule <a name="`codestarconnectionsSyncConfiguration` Submodule" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodestarconnectionsSyncConfiguration <a name="CodestarconnectionsSyncConfiguration" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codestarconnections_sync_configuration awscc_codestarconnections_sync_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.codestarconnections_sync_configuration.CodestarconnectionsSyncConfiguration;

CodestarconnectionsSyncConfiguration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .branch(java.lang.String)
    .configFile(java.lang.String)
    .repositoryLinkId(java.lang.String)
    .resourceName(java.lang.String)
    .roleArn(java.lang.String)
    .syncType(java.lang.String)
//  .publishDeploymentStatus(java.lang.String)
//  .triggerResourceUpdateOn(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.branch">branch</a></code> | <code>java.lang.String</code> | The name of the branch of the repository from which resources are to be synchronized,. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.configFile">configFile</a></code> | <code>java.lang.String</code> | The source provider repository path of the sync configuration file of the respective SyncType. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.repositoryLinkId">repositoryLinkId</a></code> | <code>java.lang.String</code> | A UUID that uniquely identifies the RepositoryLink that the SyncConfig is associated with. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.resourceName">resourceName</a></code> | <code>java.lang.String</code> | The name of the resource that is being synchronized to the repository. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The IAM Role that allows AWS to update CloudFormation stacks based on content in the specified repository. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.syncType">syncType</a></code> | <code>java.lang.String</code> | The type of resource synchronization service that is to be configured, for example, CFN_STACK_SYNC. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.publishDeploymentStatus">publishDeploymentStatus</a></code> | <code>java.lang.String</code> | Whether to enable or disable publishing of deployment status to source providers. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.triggerResourceUpdateOn">triggerResourceUpdateOn</a></code> | <code>java.lang.String</code> | When to trigger Git sync to begin the stack update. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.branch"></a>

- *Type:* java.lang.String

The name of the branch of the repository from which resources are to be synchronized,.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codestarconnections_sync_configuration#branch CodestarconnectionsSyncConfiguration#branch}

---

##### `configFile`<sup>Required</sup> <a name="configFile" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.configFile"></a>

- *Type:* java.lang.String

The source provider repository path of the sync configuration file of the respective SyncType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codestarconnections_sync_configuration#config_file CodestarconnectionsSyncConfiguration#config_file}

---

##### `repositoryLinkId`<sup>Required</sup> <a name="repositoryLinkId" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.repositoryLinkId"></a>

- *Type:* java.lang.String

A UUID that uniquely identifies the RepositoryLink that the SyncConfig is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codestarconnections_sync_configuration#repository_link_id CodestarconnectionsSyncConfiguration#repository_link_id}

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.resourceName"></a>

- *Type:* java.lang.String

The name of the resource that is being synchronized to the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codestarconnections_sync_configuration#resource_name CodestarconnectionsSyncConfiguration#resource_name}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

The IAM Role that allows AWS to update CloudFormation stacks based on content in the specified repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codestarconnections_sync_configuration#role_arn CodestarconnectionsSyncConfiguration#role_arn}

---

##### `syncType`<sup>Required</sup> <a name="syncType" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.syncType"></a>

- *Type:* java.lang.String

The type of resource synchronization service that is to be configured, for example, CFN_STACK_SYNC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codestarconnections_sync_configuration#sync_type CodestarconnectionsSyncConfiguration#sync_type}

---

##### `publishDeploymentStatus`<sup>Optional</sup> <a name="publishDeploymentStatus" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.publishDeploymentStatus"></a>

- *Type:* java.lang.String

Whether to enable or disable publishing of deployment status to source providers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codestarconnections_sync_configuration#publish_deployment_status CodestarconnectionsSyncConfiguration#publish_deployment_status}

---

##### `triggerResourceUpdateOn`<sup>Optional</sup> <a name="triggerResourceUpdateOn" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.triggerResourceUpdateOn"></a>

- *Type:* java.lang.String

When to trigger Git sync to begin the stack update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codestarconnections_sync_configuration#trigger_resource_update_on CodestarconnectionsSyncConfiguration#trigger_resource_update_on}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.resetPublishDeploymentStatus">resetPublishDeploymentStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.resetTriggerResourceUpdateOn">resetTriggerResourceUpdateOn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetPublishDeploymentStatus` <a name="resetPublishDeploymentStatus" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.resetPublishDeploymentStatus"></a>

```java
public void resetPublishDeploymentStatus()
```

##### `resetTriggerResourceUpdateOn` <a name="resetTriggerResourceUpdateOn" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.resetTriggerResourceUpdateOn"></a>

```java
public void resetTriggerResourceUpdateOn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CodestarconnectionsSyncConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.isConstruct"></a>

```java
import io.cdktn.providers.awscc.codestarconnections_sync_configuration.CodestarconnectionsSyncConfiguration;

CodestarconnectionsSyncConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.codestarconnections_sync_configuration.CodestarconnectionsSyncConfiguration;

CodestarconnectionsSyncConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.codestarconnections_sync_configuration.CodestarconnectionsSyncConfiguration;

CodestarconnectionsSyncConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.codestarconnections_sync_configuration.CodestarconnectionsSyncConfiguration;

CodestarconnectionsSyncConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CodestarconnectionsSyncConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CodestarconnectionsSyncConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CodestarconnectionsSyncConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CodestarconnectionsSyncConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codestarconnections_sync_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CodestarconnectionsSyncConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.ownerId">ownerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.providerType">providerType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.repositoryName">repositoryName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.branchInput">branchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.configFileInput">configFileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.publishDeploymentStatusInput">publishDeploymentStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.repositoryLinkIdInput">repositoryLinkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.resourceNameInput">resourceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.syncTypeInput">syncTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.triggerResourceUpdateOnInput">triggerResourceUpdateOnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.branch">branch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.configFile">configFile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.publishDeploymentStatus">publishDeploymentStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.repositoryLinkId">repositoryLinkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.resourceName">resourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.syncType">syncType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.triggerResourceUpdateOn">triggerResourceUpdateOn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.ownerId"></a>

```java
public java.lang.String getOwnerId();
```

- *Type:* java.lang.String

---

##### `providerType`<sup>Required</sup> <a name="providerType" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.providerType"></a>

```java
public java.lang.String getProviderType();
```

- *Type:* java.lang.String

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.repositoryName"></a>

```java
public java.lang.String getRepositoryName();
```

- *Type:* java.lang.String

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.branchInput"></a>

```java
public java.lang.String getBranchInput();
```

- *Type:* java.lang.String

---

##### `configFileInput`<sup>Optional</sup> <a name="configFileInput" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.configFileInput"></a>

```java
public java.lang.String getConfigFileInput();
```

- *Type:* java.lang.String

---

##### `publishDeploymentStatusInput`<sup>Optional</sup> <a name="publishDeploymentStatusInput" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.publishDeploymentStatusInput"></a>

```java
public java.lang.String getPublishDeploymentStatusInput();
```

- *Type:* java.lang.String

---

##### `repositoryLinkIdInput`<sup>Optional</sup> <a name="repositoryLinkIdInput" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.repositoryLinkIdInput"></a>

```java
public java.lang.String getRepositoryLinkIdInput();
```

- *Type:* java.lang.String

---

##### `resourceNameInput`<sup>Optional</sup> <a name="resourceNameInput" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.resourceNameInput"></a>

```java
public java.lang.String getResourceNameInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `syncTypeInput`<sup>Optional</sup> <a name="syncTypeInput" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.syncTypeInput"></a>

```java
public java.lang.String getSyncTypeInput();
```

- *Type:* java.lang.String

---

##### `triggerResourceUpdateOnInput`<sup>Optional</sup> <a name="triggerResourceUpdateOnInput" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.triggerResourceUpdateOnInput"></a>

```java
public java.lang.String getTriggerResourceUpdateOnInput();
```

- *Type:* java.lang.String

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

---

##### `configFile`<sup>Required</sup> <a name="configFile" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.configFile"></a>

```java
public java.lang.String getConfigFile();
```

- *Type:* java.lang.String

---

##### `publishDeploymentStatus`<sup>Required</sup> <a name="publishDeploymentStatus" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.publishDeploymentStatus"></a>

```java
public java.lang.String getPublishDeploymentStatus();
```

- *Type:* java.lang.String

---

##### `repositoryLinkId`<sup>Required</sup> <a name="repositoryLinkId" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.repositoryLinkId"></a>

```java
public java.lang.String getRepositoryLinkId();
```

- *Type:* java.lang.String

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.resourceName"></a>

```java
public java.lang.String getResourceName();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `syncType`<sup>Required</sup> <a name="syncType" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.syncType"></a>

```java
public java.lang.String getSyncType();
```

- *Type:* java.lang.String

---

##### `triggerResourceUpdateOn`<sup>Required</sup> <a name="triggerResourceUpdateOn" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.triggerResourceUpdateOn"></a>

```java
public java.lang.String getTriggerResourceUpdateOn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CodestarconnectionsSyncConfigurationConfig <a name="CodestarconnectionsSyncConfigurationConfig" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.codestarconnections_sync_configuration.CodestarconnectionsSyncConfigurationConfig;

CodestarconnectionsSyncConfigurationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .branch(java.lang.String)
    .configFile(java.lang.String)
    .repositoryLinkId(java.lang.String)
    .resourceName(java.lang.String)
    .roleArn(java.lang.String)
    .syncType(java.lang.String)
//  .publishDeploymentStatus(java.lang.String)
//  .triggerResourceUpdateOn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.branch">branch</a></code> | <code>java.lang.String</code> | The name of the branch of the repository from which resources are to be synchronized,. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.configFile">configFile</a></code> | <code>java.lang.String</code> | The source provider repository path of the sync configuration file of the respective SyncType. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.repositoryLinkId">repositoryLinkId</a></code> | <code>java.lang.String</code> | A UUID that uniquely identifies the RepositoryLink that the SyncConfig is associated with. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.resourceName">resourceName</a></code> | <code>java.lang.String</code> | The name of the resource that is being synchronized to the repository. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The IAM Role that allows AWS to update CloudFormation stacks based on content in the specified repository. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.syncType">syncType</a></code> | <code>java.lang.String</code> | The type of resource synchronization service that is to be configured, for example, CFN_STACK_SYNC. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.publishDeploymentStatus">publishDeploymentStatus</a></code> | <code>java.lang.String</code> | Whether to enable or disable publishing of deployment status to source providers. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.triggerResourceUpdateOn">triggerResourceUpdateOn</a></code> | <code>java.lang.String</code> | When to trigger Git sync to begin the stack update. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

The name of the branch of the repository from which resources are to be synchronized,.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codestarconnections_sync_configuration#branch CodestarconnectionsSyncConfiguration#branch}

---

##### `configFile`<sup>Required</sup> <a name="configFile" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.configFile"></a>

```java
public java.lang.String getConfigFile();
```

- *Type:* java.lang.String

The source provider repository path of the sync configuration file of the respective SyncType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codestarconnections_sync_configuration#config_file CodestarconnectionsSyncConfiguration#config_file}

---

##### `repositoryLinkId`<sup>Required</sup> <a name="repositoryLinkId" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.repositoryLinkId"></a>

```java
public java.lang.String getRepositoryLinkId();
```

- *Type:* java.lang.String

A UUID that uniquely identifies the RepositoryLink that the SyncConfig is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codestarconnections_sync_configuration#repository_link_id CodestarconnectionsSyncConfiguration#repository_link_id}

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.resourceName"></a>

```java
public java.lang.String getResourceName();
```

- *Type:* java.lang.String

The name of the resource that is being synchronized to the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codestarconnections_sync_configuration#resource_name CodestarconnectionsSyncConfiguration#resource_name}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

The IAM Role that allows AWS to update CloudFormation stacks based on content in the specified repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codestarconnections_sync_configuration#role_arn CodestarconnectionsSyncConfiguration#role_arn}

---

##### `syncType`<sup>Required</sup> <a name="syncType" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.syncType"></a>

```java
public java.lang.String getSyncType();
```

- *Type:* java.lang.String

The type of resource synchronization service that is to be configured, for example, CFN_STACK_SYNC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codestarconnections_sync_configuration#sync_type CodestarconnectionsSyncConfiguration#sync_type}

---

##### `publishDeploymentStatus`<sup>Optional</sup> <a name="publishDeploymentStatus" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.publishDeploymentStatus"></a>

```java
public java.lang.String getPublishDeploymentStatus();
```

- *Type:* java.lang.String

Whether to enable or disable publishing of deployment status to source providers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codestarconnections_sync_configuration#publish_deployment_status CodestarconnectionsSyncConfiguration#publish_deployment_status}

---

##### `triggerResourceUpdateOn`<sup>Optional</sup> <a name="triggerResourceUpdateOn" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.triggerResourceUpdateOn"></a>

```java
public java.lang.String getTriggerResourceUpdateOn();
```

- *Type:* java.lang.String

When to trigger Git sync to begin the stack update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codestarconnections_sync_configuration#trigger_resource_update_on CodestarconnectionsSyncConfiguration#trigger_resource_update_on}

---



