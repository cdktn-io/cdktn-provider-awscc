# `iotFleetMetric` Submodule <a name="`iotFleetMetric` Submodule" id="@cdktn/provider-awscc.iotFleetMetric"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotFleetMetric <a name="IotFleetMetric" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_fleet_metric awscc_iot_fleet_metric}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_fleet_metric.IotFleetMetric;

IotFleetMetric.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .metricName(java.lang.String)
//  .aggregationField(java.lang.String)
//  .aggregationType(IotFleetMetricAggregationType)
//  .description(java.lang.String)
//  .indexName(java.lang.String)
//  .period(java.lang.Number)
//  .queryString(java.lang.String)
//  .queryVersion(java.lang.String)
//  .tags(IResolvable|java.util.List<IotFleetMetricTags>)
//  .unit(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.metricName">metricName</a></code> | <code>java.lang.String</code> | The name of the fleet metric. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.aggregationField">aggregationField</a></code> | <code>java.lang.String</code> | The aggregation field to perform aggregation and metric emission. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.aggregationType">aggregationType</a></code> | <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationType">IotFleetMetricAggregationType</a></code> | Aggregation types supported by Fleet Indexing. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of a fleet metric. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.indexName">indexName</a></code> | <code>java.lang.String</code> | The index name of a fleet metric. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.period">period</a></code> | <code>java.lang.Number</code> | The period of metric emission in seconds. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.queryString">queryString</a></code> | <code>java.lang.String</code> | The Fleet Indexing query used by a fleet metric. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.queryVersion">queryVersion</a></code> | <code>java.lang.String</code> | The version of a Fleet Indexing query used by a fleet metric. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTags">IotFleetMetricTags</a>></code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.unit">unit</a></code> | <code>java.lang.String</code> | The unit of data points emitted by a fleet metric. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.metricName"></a>

- *Type:* java.lang.String

The name of the fleet metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_fleet_metric#metric_name IotFleetMetric#metric_name}

---

##### `aggregationField`<sup>Optional</sup> <a name="aggregationField" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.aggregationField"></a>

- *Type:* java.lang.String

The aggregation field to perform aggregation and metric emission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_fleet_metric#aggregation_field IotFleetMetric#aggregation_field}

---

##### `aggregationType`<sup>Optional</sup> <a name="aggregationType" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.aggregationType"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationType">IotFleetMetricAggregationType</a>

Aggregation types supported by Fleet Indexing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_fleet_metric#aggregation_type IotFleetMetric#aggregation_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of a fleet metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_fleet_metric#description IotFleetMetric#description}

---

##### `indexName`<sup>Optional</sup> <a name="indexName" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.indexName"></a>

- *Type:* java.lang.String

The index name of a fleet metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_fleet_metric#index_name IotFleetMetric#index_name}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.period"></a>

- *Type:* java.lang.Number

The period of metric emission in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_fleet_metric#period IotFleetMetric#period}

---

##### `queryString`<sup>Optional</sup> <a name="queryString" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.queryString"></a>

- *Type:* java.lang.String

The Fleet Indexing query used by a fleet metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_fleet_metric#query_string IotFleetMetric#query_string}

---

##### `queryVersion`<sup>Optional</sup> <a name="queryVersion" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.queryVersion"></a>

- *Type:* java.lang.String

The version of a Fleet Indexing query used by a fleet metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_fleet_metric#query_version IotFleetMetric#query_version}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTags">IotFleetMetricTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_fleet_metric#tags IotFleetMetric#tags}

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.unit"></a>

- *Type:* java.lang.String

The unit of data points emitted by a fleet metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_fleet_metric#unit IotFleetMetric#unit}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.putAggregationType">putAggregationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetAggregationField">resetAggregationField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetAggregationType">resetAggregationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetIndexName">resetIndexName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetPeriod">resetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetQueryString">resetQueryString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetQueryVersion">resetQueryVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetUnit">resetUnit</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAggregationType` <a name="putAggregationType" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.putAggregationType"></a>

```java
public void putAggregationType(IotFleetMetricAggregationType value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.putAggregationType.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationType">IotFleetMetricAggregationType</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<IotFleetMetricTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTags">IotFleetMetricTags</a>>

---

##### `resetAggregationField` <a name="resetAggregationField" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetAggregationField"></a>

```java
public void resetAggregationField()
```

##### `resetAggregationType` <a name="resetAggregationType" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetAggregationType"></a>

```java
public void resetAggregationType()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetIndexName` <a name="resetIndexName" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetIndexName"></a>

```java
public void resetIndexName()
```

##### `resetPeriod` <a name="resetPeriod" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetPeriod"></a>

```java
public void resetPeriod()
```

##### `resetQueryString` <a name="resetQueryString" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetQueryString"></a>

```java
public void resetQueryString()
```

##### `resetQueryVersion` <a name="resetQueryVersion" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetQueryVersion"></a>

```java
public void resetQueryVersion()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetTags"></a>

```java
public void resetTags()
```

##### `resetUnit` <a name="resetUnit" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetUnit"></a>

```java
public void resetUnit()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotFleetMetric resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.isConstruct"></a>

```java
import io.cdktn.providers.awscc.iot_fleet_metric.IotFleetMetric;

IotFleetMetric.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.iot_fleet_metric.IotFleetMetric;

IotFleetMetric.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.iot_fleet_metric.IotFleetMetric;

IotFleetMetric.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.iot_fleet_metric.IotFleetMetric;

IotFleetMetric.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IotFleetMetric.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a IotFleetMetric resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IotFleetMetric to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IotFleetMetric that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_fleet_metric#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the IotFleetMetric to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.aggregationType">aggregationType</a></code> | <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference">IotFleetMetricAggregationTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.creationDate">creationDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.lastModifiedDate">lastModifiedDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.metricArn">metricArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList">IotFleetMetricTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.version">version</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.aggregationFieldInput">aggregationFieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.aggregationTypeInput">aggregationTypeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationType">IotFleetMetricAggregationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.indexNameInput">indexNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.metricNameInput">metricNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.periodInput">periodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.queryStringInput">queryStringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.queryVersionInput">queryVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTags">IotFleetMetricTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.unitInput">unitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.aggregationField">aggregationField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.indexName">indexName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.metricName">metricName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.period">period</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.queryString">queryString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.queryVersion">queryVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `aggregationType`<sup>Required</sup> <a name="aggregationType" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.aggregationType"></a>

```java
public IotFleetMetricAggregationTypeOutputReference getAggregationType();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference">IotFleetMetricAggregationTypeOutputReference</a>

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.creationDate"></a>

```java
public java.lang.String getCreationDate();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastModifiedDate`<sup>Required</sup> <a name="lastModifiedDate" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.lastModifiedDate"></a>

```java
public java.lang.String getLastModifiedDate();
```

- *Type:* java.lang.String

---

##### `metricArn`<sup>Required</sup> <a name="metricArn" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.metricArn"></a>

```java
public java.lang.String getMetricArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.tags"></a>

```java
public IotFleetMetricTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList">IotFleetMetricTagsList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.version"></a>

```java
public java.lang.Number getVersion();
```

- *Type:* java.lang.Number

---

##### `aggregationFieldInput`<sup>Optional</sup> <a name="aggregationFieldInput" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.aggregationFieldInput"></a>

```java
public java.lang.String getAggregationFieldInput();
```

- *Type:* java.lang.String

---

##### `aggregationTypeInput`<sup>Optional</sup> <a name="aggregationTypeInput" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.aggregationTypeInput"></a>

```java
public IResolvable|IotFleetMetricAggregationType getAggregationTypeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationType">IotFleetMetricAggregationType</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `indexNameInput`<sup>Optional</sup> <a name="indexNameInput" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.indexNameInput"></a>

```java
public java.lang.String getIndexNameInput();
```

- *Type:* java.lang.String

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.metricNameInput"></a>

```java
public java.lang.String getMetricNameInput();
```

- *Type:* java.lang.String

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.periodInput"></a>

```java
public java.lang.Number getPeriodInput();
```

- *Type:* java.lang.Number

---

##### `queryStringInput`<sup>Optional</sup> <a name="queryStringInput" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.queryStringInput"></a>

```java
public java.lang.String getQueryStringInput();
```

- *Type:* java.lang.String

---

##### `queryVersionInput`<sup>Optional</sup> <a name="queryVersionInput" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.queryVersionInput"></a>

```java
public java.lang.String getQueryVersionInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.tagsInput"></a>

```java
public IResolvable|java.util.List<IotFleetMetricTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTags">IotFleetMetricTags</a>>

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.unitInput"></a>

```java
public java.lang.String getUnitInput();
```

- *Type:* java.lang.String

---

##### `aggregationField`<sup>Required</sup> <a name="aggregationField" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.aggregationField"></a>

```java
public java.lang.String getAggregationField();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `indexName`<sup>Required</sup> <a name="indexName" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.indexName"></a>

```java
public java.lang.String getIndexName();
```

- *Type:* java.lang.String

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.period"></a>

```java
public java.lang.Number getPeriod();
```

- *Type:* java.lang.Number

---

##### `queryString`<sup>Required</sup> <a name="queryString" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.queryString"></a>

```java
public java.lang.String getQueryString();
```

- *Type:* java.lang.String

---

##### `queryVersion`<sup>Required</sup> <a name="queryVersion" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.queryVersion"></a>

```java
public java.lang.String getQueryVersion();
```

- *Type:* java.lang.String

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IotFleetMetricAggregationType <a name="IotFleetMetricAggregationType" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationType.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_fleet_metric.IotFleetMetricAggregationType;

IotFleetMetricAggregationType.builder()
//  .name(java.lang.String)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationType.property.name">name</a></code> | <code>java.lang.String</code> | Fleet Indexing aggregation type names such as Statistics, Percentiles and Cardinality. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationType.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Fleet Indexing aggregation type values. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationType.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Fleet Indexing aggregation type names such as Statistics, Percentiles and Cardinality.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_fleet_metric#name IotFleetMetric#name}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationType.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Fleet Indexing aggregation type values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_fleet_metric#values IotFleetMetric#values}

---

### IotFleetMetricConfig <a name="IotFleetMetricConfig" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_fleet_metric.IotFleetMetricConfig;

IotFleetMetricConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .metricName(java.lang.String)
//  .aggregationField(java.lang.String)
//  .aggregationType(IotFleetMetricAggregationType)
//  .description(java.lang.String)
//  .indexName(java.lang.String)
//  .period(java.lang.Number)
//  .queryString(java.lang.String)
//  .queryVersion(java.lang.String)
//  .tags(IResolvable|java.util.List<IotFleetMetricTags>)
//  .unit(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.metricName">metricName</a></code> | <code>java.lang.String</code> | The name of the fleet metric. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.aggregationField">aggregationField</a></code> | <code>java.lang.String</code> | The aggregation field to perform aggregation and metric emission. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.aggregationType">aggregationType</a></code> | <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationType">IotFleetMetricAggregationType</a></code> | Aggregation types supported by Fleet Indexing. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of a fleet metric. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.indexName">indexName</a></code> | <code>java.lang.String</code> | The index name of a fleet metric. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.period">period</a></code> | <code>java.lang.Number</code> | The period of metric emission in seconds. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.queryString">queryString</a></code> | <code>java.lang.String</code> | The Fleet Indexing query used by a fleet metric. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.queryVersion">queryVersion</a></code> | <code>java.lang.String</code> | The version of a Fleet Indexing query used by a fleet metric. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTags">IotFleetMetricTags</a>></code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.unit">unit</a></code> | <code>java.lang.String</code> | The unit of data points emitted by a fleet metric. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

The name of the fleet metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_fleet_metric#metric_name IotFleetMetric#metric_name}

---

##### `aggregationField`<sup>Optional</sup> <a name="aggregationField" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.aggregationField"></a>

```java
public java.lang.String getAggregationField();
```

- *Type:* java.lang.String

The aggregation field to perform aggregation and metric emission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_fleet_metric#aggregation_field IotFleetMetric#aggregation_field}

---

##### `aggregationType`<sup>Optional</sup> <a name="aggregationType" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.aggregationType"></a>

```java
public IotFleetMetricAggregationType getAggregationType();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationType">IotFleetMetricAggregationType</a>

Aggregation types supported by Fleet Indexing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_fleet_metric#aggregation_type IotFleetMetric#aggregation_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of a fleet metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_fleet_metric#description IotFleetMetric#description}

---

##### `indexName`<sup>Optional</sup> <a name="indexName" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.indexName"></a>

```java
public java.lang.String getIndexName();
```

- *Type:* java.lang.String

The index name of a fleet metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_fleet_metric#index_name IotFleetMetric#index_name}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.period"></a>

```java
public java.lang.Number getPeriod();
```

- *Type:* java.lang.Number

The period of metric emission in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_fleet_metric#period IotFleetMetric#period}

---

##### `queryString`<sup>Optional</sup> <a name="queryString" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.queryString"></a>

```java
public java.lang.String getQueryString();
```

- *Type:* java.lang.String

The Fleet Indexing query used by a fleet metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_fleet_metric#query_string IotFleetMetric#query_string}

---

##### `queryVersion`<sup>Optional</sup> <a name="queryVersion" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.queryVersion"></a>

```java
public java.lang.String getQueryVersion();
```

- *Type:* java.lang.String

The version of a Fleet Indexing query used by a fleet metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_fleet_metric#query_version IotFleetMetric#query_version}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.tags"></a>

```java
public IResolvable|java.util.List<IotFleetMetricTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTags">IotFleetMetricTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_fleet_metric#tags IotFleetMetric#tags}

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

The unit of data points emitted by a fleet metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_fleet_metric#unit IotFleetMetric#unit}

---

### IotFleetMetricTags <a name="IotFleetMetricTags" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_fleet_metric.IotFleetMetricTags;

IotFleetMetricTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTags.property.key">key</a></code> | <code>java.lang.String</code> | The tag's key. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTags.property.value">value</a></code> | <code>java.lang.String</code> | The tag's value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The tag's key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_fleet_metric#key IotFleetMetric#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The tag's value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_fleet_metric#value IotFleetMetric#value}

---

## Classes <a name="Classes" id="Classes"></a>

### IotFleetMetricAggregationTypeOutputReference <a name="IotFleetMetricAggregationTypeOutputReference" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_fleet_metric.IotFleetMetricAggregationTypeOutputReference;

new IotFleetMetricAggregationTypeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationType">IotFleetMetricAggregationType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.property.internalValue"></a>

```java
public IResolvable|IotFleetMetricAggregationType getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationType">IotFleetMetricAggregationType</a>

---


### IotFleetMetricTagsList <a name="IotFleetMetricTagsList" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_fleet_metric.IotFleetMetricTagsList;

new IotFleetMetricTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.get"></a>

```java
public IotFleetMetricTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTags">IotFleetMetricTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IotFleetMetricTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTags">IotFleetMetricTags</a>>

---


### IotFleetMetricTagsOutputReference <a name="IotFleetMetricTagsOutputReference" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_fleet_metric.IotFleetMetricTagsOutputReference;

new IotFleetMetricTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTags">IotFleetMetricTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|IotFleetMetricTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTags">IotFleetMetricTags</a>

---



