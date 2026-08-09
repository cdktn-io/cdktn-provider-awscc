# `mskReplicator` Submodule <a name="`mskReplicator` Submodule" id="@cdktn/provider-awscc.mskReplicator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MskReplicator <a name="MskReplicator" id="@cdktn/provider-awscc.mskReplicator.MskReplicator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator awscc_msk_replicator}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.Initializer"></a>

```java
import io.cdktn.providers.awscc.msk_replicator.MskReplicator;

MskReplicator.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .kafkaClusters(IResolvable|java.util.List<MskReplicatorKafkaClusters>)
    .replicationInfoList(IResolvable|java.util.List<MskReplicatorReplicationInfoListStruct>)
    .replicatorName(java.lang.String)
    .serviceExecutionRoleArn(java.lang.String)
//  .description(java.lang.String)
//  .logDelivery(MskReplicatorLogDelivery)
//  .tags(IResolvable|java.util.List<MskReplicatorTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.Initializer.parameter.kafkaClusters">kafkaClusters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClusters">MskReplicatorKafkaClusters</a>></code> | Specifies a list of Kafka clusters which are targets of the replicator. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.Initializer.parameter.replicationInfoList">replicationInfoList</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct">MskReplicatorReplicationInfoListStruct</a>></code> | A list of replication configurations, where each configuration targets a given source cluster to target cluster replication flow. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.Initializer.parameter.replicatorName">replicatorName</a></code> | <code>java.lang.String</code> | The name of the replicator. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.Initializer.parameter.serviceExecutionRoleArn">serviceExecutionRoleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the IAM role used by the replicator to access external resources. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A summary description of the replicator. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.Initializer.parameter.logDelivery">logDelivery</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDelivery">MskReplicatorLogDelivery</a></code> | Configuration for log delivery for the replicator. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTags">MskReplicatorTags</a>></code> | A collection of tags associated with a resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `kafkaClusters`<sup>Required</sup> <a name="kafkaClusters" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.Initializer.parameter.kafkaClusters"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClusters">MskReplicatorKafkaClusters</a>>

Specifies a list of Kafka clusters which are targets of the replicator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#kafka_clusters MskReplicator#kafka_clusters}

---

##### `replicationInfoList`<sup>Required</sup> <a name="replicationInfoList" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.Initializer.parameter.replicationInfoList"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct">MskReplicatorReplicationInfoListStruct</a>>

A list of replication configurations, where each configuration targets a given source cluster to target cluster replication flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#replication_info_list MskReplicator#replication_info_list}

---

##### `replicatorName`<sup>Required</sup> <a name="replicatorName" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.Initializer.parameter.replicatorName"></a>

- *Type:* java.lang.String

The name of the replicator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#replicator_name MskReplicator#replicator_name}

---

##### `serviceExecutionRoleArn`<sup>Required</sup> <a name="serviceExecutionRoleArn" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.Initializer.parameter.serviceExecutionRoleArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the IAM role used by the replicator to access external resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#service_execution_role_arn MskReplicator#service_execution_role_arn}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A summary description of the replicator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#description MskReplicator#description}

---

##### `logDelivery`<sup>Optional</sup> <a name="logDelivery" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.Initializer.parameter.logDelivery"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDelivery">MskReplicatorLogDelivery</a>

Configuration for log delivery for the replicator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#log_delivery MskReplicator#log_delivery}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTags">MskReplicatorTags</a>>

A collection of tags associated with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#tags MskReplicator#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.putKafkaClusters">putKafkaClusters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.putLogDelivery">putLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.putReplicationInfoList">putReplicationInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.resetLogDelivery">resetLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putKafkaClusters` <a name="putKafkaClusters" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.putKafkaClusters"></a>

```java
public void putKafkaClusters(IResolvable|java.util.List<MskReplicatorKafkaClusters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.putKafkaClusters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClusters">MskReplicatorKafkaClusters</a>>

---

##### `putLogDelivery` <a name="putLogDelivery" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.putLogDelivery"></a>

```java
public void putLogDelivery(MskReplicatorLogDelivery value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.putLogDelivery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDelivery">MskReplicatorLogDelivery</a>

---

##### `putReplicationInfoList` <a name="putReplicationInfoList" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.putReplicationInfoList"></a>

```java
public void putReplicationInfoList(IResolvable|java.util.List<MskReplicatorReplicationInfoListStruct> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.putReplicationInfoList.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct">MskReplicatorReplicationInfoListStruct</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<MskReplicatorTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTags">MskReplicatorTags</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetLogDelivery` <a name="resetLogDelivery" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.resetLogDelivery"></a>

```java
public void resetLogDelivery()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MskReplicator resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.isConstruct"></a>

```java
import io.cdktn.providers.awscc.msk_replicator.MskReplicator;

MskReplicator.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.msk_replicator.MskReplicator;

MskReplicator.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.msk_replicator.MskReplicator;

MskReplicator.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.msk_replicator.MskReplicator;

MskReplicator.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MskReplicator.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a MskReplicator resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MskReplicator to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MskReplicator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the MskReplicator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.currentVersion">currentVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.kafkaClusters">kafkaClusters</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList">MskReplicatorKafkaClustersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.logDelivery">logDelivery</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference">MskReplicatorLogDeliveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.replicationInfoList">replicationInfoList</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList">MskReplicatorReplicationInfoListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.replicatorArn">replicatorArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList">MskReplicatorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.kafkaClustersInput">kafkaClustersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClusters">MskReplicatorKafkaClusters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.logDeliveryInput">logDeliveryInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDelivery">MskReplicatorLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.replicationInfoListInput">replicationInfoListInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct">MskReplicatorReplicationInfoListStruct</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.replicatorNameInput">replicatorNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.serviceExecutionRoleArnInput">serviceExecutionRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTags">MskReplicatorTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.replicatorName">replicatorName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.serviceExecutionRoleArn">serviceExecutionRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `currentVersion`<sup>Required</sup> <a name="currentVersion" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.currentVersion"></a>

```java
public java.lang.String getCurrentVersion();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kafkaClusters`<sup>Required</sup> <a name="kafkaClusters" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.kafkaClusters"></a>

```java
public MskReplicatorKafkaClustersList getKafkaClusters();
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList">MskReplicatorKafkaClustersList</a>

---

##### `logDelivery`<sup>Required</sup> <a name="logDelivery" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.logDelivery"></a>

```java
public MskReplicatorLogDeliveryOutputReference getLogDelivery();
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference">MskReplicatorLogDeliveryOutputReference</a>

---

##### `replicationInfoList`<sup>Required</sup> <a name="replicationInfoList" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.replicationInfoList"></a>

```java
public MskReplicatorReplicationInfoListStructList getReplicationInfoList();
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList">MskReplicatorReplicationInfoListStructList</a>

---

##### `replicatorArn`<sup>Required</sup> <a name="replicatorArn" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.replicatorArn"></a>

```java
public java.lang.String getReplicatorArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.tags"></a>

```java
public MskReplicatorTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList">MskReplicatorTagsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `kafkaClustersInput`<sup>Optional</sup> <a name="kafkaClustersInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.kafkaClustersInput"></a>

```java
public IResolvable|java.util.List<MskReplicatorKafkaClusters> getKafkaClustersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClusters">MskReplicatorKafkaClusters</a>>

---

##### `logDeliveryInput`<sup>Optional</sup> <a name="logDeliveryInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.logDeliveryInput"></a>

```java
public IResolvable|MskReplicatorLogDelivery getLogDeliveryInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDelivery">MskReplicatorLogDelivery</a>

---

##### `replicationInfoListInput`<sup>Optional</sup> <a name="replicationInfoListInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.replicationInfoListInput"></a>

```java
public IResolvable|java.util.List<MskReplicatorReplicationInfoListStruct> getReplicationInfoListInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct">MskReplicatorReplicationInfoListStruct</a>>

---

##### `replicatorNameInput`<sup>Optional</sup> <a name="replicatorNameInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.replicatorNameInput"></a>

```java
public java.lang.String getReplicatorNameInput();
```

- *Type:* java.lang.String

---

##### `serviceExecutionRoleArnInput`<sup>Optional</sup> <a name="serviceExecutionRoleArnInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.serviceExecutionRoleArnInput"></a>

```java
public java.lang.String getServiceExecutionRoleArnInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.tagsInput"></a>

```java
public IResolvable|java.util.List<MskReplicatorTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTags">MskReplicatorTags</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `replicatorName`<sup>Required</sup> <a name="replicatorName" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.replicatorName"></a>

```java
public java.lang.String getReplicatorName();
```

- *Type:* java.lang.String

---

##### `serviceExecutionRoleArn`<sup>Required</sup> <a name="serviceExecutionRoleArn" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.serviceExecutionRoleArn"></a>

```java
public java.lang.String getServiceExecutionRoleArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MskReplicatorConfig <a name="MskReplicatorConfig" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.msk_replicator.MskReplicatorConfig;

MskReplicatorConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .kafkaClusters(IResolvable|java.util.List<MskReplicatorKafkaClusters>)
    .replicationInfoList(IResolvable|java.util.List<MskReplicatorReplicationInfoListStruct>)
    .replicatorName(java.lang.String)
    .serviceExecutionRoleArn(java.lang.String)
//  .description(java.lang.String)
//  .logDelivery(MskReplicatorLogDelivery)
//  .tags(IResolvable|java.util.List<MskReplicatorTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.kafkaClusters">kafkaClusters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClusters">MskReplicatorKafkaClusters</a>></code> | Specifies a list of Kafka clusters which are targets of the replicator. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.replicationInfoList">replicationInfoList</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct">MskReplicatorReplicationInfoListStruct</a>></code> | A list of replication configurations, where each configuration targets a given source cluster to target cluster replication flow. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.replicatorName">replicatorName</a></code> | <code>java.lang.String</code> | The name of the replicator. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.serviceExecutionRoleArn">serviceExecutionRoleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the IAM role used by the replicator to access external resources. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.description">description</a></code> | <code>java.lang.String</code> | A summary description of the replicator. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.logDelivery">logDelivery</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDelivery">MskReplicatorLogDelivery</a></code> | Configuration for log delivery for the replicator. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTags">MskReplicatorTags</a>></code> | A collection of tags associated with a resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `kafkaClusters`<sup>Required</sup> <a name="kafkaClusters" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.kafkaClusters"></a>

```java
public IResolvable|java.util.List<MskReplicatorKafkaClusters> getKafkaClusters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClusters">MskReplicatorKafkaClusters</a>>

Specifies a list of Kafka clusters which are targets of the replicator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#kafka_clusters MskReplicator#kafka_clusters}

---

##### `replicationInfoList`<sup>Required</sup> <a name="replicationInfoList" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.replicationInfoList"></a>

```java
public IResolvable|java.util.List<MskReplicatorReplicationInfoListStruct> getReplicationInfoList();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct">MskReplicatorReplicationInfoListStruct</a>>

A list of replication configurations, where each configuration targets a given source cluster to target cluster replication flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#replication_info_list MskReplicator#replication_info_list}

---

##### `replicatorName`<sup>Required</sup> <a name="replicatorName" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.replicatorName"></a>

```java
public java.lang.String getReplicatorName();
```

- *Type:* java.lang.String

The name of the replicator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#replicator_name MskReplicator#replicator_name}

---

##### `serviceExecutionRoleArn`<sup>Required</sup> <a name="serviceExecutionRoleArn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.serviceExecutionRoleArn"></a>

```java
public java.lang.String getServiceExecutionRoleArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the IAM role used by the replicator to access external resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#service_execution_role_arn MskReplicator#service_execution_role_arn}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A summary description of the replicator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#description MskReplicator#description}

---

##### `logDelivery`<sup>Optional</sup> <a name="logDelivery" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.logDelivery"></a>

```java
public MskReplicatorLogDelivery getLogDelivery();
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDelivery">MskReplicatorLogDelivery</a>

Configuration for log delivery for the replicator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#log_delivery MskReplicator#log_delivery}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.tags"></a>

```java
public IResolvable|java.util.List<MskReplicatorTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTags">MskReplicatorTags</a>>

A collection of tags associated with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#tags MskReplicator#tags}

---

### MskReplicatorKafkaClusters <a name="MskReplicatorKafkaClusters" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClusters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClusters.Initializer"></a>

```java
import io.cdktn.providers.awscc.msk_replicator.MskReplicatorKafkaClusters;

MskReplicatorKafkaClusters.builder()
//  .amazonMskCluster(MskReplicatorKafkaClustersAmazonMskCluster)
//  .apacheKafkaCluster(MskReplicatorKafkaClustersApacheKafkaCluster)
//  .clientAuthentication(MskReplicatorKafkaClustersClientAuthentication)
//  .encryptionInTransit(MskReplicatorKafkaClustersEncryptionInTransit)
//  .vpcConfig(MskReplicatorKafkaClustersVpcConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClusters.property.amazonMskCluster">amazonMskCluster</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskCluster">MskReplicatorKafkaClustersAmazonMskCluster</a></code> | Details of an Amazon MSK cluster. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClusters.property.apacheKafkaCluster">apacheKafkaCluster</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaCluster">MskReplicatorKafkaClustersApacheKafkaCluster</a></code> | Details of an Apache Kafka cluster. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClusters.property.clientAuthentication">clientAuthentication</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthentication">MskReplicatorKafkaClustersClientAuthentication</a></code> | Details of the client authentication used by the Apache Kafka cluster. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClusters.property.encryptionInTransit">encryptionInTransit</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransit">MskReplicatorKafkaClustersEncryptionInTransit</a></code> | Details of encryption in transit to the Apache Kafka cluster. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClusters.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfig">MskReplicatorKafkaClustersVpcConfig</a></code> | Details of an Amazon VPC which has network connectivity to the Apache Kafka cluster. |

---

##### `amazonMskCluster`<sup>Optional</sup> <a name="amazonMskCluster" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClusters.property.amazonMskCluster"></a>

```java
public MskReplicatorKafkaClustersAmazonMskCluster getAmazonMskCluster();
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskCluster">MskReplicatorKafkaClustersAmazonMskCluster</a>

Details of an Amazon MSK cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#amazon_msk_cluster MskReplicator#amazon_msk_cluster}

---

##### `apacheKafkaCluster`<sup>Optional</sup> <a name="apacheKafkaCluster" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClusters.property.apacheKafkaCluster"></a>

```java
public MskReplicatorKafkaClustersApacheKafkaCluster getApacheKafkaCluster();
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaCluster">MskReplicatorKafkaClustersApacheKafkaCluster</a>

Details of an Apache Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#apache_kafka_cluster MskReplicator#apache_kafka_cluster}

---

##### `clientAuthentication`<sup>Optional</sup> <a name="clientAuthentication" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClusters.property.clientAuthentication"></a>

```java
public MskReplicatorKafkaClustersClientAuthentication getClientAuthentication();
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthentication">MskReplicatorKafkaClustersClientAuthentication</a>

Details of the client authentication used by the Apache Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#client_authentication MskReplicator#client_authentication}

---

##### `encryptionInTransit`<sup>Optional</sup> <a name="encryptionInTransit" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClusters.property.encryptionInTransit"></a>

```java
public MskReplicatorKafkaClustersEncryptionInTransit getEncryptionInTransit();
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransit">MskReplicatorKafkaClustersEncryptionInTransit</a>

Details of encryption in transit to the Apache Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#encryption_in_transit MskReplicator#encryption_in_transit}

---

##### `vpcConfig`<sup>Optional</sup> <a name="vpcConfig" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClusters.property.vpcConfig"></a>

```java
public MskReplicatorKafkaClustersVpcConfig getVpcConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfig">MskReplicatorKafkaClustersVpcConfig</a>

Details of an Amazon VPC which has network connectivity to the Apache Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#vpc_config MskReplicator#vpc_config}

---

### MskReplicatorKafkaClustersAmazonMskCluster <a name="MskReplicatorKafkaClustersAmazonMskCluster" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskCluster"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskCluster.Initializer"></a>

```java
import io.cdktn.providers.awscc.msk_replicator.MskReplicatorKafkaClustersAmazonMskCluster;

MskReplicatorKafkaClustersAmazonMskCluster.builder()
//  .mskClusterArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskCluster.property.mskClusterArn">mskClusterArn</a></code> | <code>java.lang.String</code> | The ARN of an Amazon MSK cluster. |

---

##### `mskClusterArn`<sup>Optional</sup> <a name="mskClusterArn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskCluster.property.mskClusterArn"></a>

```java
public java.lang.String getMskClusterArn();
```

- *Type:* java.lang.String

The ARN of an Amazon MSK cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#msk_cluster_arn MskReplicator#msk_cluster_arn}

---

### MskReplicatorKafkaClustersApacheKafkaCluster <a name="MskReplicatorKafkaClustersApacheKafkaCluster" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaCluster"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaCluster.Initializer"></a>

```java
import io.cdktn.providers.awscc.msk_replicator.MskReplicatorKafkaClustersApacheKafkaCluster;

MskReplicatorKafkaClustersApacheKafkaCluster.builder()
//  .apacheKafkaClusterId(java.lang.String)
//  .bootstrapBrokerString(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaCluster.property.apacheKafkaClusterId">apacheKafkaClusterId</a></code> | <code>java.lang.String</code> | The ID of the Apache Kafka cluster. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaCluster.property.bootstrapBrokerString">bootstrapBrokerString</a></code> | <code>java.lang.String</code> | The bootstrap broker string of the Apache Kafka cluster. |

---

##### `apacheKafkaClusterId`<sup>Optional</sup> <a name="apacheKafkaClusterId" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaCluster.property.apacheKafkaClusterId"></a>

```java
public java.lang.String getApacheKafkaClusterId();
```

- *Type:* java.lang.String

The ID of the Apache Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#apache_kafka_cluster_id MskReplicator#apache_kafka_cluster_id}

---

##### `bootstrapBrokerString`<sup>Optional</sup> <a name="bootstrapBrokerString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaCluster.property.bootstrapBrokerString"></a>

```java
public java.lang.String getBootstrapBrokerString();
```

- *Type:* java.lang.String

The bootstrap broker string of the Apache Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#bootstrap_broker_string MskReplicator#bootstrap_broker_string}

---

### MskReplicatorKafkaClustersClientAuthentication <a name="MskReplicatorKafkaClustersClientAuthentication" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthentication.Initializer"></a>

```java
import io.cdktn.providers.awscc.msk_replicator.MskReplicatorKafkaClustersClientAuthentication;

MskReplicatorKafkaClustersClientAuthentication.builder()
//  .mtls(MskReplicatorKafkaClustersClientAuthenticationMtls)
//  .saslScram(MskReplicatorKafkaClustersClientAuthenticationSaslScram)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthentication.property.mtls">mtls</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtls">MskReplicatorKafkaClustersClientAuthenticationMtls</a></code> | Details for mTLS client authentication. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthentication.property.saslScram">saslScram</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScram">MskReplicatorKafkaClustersClientAuthenticationSaslScram</a></code> | Details for SASL/SCRAM client authentication. |

---

##### `mtls`<sup>Optional</sup> <a name="mtls" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthentication.property.mtls"></a>

```java
public MskReplicatorKafkaClustersClientAuthenticationMtls getMtls();
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtls">MskReplicatorKafkaClustersClientAuthenticationMtls</a>

Details for mTLS client authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#mtls MskReplicator#mtls}

---

##### `saslScram`<sup>Optional</sup> <a name="saslScram" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthentication.property.saslScram"></a>

```java
public MskReplicatorKafkaClustersClientAuthenticationSaslScram getSaslScram();
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScram">MskReplicatorKafkaClustersClientAuthenticationSaslScram</a>

Details for SASL/SCRAM client authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#sasl_scram MskReplicator#sasl_scram}

---

### MskReplicatorKafkaClustersClientAuthenticationMtls <a name="MskReplicatorKafkaClustersClientAuthenticationMtls" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtls.Initializer"></a>

```java
import io.cdktn.providers.awscc.msk_replicator.MskReplicatorKafkaClustersClientAuthenticationMtls;

MskReplicatorKafkaClustersClientAuthenticationMtls.builder()
//  .secretArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtls.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the Secrets Manager secret. |

---

##### `secretArn`<sup>Optional</sup> <a name="secretArn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtls.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the Secrets Manager secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#secret_arn MskReplicator#secret_arn}

---

### MskReplicatorKafkaClustersClientAuthenticationSaslScram <a name="MskReplicatorKafkaClustersClientAuthenticationSaslScram" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScram"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScram.Initializer"></a>

```java
import io.cdktn.providers.awscc.msk_replicator.MskReplicatorKafkaClustersClientAuthenticationSaslScram;

MskReplicatorKafkaClustersClientAuthenticationSaslScram.builder()
//  .mechanism(java.lang.String)
//  .secretArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScram.property.mechanism">mechanism</a></code> | <code>java.lang.String</code> | The SASL/SCRAM authentication mechanism. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScram.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the Secrets Manager secret. |

---

##### `mechanism`<sup>Optional</sup> <a name="mechanism" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScram.property.mechanism"></a>

```java
public java.lang.String getMechanism();
```

- *Type:* java.lang.String

The SASL/SCRAM authentication mechanism.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#mechanism MskReplicator#mechanism}

---

##### `secretArn`<sup>Optional</sup> <a name="secretArn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScram.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the Secrets Manager secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#secret_arn MskReplicator#secret_arn}

---

### MskReplicatorKafkaClustersEncryptionInTransit <a name="MskReplicatorKafkaClustersEncryptionInTransit" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransit.Initializer"></a>

```java
import io.cdktn.providers.awscc.msk_replicator.MskReplicatorKafkaClustersEncryptionInTransit;

MskReplicatorKafkaClustersEncryptionInTransit.builder()
//  .encryptionType(java.lang.String)
//  .rootCaCertificate(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransit.property.encryptionType">encryptionType</a></code> | <code>java.lang.String</code> | The type of encryption in transit to the Apache Kafka cluster. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransit.property.rootCaCertificate">rootCaCertificate</a></code> | <code>java.lang.String</code> | The root CA certificate. |

---

##### `encryptionType`<sup>Optional</sup> <a name="encryptionType" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransit.property.encryptionType"></a>

```java
public java.lang.String getEncryptionType();
```

- *Type:* java.lang.String

The type of encryption in transit to the Apache Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#encryption_type MskReplicator#encryption_type}

---

##### `rootCaCertificate`<sup>Optional</sup> <a name="rootCaCertificate" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransit.property.rootCaCertificate"></a>

```java
public java.lang.String getRootCaCertificate();
```

- *Type:* java.lang.String

The root CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#root_ca_certificate MskReplicator#root_ca_certificate}

---

### MskReplicatorKafkaClustersVpcConfig <a name="MskReplicatorKafkaClustersVpcConfig" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.msk_replicator.MskReplicatorKafkaClustersVpcConfig;

MskReplicatorKafkaClustersVpcConfig.builder()
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .subnetIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | The AWS security groups to associate with the elastic network interfaces in order to specify what the replicator has access to. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfig.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | The list of subnets to connect to in the virtual private cloud (VPC). |

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfig.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

The AWS security groups to associate with the elastic network interfaces in order to specify what the replicator has access to.

If a security group is not specified, the default security group associated with the VPC is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#security_group_ids MskReplicator#security_group_ids}

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfig.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

The list of subnets to connect to in the virtual private cloud (VPC).

AWS creates elastic network interfaces inside these subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#subnet_ids MskReplicator#subnet_ids}

---

### MskReplicatorLogDelivery <a name="MskReplicatorLogDelivery" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDelivery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDelivery.Initializer"></a>

```java
import io.cdktn.providers.awscc.msk_replicator.MskReplicatorLogDelivery;

MskReplicatorLogDelivery.builder()
//  .replicatorLogDelivery(MskReplicatorLogDeliveryReplicatorLogDelivery)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDelivery.property.replicatorLogDelivery">replicatorLogDelivery</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery">MskReplicatorLogDeliveryReplicatorLogDelivery</a></code> | The replicator logs configuration. |

---

##### `replicatorLogDelivery`<sup>Optional</sup> <a name="replicatorLogDelivery" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDelivery.property.replicatorLogDelivery"></a>

```java
public MskReplicatorLogDeliveryReplicatorLogDelivery getReplicatorLogDelivery();
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery">MskReplicatorLogDeliveryReplicatorLogDelivery</a>

The replicator logs configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#replicator_log_delivery MskReplicator#replicator_log_delivery}

---

### MskReplicatorLogDeliveryReplicatorLogDelivery <a name="MskReplicatorLogDeliveryReplicatorLogDelivery" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery.Initializer"></a>

```java
import io.cdktn.providers.awscc.msk_replicator.MskReplicatorLogDeliveryReplicatorLogDelivery;

MskReplicatorLogDeliveryReplicatorLogDelivery.builder()
//  .cloudwatchLogs(MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs)
//  .firehose(MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose)
//  .s3(MskReplicatorLogDeliveryReplicatorLogDeliveryS3)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery.property.cloudwatchLogs">cloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs">MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs</a></code> | Details of the CloudWatch Logs destination for replicator logs. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery.property.firehose">firehose</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose">MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose</a></code> | Details of the Kinesis Data Firehose delivery stream that is the destination for replicator logs. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3">MskReplicatorLogDeliveryReplicatorLogDeliveryS3</a></code> | Details of the Amazon S3 destination for replicator logs. |

---

##### `cloudwatchLogs`<sup>Optional</sup> <a name="cloudwatchLogs" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery.property.cloudwatchLogs"></a>

```java
public MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs getCloudwatchLogs();
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs">MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs</a>

Details of the CloudWatch Logs destination for replicator logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#cloudwatch_logs MskReplicator#cloudwatch_logs}

---

##### `firehose`<sup>Optional</sup> <a name="firehose" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery.property.firehose"></a>

```java
public MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose getFirehose();
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose">MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose</a>

Details of the Kinesis Data Firehose delivery stream that is the destination for replicator logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#firehose MskReplicator#firehose}

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery.property.s3"></a>

```java
public MskReplicatorLogDeliveryReplicatorLogDeliveryS3 getS3();
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3">MskReplicatorLogDeliveryReplicatorLogDeliveryS3</a>

Details of the Amazon S3 destination for replicator logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#s3 MskReplicator#s3}

---

### MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs <a name="MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs.Initializer"></a>

```java
import io.cdktn.providers.awscc.msk_replicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs;

MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs.builder()
//  .enabled(java.lang.Boolean|IResolvable)
//  .logGroup(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether log delivery to CloudWatch Logs is enabled. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs.property.logGroup">logGroup</a></code> | <code>java.lang.String</code> | The CloudWatch log group that is the destination for log delivery. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether log delivery to CloudWatch Logs is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#enabled MskReplicator#enabled}

---

##### `logGroup`<sup>Optional</sup> <a name="logGroup" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs.property.logGroup"></a>

```java
public java.lang.String getLogGroup();
```

- *Type:* java.lang.String

The CloudWatch log group that is the destination for log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#log_group MskReplicator#log_group}

---

### MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose <a name="MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose.Initializer"></a>

```java
import io.cdktn.providers.awscc.msk_replicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose;

MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose.builder()
//  .deliveryStream(java.lang.String)
//  .enabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose.property.deliveryStream">deliveryStream</a></code> | <code>java.lang.String</code> | The Firehose delivery stream that is the destination for log delivery. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether log delivery to Firehose is enabled. |

---

##### `deliveryStream`<sup>Optional</sup> <a name="deliveryStream" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose.property.deliveryStream"></a>

```java
public java.lang.String getDeliveryStream();
```

- *Type:* java.lang.String

The Firehose delivery stream that is the destination for log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#delivery_stream MskReplicator#delivery_stream}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether log delivery to Firehose is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#enabled MskReplicator#enabled}

---

### MskReplicatorLogDeliveryReplicatorLogDeliveryS3 <a name="MskReplicatorLogDeliveryReplicatorLogDeliveryS3" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3.Initializer"></a>

```java
import io.cdktn.providers.awscc.msk_replicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3;

MskReplicatorLogDeliveryReplicatorLogDeliveryS3.builder()
//  .bucket(java.lang.String)
//  .enabled(java.lang.Boolean|IResolvable)
//  .prefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3.property.bucket">bucket</a></code> | <code>java.lang.String</code> | The S3 bucket that is the destination for log delivery. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether log delivery to S3 is enabled. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3.property.prefix">prefix</a></code> | <code>java.lang.String</code> | The S3 prefix that is the destination for log delivery. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

The S3 bucket that is the destination for log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#bucket MskReplicator#bucket}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether log delivery to S3 is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#enabled MskReplicator#enabled}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

The S3 prefix that is the destination for log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#prefix MskReplicator#prefix}

---

### MskReplicatorReplicationInfoListConsumerGroupReplication <a name="MskReplicatorReplicationInfoListConsumerGroupReplication" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.Initializer"></a>

```java
import io.cdktn.providers.awscc.msk_replicator.MskReplicatorReplicationInfoListConsumerGroupReplication;

MskReplicatorReplicationInfoListConsumerGroupReplication.builder()
    .consumerGroupsToReplicate(java.util.List<java.lang.String>)
//  .consumerGroupOffsetSyncMode(java.lang.String)
//  .consumerGroupsToExclude(java.util.List<java.lang.String>)
//  .detectAndCopyNewConsumerGroups(java.lang.Boolean|IResolvable)
//  .synchroniseConsumerGroupOffsets(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.property.consumerGroupsToReplicate">consumerGroupsToReplicate</a></code> | <code>java.util.List<java.lang.String></code> | List of regular expression patterns indicating the consumer groups to copy. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.property.consumerGroupOffsetSyncMode">consumerGroupOffsetSyncMode</a></code> | <code>java.lang.String</code> | The consumer group offset synchronization mode. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.property.consumerGroupsToExclude">consumerGroupsToExclude</a></code> | <code>java.util.List<java.lang.String></code> | List of regular expression patterns indicating the consumer groups that should not be replicated. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.property.detectAndCopyNewConsumerGroups">detectAndCopyNewConsumerGroups</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to periodically check for new consumer groups. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.property.synchroniseConsumerGroupOffsets">synchroniseConsumerGroupOffsets</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to periodically write the translated offsets to __consumer_offsets topic in target cluster. |

---

##### `consumerGroupsToReplicate`<sup>Required</sup> <a name="consumerGroupsToReplicate" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.property.consumerGroupsToReplicate"></a>

```java
public java.util.List<java.lang.String> getConsumerGroupsToReplicate();
```

- *Type:* java.util.List<java.lang.String>

List of regular expression patterns indicating the consumer groups to copy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#consumer_groups_to_replicate MskReplicator#consumer_groups_to_replicate}

---

##### `consumerGroupOffsetSyncMode`<sup>Optional</sup> <a name="consumerGroupOffsetSyncMode" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.property.consumerGroupOffsetSyncMode"></a>

```java
public java.lang.String getConsumerGroupOffsetSyncMode();
```

- *Type:* java.lang.String

The consumer group offset synchronization mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#consumer_group_offset_sync_mode MskReplicator#consumer_group_offset_sync_mode}

---

##### `consumerGroupsToExclude`<sup>Optional</sup> <a name="consumerGroupsToExclude" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.property.consumerGroupsToExclude"></a>

```java
public java.util.List<java.lang.String> getConsumerGroupsToExclude();
```

- *Type:* java.util.List<java.lang.String>

List of regular expression patterns indicating the consumer groups that should not be replicated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#consumer_groups_to_exclude MskReplicator#consumer_groups_to_exclude}

---

##### `detectAndCopyNewConsumerGroups`<sup>Optional</sup> <a name="detectAndCopyNewConsumerGroups" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.property.detectAndCopyNewConsumerGroups"></a>

```java
public java.lang.Boolean|IResolvable getDetectAndCopyNewConsumerGroups();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to periodically check for new consumer groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#detect_and_copy_new_consumer_groups MskReplicator#detect_and_copy_new_consumer_groups}

---

##### `synchroniseConsumerGroupOffsets`<sup>Optional</sup> <a name="synchroniseConsumerGroupOffsets" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.property.synchroniseConsumerGroupOffsets"></a>

```java
public java.lang.Boolean|IResolvable getSynchroniseConsumerGroupOffsets();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to periodically write the translated offsets to __consumer_offsets topic in target cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#synchronise_consumer_group_offsets MskReplicator#synchronise_consumer_group_offsets}

---

### MskReplicatorReplicationInfoListStruct <a name="MskReplicatorReplicationInfoListStruct" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct.Initializer"></a>

```java
import io.cdktn.providers.awscc.msk_replicator.MskReplicatorReplicationInfoListStruct;

MskReplicatorReplicationInfoListStruct.builder()
    .consumerGroupReplication(MskReplicatorReplicationInfoListConsumerGroupReplication)
    .targetCompressionType(java.lang.String)
    .topicReplication(MskReplicatorReplicationInfoListTopicReplication)
//  .sourceKafkaClusterArn(java.lang.String)
//  .sourceKafkaClusterId(java.lang.String)
//  .targetKafkaClusterArn(java.lang.String)
//  .targetKafkaClusterId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct.property.consumerGroupReplication">consumerGroupReplication</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication">MskReplicatorReplicationInfoListConsumerGroupReplication</a></code> | Configuration relating to consumer group replication. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct.property.targetCompressionType">targetCompressionType</a></code> | <code>java.lang.String</code> | The type of compression to use writing records to target Kafka cluster. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct.property.topicReplication">topicReplication</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication">MskReplicatorReplicationInfoListTopicReplication</a></code> | Configuration relating to topic replication. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct.property.sourceKafkaClusterArn">sourceKafkaClusterArn</a></code> | <code>java.lang.String</code> | Amazon Resource Name of the source Kafka cluster. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct.property.sourceKafkaClusterId">sourceKafkaClusterId</a></code> | <code>java.lang.String</code> | The ID of the source Kafka cluster. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct.property.targetKafkaClusterArn">targetKafkaClusterArn</a></code> | <code>java.lang.String</code> | Amazon Resource Name of the target Kafka cluster. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct.property.targetKafkaClusterId">targetKafkaClusterId</a></code> | <code>java.lang.String</code> | The ID of the target Kafka cluster. |

---

##### `consumerGroupReplication`<sup>Required</sup> <a name="consumerGroupReplication" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct.property.consumerGroupReplication"></a>

```java
public MskReplicatorReplicationInfoListConsumerGroupReplication getConsumerGroupReplication();
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication">MskReplicatorReplicationInfoListConsumerGroupReplication</a>

Configuration relating to consumer group replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#consumer_group_replication MskReplicator#consumer_group_replication}

---

##### `targetCompressionType`<sup>Required</sup> <a name="targetCompressionType" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct.property.targetCompressionType"></a>

```java
public java.lang.String getTargetCompressionType();
```

- *Type:* java.lang.String

The type of compression to use writing records to target Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#target_compression_type MskReplicator#target_compression_type}

---

##### `topicReplication`<sup>Required</sup> <a name="topicReplication" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct.property.topicReplication"></a>

```java
public MskReplicatorReplicationInfoListTopicReplication getTopicReplication();
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication">MskReplicatorReplicationInfoListTopicReplication</a>

Configuration relating to topic replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#topic_replication MskReplicator#topic_replication}

---

##### `sourceKafkaClusterArn`<sup>Optional</sup> <a name="sourceKafkaClusterArn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct.property.sourceKafkaClusterArn"></a>

```java
public java.lang.String getSourceKafkaClusterArn();
```

- *Type:* java.lang.String

Amazon Resource Name of the source Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#source_kafka_cluster_arn MskReplicator#source_kafka_cluster_arn}

---

##### `sourceKafkaClusterId`<sup>Optional</sup> <a name="sourceKafkaClusterId" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct.property.sourceKafkaClusterId"></a>

```java
public java.lang.String getSourceKafkaClusterId();
```

- *Type:* java.lang.String

The ID of the source Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#source_kafka_cluster_id MskReplicator#source_kafka_cluster_id}

---

##### `targetKafkaClusterArn`<sup>Optional</sup> <a name="targetKafkaClusterArn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct.property.targetKafkaClusterArn"></a>

```java
public java.lang.String getTargetKafkaClusterArn();
```

- *Type:* java.lang.String

Amazon Resource Name of the target Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#target_kafka_cluster_arn MskReplicator#target_kafka_cluster_arn}

---

##### `targetKafkaClusterId`<sup>Optional</sup> <a name="targetKafkaClusterId" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct.property.targetKafkaClusterId"></a>

```java
public java.lang.String getTargetKafkaClusterId();
```

- *Type:* java.lang.String

The ID of the target Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#target_kafka_cluster_id MskReplicator#target_kafka_cluster_id}

---

### MskReplicatorReplicationInfoListTopicReplication <a name="MskReplicatorReplicationInfoListTopicReplication" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.Initializer"></a>

```java
import io.cdktn.providers.awscc.msk_replicator.MskReplicatorReplicationInfoListTopicReplication;

MskReplicatorReplicationInfoListTopicReplication.builder()
    .topicsToReplicate(java.util.List<java.lang.String>)
//  .copyAccessControlListsForTopics(java.lang.Boolean|IResolvable)
//  .copyTopicConfigurations(java.lang.Boolean|IResolvable)
//  .detectAndCopyNewTopics(java.lang.Boolean|IResolvable)
//  .startingPosition(MskReplicatorReplicationInfoListTopicReplicationStartingPosition)
//  .topicNameConfiguration(MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration)
//  .topicsToExclude(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.topicsToReplicate">topicsToReplicate</a></code> | <code>java.util.List<java.lang.String></code> | List of regular expression patterns indicating the topics to copy. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.copyAccessControlListsForTopics">copyAccessControlListsForTopics</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to periodically configure remote topic ACLs to match their corresponding upstream topics. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.copyTopicConfigurations">copyTopicConfigurations</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to periodically configure remote topics to match their corresponding upstream topics. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.detectAndCopyNewTopics">detectAndCopyNewTopics</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to periodically check for new topics and partitions. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.startingPosition">startingPosition</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPosition">MskReplicatorReplicationInfoListTopicReplicationStartingPosition</a></code> | Configuration for specifying the position in the topics to start replicating from. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.topicNameConfiguration">topicNameConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration">MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration</a></code> | Configuration for specifying replicated topic names should be the same as their corresponding upstream topics or prefixed with source cluster alias. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.topicsToExclude">topicsToExclude</a></code> | <code>java.util.List<java.lang.String></code> | List of regular expression patterns indicating the topics that should not be replicated. |

---

##### `topicsToReplicate`<sup>Required</sup> <a name="topicsToReplicate" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.topicsToReplicate"></a>

```java
public java.util.List<java.lang.String> getTopicsToReplicate();
```

- *Type:* java.util.List<java.lang.String>

List of regular expression patterns indicating the topics to copy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#topics_to_replicate MskReplicator#topics_to_replicate}

---

##### `copyAccessControlListsForTopics`<sup>Optional</sup> <a name="copyAccessControlListsForTopics" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.copyAccessControlListsForTopics"></a>

```java
public java.lang.Boolean|IResolvable getCopyAccessControlListsForTopics();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to periodically configure remote topic ACLs to match their corresponding upstream topics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#copy_access_control_lists_for_topics MskReplicator#copy_access_control_lists_for_topics}

---

##### `copyTopicConfigurations`<sup>Optional</sup> <a name="copyTopicConfigurations" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.copyTopicConfigurations"></a>

```java
public java.lang.Boolean|IResolvable getCopyTopicConfigurations();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to periodically configure remote topics to match their corresponding upstream topics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#copy_topic_configurations MskReplicator#copy_topic_configurations}

---

##### `detectAndCopyNewTopics`<sup>Optional</sup> <a name="detectAndCopyNewTopics" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.detectAndCopyNewTopics"></a>

```java
public java.lang.Boolean|IResolvable getDetectAndCopyNewTopics();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to periodically check for new topics and partitions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#detect_and_copy_new_topics MskReplicator#detect_and_copy_new_topics}

---

##### `startingPosition`<sup>Optional</sup> <a name="startingPosition" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.startingPosition"></a>

```java
public MskReplicatorReplicationInfoListTopicReplicationStartingPosition getStartingPosition();
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPosition">MskReplicatorReplicationInfoListTopicReplicationStartingPosition</a>

Configuration for specifying the position in the topics to start replicating from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#starting_position MskReplicator#starting_position}

---

##### `topicNameConfiguration`<sup>Optional</sup> <a name="topicNameConfiguration" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.topicNameConfiguration"></a>

```java
public MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration getTopicNameConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration">MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration</a>

Configuration for specifying replicated topic names should be the same as their corresponding upstream topics or prefixed with source cluster alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#topic_name_configuration MskReplicator#topic_name_configuration}

---

##### `topicsToExclude`<sup>Optional</sup> <a name="topicsToExclude" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.topicsToExclude"></a>

```java
public java.util.List<java.lang.String> getTopicsToExclude();
```

- *Type:* java.util.List<java.lang.String>

List of regular expression patterns indicating the topics that should not be replicated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#topics_to_exclude MskReplicator#topics_to_exclude}

---

### MskReplicatorReplicationInfoListTopicReplicationStartingPosition <a name="MskReplicatorReplicationInfoListTopicReplicationStartingPosition" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPosition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPosition.Initializer"></a>

```java
import io.cdktn.providers.awscc.msk_replicator.MskReplicatorReplicationInfoListTopicReplicationStartingPosition;

MskReplicatorReplicationInfoListTopicReplicationStartingPosition.builder()
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPosition.property.type">type</a></code> | <code>java.lang.String</code> | The type of replication starting position. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPosition.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of replication starting position.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#type MskReplicator#type}

---

### MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration <a name="MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.msk_replicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration;

MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration.builder()
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration.property.type">type</a></code> | <code>java.lang.String</code> | The type of replicated topic name. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of replicated topic name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#type MskReplicator#type}

---

### MskReplicatorTags <a name="MskReplicatorTags" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.msk_replicator.MskReplicatorTags;

MskReplicatorTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#key MskReplicator#key}. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#value MskReplicator#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#key MskReplicator#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_replicator#value MskReplicator#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### MskReplicatorKafkaClustersAmazonMskClusterOutputReference <a name="MskReplicatorKafkaClustersAmazonMskClusterOutputReference" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.msk_replicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference;

new MskReplicatorKafkaClustersAmazonMskClusterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.resetMskClusterArn">resetMskClusterArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMskClusterArn` <a name="resetMskClusterArn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.resetMskClusterArn"></a>

```java
public void resetMskClusterArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.property.mskClusterArnInput">mskClusterArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.property.mskClusterArn">mskClusterArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskCluster">MskReplicatorKafkaClustersAmazonMskCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mskClusterArnInput`<sup>Optional</sup> <a name="mskClusterArnInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.property.mskClusterArnInput"></a>

```java
public java.lang.String getMskClusterArnInput();
```

- *Type:* java.lang.String

---

##### `mskClusterArn`<sup>Required</sup> <a name="mskClusterArn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.property.mskClusterArn"></a>

```java
public java.lang.String getMskClusterArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.property.internalValue"></a>

```java
public IResolvable|MskReplicatorKafkaClustersAmazonMskCluster getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskCluster">MskReplicatorKafkaClustersAmazonMskCluster</a>

---


### MskReplicatorKafkaClustersApacheKafkaClusterOutputReference <a name="MskReplicatorKafkaClustersApacheKafkaClusterOutputReference" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.msk_replicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference;

new MskReplicatorKafkaClustersApacheKafkaClusterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.resetApacheKafkaClusterId">resetApacheKafkaClusterId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.resetBootstrapBrokerString">resetBootstrapBrokerString</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApacheKafkaClusterId` <a name="resetApacheKafkaClusterId" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.resetApacheKafkaClusterId"></a>

```java
public void resetApacheKafkaClusterId()
```

##### `resetBootstrapBrokerString` <a name="resetBootstrapBrokerString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.resetBootstrapBrokerString"></a>

```java
public void resetBootstrapBrokerString()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.property.apacheKafkaClusterIdInput">apacheKafkaClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.property.bootstrapBrokerStringInput">bootstrapBrokerStringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.property.apacheKafkaClusterId">apacheKafkaClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.property.bootstrapBrokerString">bootstrapBrokerString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaCluster">MskReplicatorKafkaClustersApacheKafkaCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apacheKafkaClusterIdInput`<sup>Optional</sup> <a name="apacheKafkaClusterIdInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.property.apacheKafkaClusterIdInput"></a>

```java
public java.lang.String getApacheKafkaClusterIdInput();
```

- *Type:* java.lang.String

---

##### `bootstrapBrokerStringInput`<sup>Optional</sup> <a name="bootstrapBrokerStringInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.property.bootstrapBrokerStringInput"></a>

```java
public java.lang.String getBootstrapBrokerStringInput();
```

- *Type:* java.lang.String

---

##### `apacheKafkaClusterId`<sup>Required</sup> <a name="apacheKafkaClusterId" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.property.apacheKafkaClusterId"></a>

```java
public java.lang.String getApacheKafkaClusterId();
```

- *Type:* java.lang.String

---

##### `bootstrapBrokerString`<sup>Required</sup> <a name="bootstrapBrokerString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.property.bootstrapBrokerString"></a>

```java
public java.lang.String getBootstrapBrokerString();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.property.internalValue"></a>

```java
public IResolvable|MskReplicatorKafkaClustersApacheKafkaCluster getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaCluster">MskReplicatorKafkaClustersApacheKafkaCluster</a>

---


### MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference <a name="MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.msk_replicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference;

new MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.resetSecretArn">resetSecretArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecretArn` <a name="resetSecretArn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.resetSecretArn"></a>

```java
public void resetSecretArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.property.secretArnInput">secretArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtls">MskReplicatorKafkaClustersClientAuthenticationMtls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.property.secretArnInput"></a>

```java
public java.lang.String getSecretArnInput();
```

- *Type:* java.lang.String

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.property.internalValue"></a>

```java
public IResolvable|MskReplicatorKafkaClustersClientAuthenticationMtls getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtls">MskReplicatorKafkaClustersClientAuthenticationMtls</a>

---


### MskReplicatorKafkaClustersClientAuthenticationOutputReference <a name="MskReplicatorKafkaClustersClientAuthenticationOutputReference" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.msk_replicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference;

new MskReplicatorKafkaClustersClientAuthenticationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.putMtls">putMtls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.putSaslScram">putSaslScram</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.resetMtls">resetMtls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.resetSaslScram">resetSaslScram</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMtls` <a name="putMtls" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.putMtls"></a>

```java
public void putMtls(MskReplicatorKafkaClustersClientAuthenticationMtls value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.putMtls.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtls">MskReplicatorKafkaClustersClientAuthenticationMtls</a>

---

##### `putSaslScram` <a name="putSaslScram" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.putSaslScram"></a>

```java
public void putSaslScram(MskReplicatorKafkaClustersClientAuthenticationSaslScram value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.putSaslScram.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScram">MskReplicatorKafkaClustersClientAuthenticationSaslScram</a>

---

##### `resetMtls` <a name="resetMtls" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.resetMtls"></a>

```java
public void resetMtls()
```

##### `resetSaslScram` <a name="resetSaslScram" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.resetSaslScram"></a>

```java
public void resetSaslScram()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.property.mtls">mtls</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference">MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.property.saslScram">saslScram</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference">MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.property.mtlsInput">mtlsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtls">MskReplicatorKafkaClustersClientAuthenticationMtls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.property.saslScramInput">saslScramInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScram">MskReplicatorKafkaClustersClientAuthenticationSaslScram</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthentication">MskReplicatorKafkaClustersClientAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mtls`<sup>Required</sup> <a name="mtls" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.property.mtls"></a>

```java
public MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference getMtls();
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference">MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference</a>

---

##### `saslScram`<sup>Required</sup> <a name="saslScram" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.property.saslScram"></a>

```java
public MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference getSaslScram();
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference">MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference</a>

---

##### `mtlsInput`<sup>Optional</sup> <a name="mtlsInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.property.mtlsInput"></a>

```java
public IResolvable|MskReplicatorKafkaClustersClientAuthenticationMtls getMtlsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtls">MskReplicatorKafkaClustersClientAuthenticationMtls</a>

---

##### `saslScramInput`<sup>Optional</sup> <a name="saslScramInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.property.saslScramInput"></a>

```java
public IResolvable|MskReplicatorKafkaClustersClientAuthenticationSaslScram getSaslScramInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScram">MskReplicatorKafkaClustersClientAuthenticationSaslScram</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.property.internalValue"></a>

```java
public IResolvable|MskReplicatorKafkaClustersClientAuthentication getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthentication">MskReplicatorKafkaClustersClientAuthentication</a>

---


### MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference <a name="MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.msk_replicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference;

new MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.resetMechanism">resetMechanism</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.resetSecretArn">resetSecretArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMechanism` <a name="resetMechanism" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.resetMechanism"></a>

```java
public void resetMechanism()
```

##### `resetSecretArn` <a name="resetSecretArn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.resetSecretArn"></a>

```java
public void resetSecretArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.property.mechanismInput">mechanismInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.property.secretArnInput">secretArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.property.mechanism">mechanism</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScram">MskReplicatorKafkaClustersClientAuthenticationSaslScram</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mechanismInput`<sup>Optional</sup> <a name="mechanismInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.property.mechanismInput"></a>

```java
public java.lang.String getMechanismInput();
```

- *Type:* java.lang.String

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.property.secretArnInput"></a>

```java
public java.lang.String getSecretArnInput();
```

- *Type:* java.lang.String

---

##### `mechanism`<sup>Required</sup> <a name="mechanism" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.property.mechanism"></a>

```java
public java.lang.String getMechanism();
```

- *Type:* java.lang.String

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.property.internalValue"></a>

```java
public IResolvable|MskReplicatorKafkaClustersClientAuthenticationSaslScram getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScram">MskReplicatorKafkaClustersClientAuthenticationSaslScram</a>

---


### MskReplicatorKafkaClustersEncryptionInTransitOutputReference <a name="MskReplicatorKafkaClustersEncryptionInTransitOutputReference" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.msk_replicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference;

new MskReplicatorKafkaClustersEncryptionInTransitOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.resetEncryptionType">resetEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.resetRootCaCertificate">resetRootCaCertificate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncryptionType` <a name="resetEncryptionType" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.resetEncryptionType"></a>

```java
public void resetEncryptionType()
```

##### `resetRootCaCertificate` <a name="resetRootCaCertificate" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.resetRootCaCertificate"></a>

```java
public void resetRootCaCertificate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.property.encryptionTypeInput">encryptionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.property.rootCaCertificateInput">rootCaCertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.property.encryptionType">encryptionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.property.rootCaCertificate">rootCaCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransit">MskReplicatorKafkaClustersEncryptionInTransit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptionTypeInput`<sup>Optional</sup> <a name="encryptionTypeInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.property.encryptionTypeInput"></a>

```java
public java.lang.String getEncryptionTypeInput();
```

- *Type:* java.lang.String

---

##### `rootCaCertificateInput`<sup>Optional</sup> <a name="rootCaCertificateInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.property.rootCaCertificateInput"></a>

```java
public java.lang.String getRootCaCertificateInput();
```

- *Type:* java.lang.String

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.property.encryptionType"></a>

```java
public java.lang.String getEncryptionType();
```

- *Type:* java.lang.String

---

##### `rootCaCertificate`<sup>Required</sup> <a name="rootCaCertificate" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.property.rootCaCertificate"></a>

```java
public java.lang.String getRootCaCertificate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.property.internalValue"></a>

```java
public IResolvable|MskReplicatorKafkaClustersEncryptionInTransit getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransit">MskReplicatorKafkaClustersEncryptionInTransit</a>

---


### MskReplicatorKafkaClustersList <a name="MskReplicatorKafkaClustersList" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.msk_replicator.MskReplicatorKafkaClustersList;

new MskReplicatorKafkaClustersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.get"></a>

```java
public MskReplicatorKafkaClustersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClusters">MskReplicatorKafkaClusters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MskReplicatorKafkaClusters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClusters">MskReplicatorKafkaClusters</a>>

---


### MskReplicatorKafkaClustersOutputReference <a name="MskReplicatorKafkaClustersOutputReference" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.msk_replicator.MskReplicatorKafkaClustersOutputReference;

new MskReplicatorKafkaClustersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.putAmazonMskCluster">putAmazonMskCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.putApacheKafkaCluster">putApacheKafkaCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.putClientAuthentication">putClientAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.putEncryptionInTransit">putEncryptionInTransit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.putVpcConfig">putVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.resetAmazonMskCluster">resetAmazonMskCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.resetApacheKafkaCluster">resetApacheKafkaCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.resetClientAuthentication">resetClientAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.resetEncryptionInTransit">resetEncryptionInTransit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.resetVpcConfig">resetVpcConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAmazonMskCluster` <a name="putAmazonMskCluster" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.putAmazonMskCluster"></a>

```java
public void putAmazonMskCluster(MskReplicatorKafkaClustersAmazonMskCluster value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.putAmazonMskCluster.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskCluster">MskReplicatorKafkaClustersAmazonMskCluster</a>

---

##### `putApacheKafkaCluster` <a name="putApacheKafkaCluster" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.putApacheKafkaCluster"></a>

```java
public void putApacheKafkaCluster(MskReplicatorKafkaClustersApacheKafkaCluster value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.putApacheKafkaCluster.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaCluster">MskReplicatorKafkaClustersApacheKafkaCluster</a>

---

##### `putClientAuthentication` <a name="putClientAuthentication" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.putClientAuthentication"></a>

```java
public void putClientAuthentication(MskReplicatorKafkaClustersClientAuthentication value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.putClientAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthentication">MskReplicatorKafkaClustersClientAuthentication</a>

---

##### `putEncryptionInTransit` <a name="putEncryptionInTransit" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.putEncryptionInTransit"></a>

```java
public void putEncryptionInTransit(MskReplicatorKafkaClustersEncryptionInTransit value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.putEncryptionInTransit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransit">MskReplicatorKafkaClustersEncryptionInTransit</a>

---

##### `putVpcConfig` <a name="putVpcConfig" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.putVpcConfig"></a>

```java
public void putVpcConfig(MskReplicatorKafkaClustersVpcConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfig">MskReplicatorKafkaClustersVpcConfig</a>

---

##### `resetAmazonMskCluster` <a name="resetAmazonMskCluster" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.resetAmazonMskCluster"></a>

```java
public void resetAmazonMskCluster()
```

##### `resetApacheKafkaCluster` <a name="resetApacheKafkaCluster" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.resetApacheKafkaCluster"></a>

```java
public void resetApacheKafkaCluster()
```

##### `resetClientAuthentication` <a name="resetClientAuthentication" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.resetClientAuthentication"></a>

```java
public void resetClientAuthentication()
```

##### `resetEncryptionInTransit` <a name="resetEncryptionInTransit" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.resetEncryptionInTransit"></a>

```java
public void resetEncryptionInTransit()
```

##### `resetVpcConfig` <a name="resetVpcConfig" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.resetVpcConfig"></a>

```java
public void resetVpcConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.amazonMskCluster">amazonMskCluster</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference">MskReplicatorKafkaClustersAmazonMskClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.apacheKafkaCluster">apacheKafkaCluster</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference">MskReplicatorKafkaClustersApacheKafkaClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.clientAuthentication">clientAuthentication</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference">MskReplicatorKafkaClustersClientAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.encryptionInTransit">encryptionInTransit</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference">MskReplicatorKafkaClustersEncryptionInTransitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference">MskReplicatorKafkaClustersVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.amazonMskClusterInput">amazonMskClusterInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskCluster">MskReplicatorKafkaClustersAmazonMskCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.apacheKafkaClusterInput">apacheKafkaClusterInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaCluster">MskReplicatorKafkaClustersApacheKafkaCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.clientAuthenticationInput">clientAuthenticationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthentication">MskReplicatorKafkaClustersClientAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.encryptionInTransitInput">encryptionInTransitInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransit">MskReplicatorKafkaClustersEncryptionInTransit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.vpcConfigInput">vpcConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfig">MskReplicatorKafkaClustersVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClusters">MskReplicatorKafkaClusters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `amazonMskCluster`<sup>Required</sup> <a name="amazonMskCluster" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.amazonMskCluster"></a>

```java
public MskReplicatorKafkaClustersAmazonMskClusterOutputReference getAmazonMskCluster();
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference">MskReplicatorKafkaClustersAmazonMskClusterOutputReference</a>

---

##### `apacheKafkaCluster`<sup>Required</sup> <a name="apacheKafkaCluster" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.apacheKafkaCluster"></a>

```java
public MskReplicatorKafkaClustersApacheKafkaClusterOutputReference getApacheKafkaCluster();
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference">MskReplicatorKafkaClustersApacheKafkaClusterOutputReference</a>

---

##### `clientAuthentication`<sup>Required</sup> <a name="clientAuthentication" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.clientAuthentication"></a>

```java
public MskReplicatorKafkaClustersClientAuthenticationOutputReference getClientAuthentication();
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference">MskReplicatorKafkaClustersClientAuthenticationOutputReference</a>

---

##### `encryptionInTransit`<sup>Required</sup> <a name="encryptionInTransit" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.encryptionInTransit"></a>

```java
public MskReplicatorKafkaClustersEncryptionInTransitOutputReference getEncryptionInTransit();
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference">MskReplicatorKafkaClustersEncryptionInTransitOutputReference</a>

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.vpcConfig"></a>

```java
public MskReplicatorKafkaClustersVpcConfigOutputReference getVpcConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference">MskReplicatorKafkaClustersVpcConfigOutputReference</a>

---

##### `amazonMskClusterInput`<sup>Optional</sup> <a name="amazonMskClusterInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.amazonMskClusterInput"></a>

```java
public IResolvable|MskReplicatorKafkaClustersAmazonMskCluster getAmazonMskClusterInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskCluster">MskReplicatorKafkaClustersAmazonMskCluster</a>

---

##### `apacheKafkaClusterInput`<sup>Optional</sup> <a name="apacheKafkaClusterInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.apacheKafkaClusterInput"></a>

```java
public IResolvable|MskReplicatorKafkaClustersApacheKafkaCluster getApacheKafkaClusterInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaCluster">MskReplicatorKafkaClustersApacheKafkaCluster</a>

---

##### `clientAuthenticationInput`<sup>Optional</sup> <a name="clientAuthenticationInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.clientAuthenticationInput"></a>

```java
public IResolvable|MskReplicatorKafkaClustersClientAuthentication getClientAuthenticationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthentication">MskReplicatorKafkaClustersClientAuthentication</a>

---

##### `encryptionInTransitInput`<sup>Optional</sup> <a name="encryptionInTransitInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.encryptionInTransitInput"></a>

```java
public IResolvable|MskReplicatorKafkaClustersEncryptionInTransit getEncryptionInTransitInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransit">MskReplicatorKafkaClustersEncryptionInTransit</a>

---

##### `vpcConfigInput`<sup>Optional</sup> <a name="vpcConfigInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.vpcConfigInput"></a>

```java
public IResolvable|MskReplicatorKafkaClustersVpcConfig getVpcConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfig">MskReplicatorKafkaClustersVpcConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.internalValue"></a>

```java
public IResolvable|MskReplicatorKafkaClusters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClusters">MskReplicatorKafkaClusters</a>

---


### MskReplicatorKafkaClustersVpcConfigOutputReference <a name="MskReplicatorKafkaClustersVpcConfigOutputReference" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.msk_replicator.MskReplicatorKafkaClustersVpcConfigOutputReference;

new MskReplicatorKafkaClustersVpcConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.resetSecurityGroupIds"></a>

```java
public void resetSecurityGroupIds()
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.resetSubnetIds"></a>

```java
public void resetSubnetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfig">MskReplicatorKafkaClustersVpcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|MskReplicatorKafkaClustersVpcConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfig">MskReplicatorKafkaClustersVpcConfig</a>

---


### MskReplicatorLogDeliveryOutputReference <a name="MskReplicatorLogDeliveryOutputReference" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.msk_replicator.MskReplicatorLogDeliveryOutputReference;

new MskReplicatorLogDeliveryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.putReplicatorLogDelivery">putReplicatorLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.resetReplicatorLogDelivery">resetReplicatorLogDelivery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putReplicatorLogDelivery` <a name="putReplicatorLogDelivery" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.putReplicatorLogDelivery"></a>

```java
public void putReplicatorLogDelivery(MskReplicatorLogDeliveryReplicatorLogDelivery value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.putReplicatorLogDelivery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery">MskReplicatorLogDeliveryReplicatorLogDelivery</a>

---

##### `resetReplicatorLogDelivery` <a name="resetReplicatorLogDelivery" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.resetReplicatorLogDelivery"></a>

```java
public void resetReplicatorLogDelivery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.property.replicatorLogDelivery">replicatorLogDelivery</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference">MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.property.replicatorLogDeliveryInput">replicatorLogDeliveryInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery">MskReplicatorLogDeliveryReplicatorLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDelivery">MskReplicatorLogDelivery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `replicatorLogDelivery`<sup>Required</sup> <a name="replicatorLogDelivery" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.property.replicatorLogDelivery"></a>

```java
public MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference getReplicatorLogDelivery();
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference">MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference</a>

---

##### `replicatorLogDeliveryInput`<sup>Optional</sup> <a name="replicatorLogDeliveryInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.property.replicatorLogDeliveryInput"></a>

```java
public IResolvable|MskReplicatorLogDeliveryReplicatorLogDelivery getReplicatorLogDeliveryInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery">MskReplicatorLogDeliveryReplicatorLogDelivery</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.property.internalValue"></a>

```java
public IResolvable|MskReplicatorLogDelivery getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDelivery">MskReplicatorLogDelivery</a>

---


### MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference <a name="MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.msk_replicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference;

new MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.resetLogGroup">resetLogGroup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetLogGroup` <a name="resetLogGroup" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.resetLogGroup"></a>

```java
public void resetLogGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.logGroupInput">logGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.logGroup">logGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs">MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `logGroupInput`<sup>Optional</sup> <a name="logGroupInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.logGroupInput"></a>

```java
public java.lang.String getLogGroupInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.logGroup"></a>

```java
public java.lang.String getLogGroup();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.internalValue"></a>

```java
public IResolvable|MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs">MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs</a>

---


### MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference <a name="MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.msk_replicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference;

new MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.resetDeliveryStream">resetDeliveryStream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeliveryStream` <a name="resetDeliveryStream" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.resetDeliveryStream"></a>

```java
public void resetDeliveryStream()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.deliveryStreamInput">deliveryStreamInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.deliveryStream">deliveryStream</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose">MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deliveryStreamInput`<sup>Optional</sup> <a name="deliveryStreamInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.deliveryStreamInput"></a>

```java
public java.lang.String getDeliveryStreamInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `deliveryStream`<sup>Required</sup> <a name="deliveryStream" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.deliveryStream"></a>

```java
public java.lang.String getDeliveryStream();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.internalValue"></a>

```java
public IResolvable|MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose">MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose</a>

---


### MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference <a name="MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.msk_replicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference;

new MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.putCloudwatchLogs">putCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.putFirehose">putFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.putS3">putS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.resetCloudwatchLogs">resetCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.resetFirehose">resetFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.resetS3">resetS3</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudwatchLogs` <a name="putCloudwatchLogs" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.putCloudwatchLogs"></a>

```java
public void putCloudwatchLogs(MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.putCloudwatchLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs">MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs</a>

---

##### `putFirehose` <a name="putFirehose" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.putFirehose"></a>

```java
public void putFirehose(MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.putFirehose.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose">MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose</a>

---

##### `putS3` <a name="putS3" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.putS3"></a>

```java
public void putS3(MskReplicatorLogDeliveryReplicatorLogDeliveryS3 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3">MskReplicatorLogDeliveryReplicatorLogDeliveryS3</a>

---

##### `resetCloudwatchLogs` <a name="resetCloudwatchLogs" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.resetCloudwatchLogs"></a>

```java
public void resetCloudwatchLogs()
```

##### `resetFirehose` <a name="resetFirehose" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.resetFirehose"></a>

```java
public void resetFirehose()
```

##### `resetS3` <a name="resetS3" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.resetS3"></a>

```java
public void resetS3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.cloudwatchLogs">cloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference">MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.firehose">firehose</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference">MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference">MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.cloudwatchLogsInput">cloudwatchLogsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs">MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.firehoseInput">firehoseInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose">MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.s3Input">s3Input</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3">MskReplicatorLogDeliveryReplicatorLogDeliveryS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery">MskReplicatorLogDeliveryReplicatorLogDelivery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudwatchLogs`<sup>Required</sup> <a name="cloudwatchLogs" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.cloudwatchLogs"></a>

```java
public MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference getCloudwatchLogs();
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference">MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference</a>

---

##### `firehose`<sup>Required</sup> <a name="firehose" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.firehose"></a>

```java
public MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference getFirehose();
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference">MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference</a>

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.s3"></a>

```java
public MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference getS3();
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference">MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference</a>

---

##### `cloudwatchLogsInput`<sup>Optional</sup> <a name="cloudwatchLogsInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.cloudwatchLogsInput"></a>

```java
public IResolvable|MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs getCloudwatchLogsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs">MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs</a>

---

##### `firehoseInput`<sup>Optional</sup> <a name="firehoseInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.firehoseInput"></a>

```java
public IResolvable|MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose getFirehoseInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose">MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose</a>

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.s3Input"></a>

```java
public IResolvable|MskReplicatorLogDeliveryReplicatorLogDeliveryS3 getS3Input();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3">MskReplicatorLogDeliveryReplicatorLogDeliveryS3</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.internalValue"></a>

```java
public IResolvable|MskReplicatorLogDeliveryReplicatorLogDelivery getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery">MskReplicatorLogDeliveryReplicatorLogDelivery</a>

---


### MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference <a name="MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.msk_replicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference;

new MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.resetBucket"></a>

```java
public void resetBucket()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3">MskReplicatorLogDeliveryReplicatorLogDeliveryS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.internalValue"></a>

```java
public IResolvable|MskReplicatorLogDeliveryReplicatorLogDeliveryS3 getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3">MskReplicatorLogDeliveryReplicatorLogDeliveryS3</a>

---


### MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference <a name="MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.msk_replicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference;

new MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resetConsumerGroupOffsetSyncMode">resetConsumerGroupOffsetSyncMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resetConsumerGroupsToExclude">resetConsumerGroupsToExclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resetDetectAndCopyNewConsumerGroups">resetDetectAndCopyNewConsumerGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resetSynchroniseConsumerGroupOffsets">resetSynchroniseConsumerGroupOffsets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConsumerGroupOffsetSyncMode` <a name="resetConsumerGroupOffsetSyncMode" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resetConsumerGroupOffsetSyncMode"></a>

```java
public void resetConsumerGroupOffsetSyncMode()
```

##### `resetConsumerGroupsToExclude` <a name="resetConsumerGroupsToExclude" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resetConsumerGroupsToExclude"></a>

```java
public void resetConsumerGroupsToExclude()
```

##### `resetDetectAndCopyNewConsumerGroups` <a name="resetDetectAndCopyNewConsumerGroups" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resetDetectAndCopyNewConsumerGroups"></a>

```java
public void resetDetectAndCopyNewConsumerGroups()
```

##### `resetSynchroniseConsumerGroupOffsets` <a name="resetSynchroniseConsumerGroupOffsets" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resetSynchroniseConsumerGroupOffsets"></a>

```java
public void resetSynchroniseConsumerGroupOffsets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupOffsetSyncModeInput">consumerGroupOffsetSyncModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupsToExcludeInput">consumerGroupsToExcludeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupsToReplicateInput">consumerGroupsToReplicateInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.detectAndCopyNewConsumerGroupsInput">detectAndCopyNewConsumerGroupsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.synchroniseConsumerGroupOffsetsInput">synchroniseConsumerGroupOffsetsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupOffsetSyncMode">consumerGroupOffsetSyncMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupsToExclude">consumerGroupsToExclude</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupsToReplicate">consumerGroupsToReplicate</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.detectAndCopyNewConsumerGroups">detectAndCopyNewConsumerGroups</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.synchroniseConsumerGroupOffsets">synchroniseConsumerGroupOffsets</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication">MskReplicatorReplicationInfoListConsumerGroupReplication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `consumerGroupOffsetSyncModeInput`<sup>Optional</sup> <a name="consumerGroupOffsetSyncModeInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupOffsetSyncModeInput"></a>

```java
public java.lang.String getConsumerGroupOffsetSyncModeInput();
```

- *Type:* java.lang.String

---

##### `consumerGroupsToExcludeInput`<sup>Optional</sup> <a name="consumerGroupsToExcludeInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupsToExcludeInput"></a>

```java
public java.util.List<java.lang.String> getConsumerGroupsToExcludeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `consumerGroupsToReplicateInput`<sup>Optional</sup> <a name="consumerGroupsToReplicateInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupsToReplicateInput"></a>

```java
public java.util.List<java.lang.String> getConsumerGroupsToReplicateInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `detectAndCopyNewConsumerGroupsInput`<sup>Optional</sup> <a name="detectAndCopyNewConsumerGroupsInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.detectAndCopyNewConsumerGroupsInput"></a>

```java
public java.lang.Boolean|IResolvable getDetectAndCopyNewConsumerGroupsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `synchroniseConsumerGroupOffsetsInput`<sup>Optional</sup> <a name="synchroniseConsumerGroupOffsetsInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.synchroniseConsumerGroupOffsetsInput"></a>

```java
public java.lang.Boolean|IResolvable getSynchroniseConsumerGroupOffsetsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `consumerGroupOffsetSyncMode`<sup>Required</sup> <a name="consumerGroupOffsetSyncMode" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupOffsetSyncMode"></a>

```java
public java.lang.String getConsumerGroupOffsetSyncMode();
```

- *Type:* java.lang.String

---

##### `consumerGroupsToExclude`<sup>Required</sup> <a name="consumerGroupsToExclude" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupsToExclude"></a>

```java
public java.util.List<java.lang.String> getConsumerGroupsToExclude();
```

- *Type:* java.util.List<java.lang.String>

---

##### `consumerGroupsToReplicate`<sup>Required</sup> <a name="consumerGroupsToReplicate" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupsToReplicate"></a>

```java
public java.util.List<java.lang.String> getConsumerGroupsToReplicate();
```

- *Type:* java.util.List<java.lang.String>

---

##### `detectAndCopyNewConsumerGroups`<sup>Required</sup> <a name="detectAndCopyNewConsumerGroups" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.detectAndCopyNewConsumerGroups"></a>

```java
public java.lang.Boolean|IResolvable getDetectAndCopyNewConsumerGroups();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `synchroniseConsumerGroupOffsets`<sup>Required</sup> <a name="synchroniseConsumerGroupOffsets" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.synchroniseConsumerGroupOffsets"></a>

```java
public java.lang.Boolean|IResolvable getSynchroniseConsumerGroupOffsets();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.internalValue"></a>

```java
public IResolvable|MskReplicatorReplicationInfoListConsumerGroupReplication getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication">MskReplicatorReplicationInfoListConsumerGroupReplication</a>

---


### MskReplicatorReplicationInfoListStructList <a name="MskReplicatorReplicationInfoListStructList" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.Initializer"></a>

```java
import io.cdktn.providers.awscc.msk_replicator.MskReplicatorReplicationInfoListStructList;

new MskReplicatorReplicationInfoListStructList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.get"></a>

```java
public MskReplicatorReplicationInfoListStructOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct">MskReplicatorReplicationInfoListStruct</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MskReplicatorReplicationInfoListStruct> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct">MskReplicatorReplicationInfoListStruct</a>>

---


### MskReplicatorReplicationInfoListStructOutputReference <a name="MskReplicatorReplicationInfoListStructOutputReference" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.msk_replicator.MskReplicatorReplicationInfoListStructOutputReference;

new MskReplicatorReplicationInfoListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.putConsumerGroupReplication">putConsumerGroupReplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.putTopicReplication">putTopicReplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.resetSourceKafkaClusterArn">resetSourceKafkaClusterArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.resetSourceKafkaClusterId">resetSourceKafkaClusterId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.resetTargetKafkaClusterArn">resetTargetKafkaClusterArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.resetTargetKafkaClusterId">resetTargetKafkaClusterId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConsumerGroupReplication` <a name="putConsumerGroupReplication" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.putConsumerGroupReplication"></a>

```java
public void putConsumerGroupReplication(MskReplicatorReplicationInfoListConsumerGroupReplication value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.putConsumerGroupReplication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication">MskReplicatorReplicationInfoListConsumerGroupReplication</a>

---

##### `putTopicReplication` <a name="putTopicReplication" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.putTopicReplication"></a>

```java
public void putTopicReplication(MskReplicatorReplicationInfoListTopicReplication value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.putTopicReplication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication">MskReplicatorReplicationInfoListTopicReplication</a>

---

##### `resetSourceKafkaClusterArn` <a name="resetSourceKafkaClusterArn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.resetSourceKafkaClusterArn"></a>

```java
public void resetSourceKafkaClusterArn()
```

##### `resetSourceKafkaClusterId` <a name="resetSourceKafkaClusterId" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.resetSourceKafkaClusterId"></a>

```java
public void resetSourceKafkaClusterId()
```

##### `resetTargetKafkaClusterArn` <a name="resetTargetKafkaClusterArn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.resetTargetKafkaClusterArn"></a>

```java
public void resetTargetKafkaClusterArn()
```

##### `resetTargetKafkaClusterId` <a name="resetTargetKafkaClusterId" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.resetTargetKafkaClusterId"></a>

```java
public void resetTargetKafkaClusterId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.consumerGroupReplication">consumerGroupReplication</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference">MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.topicReplication">topicReplication</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference">MskReplicatorReplicationInfoListTopicReplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.consumerGroupReplicationInput">consumerGroupReplicationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication">MskReplicatorReplicationInfoListConsumerGroupReplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.sourceKafkaClusterArnInput">sourceKafkaClusterArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.sourceKafkaClusterIdInput">sourceKafkaClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetCompressionTypeInput">targetCompressionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetKafkaClusterArnInput">targetKafkaClusterArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetKafkaClusterIdInput">targetKafkaClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.topicReplicationInput">topicReplicationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication">MskReplicatorReplicationInfoListTopicReplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.sourceKafkaClusterArn">sourceKafkaClusterArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.sourceKafkaClusterId">sourceKafkaClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetCompressionType">targetCompressionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetKafkaClusterArn">targetKafkaClusterArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetKafkaClusterId">targetKafkaClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct">MskReplicatorReplicationInfoListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `consumerGroupReplication`<sup>Required</sup> <a name="consumerGroupReplication" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.consumerGroupReplication"></a>

```java
public MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference getConsumerGroupReplication();
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference">MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference</a>

---

##### `topicReplication`<sup>Required</sup> <a name="topicReplication" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.topicReplication"></a>

```java
public MskReplicatorReplicationInfoListTopicReplicationOutputReference getTopicReplication();
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference">MskReplicatorReplicationInfoListTopicReplicationOutputReference</a>

---

##### `consumerGroupReplicationInput`<sup>Optional</sup> <a name="consumerGroupReplicationInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.consumerGroupReplicationInput"></a>

```java
public IResolvable|MskReplicatorReplicationInfoListConsumerGroupReplication getConsumerGroupReplicationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication">MskReplicatorReplicationInfoListConsumerGroupReplication</a>

---

##### `sourceKafkaClusterArnInput`<sup>Optional</sup> <a name="sourceKafkaClusterArnInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.sourceKafkaClusterArnInput"></a>

```java
public java.lang.String getSourceKafkaClusterArnInput();
```

- *Type:* java.lang.String

---

##### `sourceKafkaClusterIdInput`<sup>Optional</sup> <a name="sourceKafkaClusterIdInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.sourceKafkaClusterIdInput"></a>

```java
public java.lang.String getSourceKafkaClusterIdInput();
```

- *Type:* java.lang.String

---

##### `targetCompressionTypeInput`<sup>Optional</sup> <a name="targetCompressionTypeInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetCompressionTypeInput"></a>

```java
public java.lang.String getTargetCompressionTypeInput();
```

- *Type:* java.lang.String

---

##### `targetKafkaClusterArnInput`<sup>Optional</sup> <a name="targetKafkaClusterArnInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetKafkaClusterArnInput"></a>

```java
public java.lang.String getTargetKafkaClusterArnInput();
```

- *Type:* java.lang.String

---

##### `targetKafkaClusterIdInput`<sup>Optional</sup> <a name="targetKafkaClusterIdInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetKafkaClusterIdInput"></a>

```java
public java.lang.String getTargetKafkaClusterIdInput();
```

- *Type:* java.lang.String

---

##### `topicReplicationInput`<sup>Optional</sup> <a name="topicReplicationInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.topicReplicationInput"></a>

```java
public IResolvable|MskReplicatorReplicationInfoListTopicReplication getTopicReplicationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication">MskReplicatorReplicationInfoListTopicReplication</a>

---

##### `sourceKafkaClusterArn`<sup>Required</sup> <a name="sourceKafkaClusterArn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.sourceKafkaClusterArn"></a>

```java
public java.lang.String getSourceKafkaClusterArn();
```

- *Type:* java.lang.String

---

##### `sourceKafkaClusterId`<sup>Required</sup> <a name="sourceKafkaClusterId" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.sourceKafkaClusterId"></a>

```java
public java.lang.String getSourceKafkaClusterId();
```

- *Type:* java.lang.String

---

##### `targetCompressionType`<sup>Required</sup> <a name="targetCompressionType" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetCompressionType"></a>

```java
public java.lang.String getTargetCompressionType();
```

- *Type:* java.lang.String

---

##### `targetKafkaClusterArn`<sup>Required</sup> <a name="targetKafkaClusterArn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetKafkaClusterArn"></a>

```java
public java.lang.String getTargetKafkaClusterArn();
```

- *Type:* java.lang.String

---

##### `targetKafkaClusterId`<sup>Required</sup> <a name="targetKafkaClusterId" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetKafkaClusterId"></a>

```java
public java.lang.String getTargetKafkaClusterId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.internalValue"></a>

```java
public IResolvable|MskReplicatorReplicationInfoListStruct getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct">MskReplicatorReplicationInfoListStruct</a>

---


### MskReplicatorReplicationInfoListTopicReplicationOutputReference <a name="MskReplicatorReplicationInfoListTopicReplicationOutputReference" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.msk_replicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference;

new MskReplicatorReplicationInfoListTopicReplicationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.putStartingPosition">putStartingPosition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.putTopicNameConfiguration">putTopicNameConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetCopyAccessControlListsForTopics">resetCopyAccessControlListsForTopics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetCopyTopicConfigurations">resetCopyTopicConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetDetectAndCopyNewTopics">resetDetectAndCopyNewTopics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetStartingPosition">resetStartingPosition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetTopicNameConfiguration">resetTopicNameConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetTopicsToExclude">resetTopicsToExclude</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStartingPosition` <a name="putStartingPosition" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.putStartingPosition"></a>

```java
public void putStartingPosition(MskReplicatorReplicationInfoListTopicReplicationStartingPosition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.putStartingPosition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPosition">MskReplicatorReplicationInfoListTopicReplicationStartingPosition</a>

---

##### `putTopicNameConfiguration` <a name="putTopicNameConfiguration" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.putTopicNameConfiguration"></a>

```java
public void putTopicNameConfiguration(MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.putTopicNameConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration">MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration</a>

---

##### `resetCopyAccessControlListsForTopics` <a name="resetCopyAccessControlListsForTopics" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetCopyAccessControlListsForTopics"></a>

```java
public void resetCopyAccessControlListsForTopics()
```

##### `resetCopyTopicConfigurations` <a name="resetCopyTopicConfigurations" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetCopyTopicConfigurations"></a>

```java
public void resetCopyTopicConfigurations()
```

##### `resetDetectAndCopyNewTopics` <a name="resetDetectAndCopyNewTopics" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetDetectAndCopyNewTopics"></a>

```java
public void resetDetectAndCopyNewTopics()
```

##### `resetStartingPosition` <a name="resetStartingPosition" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetStartingPosition"></a>

```java
public void resetStartingPosition()
```

##### `resetTopicNameConfiguration` <a name="resetTopicNameConfiguration" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetTopicNameConfiguration"></a>

```java
public void resetTopicNameConfiguration()
```

##### `resetTopicsToExclude` <a name="resetTopicsToExclude" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetTopicsToExclude"></a>

```java
public void resetTopicsToExclude()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.startingPosition">startingPosition</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference">MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicNameConfiguration">topicNameConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference">MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.copyAccessControlListsForTopicsInput">copyAccessControlListsForTopicsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.copyTopicConfigurationsInput">copyTopicConfigurationsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.detectAndCopyNewTopicsInput">detectAndCopyNewTopicsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.startingPositionInput">startingPositionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPosition">MskReplicatorReplicationInfoListTopicReplicationStartingPosition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicNameConfigurationInput">topicNameConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration">MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicsToExcludeInput">topicsToExcludeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicsToReplicateInput">topicsToReplicateInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.copyAccessControlListsForTopics">copyAccessControlListsForTopics</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.copyTopicConfigurations">copyTopicConfigurations</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.detectAndCopyNewTopics">detectAndCopyNewTopics</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicsToExclude">topicsToExclude</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicsToReplicate">topicsToReplicate</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication">MskReplicatorReplicationInfoListTopicReplication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `startingPosition`<sup>Required</sup> <a name="startingPosition" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.startingPosition"></a>

```java
public MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference getStartingPosition();
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference">MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference</a>

---

##### `topicNameConfiguration`<sup>Required</sup> <a name="topicNameConfiguration" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicNameConfiguration"></a>

```java
public MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference getTopicNameConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference">MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference</a>

---

##### `copyAccessControlListsForTopicsInput`<sup>Optional</sup> <a name="copyAccessControlListsForTopicsInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.copyAccessControlListsForTopicsInput"></a>

```java
public java.lang.Boolean|IResolvable getCopyAccessControlListsForTopicsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `copyTopicConfigurationsInput`<sup>Optional</sup> <a name="copyTopicConfigurationsInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.copyTopicConfigurationsInput"></a>

```java
public java.lang.Boolean|IResolvable getCopyTopicConfigurationsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `detectAndCopyNewTopicsInput`<sup>Optional</sup> <a name="detectAndCopyNewTopicsInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.detectAndCopyNewTopicsInput"></a>

```java
public java.lang.Boolean|IResolvable getDetectAndCopyNewTopicsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `startingPositionInput`<sup>Optional</sup> <a name="startingPositionInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.startingPositionInput"></a>

```java
public IResolvable|MskReplicatorReplicationInfoListTopicReplicationStartingPosition getStartingPositionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPosition">MskReplicatorReplicationInfoListTopicReplicationStartingPosition</a>

---

##### `topicNameConfigurationInput`<sup>Optional</sup> <a name="topicNameConfigurationInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicNameConfigurationInput"></a>

```java
public IResolvable|MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration getTopicNameConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration">MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration</a>

---

##### `topicsToExcludeInput`<sup>Optional</sup> <a name="topicsToExcludeInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicsToExcludeInput"></a>

```java
public java.util.List<java.lang.String> getTopicsToExcludeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `topicsToReplicateInput`<sup>Optional</sup> <a name="topicsToReplicateInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicsToReplicateInput"></a>

```java
public java.util.List<java.lang.String> getTopicsToReplicateInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `copyAccessControlListsForTopics`<sup>Required</sup> <a name="copyAccessControlListsForTopics" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.copyAccessControlListsForTopics"></a>

```java
public java.lang.Boolean|IResolvable getCopyAccessControlListsForTopics();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `copyTopicConfigurations`<sup>Required</sup> <a name="copyTopicConfigurations" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.copyTopicConfigurations"></a>

```java
public java.lang.Boolean|IResolvable getCopyTopicConfigurations();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `detectAndCopyNewTopics`<sup>Required</sup> <a name="detectAndCopyNewTopics" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.detectAndCopyNewTopics"></a>

```java
public java.lang.Boolean|IResolvable getDetectAndCopyNewTopics();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `topicsToExclude`<sup>Required</sup> <a name="topicsToExclude" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicsToExclude"></a>

```java
public java.util.List<java.lang.String> getTopicsToExclude();
```

- *Type:* java.util.List<java.lang.String>

---

##### `topicsToReplicate`<sup>Required</sup> <a name="topicsToReplicate" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicsToReplicate"></a>

```java
public java.util.List<java.lang.String> getTopicsToReplicate();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.internalValue"></a>

```java
public IResolvable|MskReplicatorReplicationInfoListTopicReplication getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication">MskReplicatorReplicationInfoListTopicReplication</a>

---


### MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference <a name="MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.msk_replicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference;

new MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPosition">MskReplicatorReplicationInfoListTopicReplicationStartingPosition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.property.internalValue"></a>

```java
public IResolvable|MskReplicatorReplicationInfoListTopicReplicationStartingPosition getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPosition">MskReplicatorReplicationInfoListTopicReplicationStartingPosition</a>

---


### MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference <a name="MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.msk_replicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference;

new MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration">MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration">MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration</a>

---


### MskReplicatorTagsList <a name="MskReplicatorTagsList" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.msk_replicator.MskReplicatorTagsList;

new MskReplicatorTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.get"></a>

```java
public MskReplicatorTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTags">MskReplicatorTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MskReplicatorTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTags">MskReplicatorTags</a>>

---


### MskReplicatorTagsOutputReference <a name="MskReplicatorTagsOutputReference" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.msk_replicator.MskReplicatorTagsOutputReference;

new MskReplicatorTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTags">MskReplicatorTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|MskReplicatorTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTags">MskReplicatorTags</a>

---



