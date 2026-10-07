# `cloudwatchResourceMetricsConfiguration` Submodule <a name="`cloudwatchResourceMetricsConfiguration` Submodule" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchResourceMetricsConfiguration <a name="CloudwatchResourceMetricsConfiguration" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_resource_metrics_configuration awscc_cloudwatch_resource_metrics_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_resource_metrics_configuration.CloudwatchResourceMetricsConfiguration;

CloudwatchResourceMetricsConfiguration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .resourceArn(java.lang.String)
//  .metricSelections(IResolvable|java.util.List<CloudwatchResourceMetricsConfigurationMetricSelections>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer.parameter.resourceArn">resourceArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the resource for which the detailed monitoring metrics configuration is managed. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer.parameter.metricSelections">metricSelections</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelections">CloudwatchResourceMetricsConfigurationMetricSelections</a>></code> | The metric selections that define which metrics are enabled for detailed monitoring on the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer.parameter.resourceArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the resource for which the detailed monitoring metrics configuration is managed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_resource_metrics_configuration#resource_arn CloudwatchResourceMetricsConfiguration#resource_arn}

---

##### `metricSelections`<sup>Optional</sup> <a name="metricSelections" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer.parameter.metricSelections"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelections">CloudwatchResourceMetricsConfigurationMetricSelections</a>>

The metric selections that define which metrics are enabled for detailed monitoring on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_resource_metrics_configuration#metric_selections CloudwatchResourceMetricsConfiguration#metric_selections}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.putMetricSelections">putMetricSelections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.resetMetricSelections">resetMetricSelections</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMetricSelections` <a name="putMetricSelections" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.putMetricSelections"></a>

```java
public void putMetricSelections(IResolvable|java.util.List<CloudwatchResourceMetricsConfigurationMetricSelections> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.putMetricSelections.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelections">CloudwatchResourceMetricsConfigurationMetricSelections</a>>

---

##### `resetMetricSelections` <a name="resetMetricSelections" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.resetMetricSelections"></a>

```java
public void resetMetricSelections()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudwatchResourceMetricsConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.isConstruct"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_resource_metrics_configuration.CloudwatchResourceMetricsConfiguration;

CloudwatchResourceMetricsConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_resource_metrics_configuration.CloudwatchResourceMetricsConfiguration;

CloudwatchResourceMetricsConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_resource_metrics_configuration.CloudwatchResourceMetricsConfiguration;

CloudwatchResourceMetricsConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_resource_metrics_configuration.CloudwatchResourceMetricsConfiguration;

CloudwatchResourceMetricsConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudwatchResourceMetricsConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CloudwatchResourceMetricsConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudwatchResourceMetricsConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudwatchResourceMetricsConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_resource_metrics_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchResourceMetricsConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.metricSelections">metricSelections</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsList">CloudwatchResourceMetricsConfigurationMetricSelectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.metricSelectionsInput">metricSelectionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelections">CloudwatchResourceMetricsConfigurationMetricSelections</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.resourceArnInput">resourceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.resourceArn">resourceArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `metricSelections`<sup>Required</sup> <a name="metricSelections" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.metricSelections"></a>

```java
public CloudwatchResourceMetricsConfigurationMetricSelectionsList getMetricSelections();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsList">CloudwatchResourceMetricsConfigurationMetricSelectionsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `metricSelectionsInput`<sup>Optional</sup> <a name="metricSelectionsInput" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.metricSelectionsInput"></a>

```java
public IResolvable|java.util.List<CloudwatchResourceMetricsConfigurationMetricSelections> getMetricSelectionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelections">CloudwatchResourceMetricsConfigurationMetricSelections</a>>

---

##### `resourceArnInput`<sup>Optional</sup> <a name="resourceArnInput" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.resourceArnInput"></a>

```java
public java.lang.String getResourceArnInput();
```

- *Type:* java.lang.String

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.resourceArn"></a>

```java
public java.lang.String getResourceArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchResourceMetricsConfigurationConfig <a name="CloudwatchResourceMetricsConfigurationConfig" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_resource_metrics_configuration.CloudwatchResourceMetricsConfigurationConfig;

CloudwatchResourceMetricsConfigurationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .resourceArn(java.lang.String)
//  .metricSelections(IResolvable|java.util.List<CloudwatchResourceMetricsConfigurationMetricSelections>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.resourceArn">resourceArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the resource for which the detailed monitoring metrics configuration is managed. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.metricSelections">metricSelections</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelections">CloudwatchResourceMetricsConfigurationMetricSelections</a>></code> | The metric selections that define which metrics are enabled for detailed monitoring on the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.resourceArn"></a>

```java
public java.lang.String getResourceArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the resource for which the detailed monitoring metrics configuration is managed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_resource_metrics_configuration#resource_arn CloudwatchResourceMetricsConfiguration#resource_arn}

---

##### `metricSelections`<sup>Optional</sup> <a name="metricSelections" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.metricSelections"></a>

```java
public IResolvable|java.util.List<CloudwatchResourceMetricsConfigurationMetricSelections> getMetricSelections();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelections">CloudwatchResourceMetricsConfigurationMetricSelections</a>>

The metric selections that define which metrics are enabled for detailed monitoring on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_resource_metrics_configuration#metric_selections CloudwatchResourceMetricsConfiguration#metric_selections}

---

### CloudwatchResourceMetricsConfigurationMetricSelections <a name="CloudwatchResourceMetricsConfigurationMetricSelections" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelections.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_resource_metrics_configuration.CloudwatchResourceMetricsConfigurationMetricSelections;

CloudwatchResourceMetricsConfigurationMetricSelections.builder()
//  .includeMetrics(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelections.property.includeMetrics">includeMetrics</a></code> | <code>java.util.List<java.lang.String></code> | The list of metric names to include in detailed monitoring for the resource. |

---

##### `includeMetrics`<sup>Optional</sup> <a name="includeMetrics" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelections.property.includeMetrics"></a>

```java
public java.util.List<java.lang.String> getIncludeMetrics();
```

- *Type:* java.util.List<java.lang.String>

The list of metric names to include in detailed monitoring for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_resource_metrics_configuration#include_metrics CloudwatchResourceMetricsConfiguration#include_metrics}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchResourceMetricsConfigurationMetricSelectionsList <a name="CloudwatchResourceMetricsConfigurationMetricSelectionsList" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_resource_metrics_configuration.CloudwatchResourceMetricsConfigurationMetricSelectionsList;

new CloudwatchResourceMetricsConfigurationMetricSelectionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsList.get"></a>

```java
public CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelections">CloudwatchResourceMetricsConfigurationMetricSelections</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CloudwatchResourceMetricsConfigurationMetricSelections> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelections">CloudwatchResourceMetricsConfigurationMetricSelections</a>>

---


### CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference <a name="CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_resource_metrics_configuration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference;

new CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.resetIncludeMetrics">resetIncludeMetrics</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeMetrics` <a name="resetIncludeMetrics" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.resetIncludeMetrics"></a>

```java
public void resetIncludeMetrics()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.property.includeMetricsInput">includeMetricsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.property.includeMetrics">includeMetrics</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelections">CloudwatchResourceMetricsConfigurationMetricSelections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `includeMetricsInput`<sup>Optional</sup> <a name="includeMetricsInput" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.property.includeMetricsInput"></a>

```java
public java.util.List<java.lang.String> getIncludeMetricsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includeMetrics`<sup>Required</sup> <a name="includeMetrics" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.property.includeMetrics"></a>

```java
public java.util.List<java.lang.String> getIncludeMetrics();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudwatchResourceMetricsConfigurationMetricSelections getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelections">CloudwatchResourceMetricsConfigurationMetricSelections</a>

---



