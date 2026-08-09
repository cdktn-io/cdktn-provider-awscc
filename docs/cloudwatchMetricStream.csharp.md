# `cloudwatchMetricStream` Submodule <a name="`cloudwatchMetricStream` Submodule" id="@cdktn/provider-awscc.cloudwatchMetricStream"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchMetricStream <a name="CloudwatchMetricStream" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_metric_stream awscc_cloudwatch_metric_stream}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchMetricStream(Construct Scope, string Id, CloudwatchMetricStreamConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig">CloudwatchMetricStreamConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig">CloudwatchMetricStreamConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.putExcludeFilters">PutExcludeFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.putIncludeFilters">PutIncludeFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.putStatisticsConfigurations">PutStatisticsConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetExcludeFilters">ResetExcludeFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetFirehoseArn">ResetFirehoseArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetIncludeFilters">ResetIncludeFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetIncludeLinkedAccountsMetrics">ResetIncludeLinkedAccountsMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetOutputFormat">ResetOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetStatisticsConfigurations">ResetStatisticsConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExcludeFilters` <a name="PutExcludeFilters" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.putExcludeFilters"></a>

```csharp
private void PutExcludeFilters(IResolvable|CloudwatchMetricStreamExcludeFilters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.putExcludeFilters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilters">CloudwatchMetricStreamExcludeFilters</a>[]

---

##### `PutIncludeFilters` <a name="PutIncludeFilters" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.putIncludeFilters"></a>

```csharp
private void PutIncludeFilters(IResolvable|CloudwatchMetricStreamIncludeFilters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.putIncludeFilters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilters">CloudwatchMetricStreamIncludeFilters</a>[]

---

##### `PutStatisticsConfigurations` <a name="PutStatisticsConfigurations" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.putStatisticsConfigurations"></a>

```csharp
private void PutStatisticsConfigurations(IResolvable|CloudwatchMetricStreamStatisticsConfigurations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.putStatisticsConfigurations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurations">CloudwatchMetricStreamStatisticsConfigurations</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.putTags"></a>

```csharp
private void PutTags(IResolvable|CloudwatchMetricStreamTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTags">CloudwatchMetricStreamTags</a>[]

---

##### `ResetExcludeFilters` <a name="ResetExcludeFilters" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetExcludeFilters"></a>

```csharp
private void ResetExcludeFilters()
```

##### `ResetFirehoseArn` <a name="ResetFirehoseArn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetFirehoseArn"></a>

```csharp
private void ResetFirehoseArn()
```

##### `ResetIncludeFilters` <a name="ResetIncludeFilters" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetIncludeFilters"></a>

```csharp
private void ResetIncludeFilters()
```

##### `ResetIncludeLinkedAccountsMetrics` <a name="ResetIncludeLinkedAccountsMetrics" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetIncludeLinkedAccountsMetrics"></a>

```csharp
private void ResetIncludeLinkedAccountsMetrics()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetOutputFormat` <a name="ResetOutputFormat" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetOutputFormat"></a>

```csharp
private void ResetOutputFormat()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```

##### `ResetStatisticsConfigurations` <a name="ResetStatisticsConfigurations" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetStatisticsConfigurations"></a>

```csharp
private void ResetStatisticsConfigurations()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudwatchMetricStream resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CloudwatchMetricStream.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CloudwatchMetricStream.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CloudwatchMetricStream.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CloudwatchMetricStream.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CloudwatchMetricStream resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudwatchMetricStream to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudwatchMetricStream that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_metric_stream#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchMetricStream to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.creationDate">CreationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.excludeFilters">ExcludeFilters</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList">CloudwatchMetricStreamExcludeFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.includeFilters">IncludeFilters</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList">CloudwatchMetricStreamIncludeFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.lastUpdateDate">LastUpdateDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.statisticsConfigurations">StatisticsConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList">CloudwatchMetricStreamStatisticsConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList">CloudwatchMetricStreamTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.excludeFiltersInput">ExcludeFiltersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilters">CloudwatchMetricStreamExcludeFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.firehoseArnInput">FirehoseArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.includeFiltersInput">IncludeFiltersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilters">CloudwatchMetricStreamIncludeFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.includeLinkedAccountsMetricsInput">IncludeLinkedAccountsMetricsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.outputFormatInput">OutputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.statisticsConfigurationsInput">StatisticsConfigurationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurations">CloudwatchMetricStreamStatisticsConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTags">CloudwatchMetricStreamTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.firehoseArn">FirehoseArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.includeLinkedAccountsMetrics">IncludeLinkedAccountsMetrics</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.outputFormat">OutputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.creationDate"></a>

```csharp
public string CreationDate { get; }
```

- *Type:* string

---

##### `ExcludeFilters`<sup>Required</sup> <a name="ExcludeFilters" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.excludeFilters"></a>

```csharp
public CloudwatchMetricStreamExcludeFiltersList ExcludeFilters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList">CloudwatchMetricStreamExcludeFiltersList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IncludeFilters`<sup>Required</sup> <a name="IncludeFilters" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.includeFilters"></a>

```csharp
public CloudwatchMetricStreamIncludeFiltersList IncludeFilters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList">CloudwatchMetricStreamIncludeFiltersList</a>

---

##### `LastUpdateDate`<sup>Required</sup> <a name="LastUpdateDate" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.lastUpdateDate"></a>

```csharp
public string LastUpdateDate { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StatisticsConfigurations`<sup>Required</sup> <a name="StatisticsConfigurations" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.statisticsConfigurations"></a>

```csharp
public CloudwatchMetricStreamStatisticsConfigurationsList StatisticsConfigurations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList">CloudwatchMetricStreamStatisticsConfigurationsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.tags"></a>

```csharp
public CloudwatchMetricStreamTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList">CloudwatchMetricStreamTagsList</a>

---

##### `ExcludeFiltersInput`<sup>Optional</sup> <a name="ExcludeFiltersInput" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.excludeFiltersInput"></a>

```csharp
public IResolvable|CloudwatchMetricStreamExcludeFilters[] ExcludeFiltersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilters">CloudwatchMetricStreamExcludeFilters</a>[]

---

##### `FirehoseArnInput`<sup>Optional</sup> <a name="FirehoseArnInput" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.firehoseArnInput"></a>

```csharp
public string FirehoseArnInput { get; }
```

- *Type:* string

---

##### `IncludeFiltersInput`<sup>Optional</sup> <a name="IncludeFiltersInput" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.includeFiltersInput"></a>

```csharp
public IResolvable|CloudwatchMetricStreamIncludeFilters[] IncludeFiltersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilters">CloudwatchMetricStreamIncludeFilters</a>[]

---

##### `IncludeLinkedAccountsMetricsInput`<sup>Optional</sup> <a name="IncludeLinkedAccountsMetricsInput" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.includeLinkedAccountsMetricsInput"></a>

```csharp
public bool|IResolvable IncludeLinkedAccountsMetricsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OutputFormatInput`<sup>Optional</sup> <a name="OutputFormatInput" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.outputFormatInput"></a>

```csharp
public string OutputFormatInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `StatisticsConfigurationsInput`<sup>Optional</sup> <a name="StatisticsConfigurationsInput" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.statisticsConfigurationsInput"></a>

```csharp
public IResolvable|CloudwatchMetricStreamStatisticsConfigurations[] StatisticsConfigurationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurations">CloudwatchMetricStreamStatisticsConfigurations</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.tagsInput"></a>

```csharp
public IResolvable|CloudwatchMetricStreamTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTags">CloudwatchMetricStreamTags</a>[]

---

##### `FirehoseArn`<sup>Required</sup> <a name="FirehoseArn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.firehoseArn"></a>

```csharp
public string FirehoseArn { get; }
```

- *Type:* string

---

##### `IncludeLinkedAccountsMetrics`<sup>Required</sup> <a name="IncludeLinkedAccountsMetrics" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.includeLinkedAccountsMetrics"></a>

```csharp
public bool|IResolvable IncludeLinkedAccountsMetrics { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OutputFormat`<sup>Required</sup> <a name="OutputFormat" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.outputFormat"></a>

```csharp
public string OutputFormat { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchMetricStreamConfig <a name="CloudwatchMetricStreamConfig" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchMetricStreamConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|CloudwatchMetricStreamExcludeFilters[] ExcludeFilters = null,
    string FirehoseArn = null,
    IResolvable|CloudwatchMetricStreamIncludeFilters[] IncludeFilters = null,
    bool|IResolvable IncludeLinkedAccountsMetrics = null,
    string Name = null,
    string OutputFormat = null,
    string RoleArn = null,
    IResolvable|CloudwatchMetricStreamStatisticsConfigurations[] StatisticsConfigurations = null,
    IResolvable|CloudwatchMetricStreamTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.excludeFilters">ExcludeFilters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilters">CloudwatchMetricStreamExcludeFilters</a>[]</code> | Define which metrics will be not streamed. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.firehoseArn">FirehoseArn</a></code> | <code>string</code> | The ARN of the Kinesis Firehose where to stream the data. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.includeFilters">IncludeFilters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilters">CloudwatchMetricStreamIncludeFilters</a>[]</code> | Define which metrics will be streamed. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.includeLinkedAccountsMetrics">IncludeLinkedAccountsMetrics</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If you are creating a metric stream in a monitoring account, specify true to include metrics from source accounts that are linked to this monitoring account, in the metric stream. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.name">Name</a></code> | <code>string</code> | Name of the metric stream. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.outputFormat">OutputFormat</a></code> | <code>string</code> | The output format of the data streamed to the Kinesis Firehose. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | The ARN of the role that provides access to the Kinesis Firehose. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.statisticsConfigurations">StatisticsConfigurations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurations">CloudwatchMetricStreamStatisticsConfigurations</a>[]</code> | By default, a metric stream always sends the MAX, MIN, SUM, and SAMPLECOUNT statistics for each metric that is streamed. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTags">CloudwatchMetricStreamTags</a>[]</code> | A set of tags to assign to the delivery stream. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ExcludeFilters`<sup>Optional</sup> <a name="ExcludeFilters" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.excludeFilters"></a>

```csharp
public IResolvable|CloudwatchMetricStreamExcludeFilters[] ExcludeFilters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilters">CloudwatchMetricStreamExcludeFilters</a>[]

Define which metrics will be not streamed.

Metrics matched by multiple instances of MetricStreamFilter are joined with an OR operation by default. If both IncludeFilters and ExcludeFilters are omitted, all metrics in the account will be streamed. IncludeFilters and ExcludeFilters are mutually exclusive. Default to null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_metric_stream#exclude_filters CloudwatchMetricStream#exclude_filters}

---

##### `FirehoseArn`<sup>Optional</sup> <a name="FirehoseArn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.firehoseArn"></a>

```csharp
public string FirehoseArn { get; set; }
```

- *Type:* string

The ARN of the Kinesis Firehose where to stream the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_metric_stream#firehose_arn CloudwatchMetricStream#firehose_arn}

---

##### `IncludeFilters`<sup>Optional</sup> <a name="IncludeFilters" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.includeFilters"></a>

```csharp
public IResolvable|CloudwatchMetricStreamIncludeFilters[] IncludeFilters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilters">CloudwatchMetricStreamIncludeFilters</a>[]

Define which metrics will be streamed.

Metrics matched by multiple instances of MetricStreamFilter are joined with an OR operation by default. If both IncludeFilters and ExcludeFilters are omitted, all metrics in the account will be streamed. IncludeFilters and ExcludeFilters are mutually exclusive. Default to null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_metric_stream#include_filters CloudwatchMetricStream#include_filters}

---

##### `IncludeLinkedAccountsMetrics`<sup>Optional</sup> <a name="IncludeLinkedAccountsMetrics" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.includeLinkedAccountsMetrics"></a>

```csharp
public bool|IResolvable IncludeLinkedAccountsMetrics { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If you are creating a metric stream in a monitoring account, specify true to include metrics from source accounts that are linked to this monitoring account, in the metric stream.

The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_metric_stream#include_linked_accounts_metrics CloudwatchMetricStream#include_linked_accounts_metrics}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the metric stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_metric_stream#name CloudwatchMetricStream#name}

---

##### `OutputFormat`<sup>Optional</sup> <a name="OutputFormat" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.outputFormat"></a>

```csharp
public string OutputFormat { get; set; }
```

- *Type:* string

The output format of the data streamed to the Kinesis Firehose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_metric_stream#output_format CloudwatchMetricStream#output_format}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

The ARN of the role that provides access to the Kinesis Firehose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_metric_stream#role_arn CloudwatchMetricStream#role_arn}

---

##### `StatisticsConfigurations`<sup>Optional</sup> <a name="StatisticsConfigurations" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.statisticsConfigurations"></a>

```csharp
public IResolvable|CloudwatchMetricStreamStatisticsConfigurations[] StatisticsConfigurations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurations">CloudwatchMetricStreamStatisticsConfigurations</a>[]

By default, a metric stream always sends the MAX, MIN, SUM, and SAMPLECOUNT statistics for each metric that is streamed.

You can use this parameter to have the metric stream also send additional statistics in the stream. This array can have up to 100 members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_metric_stream#statistics_configurations CloudwatchMetricStream#statistics_configurations}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.tags"></a>

```csharp
public IResolvable|CloudwatchMetricStreamTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTags">CloudwatchMetricStreamTags</a>[]

A set of tags to assign to the delivery stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_metric_stream#tags CloudwatchMetricStream#tags}

---

### CloudwatchMetricStreamExcludeFilters <a name="CloudwatchMetricStreamExcludeFilters" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchMetricStreamExcludeFilters {
    string[] MetricNames = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilters.property.metricNames">MetricNames</a></code> | <code>string[]</code> | Only metrics with MetricNames matching these values will be streamed. Must be set together with Namespace. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilters.property.namespace">Namespace</a></code> | <code>string</code> | Only metrics with Namespace matching this value will be streamed. |

---

##### `MetricNames`<sup>Optional</sup> <a name="MetricNames" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilters.property.metricNames"></a>

```csharp
public string[] MetricNames { get; set; }
```

- *Type:* string[]

Only metrics with MetricNames matching these values will be streamed. Must be set together with Namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_metric_stream#metric_names CloudwatchMetricStream#metric_names}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilters.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Only metrics with Namespace matching this value will be streamed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_metric_stream#namespace CloudwatchMetricStream#namespace}

---

### CloudwatchMetricStreamIncludeFilters <a name="CloudwatchMetricStreamIncludeFilters" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchMetricStreamIncludeFilters {
    string[] MetricNames = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilters.property.metricNames">MetricNames</a></code> | <code>string[]</code> | Only metrics with MetricNames matching these values will be streamed. Must be set together with Namespace. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilters.property.namespace">Namespace</a></code> | <code>string</code> | Only metrics with Namespace matching this value will be streamed. |

---

##### `MetricNames`<sup>Optional</sup> <a name="MetricNames" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilters.property.metricNames"></a>

```csharp
public string[] MetricNames { get; set; }
```

- *Type:* string[]

Only metrics with MetricNames matching these values will be streamed. Must be set together with Namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_metric_stream#metric_names CloudwatchMetricStream#metric_names}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilters.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Only metrics with Namespace matching this value will be streamed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_metric_stream#namespace CloudwatchMetricStream#namespace}

---

### CloudwatchMetricStreamStatisticsConfigurations <a name="CloudwatchMetricStreamStatisticsConfigurations" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchMetricStreamStatisticsConfigurations {
    string[] AdditionalStatistics = null,
    IResolvable|CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics[] IncludeMetrics = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurations.property.additionalStatistics">AdditionalStatistics</a></code> | <code>string[]</code> | The additional statistics to stream for the metrics listed in IncludeMetrics. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurations.property.includeMetrics">IncludeMetrics</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics">CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics</a>[]</code> | An array that defines the metrics that are to have additional statistics streamed. |

---

##### `AdditionalStatistics`<sup>Optional</sup> <a name="AdditionalStatistics" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurations.property.additionalStatistics"></a>

```csharp
public string[] AdditionalStatistics { get; set; }
```

- *Type:* string[]

The additional statistics to stream for the metrics listed in IncludeMetrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_metric_stream#additional_statistics CloudwatchMetricStream#additional_statistics}

---

##### `IncludeMetrics`<sup>Optional</sup> <a name="IncludeMetrics" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurations.property.includeMetrics"></a>

```csharp
public IResolvable|CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics[] IncludeMetrics { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics">CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics</a>[]

An array that defines the metrics that are to have additional statistics streamed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_metric_stream#include_metrics CloudwatchMetricStream#include_metrics}

---

### CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics <a name="CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics {
    string MetricName = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics.property.metricName">MetricName</a></code> | <code>string</code> | The name of the metric. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics.property.namespace">Namespace</a></code> | <code>string</code> | The namespace of the metric. |

---

##### `MetricName`<sup>Optional</sup> <a name="MetricName" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics.property.metricName"></a>

```csharp
public string MetricName { get; set; }
```

- *Type:* string

The name of the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_metric_stream#metric_name CloudwatchMetricStream#metric_name}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

The namespace of the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_metric_stream#namespace CloudwatchMetricStream#namespace}

---

### CloudwatchMetricStreamTags <a name="CloudwatchMetricStreamTags" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchMetricStreamTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTags.property.key">Key</a></code> | <code>string</code> | A unique identifier for the tag. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTags.property.value">Value</a></code> | <code>string</code> | String which you can use to describe or define the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

A unique identifier for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_metric_stream#key CloudwatchMetricStream#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

String which you can use to describe or define the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_metric_stream#value CloudwatchMetricStream#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchMetricStreamExcludeFiltersList <a name="CloudwatchMetricStreamExcludeFiltersList" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchMetricStreamExcludeFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.get"></a>

```csharp
private CloudwatchMetricStreamExcludeFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilters">CloudwatchMetricStreamExcludeFilters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchMetricStreamExcludeFilters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilters">CloudwatchMetricStreamExcludeFilters</a>[]

---


### CloudwatchMetricStreamExcludeFiltersOutputReference <a name="CloudwatchMetricStreamExcludeFiltersOutputReference" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchMetricStreamExcludeFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.resetMetricNames">ResetMetricNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricNames` <a name="ResetMetricNames" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.resetMetricNames"></a>

```csharp
private void ResetMetricNames()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.property.metricNamesInput">MetricNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.property.metricNames">MetricNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilters">CloudwatchMetricStreamExcludeFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricNamesInput`<sup>Optional</sup> <a name="MetricNamesInput" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.property.metricNamesInput"></a>

```csharp
public string[] MetricNamesInput { get; }
```

- *Type:* string[]

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `MetricNames`<sup>Required</sup> <a name="MetricNames" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.property.metricNames"></a>

```csharp
public string[] MetricNames { get; }
```

- *Type:* string[]

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchMetricStreamExcludeFilters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilters">CloudwatchMetricStreamExcludeFilters</a>

---


### CloudwatchMetricStreamIncludeFiltersList <a name="CloudwatchMetricStreamIncludeFiltersList" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchMetricStreamIncludeFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.get"></a>

```csharp
private CloudwatchMetricStreamIncludeFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilters">CloudwatchMetricStreamIncludeFilters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchMetricStreamIncludeFilters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilters">CloudwatchMetricStreamIncludeFilters</a>[]

---


### CloudwatchMetricStreamIncludeFiltersOutputReference <a name="CloudwatchMetricStreamIncludeFiltersOutputReference" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchMetricStreamIncludeFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.resetMetricNames">ResetMetricNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricNames` <a name="ResetMetricNames" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.resetMetricNames"></a>

```csharp
private void ResetMetricNames()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.property.metricNamesInput">MetricNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.property.metricNames">MetricNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilters">CloudwatchMetricStreamIncludeFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricNamesInput`<sup>Optional</sup> <a name="MetricNamesInput" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.property.metricNamesInput"></a>

```csharp
public string[] MetricNamesInput { get; }
```

- *Type:* string[]

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `MetricNames`<sup>Required</sup> <a name="MetricNames" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.property.metricNames"></a>

```csharp
public string[] MetricNames { get; }
```

- *Type:* string[]

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchMetricStreamIncludeFilters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilters">CloudwatchMetricStreamIncludeFilters</a>

---


### CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList <a name="CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.get"></a>

```csharp
private CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics">CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics">CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics</a>[]

---


### CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference <a name="CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.resetMetricName">ResetMetricName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricName` <a name="ResetMetricName" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.resetMetricName"></a>

```csharp
private void ResetMetricName()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.metricNameInput">MetricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.metricName">MetricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics">CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricNameInput`<sup>Optional</sup> <a name="MetricNameInput" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.metricNameInput"></a>

```csharp
public string MetricNameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.metricName"></a>

```csharp
public string MetricName { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics">CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics</a>

---


### CloudwatchMetricStreamStatisticsConfigurationsList <a name="CloudwatchMetricStreamStatisticsConfigurationsList" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchMetricStreamStatisticsConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.get"></a>

```csharp
private CloudwatchMetricStreamStatisticsConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurations">CloudwatchMetricStreamStatisticsConfigurations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchMetricStreamStatisticsConfigurations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurations">CloudwatchMetricStreamStatisticsConfigurations</a>[]

---


### CloudwatchMetricStreamStatisticsConfigurationsOutputReference <a name="CloudwatchMetricStreamStatisticsConfigurationsOutputReference" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchMetricStreamStatisticsConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.putIncludeMetrics">PutIncludeMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.resetAdditionalStatistics">ResetAdditionalStatistics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.resetIncludeMetrics">ResetIncludeMetrics</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIncludeMetrics` <a name="PutIncludeMetrics" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.putIncludeMetrics"></a>

```csharp
private void PutIncludeMetrics(IResolvable|CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.putIncludeMetrics.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics">CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics</a>[]

---

##### `ResetAdditionalStatistics` <a name="ResetAdditionalStatistics" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.resetAdditionalStatistics"></a>

```csharp
private void ResetAdditionalStatistics()
```

##### `ResetIncludeMetrics` <a name="ResetIncludeMetrics" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.resetIncludeMetrics"></a>

```csharp
private void ResetIncludeMetrics()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.includeMetrics">IncludeMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList">CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.additionalStatisticsInput">AdditionalStatisticsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.includeMetricsInput">IncludeMetricsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics">CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.additionalStatistics">AdditionalStatistics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurations">CloudwatchMetricStreamStatisticsConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IncludeMetrics`<sup>Required</sup> <a name="IncludeMetrics" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.includeMetrics"></a>

```csharp
public CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList IncludeMetrics { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList">CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList</a>

---

##### `AdditionalStatisticsInput`<sup>Optional</sup> <a name="AdditionalStatisticsInput" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.additionalStatisticsInput"></a>

```csharp
public string[] AdditionalStatisticsInput { get; }
```

- *Type:* string[]

---

##### `IncludeMetricsInput`<sup>Optional</sup> <a name="IncludeMetricsInput" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.includeMetricsInput"></a>

```csharp
public IResolvable|CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics[] IncludeMetricsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics">CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics</a>[]

---

##### `AdditionalStatistics`<sup>Required</sup> <a name="AdditionalStatistics" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.additionalStatistics"></a>

```csharp
public string[] AdditionalStatistics { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchMetricStreamStatisticsConfigurations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurations">CloudwatchMetricStreamStatisticsConfigurations</a>

---


### CloudwatchMetricStreamTagsList <a name="CloudwatchMetricStreamTagsList" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchMetricStreamTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.get"></a>

```csharp
private CloudwatchMetricStreamTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTags">CloudwatchMetricStreamTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchMetricStreamTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTags">CloudwatchMetricStreamTags</a>[]

---


### CloudwatchMetricStreamTagsOutputReference <a name="CloudwatchMetricStreamTagsOutputReference" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchMetricStreamTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTags">CloudwatchMetricStreamTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchMetricStreamTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTags">CloudwatchMetricStreamTags</a>

---



