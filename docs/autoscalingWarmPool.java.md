# `autoscalingWarmPool` Submodule <a name="`autoscalingWarmPool` Submodule" id="@cdktn/provider-awscc.autoscalingWarmPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutoscalingWarmPool <a name="AutoscalingWarmPool" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_warm_pool awscc_autoscaling_warm_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.Initializer"></a>

```java
import io.cdktn.providers.awscc.autoscaling_warm_pool.AutoscalingWarmPool;

AutoscalingWarmPool.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .autoScalingGroupName(java.lang.String)
//  .instanceReusePolicy(AutoscalingWarmPoolInstanceReusePolicy)
//  .maxGroupPreparedCapacity(java.lang.Number)
//  .minSize(java.lang.Number)
//  .poolState(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.Initializer.parameter.autoScalingGroupName">autoScalingGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_warm_pool#auto_scaling_group_name AutoscalingWarmPool#auto_scaling_group_name}. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.Initializer.parameter.instanceReusePolicy">instanceReusePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicy">AutoscalingWarmPoolInstanceReusePolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_warm_pool#instance_reuse_policy AutoscalingWarmPool#instance_reuse_policy}. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.Initializer.parameter.maxGroupPreparedCapacity">maxGroupPreparedCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_warm_pool#max_group_prepared_capacity AutoscalingWarmPool#max_group_prepared_capacity}. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.Initializer.parameter.minSize">minSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_warm_pool#min_size AutoscalingWarmPool#min_size}. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.Initializer.parameter.poolState">poolState</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_warm_pool#pool_state AutoscalingWarmPool#pool_state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `autoScalingGroupName`<sup>Required</sup> <a name="autoScalingGroupName" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.Initializer.parameter.autoScalingGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_warm_pool#auto_scaling_group_name AutoscalingWarmPool#auto_scaling_group_name}.

---

##### `instanceReusePolicy`<sup>Optional</sup> <a name="instanceReusePolicy" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.Initializer.parameter.instanceReusePolicy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicy">AutoscalingWarmPoolInstanceReusePolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_warm_pool#instance_reuse_policy AutoscalingWarmPool#instance_reuse_policy}.

---

##### `maxGroupPreparedCapacity`<sup>Optional</sup> <a name="maxGroupPreparedCapacity" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.Initializer.parameter.maxGroupPreparedCapacity"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_warm_pool#max_group_prepared_capacity AutoscalingWarmPool#max_group_prepared_capacity}.

---

##### `minSize`<sup>Optional</sup> <a name="minSize" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.Initializer.parameter.minSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_warm_pool#min_size AutoscalingWarmPool#min_size}.

---

##### `poolState`<sup>Optional</sup> <a name="poolState" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.Initializer.parameter.poolState"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_warm_pool#pool_state AutoscalingWarmPool#pool_state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.putInstanceReusePolicy">putInstanceReusePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.resetInstanceReusePolicy">resetInstanceReusePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.resetMaxGroupPreparedCapacity">resetMaxGroupPreparedCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.resetMinSize">resetMinSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.resetPoolState">resetPoolState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInstanceReusePolicy` <a name="putInstanceReusePolicy" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.putInstanceReusePolicy"></a>

```java
public void putInstanceReusePolicy(AutoscalingWarmPoolInstanceReusePolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.putInstanceReusePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicy">AutoscalingWarmPoolInstanceReusePolicy</a>

---

##### `resetInstanceReusePolicy` <a name="resetInstanceReusePolicy" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.resetInstanceReusePolicy"></a>

```java
public void resetInstanceReusePolicy()
```

##### `resetMaxGroupPreparedCapacity` <a name="resetMaxGroupPreparedCapacity" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.resetMaxGroupPreparedCapacity"></a>

```java
public void resetMaxGroupPreparedCapacity()
```

##### `resetMinSize` <a name="resetMinSize" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.resetMinSize"></a>

```java
public void resetMinSize()
```

##### `resetPoolState` <a name="resetPoolState" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.resetPoolState"></a>

```java
public void resetPoolState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AutoscalingWarmPool resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.isConstruct"></a>

```java
import io.cdktn.providers.awscc.autoscaling_warm_pool.AutoscalingWarmPool;

AutoscalingWarmPool.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.autoscaling_warm_pool.AutoscalingWarmPool;

AutoscalingWarmPool.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.autoscaling_warm_pool.AutoscalingWarmPool;

AutoscalingWarmPool.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.autoscaling_warm_pool.AutoscalingWarmPool;

AutoscalingWarmPool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AutoscalingWarmPool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a AutoscalingWarmPool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AutoscalingWarmPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AutoscalingWarmPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_warm_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the AutoscalingWarmPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.instanceReusePolicy">instanceReusePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference">AutoscalingWarmPoolInstanceReusePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.autoScalingGroupNameInput">autoScalingGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.instanceReusePolicyInput">instanceReusePolicyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicy">AutoscalingWarmPoolInstanceReusePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.maxGroupPreparedCapacityInput">maxGroupPreparedCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.minSizeInput">minSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.poolStateInput">poolStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.autoScalingGroupName">autoScalingGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.maxGroupPreparedCapacity">maxGroupPreparedCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.minSize">minSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.poolState">poolState</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceReusePolicy`<sup>Required</sup> <a name="instanceReusePolicy" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.instanceReusePolicy"></a>

```java
public AutoscalingWarmPoolInstanceReusePolicyOutputReference getInstanceReusePolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference">AutoscalingWarmPoolInstanceReusePolicyOutputReference</a>

---

##### `autoScalingGroupNameInput`<sup>Optional</sup> <a name="autoScalingGroupNameInput" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.autoScalingGroupNameInput"></a>

```java
public java.lang.String getAutoScalingGroupNameInput();
```

- *Type:* java.lang.String

---

##### `instanceReusePolicyInput`<sup>Optional</sup> <a name="instanceReusePolicyInput" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.instanceReusePolicyInput"></a>

```java
public IResolvable|AutoscalingWarmPoolInstanceReusePolicy getInstanceReusePolicyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicy">AutoscalingWarmPoolInstanceReusePolicy</a>

---

##### `maxGroupPreparedCapacityInput`<sup>Optional</sup> <a name="maxGroupPreparedCapacityInput" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.maxGroupPreparedCapacityInput"></a>

```java
public java.lang.Number getMaxGroupPreparedCapacityInput();
```

- *Type:* java.lang.Number

---

##### `minSizeInput`<sup>Optional</sup> <a name="minSizeInput" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.minSizeInput"></a>

```java
public java.lang.Number getMinSizeInput();
```

- *Type:* java.lang.Number

---

##### `poolStateInput`<sup>Optional</sup> <a name="poolStateInput" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.poolStateInput"></a>

```java
public java.lang.String getPoolStateInput();
```

- *Type:* java.lang.String

---

##### `autoScalingGroupName`<sup>Required</sup> <a name="autoScalingGroupName" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.autoScalingGroupName"></a>

```java
public java.lang.String getAutoScalingGroupName();
```

- *Type:* java.lang.String

---

##### `maxGroupPreparedCapacity`<sup>Required</sup> <a name="maxGroupPreparedCapacity" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.maxGroupPreparedCapacity"></a>

```java
public java.lang.Number getMaxGroupPreparedCapacity();
```

- *Type:* java.lang.Number

---

##### `minSize`<sup>Required</sup> <a name="minSize" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.minSize"></a>

```java
public java.lang.Number getMinSize();
```

- *Type:* java.lang.Number

---

##### `poolState`<sup>Required</sup> <a name="poolState" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.poolState"></a>

```java
public java.lang.String getPoolState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AutoscalingWarmPoolConfig <a name="AutoscalingWarmPoolConfig" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.autoscaling_warm_pool.AutoscalingWarmPoolConfig;

AutoscalingWarmPoolConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .autoScalingGroupName(java.lang.String)
//  .instanceReusePolicy(AutoscalingWarmPoolInstanceReusePolicy)
//  .maxGroupPreparedCapacity(java.lang.Number)
//  .minSize(java.lang.Number)
//  .poolState(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.autoScalingGroupName">autoScalingGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_warm_pool#auto_scaling_group_name AutoscalingWarmPool#auto_scaling_group_name}. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.instanceReusePolicy">instanceReusePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicy">AutoscalingWarmPoolInstanceReusePolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_warm_pool#instance_reuse_policy AutoscalingWarmPool#instance_reuse_policy}. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.maxGroupPreparedCapacity">maxGroupPreparedCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_warm_pool#max_group_prepared_capacity AutoscalingWarmPool#max_group_prepared_capacity}. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.minSize">minSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_warm_pool#min_size AutoscalingWarmPool#min_size}. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.poolState">poolState</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_warm_pool#pool_state AutoscalingWarmPool#pool_state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `autoScalingGroupName`<sup>Required</sup> <a name="autoScalingGroupName" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.autoScalingGroupName"></a>

```java
public java.lang.String getAutoScalingGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_warm_pool#auto_scaling_group_name AutoscalingWarmPool#auto_scaling_group_name}.

---

##### `instanceReusePolicy`<sup>Optional</sup> <a name="instanceReusePolicy" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.instanceReusePolicy"></a>

```java
public AutoscalingWarmPoolInstanceReusePolicy getInstanceReusePolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicy">AutoscalingWarmPoolInstanceReusePolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_warm_pool#instance_reuse_policy AutoscalingWarmPool#instance_reuse_policy}.

---

##### `maxGroupPreparedCapacity`<sup>Optional</sup> <a name="maxGroupPreparedCapacity" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.maxGroupPreparedCapacity"></a>

```java
public java.lang.Number getMaxGroupPreparedCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_warm_pool#max_group_prepared_capacity AutoscalingWarmPool#max_group_prepared_capacity}.

---

##### `minSize`<sup>Optional</sup> <a name="minSize" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.minSize"></a>

```java
public java.lang.Number getMinSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_warm_pool#min_size AutoscalingWarmPool#min_size}.

---

##### `poolState`<sup>Optional</sup> <a name="poolState" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.poolState"></a>

```java
public java.lang.String getPoolState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_warm_pool#pool_state AutoscalingWarmPool#pool_state}.

---

### AutoscalingWarmPoolInstanceReusePolicy <a name="AutoscalingWarmPoolInstanceReusePolicy" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicy.Initializer"></a>

```java
import io.cdktn.providers.awscc.autoscaling_warm_pool.AutoscalingWarmPoolInstanceReusePolicy;

AutoscalingWarmPoolInstanceReusePolicy.builder()
//  .reuseOnScaleIn(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicy.property.reuseOnScaleIn">reuseOnScaleIn</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_warm_pool#reuse_on_scale_in AutoscalingWarmPool#reuse_on_scale_in}. |

---

##### `reuseOnScaleIn`<sup>Optional</sup> <a name="reuseOnScaleIn" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicy.property.reuseOnScaleIn"></a>

```java
public java.lang.Boolean|IResolvable getReuseOnScaleIn();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_warm_pool#reuse_on_scale_in AutoscalingWarmPool#reuse_on_scale_in}.

---

## Classes <a name="Classes" id="Classes"></a>

### AutoscalingWarmPoolInstanceReusePolicyOutputReference <a name="AutoscalingWarmPoolInstanceReusePolicyOutputReference" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.autoscaling_warm_pool.AutoscalingWarmPoolInstanceReusePolicyOutputReference;

new AutoscalingWarmPoolInstanceReusePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.resetReuseOnScaleIn">resetReuseOnScaleIn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReuseOnScaleIn` <a name="resetReuseOnScaleIn" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.resetReuseOnScaleIn"></a>

```java
public void resetReuseOnScaleIn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.property.reuseOnScaleInInput">reuseOnScaleInInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.property.reuseOnScaleIn">reuseOnScaleIn</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicy">AutoscalingWarmPoolInstanceReusePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `reuseOnScaleInInput`<sup>Optional</sup> <a name="reuseOnScaleInInput" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.property.reuseOnScaleInInput"></a>

```java
public java.lang.Boolean|IResolvable getReuseOnScaleInInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `reuseOnScaleIn`<sup>Required</sup> <a name="reuseOnScaleIn" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.property.reuseOnScaleIn"></a>

```java
public java.lang.Boolean|IResolvable getReuseOnScaleIn();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.property.internalValue"></a>

```java
public IResolvable|AutoscalingWarmPoolInstanceReusePolicy getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicy">AutoscalingWarmPoolInstanceReusePolicy</a>

---



