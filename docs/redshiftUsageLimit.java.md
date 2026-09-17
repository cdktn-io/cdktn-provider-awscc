# `redshiftUsageLimit` Submodule <a name="`redshiftUsageLimit` Submodule" id="@cdktn/provider-awscc.redshiftUsageLimit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftUsageLimit <a name="RedshiftUsageLimit" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_usage_limit awscc_redshift_usage_limit}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_usage_limit.RedshiftUsageLimit;

RedshiftUsageLimit.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .amount(java.lang.Number)
    .clusterIdentifier(java.lang.String)
    .featureType(java.lang.String)
    .limitType(java.lang.String)
//  .breachAction(java.lang.String)
//  .period(java.lang.String)
//  .tags(IResolvable|java.util.List<RedshiftUsageLimitTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.amount">amount</a></code> | <code>java.lang.Number</code> | The limit amount. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.clusterIdentifier">clusterIdentifier</a></code> | <code>java.lang.String</code> | The identifier of the cluster that you want to limit usage. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.featureType">featureType</a></code> | <code>java.lang.String</code> | The Amazon Redshift feature that you want to limit. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.limitType">limitType</a></code> | <code>java.lang.String</code> | The type of limit. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.breachAction">breachAction</a></code> | <code>java.lang.String</code> | The action that Amazon Redshift takes when the limit is reached. The default is log. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.period">period</a></code> | <code>java.lang.String</code> | The time period that the amount applies to. A weekly period begins on Sunday. The default is monthly. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTags">RedshiftUsageLimitTags</a>></code> | A list of tag instances. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.amount"></a>

- *Type:* java.lang.Number

The limit amount.

If time-based, this amount is in minutes. If data-based, this amount is in terabytes (TB). The value must be a positive number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_usage_limit#amount RedshiftUsageLimit#amount}

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.clusterIdentifier"></a>

- *Type:* java.lang.String

The identifier of the cluster that you want to limit usage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_usage_limit#cluster_identifier RedshiftUsageLimit#cluster_identifier}

---

##### `featureType`<sup>Required</sup> <a name="featureType" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.featureType"></a>

- *Type:* java.lang.String

The Amazon Redshift feature that you want to limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_usage_limit#feature_type RedshiftUsageLimit#feature_type}

---

##### `limitType`<sup>Required</sup> <a name="limitType" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.limitType"></a>

- *Type:* java.lang.String

The type of limit.

Depending on the feature type, this can be based on a time duration or data size. If FeatureType is spectrum, then LimitType must be data-scanned. If FeatureType is concurrency-scaling, then LimitType must be time. If FeatureType is cross-region-datasharing, then LimitType must be data-scanned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_usage_limit#limit_type RedshiftUsageLimit#limit_type}

---

##### `breachAction`<sup>Optional</sup> <a name="breachAction" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.breachAction"></a>

- *Type:* java.lang.String

The action that Amazon Redshift takes when the limit is reached. The default is log.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_usage_limit#breach_action RedshiftUsageLimit#breach_action}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.period"></a>

- *Type:* java.lang.String

The time period that the amount applies to. A weekly period begins on Sunday. The default is monthly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_usage_limit#period RedshiftUsageLimit#period}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTags">RedshiftUsageLimitTags</a>>

A list of tag instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_usage_limit#tags RedshiftUsageLimit#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.resetBreachAction">resetBreachAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.resetPeriod">resetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<RedshiftUsageLimitTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTags">RedshiftUsageLimitTags</a>>

---

##### `resetBreachAction` <a name="resetBreachAction" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.resetBreachAction"></a>

```java
public void resetBreachAction()
```

##### `resetPeriod` <a name="resetPeriod" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.resetPeriod"></a>

```java
public void resetPeriod()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RedshiftUsageLimit resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.isConstruct"></a>

```java
import io.cdktn.providers.awscc.redshift_usage_limit.RedshiftUsageLimit;

RedshiftUsageLimit.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.redshift_usage_limit.RedshiftUsageLimit;

RedshiftUsageLimit.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.redshift_usage_limit.RedshiftUsageLimit;

RedshiftUsageLimit.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.redshift_usage_limit.RedshiftUsageLimit;

RedshiftUsageLimit.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RedshiftUsageLimit.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a RedshiftUsageLimit resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RedshiftUsageLimit to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RedshiftUsageLimit that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_usage_limit#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the RedshiftUsageLimit to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsList">RedshiftUsageLimitTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.usageLimitId">usageLimitId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.amountInput">amountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.breachActionInput">breachActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.clusterIdentifierInput">clusterIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.featureTypeInput">featureTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.limitTypeInput">limitTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.periodInput">periodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTags">RedshiftUsageLimitTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.amount">amount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.breachAction">breachAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.clusterIdentifier">clusterIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.featureType">featureType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.limitType">limitType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.period">period</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.tags"></a>

```java
public RedshiftUsageLimitTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsList">RedshiftUsageLimitTagsList</a>

---

##### `usageLimitId`<sup>Required</sup> <a name="usageLimitId" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.usageLimitId"></a>

```java
public java.lang.String getUsageLimitId();
```

- *Type:* java.lang.String

---

##### `amountInput`<sup>Optional</sup> <a name="amountInput" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.amountInput"></a>

```java
public java.lang.Number getAmountInput();
```

- *Type:* java.lang.Number

---

##### `breachActionInput`<sup>Optional</sup> <a name="breachActionInput" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.breachActionInput"></a>

```java
public java.lang.String getBreachActionInput();
```

- *Type:* java.lang.String

---

##### `clusterIdentifierInput`<sup>Optional</sup> <a name="clusterIdentifierInput" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.clusterIdentifierInput"></a>

```java
public java.lang.String getClusterIdentifierInput();
```

- *Type:* java.lang.String

---

##### `featureTypeInput`<sup>Optional</sup> <a name="featureTypeInput" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.featureTypeInput"></a>

```java
public java.lang.String getFeatureTypeInput();
```

- *Type:* java.lang.String

---

##### `limitTypeInput`<sup>Optional</sup> <a name="limitTypeInput" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.limitTypeInput"></a>

```java
public java.lang.String getLimitTypeInput();
```

- *Type:* java.lang.String

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.periodInput"></a>

```java
public java.lang.String getPeriodInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.tagsInput"></a>

```java
public IResolvable|java.util.List<RedshiftUsageLimitTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTags">RedshiftUsageLimitTags</a>>

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.amount"></a>

```java
public java.lang.Number getAmount();
```

- *Type:* java.lang.Number

---

##### `breachAction`<sup>Required</sup> <a name="breachAction" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.breachAction"></a>

```java
public java.lang.String getBreachAction();
```

- *Type:* java.lang.String

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.clusterIdentifier"></a>

```java
public java.lang.String getClusterIdentifier();
```

- *Type:* java.lang.String

---

##### `featureType`<sup>Required</sup> <a name="featureType" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.featureType"></a>

```java
public java.lang.String getFeatureType();
```

- *Type:* java.lang.String

---

##### `limitType`<sup>Required</sup> <a name="limitType" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.limitType"></a>

```java
public java.lang.String getLimitType();
```

- *Type:* java.lang.String

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.period"></a>

```java
public java.lang.String getPeriod();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftUsageLimitConfig <a name="RedshiftUsageLimitConfig" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_usage_limit.RedshiftUsageLimitConfig;

RedshiftUsageLimitConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .amount(java.lang.Number)
    .clusterIdentifier(java.lang.String)
    .featureType(java.lang.String)
    .limitType(java.lang.String)
//  .breachAction(java.lang.String)
//  .period(java.lang.String)
//  .tags(IResolvable|java.util.List<RedshiftUsageLimitTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitConfig.property.amount">amount</a></code> | <code>java.lang.Number</code> | The limit amount. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitConfig.property.clusterIdentifier">clusterIdentifier</a></code> | <code>java.lang.String</code> | The identifier of the cluster that you want to limit usage. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitConfig.property.featureType">featureType</a></code> | <code>java.lang.String</code> | The Amazon Redshift feature that you want to limit. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitConfig.property.limitType">limitType</a></code> | <code>java.lang.String</code> | The type of limit. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitConfig.property.breachAction">breachAction</a></code> | <code>java.lang.String</code> | The action that Amazon Redshift takes when the limit is reached. The default is log. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitConfig.property.period">period</a></code> | <code>java.lang.String</code> | The time period that the amount applies to. A weekly period begins on Sunday. The default is monthly. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTags">RedshiftUsageLimitTags</a>></code> | A list of tag instances. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitConfig.property.amount"></a>

```java
public java.lang.Number getAmount();
```

- *Type:* java.lang.Number

The limit amount.

If time-based, this amount is in minutes. If data-based, this amount is in terabytes (TB). The value must be a positive number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_usage_limit#amount RedshiftUsageLimit#amount}

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitConfig.property.clusterIdentifier"></a>

```java
public java.lang.String getClusterIdentifier();
```

- *Type:* java.lang.String

The identifier of the cluster that you want to limit usage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_usage_limit#cluster_identifier RedshiftUsageLimit#cluster_identifier}

---

##### `featureType`<sup>Required</sup> <a name="featureType" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitConfig.property.featureType"></a>

```java
public java.lang.String getFeatureType();
```

- *Type:* java.lang.String

The Amazon Redshift feature that you want to limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_usage_limit#feature_type RedshiftUsageLimit#feature_type}

---

##### `limitType`<sup>Required</sup> <a name="limitType" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitConfig.property.limitType"></a>

```java
public java.lang.String getLimitType();
```

- *Type:* java.lang.String

The type of limit.

Depending on the feature type, this can be based on a time duration or data size. If FeatureType is spectrum, then LimitType must be data-scanned. If FeatureType is concurrency-scaling, then LimitType must be time. If FeatureType is cross-region-datasharing, then LimitType must be data-scanned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_usage_limit#limit_type RedshiftUsageLimit#limit_type}

---

##### `breachAction`<sup>Optional</sup> <a name="breachAction" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitConfig.property.breachAction"></a>

```java
public java.lang.String getBreachAction();
```

- *Type:* java.lang.String

The action that Amazon Redshift takes when the limit is reached. The default is log.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_usage_limit#breach_action RedshiftUsageLimit#breach_action}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitConfig.property.period"></a>

```java
public java.lang.String getPeriod();
```

- *Type:* java.lang.String

The time period that the amount applies to. A weekly period begins on Sunday. The default is monthly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_usage_limit#period RedshiftUsageLimit#period}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitConfig.property.tags"></a>

```java
public IResolvable|java.util.List<RedshiftUsageLimitTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTags">RedshiftUsageLimitTags</a>>

A list of tag instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_usage_limit#tags RedshiftUsageLimit#tags}

---

### RedshiftUsageLimitTags <a name="RedshiftUsageLimitTags" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_usage_limit.RedshiftUsageLimitTags;

RedshiftUsageLimitTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTags.property.key">key</a></code> | <code>java.lang.String</code> | The key, or name, for the resource tag. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the resource tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key, or name, for the resource tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_usage_limit#key RedshiftUsageLimit#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the resource tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_usage_limit#value RedshiftUsageLimit#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RedshiftUsageLimitTagsList <a name="RedshiftUsageLimitTagsList" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_usage_limit.RedshiftUsageLimitTagsList;

new RedshiftUsageLimitTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsList.get"></a>

```java
public RedshiftUsageLimitTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTags">RedshiftUsageLimitTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<RedshiftUsageLimitTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTags">RedshiftUsageLimitTags</a>>

---


### RedshiftUsageLimitTagsOutputReference <a name="RedshiftUsageLimitTagsOutputReference" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_usage_limit.RedshiftUsageLimitTagsOutputReference;

new RedshiftUsageLimitTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTags">RedshiftUsageLimitTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|RedshiftUsageLimitTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTags">RedshiftUsageLimitTags</a>

---



