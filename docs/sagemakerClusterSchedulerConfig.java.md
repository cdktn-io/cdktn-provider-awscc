# `sagemakerClusterSchedulerConfig` Submodule <a name="`sagemakerClusterSchedulerConfig` Submodule" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerClusterSchedulerConfig <a name="SagemakerClusterSchedulerConfig" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config awscc_sagemaker_cluster_scheduler_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster_scheduler_config.SagemakerClusterSchedulerConfig;

SagemakerClusterSchedulerConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .clusterArn(java.lang.String)
    .name(java.lang.String)
    .schedulerConfig(SagemakerClusterSchedulerConfigSchedulerConfig)
//  .description(java.lang.String)
//  .tags(IResolvable|java.util.List<SagemakerClusterSchedulerConfigTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.clusterArn">clusterArn</a></code> | <code>java.lang.String</code> | ARN of the cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name for the cluster policy. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.schedulerConfig">schedulerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig">SagemakerClusterSchedulerConfigSchedulerConfig</a></code> | Cluster policy configuration. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the cluster policy. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags">SagemakerClusterSchedulerConfigTags</a>></code> | Tags of the cluster policy. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.clusterArn"></a>

- *Type:* java.lang.String

ARN of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#cluster_arn SagemakerClusterSchedulerConfig#cluster_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name for the cluster policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#name SagemakerClusterSchedulerConfig#name}

---

##### `schedulerConfig`<sup>Required</sup> <a name="schedulerConfig" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.schedulerConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig">SagemakerClusterSchedulerConfigSchedulerConfig</a>

Cluster policy configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#scheduler_config SagemakerClusterSchedulerConfig#scheduler_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the cluster policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#description SagemakerClusterSchedulerConfig#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags">SagemakerClusterSchedulerConfigTags</a>>

Tags of the cluster policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#tags SagemakerClusterSchedulerConfig#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.putSchedulerConfig">putSchedulerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSchedulerConfig` <a name="putSchedulerConfig" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.putSchedulerConfig"></a>

```java
public void putSchedulerConfig(SagemakerClusterSchedulerConfigSchedulerConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.putSchedulerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig">SagemakerClusterSchedulerConfigSchedulerConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<SagemakerClusterSchedulerConfigTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags">SagemakerClusterSchedulerConfigTags</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerClusterSchedulerConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.isConstruct"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster_scheduler_config.SagemakerClusterSchedulerConfig;

SagemakerClusterSchedulerConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster_scheduler_config.SagemakerClusterSchedulerConfig;

SagemakerClusterSchedulerConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster_scheduler_config.SagemakerClusterSchedulerConfig;

SagemakerClusterSchedulerConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster_scheduler_config.SagemakerClusterSchedulerConfig;

SagemakerClusterSchedulerConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SagemakerClusterSchedulerConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SagemakerClusterSchedulerConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SagemakerClusterSchedulerConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SagemakerClusterSchedulerConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerClusterSchedulerConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.clusterSchedulerConfigArn">clusterSchedulerConfigArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.clusterSchedulerConfigId">clusterSchedulerConfigId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.clusterSchedulerConfigVersion">clusterSchedulerConfigVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.schedulerConfig">schedulerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference">SagemakerClusterSchedulerConfigSchedulerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList">SagemakerClusterSchedulerConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.clusterArnInput">clusterArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.schedulerConfigInput">schedulerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig">SagemakerClusterSchedulerConfigSchedulerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags">SagemakerClusterSchedulerConfigTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.clusterArn">clusterArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `clusterSchedulerConfigArn`<sup>Required</sup> <a name="clusterSchedulerConfigArn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.clusterSchedulerConfigArn"></a>

```java
public java.lang.String getClusterSchedulerConfigArn();
```

- *Type:* java.lang.String

---

##### `clusterSchedulerConfigId`<sup>Required</sup> <a name="clusterSchedulerConfigId" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.clusterSchedulerConfigId"></a>

```java
public java.lang.String getClusterSchedulerConfigId();
```

- *Type:* java.lang.String

---

##### `clusterSchedulerConfigVersion`<sup>Required</sup> <a name="clusterSchedulerConfigVersion" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.clusterSchedulerConfigVersion"></a>

```java
public java.lang.Number getClusterSchedulerConfigVersion();
```

- *Type:* java.lang.Number

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `schedulerConfig`<sup>Required</sup> <a name="schedulerConfig" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.schedulerConfig"></a>

```java
public SagemakerClusterSchedulerConfigSchedulerConfigOutputReference getSchedulerConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference">SagemakerClusterSchedulerConfigSchedulerConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.tags"></a>

```java
public SagemakerClusterSchedulerConfigTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList">SagemakerClusterSchedulerConfigTagsList</a>

---

##### `clusterArnInput`<sup>Optional</sup> <a name="clusterArnInput" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.clusterArnInput"></a>

```java
public java.lang.String getClusterArnInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `schedulerConfigInput`<sup>Optional</sup> <a name="schedulerConfigInput" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.schedulerConfigInput"></a>

```java
public IResolvable|SagemakerClusterSchedulerConfigSchedulerConfig getSchedulerConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig">SagemakerClusterSchedulerConfigSchedulerConfig</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.tagsInput"></a>

```java
public IResolvable|java.util.List<SagemakerClusterSchedulerConfigTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags">SagemakerClusterSchedulerConfigTags</a>>

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.clusterArn"></a>

```java
public java.lang.String getClusterArn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerClusterSchedulerConfigConfig <a name="SagemakerClusterSchedulerConfigConfig" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster_scheduler_config.SagemakerClusterSchedulerConfigConfig;

SagemakerClusterSchedulerConfigConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .clusterArn(java.lang.String)
    .name(java.lang.String)
    .schedulerConfig(SagemakerClusterSchedulerConfigSchedulerConfig)
//  .description(java.lang.String)
//  .tags(IResolvable|java.util.List<SagemakerClusterSchedulerConfigTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.clusterArn">clusterArn</a></code> | <code>java.lang.String</code> | ARN of the cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name for the cluster policy. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.schedulerConfig">schedulerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig">SagemakerClusterSchedulerConfigSchedulerConfig</a></code> | Cluster policy configuration. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of the cluster policy. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags">SagemakerClusterSchedulerConfigTags</a>></code> | Tags of the cluster policy. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.clusterArn"></a>

```java
public java.lang.String getClusterArn();
```

- *Type:* java.lang.String

ARN of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#cluster_arn SagemakerClusterSchedulerConfig#cluster_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name for the cluster policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#name SagemakerClusterSchedulerConfig#name}

---

##### `schedulerConfig`<sup>Required</sup> <a name="schedulerConfig" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.schedulerConfig"></a>

```java
public SagemakerClusterSchedulerConfigSchedulerConfig getSchedulerConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig">SagemakerClusterSchedulerConfigSchedulerConfig</a>

Cluster policy configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#scheduler_config SagemakerClusterSchedulerConfig#scheduler_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the cluster policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#description SagemakerClusterSchedulerConfig#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.tags"></a>

```java
public IResolvable|java.util.List<SagemakerClusterSchedulerConfigTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags">SagemakerClusterSchedulerConfigTags</a>>

Tags of the cluster policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#tags SagemakerClusterSchedulerConfig#tags}

---

### SagemakerClusterSchedulerConfigSchedulerConfig <a name="SagemakerClusterSchedulerConfigSchedulerConfig" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster_scheduler_config.SagemakerClusterSchedulerConfigSchedulerConfig;

SagemakerClusterSchedulerConfigSchedulerConfig.builder()
//  .fairShare(java.lang.String)
//  .idleResourceSharing(java.lang.String)
//  .priorityClasses(IResolvable|java.util.List<SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig.property.fairShare">fairShare</a></code> | <code>java.lang.String</code> | When enabled, entities borrow idle compute based on assigned FairShareWeight. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig.property.idleResourceSharing">idleResourceSharing</a></code> | <code>java.lang.String</code> | Configuration for sharing idle compute resources across entities. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig.property.priorityClasses">priorityClasses</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses">SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses</a>></code> | List of priority class configurations. |

---

##### `fairShare`<sup>Optional</sup> <a name="fairShare" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig.property.fairShare"></a>

```java
public java.lang.String getFairShare();
```

- *Type:* java.lang.String

When enabled, entities borrow idle compute based on assigned FairShareWeight.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#fair_share SagemakerClusterSchedulerConfig#fair_share}

---

##### `idleResourceSharing`<sup>Optional</sup> <a name="idleResourceSharing" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig.property.idleResourceSharing"></a>

```java
public java.lang.String getIdleResourceSharing();
```

- *Type:* java.lang.String

Configuration for sharing idle compute resources across entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#idle_resource_sharing SagemakerClusterSchedulerConfig#idle_resource_sharing}

---

##### `priorityClasses`<sup>Optional</sup> <a name="priorityClasses" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig.property.priorityClasses"></a>

```java
public IResolvable|java.util.List<SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses> getPriorityClasses();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses">SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses</a>>

List of priority class configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#priority_classes SagemakerClusterSchedulerConfig#priority_classes}

---

### SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses <a name="SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster_scheduler_config.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses;

SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses.builder()
//  .name(java.lang.String)
//  .weight(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses.property.name">name</a></code> | <code>java.lang.String</code> | Name of the priority class. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses.property.weight">weight</a></code> | <code>java.lang.Number</code> | Weight of the priority class. Range 0-100, default 0. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the priority class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#name SagemakerClusterSchedulerConfig#name}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

Weight of the priority class. Range 0-100, default 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#weight SagemakerClusterSchedulerConfig#weight}

---

### SagemakerClusterSchedulerConfigTags <a name="SagemakerClusterSchedulerConfigTags" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster_scheduler_config.SagemakerClusterSchedulerConfigTags;

SagemakerClusterSchedulerConfigTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#key SagemakerClusterSchedulerConfig#key}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#value SagemakerClusterSchedulerConfig#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#key SagemakerClusterSchedulerConfig#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#value SagemakerClusterSchedulerConfig#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerClusterSchedulerConfigSchedulerConfigOutputReference <a name="SagemakerClusterSchedulerConfigSchedulerConfigOutputReference" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster_scheduler_config.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference;

new SagemakerClusterSchedulerConfigSchedulerConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.putPriorityClasses">putPriorityClasses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.resetFairShare">resetFairShare</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.resetIdleResourceSharing">resetIdleResourceSharing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.resetPriorityClasses">resetPriorityClasses</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPriorityClasses` <a name="putPriorityClasses" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.putPriorityClasses"></a>

```java
public void putPriorityClasses(IResolvable|java.util.List<SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.putPriorityClasses.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses">SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses</a>>

---

##### `resetFairShare` <a name="resetFairShare" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.resetFairShare"></a>

```java
public void resetFairShare()
```

##### `resetIdleResourceSharing` <a name="resetIdleResourceSharing" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.resetIdleResourceSharing"></a>

```java
public void resetIdleResourceSharing()
```

##### `resetPriorityClasses` <a name="resetPriorityClasses" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.resetPriorityClasses"></a>

```java
public void resetPriorityClasses()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.priorityClasses">priorityClasses</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList">SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.fairShareInput">fairShareInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.idleResourceSharingInput">idleResourceSharingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.priorityClassesInput">priorityClassesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses">SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.fairShare">fairShare</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.idleResourceSharing">idleResourceSharing</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig">SagemakerClusterSchedulerConfigSchedulerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `priorityClasses`<sup>Required</sup> <a name="priorityClasses" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.priorityClasses"></a>

```java
public SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList getPriorityClasses();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList">SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList</a>

---

##### `fairShareInput`<sup>Optional</sup> <a name="fairShareInput" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.fairShareInput"></a>

```java
public java.lang.String getFairShareInput();
```

- *Type:* java.lang.String

---

##### `idleResourceSharingInput`<sup>Optional</sup> <a name="idleResourceSharingInput" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.idleResourceSharingInput"></a>

```java
public java.lang.String getIdleResourceSharingInput();
```

- *Type:* java.lang.String

---

##### `priorityClassesInput`<sup>Optional</sup> <a name="priorityClassesInput" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.priorityClassesInput"></a>

```java
public IResolvable|java.util.List<SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses> getPriorityClassesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses">SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses</a>>

---

##### `fairShare`<sup>Required</sup> <a name="fairShare" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.fairShare"></a>

```java
public java.lang.String getFairShare();
```

- *Type:* java.lang.String

---

##### `idleResourceSharing`<sup>Required</sup> <a name="idleResourceSharing" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.idleResourceSharing"></a>

```java
public java.lang.String getIdleResourceSharing();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerClusterSchedulerConfigSchedulerConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig">SagemakerClusterSchedulerConfigSchedulerConfig</a>

---


### SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList <a name="SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster_scheduler_config.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList;

new SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.get"></a>

```java
public SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses">SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses">SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses</a>>

---


### SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference <a name="SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster_scheduler_config.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference;

new SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetWeight` <a name="resetWeight" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.resetWeight"></a>

```java
public void resetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.weightInput">weightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses">SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.weightInput"></a>

```java
public java.lang.Number getWeightInput();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses">SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses</a>

---


### SagemakerClusterSchedulerConfigTagsList <a name="SagemakerClusterSchedulerConfigTagsList" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster_scheduler_config.SagemakerClusterSchedulerConfigTagsList;

new SagemakerClusterSchedulerConfigTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.get"></a>

```java
public SagemakerClusterSchedulerConfigTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags">SagemakerClusterSchedulerConfigTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerClusterSchedulerConfigTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags">SagemakerClusterSchedulerConfigTags</a>>

---


### SagemakerClusterSchedulerConfigTagsOutputReference <a name="SagemakerClusterSchedulerConfigTagsOutputReference" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_cluster_scheduler_config.SagemakerClusterSchedulerConfigTagsOutputReference;

new SagemakerClusterSchedulerConfigTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags">SagemakerClusterSchedulerConfigTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerClusterSchedulerConfigTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags">SagemakerClusterSchedulerConfigTags</a>

---



