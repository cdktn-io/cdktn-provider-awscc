# `personalizeMetricAttribution` Submodule <a name="`personalizeMetricAttribution` Submodule" id="@cdktn/provider-awscc.personalizeMetricAttribution"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PersonalizeMetricAttribution <a name="PersonalizeMetricAttribution" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution awscc_personalize_metric_attribution}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer"></a>

```java
import io.cdktn.providers.awscc.personalize_metric_attribution.PersonalizeMetricAttribution;

PersonalizeMetricAttribution.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .datasetGroupArn(java.lang.String)
    .metrics(IResolvable|java.util.List<PersonalizeMetricAttributionMetrics>)
    .metricsOutputConfig(PersonalizeMetricAttributionMetricsOutputConfig)
    .name(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.datasetGroupArn">datasetGroupArn</a></code> | <code>java.lang.String</code> | The ARN of the destination dataset group. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.metrics">metrics</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics">PersonalizeMetricAttributionMetrics</a>></code> | A list of metric attributes for the metric attribution. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.metricsOutputConfig">metricsOutputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfig">PersonalizeMetricAttributionMetricsOutputConfig</a></code> | The output configuration details for the metric attribution. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the metric attribution. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `datasetGroupArn`<sup>Required</sup> <a name="datasetGroupArn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.datasetGroupArn"></a>

- *Type:* java.lang.String

The ARN of the destination dataset group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#dataset_group_arn PersonalizeMetricAttribution#dataset_group_arn}

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.metrics"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics">PersonalizeMetricAttributionMetrics</a>>

A list of metric attributes for the metric attribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#metrics PersonalizeMetricAttribution#metrics}

---

##### `metricsOutputConfig`<sup>Required</sup> <a name="metricsOutputConfig" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.metricsOutputConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfig">PersonalizeMetricAttributionMetricsOutputConfig</a>

The output configuration details for the metric attribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#metrics_output_config PersonalizeMetricAttribution#metrics_output_config}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the metric attribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#name PersonalizeMetricAttribution#name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.putMetrics">putMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.putMetricsOutputConfig">putMetricsOutputConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMetrics` <a name="putMetrics" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.putMetrics"></a>

```java
public void putMetrics(IResolvable|java.util.List<PersonalizeMetricAttributionMetrics> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.putMetrics.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics">PersonalizeMetricAttributionMetrics</a>>

---

##### `putMetricsOutputConfig` <a name="putMetricsOutputConfig" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.putMetricsOutputConfig"></a>

```java
public void putMetricsOutputConfig(PersonalizeMetricAttributionMetricsOutputConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.putMetricsOutputConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfig">PersonalizeMetricAttributionMetricsOutputConfig</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PersonalizeMetricAttribution resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.isConstruct"></a>

```java
import io.cdktn.providers.awscc.personalize_metric_attribution.PersonalizeMetricAttribution;

PersonalizeMetricAttribution.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.personalize_metric_attribution.PersonalizeMetricAttribution;

PersonalizeMetricAttribution.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.personalize_metric_attribution.PersonalizeMetricAttribution;

PersonalizeMetricAttribution.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.personalize_metric_attribution.PersonalizeMetricAttribution;

PersonalizeMetricAttribution.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PersonalizeMetricAttribution.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a PersonalizeMetricAttribution resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PersonalizeMetricAttribution to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PersonalizeMetricAttribution that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the PersonalizeMetricAttribution to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.metricAttributionArn">metricAttributionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.metrics">metrics</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList">PersonalizeMetricAttributionMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.metricsOutputConfig">metricsOutputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference">PersonalizeMetricAttributionMetricsOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.datasetGroupArnInput">datasetGroupArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.metricsInput">metricsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics">PersonalizeMetricAttributionMetrics</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.metricsOutputConfigInput">metricsOutputConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfig">PersonalizeMetricAttributionMetricsOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.datasetGroupArn">datasetGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `metricAttributionArn`<sup>Required</sup> <a name="metricAttributionArn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.metricAttributionArn"></a>

```java
public java.lang.String getMetricAttributionArn();
```

- *Type:* java.lang.String

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.metrics"></a>

```java
public PersonalizeMetricAttributionMetricsList getMetrics();
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList">PersonalizeMetricAttributionMetricsList</a>

---

##### `metricsOutputConfig`<sup>Required</sup> <a name="metricsOutputConfig" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.metricsOutputConfig"></a>

```java
public PersonalizeMetricAttributionMetricsOutputConfigOutputReference getMetricsOutputConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference">PersonalizeMetricAttributionMetricsOutputConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `datasetGroupArnInput`<sup>Optional</sup> <a name="datasetGroupArnInput" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.datasetGroupArnInput"></a>

```java
public java.lang.String getDatasetGroupArnInput();
```

- *Type:* java.lang.String

---

##### `metricsInput`<sup>Optional</sup> <a name="metricsInput" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.metricsInput"></a>

```java
public IResolvable|java.util.List<PersonalizeMetricAttributionMetrics> getMetricsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics">PersonalizeMetricAttributionMetrics</a>>

---

##### `metricsOutputConfigInput`<sup>Optional</sup> <a name="metricsOutputConfigInput" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.metricsOutputConfigInput"></a>

```java
public IResolvable|PersonalizeMetricAttributionMetricsOutputConfig getMetricsOutputConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfig">PersonalizeMetricAttributionMetricsOutputConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `datasetGroupArn`<sup>Required</sup> <a name="datasetGroupArn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.datasetGroupArn"></a>

```java
public java.lang.String getDatasetGroupArn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PersonalizeMetricAttributionConfig <a name="PersonalizeMetricAttributionConfig" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.personalize_metric_attribution.PersonalizeMetricAttributionConfig;

PersonalizeMetricAttributionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .datasetGroupArn(java.lang.String)
    .metrics(IResolvable|java.util.List<PersonalizeMetricAttributionMetrics>)
    .metricsOutputConfig(PersonalizeMetricAttributionMetricsOutputConfig)
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.datasetGroupArn">datasetGroupArn</a></code> | <code>java.lang.String</code> | The ARN of the destination dataset group. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.metrics">metrics</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics">PersonalizeMetricAttributionMetrics</a>></code> | A list of metric attributes for the metric attribution. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.metricsOutputConfig">metricsOutputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfig">PersonalizeMetricAttributionMetricsOutputConfig</a></code> | The output configuration details for the metric attribution. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the metric attribution. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `datasetGroupArn`<sup>Required</sup> <a name="datasetGroupArn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.datasetGroupArn"></a>

```java
public java.lang.String getDatasetGroupArn();
```

- *Type:* java.lang.String

The ARN of the destination dataset group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#dataset_group_arn PersonalizeMetricAttribution#dataset_group_arn}

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.metrics"></a>

```java
public IResolvable|java.util.List<PersonalizeMetricAttributionMetrics> getMetrics();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics">PersonalizeMetricAttributionMetrics</a>>

A list of metric attributes for the metric attribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#metrics PersonalizeMetricAttribution#metrics}

---

##### `metricsOutputConfig`<sup>Required</sup> <a name="metricsOutputConfig" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.metricsOutputConfig"></a>

```java
public PersonalizeMetricAttributionMetricsOutputConfig getMetricsOutputConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfig">PersonalizeMetricAttributionMetricsOutputConfig</a>

The output configuration details for the metric attribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#metrics_output_config PersonalizeMetricAttribution#metrics_output_config}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the metric attribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#name PersonalizeMetricAttribution#name}

---

### PersonalizeMetricAttributionMetrics <a name="PersonalizeMetricAttributionMetrics" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics.Initializer"></a>

```java
import io.cdktn.providers.awscc.personalize_metric_attribution.PersonalizeMetricAttributionMetrics;

PersonalizeMetricAttributionMetrics.builder()
    .eventType(java.lang.String)
    .expression(java.lang.String)
    .metricName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics.property.eventType">eventType</a></code> | <code>java.lang.String</code> | The metric's event type. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics.property.expression">expression</a></code> | <code>java.lang.String</code> | The attribute's expression. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics.property.metricName">metricName</a></code> | <code>java.lang.String</code> | The metric's name. |

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics.property.eventType"></a>

```java
public java.lang.String getEventType();
```

- *Type:* java.lang.String

The metric's event type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#event_type PersonalizeMetricAttribution#event_type}

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

The attribute's expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#expression PersonalizeMetricAttribution#expression}

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

The metric's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#metric_name PersonalizeMetricAttribution#metric_name}

---

### PersonalizeMetricAttributionMetricsOutputConfig <a name="PersonalizeMetricAttributionMetricsOutputConfig" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.personalize_metric_attribution.PersonalizeMetricAttributionMetricsOutputConfig;

PersonalizeMetricAttributionMetricsOutputConfig.builder()
    .roleArn(java.lang.String)
//  .s3DataDestination(PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The ARN of the IAM role for the metric attribution. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfig.property.s3DataDestination">s3DataDestination</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination">PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination</a></code> | The configuration details of an Amazon S3 output bucket. |

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

The ARN of the IAM role for the metric attribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#role_arn PersonalizeMetricAttribution#role_arn}

---

##### `s3DataDestination`<sup>Optional</sup> <a name="s3DataDestination" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfig.property.s3DataDestination"></a>

```java
public PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination getS3DataDestination();
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination">PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination</a>

The configuration details of an Amazon S3 output bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#s3_data_destination PersonalizeMetricAttribution#s3_data_destination}

---

### PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination <a name="PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination.Initializer"></a>

```java
import io.cdktn.providers.awscc.personalize_metric_attribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination;

PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination.builder()
//  .kmsKeyArn(java.lang.String)
//  .path(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | The ARN of the KMS key. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination.property.path">path</a></code> | <code>java.lang.String</code> | The file path of the Amazon S3 bucket. |

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

The ARN of the KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#kms_key_arn PersonalizeMetricAttribution#kms_key_arn}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The file path of the Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#path PersonalizeMetricAttribution#path}

---

## Classes <a name="Classes" id="Classes"></a>

### PersonalizeMetricAttributionMetricsList <a name="PersonalizeMetricAttributionMetricsList" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.personalize_metric_attribution.PersonalizeMetricAttributionMetricsList;

new PersonalizeMetricAttributionMetricsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.get"></a>

```java
public PersonalizeMetricAttributionMetricsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics">PersonalizeMetricAttributionMetrics</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<PersonalizeMetricAttributionMetrics> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics">PersonalizeMetricAttributionMetrics</a>>

---


### PersonalizeMetricAttributionMetricsOutputConfigOutputReference <a name="PersonalizeMetricAttributionMetricsOutputConfigOutputReference" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.personalize_metric_attribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference;

new PersonalizeMetricAttributionMetricsOutputConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.putS3DataDestination">putS3DataDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.resetS3DataDestination">resetS3DataDestination</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3DataDestination` <a name="putS3DataDestination" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.putS3DataDestination"></a>

```java
public void putS3DataDestination(PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.putS3DataDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination">PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination</a>

---

##### `resetS3DataDestination` <a name="resetS3DataDestination" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.resetS3DataDestination"></a>

```java
public void resetS3DataDestination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.s3DataDestination">s3DataDestination</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference">PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.s3DataDestinationInput">s3DataDestinationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination">PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfig">PersonalizeMetricAttributionMetricsOutputConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3DataDestination`<sup>Required</sup> <a name="s3DataDestination" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.s3DataDestination"></a>

```java
public PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference getS3DataDestination();
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference">PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference</a>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `s3DataDestinationInput`<sup>Optional</sup> <a name="s3DataDestinationInput" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.s3DataDestinationInput"></a>

```java
public IResolvable|PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination getS3DataDestinationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination">PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination</a>

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|PersonalizeMetricAttributionMetricsOutputConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfig">PersonalizeMetricAttributionMetricsOutputConfig</a>

---


### PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference <a name="PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.personalize_metric_attribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference;

new PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.resetKmsKeyArn"></a>

```java
public void resetKmsKeyArn()
```

##### `resetPath` <a name="resetPath" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.resetPath"></a>

```java
public void resetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination">PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.kmsKeyArnInput"></a>

```java
public java.lang.String getKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.internalValue"></a>

```java
public IResolvable|PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination">PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination</a>

---


### PersonalizeMetricAttributionMetricsOutputReference <a name="PersonalizeMetricAttributionMetricsOutputReference" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.personalize_metric_attribution.PersonalizeMetricAttributionMetricsOutputReference;

new PersonalizeMetricAttributionMetricsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.eventTypeInput">eventTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.eventType">eventType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.metricName">metricName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics">PersonalizeMetricAttributionMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `eventTypeInput`<sup>Optional</sup> <a name="eventTypeInput" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.eventTypeInput"></a>

```java
public java.lang.String getEventTypeInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.metricNameInput"></a>

```java
public java.lang.String getMetricNameInput();
```

- *Type:* java.lang.String

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.eventType"></a>

```java
public java.lang.String getEventType();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.internalValue"></a>

```java
public IResolvable|PersonalizeMetricAttributionMetrics getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics">PersonalizeMetricAttributionMetrics</a>

---



