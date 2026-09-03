# `braketSpendingLimit` Submodule <a name="`braketSpendingLimit` Submodule" id="@cdktn/provider-awscc.braketSpendingLimit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BraketSpendingLimit <a name="BraketSpendingLimit" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/braket_spending_limit awscc_braket_spending_limit}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.Initializer"></a>

```java
import io.cdktn.providers.awscc.braket_spending_limit.BraketSpendingLimit;

BraketSpendingLimit.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .deviceArn(java.lang.String)
    .spendingLimit(java.lang.String)
//  .tags(IResolvable|java.util.List<BraketSpendingLimitTags>)
//  .timePeriod(BraketSpendingLimitTimePeriod)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.Initializer.parameter.deviceArn">deviceArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the quantum device to apply the spending limit to. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.Initializer.parameter.spendingLimit">spendingLimit</a></code> | <code>java.lang.String</code> | The maximum amount that can be spent on the specified device, in USD. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTags">BraketSpendingLimitTags</a>></code> | The tags to apply to the spending limit. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.Initializer.parameter.timePeriod">timePeriod</a></code> | <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriod">BraketSpendingLimitTimePeriod</a></code> | Defines a time range for spending limits, specifying when the limit is active. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `deviceArn`<sup>Required</sup> <a name="deviceArn" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.Initializer.parameter.deviceArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the quantum device to apply the spending limit to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/braket_spending_limit#device_arn BraketSpendingLimit#device_arn}

---

##### `spendingLimit`<sup>Required</sup> <a name="spendingLimit" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.Initializer.parameter.spendingLimit"></a>

- *Type:* java.lang.String

The maximum amount that can be spent on the specified device, in USD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/braket_spending_limit#spending_limit BraketSpendingLimit#spending_limit}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTags">BraketSpendingLimitTags</a>>

The tags to apply to the spending limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/braket_spending_limit#tags BraketSpendingLimit#tags}

---

##### `timePeriod`<sup>Optional</sup> <a name="timePeriod" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.Initializer.parameter.timePeriod"></a>

- *Type:* <a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriod">BraketSpendingLimitTimePeriod</a>

Defines a time range for spending limits, specifying when the limit is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/braket_spending_limit#time_period BraketSpendingLimit#time_period}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.putTimePeriod">putTimePeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.resetTimePeriod">resetTimePeriod</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<BraketSpendingLimitTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTags">BraketSpendingLimitTags</a>>

---

##### `putTimePeriod` <a name="putTimePeriod" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.putTimePeriod"></a>

```java
public void putTimePeriod(BraketSpendingLimitTimePeriod value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.putTimePeriod.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriod">BraketSpendingLimitTimePeriod</a>

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimePeriod` <a name="resetTimePeriod" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.resetTimePeriod"></a>

```java
public void resetTimePeriod()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BraketSpendingLimit resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.isConstruct"></a>

```java
import io.cdktn.providers.awscc.braket_spending_limit.BraketSpendingLimit;

BraketSpendingLimit.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.braket_spending_limit.BraketSpendingLimit;

BraketSpendingLimit.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.braket_spending_limit.BraketSpendingLimit;

BraketSpendingLimit.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.braket_spending_limit.BraketSpendingLimit;

BraketSpendingLimit.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BraketSpendingLimit.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a BraketSpendingLimit resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BraketSpendingLimit to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BraketSpendingLimit that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/braket_spending_limit#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the BraketSpendingLimit to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.queuedSpend">queuedSpend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.spendingLimitArn">spendingLimitArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList">BraketSpendingLimitTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.timePeriod">timePeriod</a></code> | <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference">BraketSpendingLimitTimePeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.totalSpend">totalSpend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.deviceArnInput">deviceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.spendingLimitInput">spendingLimitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTags">BraketSpendingLimitTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.timePeriodInput">timePeriodInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriod">BraketSpendingLimitTimePeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.deviceArn">deviceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.spendingLimit">spendingLimit</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `queuedSpend`<sup>Required</sup> <a name="queuedSpend" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.queuedSpend"></a>

```java
public java.lang.String getQueuedSpend();
```

- *Type:* java.lang.String

---

##### `spendingLimitArn`<sup>Required</sup> <a name="spendingLimitArn" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.spendingLimitArn"></a>

```java
public java.lang.String getSpendingLimitArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.tags"></a>

```java
public BraketSpendingLimitTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList">BraketSpendingLimitTagsList</a>

---

##### `timePeriod`<sup>Required</sup> <a name="timePeriod" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.timePeriod"></a>

```java
public BraketSpendingLimitTimePeriodOutputReference getTimePeriod();
```

- *Type:* <a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference">BraketSpendingLimitTimePeriodOutputReference</a>

---

##### `totalSpend`<sup>Required</sup> <a name="totalSpend" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.totalSpend"></a>

```java
public java.lang.String getTotalSpend();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `deviceArnInput`<sup>Optional</sup> <a name="deviceArnInput" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.deviceArnInput"></a>

```java
public java.lang.String getDeviceArnInput();
```

- *Type:* java.lang.String

---

##### `spendingLimitInput`<sup>Optional</sup> <a name="spendingLimitInput" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.spendingLimitInput"></a>

```java
public java.lang.String getSpendingLimitInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.tagsInput"></a>

```java
public IResolvable|java.util.List<BraketSpendingLimitTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTags">BraketSpendingLimitTags</a>>

---

##### `timePeriodInput`<sup>Optional</sup> <a name="timePeriodInput" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.timePeriodInput"></a>

```java
public IResolvable|BraketSpendingLimitTimePeriod getTimePeriodInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriod">BraketSpendingLimitTimePeriod</a>

---

##### `deviceArn`<sup>Required</sup> <a name="deviceArn" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.deviceArn"></a>

```java
public java.lang.String getDeviceArn();
```

- *Type:* java.lang.String

---

##### `spendingLimit`<sup>Required</sup> <a name="spendingLimit" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.spendingLimit"></a>

```java
public java.lang.String getSpendingLimit();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BraketSpendingLimitConfig <a name="BraketSpendingLimitConfig" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.braket_spending_limit.BraketSpendingLimitConfig;

BraketSpendingLimitConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .deviceArn(java.lang.String)
    .spendingLimit(java.lang.String)
//  .tags(IResolvable|java.util.List<BraketSpendingLimitTags>)
//  .timePeriod(BraketSpendingLimitTimePeriod)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.deviceArn">deviceArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the quantum device to apply the spending limit to. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.spendingLimit">spendingLimit</a></code> | <code>java.lang.String</code> | The maximum amount that can be spent on the specified device, in USD. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTags">BraketSpendingLimitTags</a>></code> | The tags to apply to the spending limit. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.timePeriod">timePeriod</a></code> | <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriod">BraketSpendingLimitTimePeriod</a></code> | Defines a time range for spending limits, specifying when the limit is active. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `deviceArn`<sup>Required</sup> <a name="deviceArn" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.deviceArn"></a>

```java
public java.lang.String getDeviceArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the quantum device to apply the spending limit to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/braket_spending_limit#device_arn BraketSpendingLimit#device_arn}

---

##### `spendingLimit`<sup>Required</sup> <a name="spendingLimit" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.spendingLimit"></a>

```java
public java.lang.String getSpendingLimit();
```

- *Type:* java.lang.String

The maximum amount that can be spent on the specified device, in USD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/braket_spending_limit#spending_limit BraketSpendingLimit#spending_limit}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.tags"></a>

```java
public IResolvable|java.util.List<BraketSpendingLimitTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTags">BraketSpendingLimitTags</a>>

The tags to apply to the spending limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/braket_spending_limit#tags BraketSpendingLimit#tags}

---

##### `timePeriod`<sup>Optional</sup> <a name="timePeriod" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.timePeriod"></a>

```java
public BraketSpendingLimitTimePeriod getTimePeriod();
```

- *Type:* <a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriod">BraketSpendingLimitTimePeriod</a>

Defines a time range for spending limits, specifying when the limit is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/braket_spending_limit#time_period BraketSpendingLimit#time_period}

---

### BraketSpendingLimitTags <a name="BraketSpendingLimitTags" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.braket_spending_limit.BraketSpendingLimitTags;

BraketSpendingLimitTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/braket_spending_limit#key BraketSpendingLimit#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/braket_spending_limit#value BraketSpendingLimit#value}

---

### BraketSpendingLimitTimePeriod <a name="BraketSpendingLimitTimePeriod" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriod.Initializer"></a>

```java
import io.cdktn.providers.awscc.braket_spending_limit.BraketSpendingLimitTimePeriod;

BraketSpendingLimitTimePeriod.builder()
//  .endAt(java.lang.String)
//  .startAt(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriod.property.endAt">endAt</a></code> | <code>java.lang.String</code> | The end date and time for the spending limit period, in ISO 8601 format. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriod.property.startAt">startAt</a></code> | <code>java.lang.String</code> | The start date and time for the spending limit period, in ISO 8601 format. |

---

##### `endAt`<sup>Optional</sup> <a name="endAt" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriod.property.endAt"></a>

```java
public java.lang.String getEndAt();
```

- *Type:* java.lang.String

The end date and time for the spending limit period, in ISO 8601 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/braket_spending_limit#end_at BraketSpendingLimit#end_at}

---

##### `startAt`<sup>Optional</sup> <a name="startAt" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriod.property.startAt"></a>

```java
public java.lang.String getStartAt();
```

- *Type:* java.lang.String

The start date and time for the spending limit period, in ISO 8601 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/braket_spending_limit#start_at BraketSpendingLimit#start_at}

---

## Classes <a name="Classes" id="Classes"></a>

### BraketSpendingLimitTagsList <a name="BraketSpendingLimitTagsList" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.braket_spending_limit.BraketSpendingLimitTagsList;

new BraketSpendingLimitTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.get"></a>

```java
public BraketSpendingLimitTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTags">BraketSpendingLimitTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BraketSpendingLimitTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTags">BraketSpendingLimitTags</a>>

---


### BraketSpendingLimitTagsOutputReference <a name="BraketSpendingLimitTagsOutputReference" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.braket_spending_limit.BraketSpendingLimitTagsOutputReference;

new BraketSpendingLimitTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTags">BraketSpendingLimitTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|BraketSpendingLimitTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTags">BraketSpendingLimitTags</a>

---


### BraketSpendingLimitTimePeriodOutputReference <a name="BraketSpendingLimitTimePeriodOutputReference" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.braket_spending_limit.BraketSpendingLimitTimePeriodOutputReference;

new BraketSpendingLimitTimePeriodOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.resetEndAt">resetEndAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.resetStartAt">resetStartAt</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndAt` <a name="resetEndAt" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.resetEndAt"></a>

```java
public void resetEndAt()
```

##### `resetStartAt` <a name="resetStartAt" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.resetStartAt"></a>

```java
public void resetStartAt()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.property.endAtInput">endAtInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.property.startAtInput">startAtInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.property.endAt">endAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.property.startAt">startAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriod">BraketSpendingLimitTimePeriod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endAtInput`<sup>Optional</sup> <a name="endAtInput" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.property.endAtInput"></a>

```java
public java.lang.String getEndAtInput();
```

- *Type:* java.lang.String

---

##### `startAtInput`<sup>Optional</sup> <a name="startAtInput" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.property.startAtInput"></a>

```java
public java.lang.String getStartAtInput();
```

- *Type:* java.lang.String

---

##### `endAt`<sup>Required</sup> <a name="endAt" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.property.endAt"></a>

```java
public java.lang.String getEndAt();
```

- *Type:* java.lang.String

---

##### `startAt`<sup>Required</sup> <a name="startAt" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.property.startAt"></a>

```java
public java.lang.String getStartAt();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.property.internalValue"></a>

```java
public IResolvable|BraketSpendingLimitTimePeriod getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriod">BraketSpendingLimitTimePeriod</a>

---



