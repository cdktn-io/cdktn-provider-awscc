# `ceAnomalySubscription` Submodule <a name="`ceAnomalySubscription` Submodule" id="@cdktn/provider-awscc.ceAnomalySubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CeAnomalySubscription <a name="CeAnomalySubscription" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ce_anomaly_subscription awscc_ce_anomaly_subscription}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.Initializer"></a>

```java
import io.cdktn.providers.awscc.ce_anomaly_subscription.CeAnomalySubscription;

CeAnomalySubscription.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .frequency(java.lang.String)
    .monitorArnList(java.util.List<java.lang.String>)
    .subscribers(IResolvable|java.util.List<CeAnomalySubscriptionSubscribers>)
    .subscriptionName(java.lang.String)
//  .resourceTags(IResolvable|java.util.List<CeAnomalySubscriptionResourceTags>)
//  .threshold(java.lang.Number)
//  .thresholdExpression(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.frequency">frequency</a></code> | <code>java.lang.String</code> | The frequency at which anomaly reports are sent over email. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.monitorArnList">monitorArnList</a></code> | <code>java.util.List<java.lang.String></code> | A list of cost anomaly monitors. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.subscribers">subscribers</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribers">CeAnomalySubscriptionSubscribers</a>></code> | A list of subscriber. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.subscriptionName">subscriptionName</a></code> | <code>java.lang.String</code> | The name of the subscription. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.resourceTags">resourceTags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTags">CeAnomalySubscriptionResourceTags</a>></code> | Tags to assign to subscription. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.threshold">threshold</a></code> | <code>java.lang.Number</code> | The dollar value that triggers a notification if the threshold is exceeded. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.thresholdExpression">thresholdExpression</a></code> | <code>java.lang.String</code> | An Expression object in JSON String format used to specify the anomalies that you want to generate alerts for. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.frequency"></a>

- *Type:* java.lang.String

The frequency at which anomaly reports are sent over email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ce_anomaly_subscription#frequency CeAnomalySubscription#frequency}

---

##### `monitorArnList`<sup>Required</sup> <a name="monitorArnList" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.monitorArnList"></a>

- *Type:* java.util.List<java.lang.String>

A list of cost anomaly monitors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ce_anomaly_subscription#monitor_arn_list CeAnomalySubscription#monitor_arn_list}

---

##### `subscribers`<sup>Required</sup> <a name="subscribers" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.subscribers"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribers">CeAnomalySubscriptionSubscribers</a>>

A list of subscriber.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ce_anomaly_subscription#subscribers CeAnomalySubscription#subscribers}

---

##### `subscriptionName`<sup>Required</sup> <a name="subscriptionName" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.subscriptionName"></a>

- *Type:* java.lang.String

The name of the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ce_anomaly_subscription#subscription_name CeAnomalySubscription#subscription_name}

---

##### `resourceTags`<sup>Optional</sup> <a name="resourceTags" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.resourceTags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTags">CeAnomalySubscriptionResourceTags</a>>

Tags to assign to subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ce_anomaly_subscription#resource_tags CeAnomalySubscription#resource_tags}

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.threshold"></a>

- *Type:* java.lang.Number

The dollar value that triggers a notification if the threshold is exceeded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ce_anomaly_subscription#threshold CeAnomalySubscription#threshold}

---

##### `thresholdExpression`<sup>Optional</sup> <a name="thresholdExpression" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.thresholdExpression"></a>

- *Type:* java.lang.String

An Expression object in JSON String format used to specify the anomalies that you want to generate alerts for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ce_anomaly_subscription#threshold_expression CeAnomalySubscription#threshold_expression}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.putResourceTags">putResourceTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.putSubscribers">putSubscribers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.resetResourceTags">resetResourceTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.resetThreshold">resetThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.resetThresholdExpression">resetThresholdExpression</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putResourceTags` <a name="putResourceTags" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.putResourceTags"></a>

```java
public void putResourceTags(IResolvable|java.util.List<CeAnomalySubscriptionResourceTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.putResourceTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTags">CeAnomalySubscriptionResourceTags</a>>

---

##### `putSubscribers` <a name="putSubscribers" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.putSubscribers"></a>

```java
public void putSubscribers(IResolvable|java.util.List<CeAnomalySubscriptionSubscribers> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.putSubscribers.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribers">CeAnomalySubscriptionSubscribers</a>>

---

##### `resetResourceTags` <a name="resetResourceTags" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.resetResourceTags"></a>

```java
public void resetResourceTags()
```

##### `resetThreshold` <a name="resetThreshold" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.resetThreshold"></a>

```java
public void resetThreshold()
```

##### `resetThresholdExpression` <a name="resetThresholdExpression" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.resetThresholdExpression"></a>

```java
public void resetThresholdExpression()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CeAnomalySubscription resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ce_anomaly_subscription.CeAnomalySubscription;

CeAnomalySubscription.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ce_anomaly_subscription.CeAnomalySubscription;

CeAnomalySubscription.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ce_anomaly_subscription.CeAnomalySubscription;

CeAnomalySubscription.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ce_anomaly_subscription.CeAnomalySubscription;

CeAnomalySubscription.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CeAnomalySubscription.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CeAnomalySubscription resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CeAnomalySubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CeAnomalySubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ce_anomaly_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CeAnomalySubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.resourceTags">resourceTags</a></code> | <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsList">CeAnomalySubscriptionResourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.subscribers">subscribers</a></code> | <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersList">CeAnomalySubscriptionSubscribersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.subscriptionArn">subscriptionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.frequencyInput">frequencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.monitorArnListInput">monitorArnListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.resourceTagsInput">resourceTagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTags">CeAnomalySubscriptionResourceTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.subscribersInput">subscribersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribers">CeAnomalySubscriptionSubscribers</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.subscriptionNameInput">subscriptionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.thresholdExpressionInput">thresholdExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.thresholdInput">thresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.frequency">frequency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.monitorArnList">monitorArnList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.subscriptionName">subscriptionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.thresholdExpression">thresholdExpression</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `resourceTags`<sup>Required</sup> <a name="resourceTags" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.resourceTags"></a>

```java
public CeAnomalySubscriptionResourceTagsList getResourceTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsList">CeAnomalySubscriptionResourceTagsList</a>

---

##### `subscribers`<sup>Required</sup> <a name="subscribers" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.subscribers"></a>

```java
public CeAnomalySubscriptionSubscribersList getSubscribers();
```

- *Type:* <a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersList">CeAnomalySubscriptionSubscribersList</a>

---

##### `subscriptionArn`<sup>Required</sup> <a name="subscriptionArn" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.subscriptionArn"></a>

```java
public java.lang.String getSubscriptionArn();
```

- *Type:* java.lang.String

---

##### `frequencyInput`<sup>Optional</sup> <a name="frequencyInput" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.frequencyInput"></a>

```java
public java.lang.String getFrequencyInput();
```

- *Type:* java.lang.String

---

##### `monitorArnListInput`<sup>Optional</sup> <a name="monitorArnListInput" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.monitorArnListInput"></a>

```java
public java.util.List<java.lang.String> getMonitorArnListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceTagsInput`<sup>Optional</sup> <a name="resourceTagsInput" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.resourceTagsInput"></a>

```java
public IResolvable|java.util.List<CeAnomalySubscriptionResourceTags> getResourceTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTags">CeAnomalySubscriptionResourceTags</a>>

---

##### `subscribersInput`<sup>Optional</sup> <a name="subscribersInput" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.subscribersInput"></a>

```java
public IResolvable|java.util.List<CeAnomalySubscriptionSubscribers> getSubscribersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribers">CeAnomalySubscriptionSubscribers</a>>

---

##### `subscriptionNameInput`<sup>Optional</sup> <a name="subscriptionNameInput" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.subscriptionNameInput"></a>

```java
public java.lang.String getSubscriptionNameInput();
```

- *Type:* java.lang.String

---

##### `thresholdExpressionInput`<sup>Optional</sup> <a name="thresholdExpressionInput" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.thresholdExpressionInput"></a>

```java
public java.lang.String getThresholdExpressionInput();
```

- *Type:* java.lang.String

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.thresholdInput"></a>

```java
public java.lang.Number getThresholdInput();
```

- *Type:* java.lang.Number

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.frequency"></a>

```java
public java.lang.String getFrequency();
```

- *Type:* java.lang.String

---

##### `monitorArnList`<sup>Required</sup> <a name="monitorArnList" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.monitorArnList"></a>

```java
public java.util.List<java.lang.String> getMonitorArnList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subscriptionName`<sup>Required</sup> <a name="subscriptionName" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.subscriptionName"></a>

```java
public java.lang.String getSubscriptionName();
```

- *Type:* java.lang.String

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

---

##### `thresholdExpression`<sup>Required</sup> <a name="thresholdExpression" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.thresholdExpression"></a>

```java
public java.lang.String getThresholdExpression();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CeAnomalySubscriptionConfig <a name="CeAnomalySubscriptionConfig" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ce_anomaly_subscription.CeAnomalySubscriptionConfig;

CeAnomalySubscriptionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .frequency(java.lang.String)
    .monitorArnList(java.util.List<java.lang.String>)
    .subscribers(IResolvable|java.util.List<CeAnomalySubscriptionSubscribers>)
    .subscriptionName(java.lang.String)
//  .resourceTags(IResolvable|java.util.List<CeAnomalySubscriptionResourceTags>)
//  .threshold(java.lang.Number)
//  .thresholdExpression(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.frequency">frequency</a></code> | <code>java.lang.String</code> | The frequency at which anomaly reports are sent over email. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.monitorArnList">monitorArnList</a></code> | <code>java.util.List<java.lang.String></code> | A list of cost anomaly monitors. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.subscribers">subscribers</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribers">CeAnomalySubscriptionSubscribers</a>></code> | A list of subscriber. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.subscriptionName">subscriptionName</a></code> | <code>java.lang.String</code> | The name of the subscription. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.resourceTags">resourceTags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTags">CeAnomalySubscriptionResourceTags</a>></code> | Tags to assign to subscription. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | The dollar value that triggers a notification if the threshold is exceeded. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.thresholdExpression">thresholdExpression</a></code> | <code>java.lang.String</code> | An Expression object in JSON String format used to specify the anomalies that you want to generate alerts for. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.frequency"></a>

```java
public java.lang.String getFrequency();
```

- *Type:* java.lang.String

The frequency at which anomaly reports are sent over email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ce_anomaly_subscription#frequency CeAnomalySubscription#frequency}

---

##### `monitorArnList`<sup>Required</sup> <a name="monitorArnList" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.monitorArnList"></a>

```java
public java.util.List<java.lang.String> getMonitorArnList();
```

- *Type:* java.util.List<java.lang.String>

A list of cost anomaly monitors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ce_anomaly_subscription#monitor_arn_list CeAnomalySubscription#monitor_arn_list}

---

##### `subscribers`<sup>Required</sup> <a name="subscribers" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.subscribers"></a>

```java
public IResolvable|java.util.List<CeAnomalySubscriptionSubscribers> getSubscribers();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribers">CeAnomalySubscriptionSubscribers</a>>

A list of subscriber.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ce_anomaly_subscription#subscribers CeAnomalySubscription#subscribers}

---

##### `subscriptionName`<sup>Required</sup> <a name="subscriptionName" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.subscriptionName"></a>

```java
public java.lang.String getSubscriptionName();
```

- *Type:* java.lang.String

The name of the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ce_anomaly_subscription#subscription_name CeAnomalySubscription#subscription_name}

---

##### `resourceTags`<sup>Optional</sup> <a name="resourceTags" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.resourceTags"></a>

```java
public IResolvable|java.util.List<CeAnomalySubscriptionResourceTags> getResourceTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTags">CeAnomalySubscriptionResourceTags</a>>

Tags to assign to subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ce_anomaly_subscription#resource_tags CeAnomalySubscription#resource_tags}

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

The dollar value that triggers a notification if the threshold is exceeded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ce_anomaly_subscription#threshold CeAnomalySubscription#threshold}

---

##### `thresholdExpression`<sup>Optional</sup> <a name="thresholdExpression" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.thresholdExpression"></a>

```java
public java.lang.String getThresholdExpression();
```

- *Type:* java.lang.String

An Expression object in JSON String format used to specify the anomalies that you want to generate alerts for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ce_anomaly_subscription#threshold_expression CeAnomalySubscription#threshold_expression}

---

### CeAnomalySubscriptionResourceTags <a name="CeAnomalySubscriptionResourceTags" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.ce_anomaly_subscription.CeAnomalySubscriptionResourceTags;

CeAnomalySubscriptionResourceTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name for the tag. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ce_anomaly_subscription#key CeAnomalySubscription#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ce_anomaly_subscription#value CeAnomalySubscription#value}

---

### CeAnomalySubscriptionSubscribers <a name="CeAnomalySubscriptionSubscribers" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribers.Initializer"></a>

```java
import io.cdktn.providers.awscc.ce_anomaly_subscription.CeAnomalySubscriptionSubscribers;

CeAnomalySubscriptionSubscribers.builder()
    .address(java.lang.String)
    .type(java.lang.String)
//  .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribers.property.address">address</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ce_anomaly_subscription#address CeAnomalySubscription#address}. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribers.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ce_anomaly_subscription#type CeAnomalySubscription#type}. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribers.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ce_anomaly_subscription#status CeAnomalySubscription#status}. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribers.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ce_anomaly_subscription#address CeAnomalySubscription#address}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribers.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ce_anomaly_subscription#type CeAnomalySubscription#type}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribers.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ce_anomaly_subscription#status CeAnomalySubscription#status}.

---

## Classes <a name="Classes" id="Classes"></a>

### CeAnomalySubscriptionResourceTagsList <a name="CeAnomalySubscriptionResourceTagsList" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ce_anomaly_subscription.CeAnomalySubscriptionResourceTagsList;

new CeAnomalySubscriptionResourceTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsList.get"></a>

```java
public CeAnomalySubscriptionResourceTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTags">CeAnomalySubscriptionResourceTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CeAnomalySubscriptionResourceTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTags">CeAnomalySubscriptionResourceTags</a>>

---


### CeAnomalySubscriptionResourceTagsOutputReference <a name="CeAnomalySubscriptionResourceTagsOutputReference" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ce_anomaly_subscription.CeAnomalySubscriptionResourceTagsOutputReference;

new CeAnomalySubscriptionResourceTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTags">CeAnomalySubscriptionResourceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|CeAnomalySubscriptionResourceTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTags">CeAnomalySubscriptionResourceTags</a>

---


### CeAnomalySubscriptionSubscribersList <a name="CeAnomalySubscriptionSubscribersList" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ce_anomaly_subscription.CeAnomalySubscriptionSubscribersList;

new CeAnomalySubscriptionSubscribersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersList.get"></a>

```java
public CeAnomalySubscriptionSubscribersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribers">CeAnomalySubscriptionSubscribers</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CeAnomalySubscriptionSubscribers> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribers">CeAnomalySubscriptionSubscribers</a>>

---


### CeAnomalySubscriptionSubscribersOutputReference <a name="CeAnomalySubscriptionSubscribersOutputReference" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ce_anomaly_subscription.CeAnomalySubscriptionSubscribersOutputReference;

new CeAnomalySubscriptionSubscribersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.resetStatus"></a>

```java
public void resetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.property.addressInput">addressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribers">CeAnomalySubscriptionSubscribers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.property.addressInput"></a>

```java
public java.lang.String getAddressInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.property.internalValue"></a>

```java
public IResolvable|CeAnomalySubscriptionSubscribers getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribers">CeAnomalySubscriptionSubscribers</a>

---



