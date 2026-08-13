# `lambdaEventSourceMapping` Submodule <a name="`lambdaEventSourceMapping` Submodule" id="@cdktn/provider-awscc.lambdaEventSourceMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaEventSourceMapping <a name="LambdaEventSourceMapping" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping awscc_lambda_event_source_mapping}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaEventSourceMapping(Construct Scope, string Id, LambdaEventSourceMappingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig">LambdaEventSourceMappingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig">LambdaEventSourceMappingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putAmazonManagedKafkaEventSourceConfig">PutAmazonManagedKafkaEventSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putDestinationConfig">PutDestinationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putDocumentDbEventSourceConfig">PutDocumentDbEventSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putFilterCriteria">PutFilterCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putLoggingConfig">PutLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putMetricsConfig">PutMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putProvisionedPollerConfig">PutProvisionedPollerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putScalingConfig">PutScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putSelfManagedEventSource">PutSelfManagedEventSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putSelfManagedKafkaEventSourceConfig">PutSelfManagedKafkaEventSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putSourceAccessConfigurations">PutSourceAccessConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetAmazonManagedKafkaEventSourceConfig">ResetAmazonManagedKafkaEventSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetBatchSize">ResetBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetBisectBatchOnFunctionError">ResetBisectBatchOnFunctionError</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetDestinationConfig">ResetDestinationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetDocumentDbEventSourceConfig">ResetDocumentDbEventSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetEventSourceArn">ResetEventSourceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetFilterCriteria">ResetFilterCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetFunctionResponseTypes">ResetFunctionResponseTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetLoggingConfig">ResetLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetMaximumBatchingWindowInSeconds">ResetMaximumBatchingWindowInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetMaximumRecordAgeInSeconds">ResetMaximumRecordAgeInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetMaximumRetryAttempts">ResetMaximumRetryAttempts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetMetricsConfig">ResetMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetParallelizationFactor">ResetParallelizationFactor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetProvisionedPollerConfig">ResetProvisionedPollerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetQueues">ResetQueues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetScalingConfig">ResetScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetSelfManagedEventSource">ResetSelfManagedEventSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetSelfManagedKafkaEventSourceConfig">ResetSelfManagedKafkaEventSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetSourceAccessConfigurations">ResetSourceAccessConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetStartingPosition">ResetStartingPosition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetStartingPositionTimestamp">ResetStartingPositionTimestamp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetTopics">ResetTopics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetTumblingWindowInSeconds">ResetTumblingWindowInSeconds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAmazonManagedKafkaEventSourceConfig` <a name="PutAmazonManagedKafkaEventSourceConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putAmazonManagedKafkaEventSourceConfig"></a>

```csharp
private void PutAmazonManagedKafkaEventSourceConfig(LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putAmazonManagedKafkaEventSourceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig</a>

---

##### `PutDestinationConfig` <a name="PutDestinationConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putDestinationConfig"></a>

```csharp
private void PutDestinationConfig(LambdaEventSourceMappingDestinationConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putDestinationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig">LambdaEventSourceMappingDestinationConfig</a>

---

##### `PutDocumentDbEventSourceConfig` <a name="PutDocumentDbEventSourceConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putDocumentDbEventSourceConfig"></a>

```csharp
private void PutDocumentDbEventSourceConfig(LambdaEventSourceMappingDocumentDbEventSourceConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putDocumentDbEventSourceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig">LambdaEventSourceMappingDocumentDbEventSourceConfig</a>

---

##### `PutFilterCriteria` <a name="PutFilterCriteria" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putFilterCriteria"></a>

```csharp
private void PutFilterCriteria(LambdaEventSourceMappingFilterCriteria Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putFilterCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria">LambdaEventSourceMappingFilterCriteria</a>

---

##### `PutLoggingConfig` <a name="PutLoggingConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putLoggingConfig"></a>

```csharp
private void PutLoggingConfig(LambdaEventSourceMappingLoggingConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfig">LambdaEventSourceMappingLoggingConfig</a>

---

##### `PutMetricsConfig` <a name="PutMetricsConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putMetricsConfig"></a>

```csharp
private void PutMetricsConfig(LambdaEventSourceMappingMetricsConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putMetricsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfig">LambdaEventSourceMappingMetricsConfig</a>

---

##### `PutProvisionedPollerConfig` <a name="PutProvisionedPollerConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putProvisionedPollerConfig"></a>

```csharp
private void PutProvisionedPollerConfig(LambdaEventSourceMappingProvisionedPollerConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putProvisionedPollerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig">LambdaEventSourceMappingProvisionedPollerConfig</a>

---

##### `PutScalingConfig` <a name="PutScalingConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putScalingConfig"></a>

```csharp
private void PutScalingConfig(LambdaEventSourceMappingScalingConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putScalingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig">LambdaEventSourceMappingScalingConfig</a>

---

##### `PutSelfManagedEventSource` <a name="PutSelfManagedEventSource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putSelfManagedEventSource"></a>

```csharp
private void PutSelfManagedEventSource(LambdaEventSourceMappingSelfManagedEventSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putSelfManagedEventSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource">LambdaEventSourceMappingSelfManagedEventSource</a>

---

##### `PutSelfManagedKafkaEventSourceConfig` <a name="PutSelfManagedKafkaEventSourceConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putSelfManagedKafkaEventSourceConfig"></a>

```csharp
private void PutSelfManagedKafkaEventSourceConfig(LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putSelfManagedKafkaEventSourceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig</a>

---

##### `PutSourceAccessConfigurations` <a name="PutSourceAccessConfigurations" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putSourceAccessConfigurations"></a>

```csharp
private void PutSourceAccessConfigurations(IResolvable|LambdaEventSourceMappingSourceAccessConfigurations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putSourceAccessConfigurations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurations">LambdaEventSourceMappingSourceAccessConfigurations</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putTags"></a>

```csharp
private void PutTags(IResolvable|LambdaEventSourceMappingTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTags">LambdaEventSourceMappingTags</a>[]

---

##### `ResetAmazonManagedKafkaEventSourceConfig` <a name="ResetAmazonManagedKafkaEventSourceConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetAmazonManagedKafkaEventSourceConfig"></a>

```csharp
private void ResetAmazonManagedKafkaEventSourceConfig()
```

##### `ResetBatchSize` <a name="ResetBatchSize" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetBatchSize"></a>

```csharp
private void ResetBatchSize()
```

##### `ResetBisectBatchOnFunctionError` <a name="ResetBisectBatchOnFunctionError" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetBisectBatchOnFunctionError"></a>

```csharp
private void ResetBisectBatchOnFunctionError()
```

##### `ResetDestinationConfig` <a name="ResetDestinationConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetDestinationConfig"></a>

```csharp
private void ResetDestinationConfig()
```

##### `ResetDocumentDbEventSourceConfig` <a name="ResetDocumentDbEventSourceConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetDocumentDbEventSourceConfig"></a>

```csharp
private void ResetDocumentDbEventSourceConfig()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetEventSourceArn` <a name="ResetEventSourceArn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetEventSourceArn"></a>

```csharp
private void ResetEventSourceArn()
```

##### `ResetFilterCriteria` <a name="ResetFilterCriteria" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetFilterCriteria"></a>

```csharp
private void ResetFilterCriteria()
```

##### `ResetFunctionResponseTypes` <a name="ResetFunctionResponseTypes" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetFunctionResponseTypes"></a>

```csharp
private void ResetFunctionResponseTypes()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```

##### `ResetLoggingConfig` <a name="ResetLoggingConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetLoggingConfig"></a>

```csharp
private void ResetLoggingConfig()
```

##### `ResetMaximumBatchingWindowInSeconds` <a name="ResetMaximumBatchingWindowInSeconds" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetMaximumBatchingWindowInSeconds"></a>

```csharp
private void ResetMaximumBatchingWindowInSeconds()
```

##### `ResetMaximumRecordAgeInSeconds` <a name="ResetMaximumRecordAgeInSeconds" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetMaximumRecordAgeInSeconds"></a>

```csharp
private void ResetMaximumRecordAgeInSeconds()
```

##### `ResetMaximumRetryAttempts` <a name="ResetMaximumRetryAttempts" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetMaximumRetryAttempts"></a>

```csharp
private void ResetMaximumRetryAttempts()
```

##### `ResetMetricsConfig` <a name="ResetMetricsConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetMetricsConfig"></a>

```csharp
private void ResetMetricsConfig()
```

##### `ResetParallelizationFactor` <a name="ResetParallelizationFactor" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetParallelizationFactor"></a>

```csharp
private void ResetParallelizationFactor()
```

##### `ResetProvisionedPollerConfig` <a name="ResetProvisionedPollerConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetProvisionedPollerConfig"></a>

```csharp
private void ResetProvisionedPollerConfig()
```

##### `ResetQueues` <a name="ResetQueues" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetQueues"></a>

```csharp
private void ResetQueues()
```

##### `ResetScalingConfig` <a name="ResetScalingConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetScalingConfig"></a>

```csharp
private void ResetScalingConfig()
```

##### `ResetSelfManagedEventSource` <a name="ResetSelfManagedEventSource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetSelfManagedEventSource"></a>

```csharp
private void ResetSelfManagedEventSource()
```

##### `ResetSelfManagedKafkaEventSourceConfig` <a name="ResetSelfManagedKafkaEventSourceConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetSelfManagedKafkaEventSourceConfig"></a>

```csharp
private void ResetSelfManagedKafkaEventSourceConfig()
```

##### `ResetSourceAccessConfigurations` <a name="ResetSourceAccessConfigurations" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetSourceAccessConfigurations"></a>

```csharp
private void ResetSourceAccessConfigurations()
```

##### `ResetStartingPosition` <a name="ResetStartingPosition" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetStartingPosition"></a>

```csharp
private void ResetStartingPosition()
```

##### `ResetStartingPositionTimestamp` <a name="ResetStartingPositionTimestamp" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetStartingPositionTimestamp"></a>

```csharp
private void ResetStartingPositionTimestamp()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTopics` <a name="ResetTopics" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetTopics"></a>

```csharp
private void ResetTopics()
```

##### `ResetTumblingWindowInSeconds` <a name="ResetTumblingWindowInSeconds" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.resetTumblingWindowInSeconds"></a>

```csharp
private void ResetTumblingWindowInSeconds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LambdaEventSourceMapping resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LambdaEventSourceMapping.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LambdaEventSourceMapping.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LambdaEventSourceMapping.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LambdaEventSourceMapping.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a LambdaEventSourceMapping resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LambdaEventSourceMapping to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LambdaEventSourceMapping that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the LambdaEventSourceMapping to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.amazonManagedKafkaEventSourceConfig">AmazonManagedKafkaEventSourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.destinationConfig">DestinationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference">LambdaEventSourceMappingDestinationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.documentDbEventSourceConfig">DocumentDbEventSourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference">LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.eventSourceMappingArn">EventSourceMappingArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.eventSourceMappingId">EventSourceMappingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.filterCriteria">FilterCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference">LambdaEventSourceMappingFilterCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference">LambdaEventSourceMappingLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.metricsConfig">MetricsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference">LambdaEventSourceMappingMetricsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.provisionedPollerConfig">ProvisionedPollerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference">LambdaEventSourceMappingProvisionedPollerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.scalingConfig">ScalingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference">LambdaEventSourceMappingScalingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.selfManagedEventSource">SelfManagedEventSource</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference">LambdaEventSourceMappingSelfManagedEventSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.selfManagedKafkaEventSourceConfig">SelfManagedKafkaEventSourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.sourceAccessConfigurations">SourceAccessConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsList">LambdaEventSourceMappingSourceAccessConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsList">LambdaEventSourceMappingTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.amazonManagedKafkaEventSourceConfigInput">AmazonManagedKafkaEventSourceConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.batchSizeInput">BatchSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.bisectBatchOnFunctionErrorInput">BisectBatchOnFunctionErrorInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.destinationConfigInput">DestinationConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig">LambdaEventSourceMappingDestinationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.documentDbEventSourceConfigInput">DocumentDbEventSourceConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig">LambdaEventSourceMappingDocumentDbEventSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.eventSourceArnInput">EventSourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.filterCriteriaInput">FilterCriteriaInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria">LambdaEventSourceMappingFilterCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.functionNameInput">FunctionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.functionResponseTypesInput">FunctionResponseTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.loggingConfigInput">LoggingConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfig">LambdaEventSourceMappingLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.maximumBatchingWindowInSecondsInput">MaximumBatchingWindowInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.maximumRecordAgeInSecondsInput">MaximumRecordAgeInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.maximumRetryAttemptsInput">MaximumRetryAttemptsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.metricsConfigInput">MetricsConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfig">LambdaEventSourceMappingMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.parallelizationFactorInput">ParallelizationFactorInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.provisionedPollerConfigInput">ProvisionedPollerConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig">LambdaEventSourceMappingProvisionedPollerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.queuesInput">QueuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.scalingConfigInput">ScalingConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig">LambdaEventSourceMappingScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.selfManagedEventSourceInput">SelfManagedEventSourceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource">LambdaEventSourceMappingSelfManagedEventSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.selfManagedKafkaEventSourceConfigInput">SelfManagedKafkaEventSourceConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.sourceAccessConfigurationsInput">SourceAccessConfigurationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurations">LambdaEventSourceMappingSourceAccessConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.startingPositionInput">StartingPositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.startingPositionTimestampInput">StartingPositionTimestampInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTags">LambdaEventSourceMappingTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.topicsInput">TopicsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.tumblingWindowInSecondsInput">TumblingWindowInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.batchSize">BatchSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.bisectBatchOnFunctionError">BisectBatchOnFunctionError</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.eventSourceArn">EventSourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.functionName">FunctionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.functionResponseTypes">FunctionResponseTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.maximumBatchingWindowInSeconds">MaximumBatchingWindowInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.maximumRecordAgeInSeconds">MaximumRecordAgeInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.maximumRetryAttempts">MaximumRetryAttempts</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.parallelizationFactor">ParallelizationFactor</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.queues">Queues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.startingPosition">StartingPosition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.startingPositionTimestamp">StartingPositionTimestamp</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.topics">Topics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.tumblingWindowInSeconds">TumblingWindowInSeconds</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AmazonManagedKafkaEventSourceConfig`<sup>Required</sup> <a name="AmazonManagedKafkaEventSourceConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.amazonManagedKafkaEventSourceConfig"></a>

```csharp
public LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference AmazonManagedKafkaEventSourceConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference</a>

---

##### `DestinationConfig`<sup>Required</sup> <a name="DestinationConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.destinationConfig"></a>

```csharp
public LambdaEventSourceMappingDestinationConfigOutputReference DestinationConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference">LambdaEventSourceMappingDestinationConfigOutputReference</a>

---

##### `DocumentDbEventSourceConfig`<sup>Required</sup> <a name="DocumentDbEventSourceConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.documentDbEventSourceConfig"></a>

```csharp
public LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference DocumentDbEventSourceConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference">LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference</a>

---

##### `EventSourceMappingArn`<sup>Required</sup> <a name="EventSourceMappingArn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.eventSourceMappingArn"></a>

```csharp
public string EventSourceMappingArn { get; }
```

- *Type:* string

---

##### `EventSourceMappingId`<sup>Required</sup> <a name="EventSourceMappingId" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.eventSourceMappingId"></a>

```csharp
public string EventSourceMappingId { get; }
```

- *Type:* string

---

##### `FilterCriteria`<sup>Required</sup> <a name="FilterCriteria" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.filterCriteria"></a>

```csharp
public LambdaEventSourceMappingFilterCriteriaOutputReference FilterCriteria { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference">LambdaEventSourceMappingFilterCriteriaOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LoggingConfig`<sup>Required</sup> <a name="LoggingConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.loggingConfig"></a>

```csharp
public LambdaEventSourceMappingLoggingConfigOutputReference LoggingConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference">LambdaEventSourceMappingLoggingConfigOutputReference</a>

---

##### `MetricsConfig`<sup>Required</sup> <a name="MetricsConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.metricsConfig"></a>

```csharp
public LambdaEventSourceMappingMetricsConfigOutputReference MetricsConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference">LambdaEventSourceMappingMetricsConfigOutputReference</a>

---

##### `ProvisionedPollerConfig`<sup>Required</sup> <a name="ProvisionedPollerConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.provisionedPollerConfig"></a>

```csharp
public LambdaEventSourceMappingProvisionedPollerConfigOutputReference ProvisionedPollerConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference">LambdaEventSourceMappingProvisionedPollerConfigOutputReference</a>

---

##### `ScalingConfig`<sup>Required</sup> <a name="ScalingConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.scalingConfig"></a>

```csharp
public LambdaEventSourceMappingScalingConfigOutputReference ScalingConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference">LambdaEventSourceMappingScalingConfigOutputReference</a>

---

##### `SelfManagedEventSource`<sup>Required</sup> <a name="SelfManagedEventSource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.selfManagedEventSource"></a>

```csharp
public LambdaEventSourceMappingSelfManagedEventSourceOutputReference SelfManagedEventSource { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference">LambdaEventSourceMappingSelfManagedEventSourceOutputReference</a>

---

##### `SelfManagedKafkaEventSourceConfig`<sup>Required</sup> <a name="SelfManagedKafkaEventSourceConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.selfManagedKafkaEventSourceConfig"></a>

```csharp
public LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference SelfManagedKafkaEventSourceConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference</a>

---

##### `SourceAccessConfigurations`<sup>Required</sup> <a name="SourceAccessConfigurations" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.sourceAccessConfigurations"></a>

```csharp
public LambdaEventSourceMappingSourceAccessConfigurationsList SourceAccessConfigurations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsList">LambdaEventSourceMappingSourceAccessConfigurationsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.tags"></a>

```csharp
public LambdaEventSourceMappingTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsList">LambdaEventSourceMappingTagsList</a>

---

##### `AmazonManagedKafkaEventSourceConfigInput`<sup>Optional</sup> <a name="AmazonManagedKafkaEventSourceConfigInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.amazonManagedKafkaEventSourceConfigInput"></a>

```csharp
public IResolvable|LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig AmazonManagedKafkaEventSourceConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig</a>

---

##### `BatchSizeInput`<sup>Optional</sup> <a name="BatchSizeInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.batchSizeInput"></a>

```csharp
public double BatchSizeInput { get; }
```

- *Type:* double

---

##### `BisectBatchOnFunctionErrorInput`<sup>Optional</sup> <a name="BisectBatchOnFunctionErrorInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.bisectBatchOnFunctionErrorInput"></a>

```csharp
public bool|IResolvable BisectBatchOnFunctionErrorInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DestinationConfigInput`<sup>Optional</sup> <a name="DestinationConfigInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.destinationConfigInput"></a>

```csharp
public IResolvable|LambdaEventSourceMappingDestinationConfig DestinationConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig">LambdaEventSourceMappingDestinationConfig</a>

---

##### `DocumentDbEventSourceConfigInput`<sup>Optional</sup> <a name="DocumentDbEventSourceConfigInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.documentDbEventSourceConfigInput"></a>

```csharp
public IResolvable|LambdaEventSourceMappingDocumentDbEventSourceConfig DocumentDbEventSourceConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig">LambdaEventSourceMappingDocumentDbEventSourceConfig</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EventSourceArnInput`<sup>Optional</sup> <a name="EventSourceArnInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.eventSourceArnInput"></a>

```csharp
public string EventSourceArnInput { get; }
```

- *Type:* string

---

##### `FilterCriteriaInput`<sup>Optional</sup> <a name="FilterCriteriaInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.filterCriteriaInput"></a>

```csharp
public IResolvable|LambdaEventSourceMappingFilterCriteria FilterCriteriaInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria">LambdaEventSourceMappingFilterCriteria</a>

---

##### `FunctionNameInput`<sup>Optional</sup> <a name="FunctionNameInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.functionNameInput"></a>

```csharp
public string FunctionNameInput { get; }
```

- *Type:* string

---

##### `FunctionResponseTypesInput`<sup>Optional</sup> <a name="FunctionResponseTypesInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.functionResponseTypesInput"></a>

```csharp
public string[] FunctionResponseTypesInput { get; }
```

- *Type:* string[]

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `LoggingConfigInput`<sup>Optional</sup> <a name="LoggingConfigInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.loggingConfigInput"></a>

```csharp
public IResolvable|LambdaEventSourceMappingLoggingConfig LoggingConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfig">LambdaEventSourceMappingLoggingConfig</a>

---

##### `MaximumBatchingWindowInSecondsInput`<sup>Optional</sup> <a name="MaximumBatchingWindowInSecondsInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.maximumBatchingWindowInSecondsInput"></a>

```csharp
public double MaximumBatchingWindowInSecondsInput { get; }
```

- *Type:* double

---

##### `MaximumRecordAgeInSecondsInput`<sup>Optional</sup> <a name="MaximumRecordAgeInSecondsInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.maximumRecordAgeInSecondsInput"></a>

```csharp
public double MaximumRecordAgeInSecondsInput { get; }
```

- *Type:* double

---

##### `MaximumRetryAttemptsInput`<sup>Optional</sup> <a name="MaximumRetryAttemptsInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.maximumRetryAttemptsInput"></a>

```csharp
public double MaximumRetryAttemptsInput { get; }
```

- *Type:* double

---

##### `MetricsConfigInput`<sup>Optional</sup> <a name="MetricsConfigInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.metricsConfigInput"></a>

```csharp
public IResolvable|LambdaEventSourceMappingMetricsConfig MetricsConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfig">LambdaEventSourceMappingMetricsConfig</a>

---

##### `ParallelizationFactorInput`<sup>Optional</sup> <a name="ParallelizationFactorInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.parallelizationFactorInput"></a>

```csharp
public double ParallelizationFactorInput { get; }
```

- *Type:* double

---

##### `ProvisionedPollerConfigInput`<sup>Optional</sup> <a name="ProvisionedPollerConfigInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.provisionedPollerConfigInput"></a>

```csharp
public IResolvable|LambdaEventSourceMappingProvisionedPollerConfig ProvisionedPollerConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig">LambdaEventSourceMappingProvisionedPollerConfig</a>

---

##### `QueuesInput`<sup>Optional</sup> <a name="QueuesInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.queuesInput"></a>

```csharp
public string[] QueuesInput { get; }
```

- *Type:* string[]

---

##### `ScalingConfigInput`<sup>Optional</sup> <a name="ScalingConfigInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.scalingConfigInput"></a>

```csharp
public IResolvable|LambdaEventSourceMappingScalingConfig ScalingConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig">LambdaEventSourceMappingScalingConfig</a>

---

##### `SelfManagedEventSourceInput`<sup>Optional</sup> <a name="SelfManagedEventSourceInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.selfManagedEventSourceInput"></a>

```csharp
public IResolvable|LambdaEventSourceMappingSelfManagedEventSource SelfManagedEventSourceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource">LambdaEventSourceMappingSelfManagedEventSource</a>

---

##### `SelfManagedKafkaEventSourceConfigInput`<sup>Optional</sup> <a name="SelfManagedKafkaEventSourceConfigInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.selfManagedKafkaEventSourceConfigInput"></a>

```csharp
public IResolvable|LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig SelfManagedKafkaEventSourceConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig</a>

---

##### `SourceAccessConfigurationsInput`<sup>Optional</sup> <a name="SourceAccessConfigurationsInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.sourceAccessConfigurationsInput"></a>

```csharp
public IResolvable|LambdaEventSourceMappingSourceAccessConfigurations[] SourceAccessConfigurationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurations">LambdaEventSourceMappingSourceAccessConfigurations</a>[]

---

##### `StartingPositionInput`<sup>Optional</sup> <a name="StartingPositionInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.startingPositionInput"></a>

```csharp
public string StartingPositionInput { get; }
```

- *Type:* string

---

##### `StartingPositionTimestampInput`<sup>Optional</sup> <a name="StartingPositionTimestampInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.startingPositionTimestampInput"></a>

```csharp
public double StartingPositionTimestampInput { get; }
```

- *Type:* double

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.tagsInput"></a>

```csharp
public IResolvable|LambdaEventSourceMappingTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTags">LambdaEventSourceMappingTags</a>[]

---

##### `TopicsInput`<sup>Optional</sup> <a name="TopicsInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.topicsInput"></a>

```csharp
public string[] TopicsInput { get; }
```

- *Type:* string[]

---

##### `TumblingWindowInSecondsInput`<sup>Optional</sup> <a name="TumblingWindowInSecondsInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.tumblingWindowInSecondsInput"></a>

```csharp
public double TumblingWindowInSecondsInput { get; }
```

- *Type:* double

---

##### `BatchSize`<sup>Required</sup> <a name="BatchSize" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.batchSize"></a>

```csharp
public double BatchSize { get; }
```

- *Type:* double

---

##### `BisectBatchOnFunctionError`<sup>Required</sup> <a name="BisectBatchOnFunctionError" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.bisectBatchOnFunctionError"></a>

```csharp
public bool|IResolvable BisectBatchOnFunctionError { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EventSourceArn`<sup>Required</sup> <a name="EventSourceArn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.eventSourceArn"></a>

```csharp
public string EventSourceArn { get; }
```

- *Type:* string

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.functionName"></a>

```csharp
public string FunctionName { get; }
```

- *Type:* string

---

##### `FunctionResponseTypes`<sup>Required</sup> <a name="FunctionResponseTypes" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.functionResponseTypes"></a>

```csharp
public string[] FunctionResponseTypes { get; }
```

- *Type:* string[]

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `MaximumBatchingWindowInSeconds`<sup>Required</sup> <a name="MaximumBatchingWindowInSeconds" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.maximumBatchingWindowInSeconds"></a>

```csharp
public double MaximumBatchingWindowInSeconds { get; }
```

- *Type:* double

---

##### `MaximumRecordAgeInSeconds`<sup>Required</sup> <a name="MaximumRecordAgeInSeconds" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.maximumRecordAgeInSeconds"></a>

```csharp
public double MaximumRecordAgeInSeconds { get; }
```

- *Type:* double

---

##### `MaximumRetryAttempts`<sup>Required</sup> <a name="MaximumRetryAttempts" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.maximumRetryAttempts"></a>

```csharp
public double MaximumRetryAttempts { get; }
```

- *Type:* double

---

##### `ParallelizationFactor`<sup>Required</sup> <a name="ParallelizationFactor" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.parallelizationFactor"></a>

```csharp
public double ParallelizationFactor { get; }
```

- *Type:* double

---

##### `Queues`<sup>Required</sup> <a name="Queues" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.queues"></a>

```csharp
public string[] Queues { get; }
```

- *Type:* string[]

---

##### `StartingPosition`<sup>Required</sup> <a name="StartingPosition" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.startingPosition"></a>

```csharp
public string StartingPosition { get; }
```

- *Type:* string

---

##### `StartingPositionTimestamp`<sup>Required</sup> <a name="StartingPositionTimestamp" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.startingPositionTimestamp"></a>

```csharp
public double StartingPositionTimestamp { get; }
```

- *Type:* double

---

##### `Topics`<sup>Required</sup> <a name="Topics" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.topics"></a>

```csharp
public string[] Topics { get; }
```

- *Type:* string[]

---

##### `TumblingWindowInSeconds`<sup>Required</sup> <a name="TumblingWindowInSeconds" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.tumblingWindowInSeconds"></a>

```csharp
public double TumblingWindowInSeconds { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMapping.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig <a name="LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig {
    string ConsumerGroupId = null,
    LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig SchemaRegistryConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig.property.consumerGroupId">ConsumerGroupId</a></code> | <code>string</code> | The identifier for the Kafka consumer group to join. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig.property.schemaRegistryConfig">SchemaRegistryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig</a></code> | Specific configuration settings for a Kafka schema registry. |

---

##### `ConsumerGroupId`<sup>Optional</sup> <a name="ConsumerGroupId" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig.property.consumerGroupId"></a>

```csharp
public string ConsumerGroupId { get; set; }
```

- *Type:* string

The identifier for the Kafka consumer group to join.

The consumer group ID must be unique among all your Kafka event sources. After creating a Kafka event source mapping with the consumer group ID specified, you cannot update this value. For more information, see [Customizable consumer group ID](https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-consumer-group-id).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#consumer_group_id LambdaEventSourceMapping#consumer_group_id}

---

##### `SchemaRegistryConfig`<sup>Optional</sup> <a name="SchemaRegistryConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig.property.schemaRegistryConfig"></a>

```csharp
public LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig SchemaRegistryConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig</a>

Specific configuration settings for a Kafka schema registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#schema_registry_config LambdaEventSourceMapping#schema_registry_config}

---

### LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig <a name="LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig {
    IResolvable|LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs[] AccessConfigs = null,
    string EventRecordFormat = null,
    string SchemaRegistryUri = null,
    IResolvable|LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs[] SchemaValidationConfigs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig.property.accessConfigs">AccessConfigs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs</a>[]</code> | An array of access configuration objects that tell Lambda how to authenticate with your schema registry. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig.property.eventRecordFormat">EventRecordFormat</a></code> | <code>string</code> | The record format that Lambda delivers to your function after schema validation. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig.property.schemaRegistryUri">SchemaRegistryUri</a></code> | <code>string</code> | The URI for your schema registry. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig.property.schemaValidationConfigs">SchemaValidationConfigs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs</a>[]</code> | An array of schema validation configuration objects, which tell Lambda the message attributes you want to validate and filter using your schema registry. |

---

##### `AccessConfigs`<sup>Optional</sup> <a name="AccessConfigs" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig.property.accessConfigs"></a>

```csharp
public IResolvable|LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs[] AccessConfigs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs</a>[]

An array of access configuration objects that tell Lambda how to authenticate with your schema registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#access_configs LambdaEventSourceMapping#access_configs}

---

##### `EventRecordFormat`<sup>Optional</sup> <a name="EventRecordFormat" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig.property.eventRecordFormat"></a>

```csharp
public string EventRecordFormat { get; set; }
```

- *Type:* string

The record format that Lambda delivers to your function after schema validation.

* Choose `JSON` to have Lambda deliver the record to your function as a standard JSON object.
* Choose `SOURCE` to have Lambda deliver the record to your function in its original source format. Lambda removes all schema metadata, such as the schema ID, before sending the record to your function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#event_record_format LambdaEventSourceMapping#event_record_format}

---

##### `SchemaRegistryUri`<sup>Optional</sup> <a name="SchemaRegistryUri" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig.property.schemaRegistryUri"></a>

```csharp
public string SchemaRegistryUri { get; set; }
```

- *Type:* string

The URI for your schema registry.

The correct URI format depends on the type of schema registry you're using.

* For GLU schema registries, use the ARN of the registry.
* For Confluent schema registries, use the URL of the registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#schema_registry_uri LambdaEventSourceMapping#schema_registry_uri}

---

##### `SchemaValidationConfigs`<sup>Optional</sup> <a name="SchemaValidationConfigs" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig.property.schemaValidationConfigs"></a>

```csharp
public IResolvable|LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs[] SchemaValidationConfigs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs</a>[]

An array of schema validation configuration objects, which tell Lambda the message attributes you want to validate and filter using your schema registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#schema_validation_configs LambdaEventSourceMapping#schema_validation_configs}

---

### LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs <a name="LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs {
    string Type = null,
    string Uri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs.property.type">Type</a></code> | <code>string</code> | The type of authentication Lambda uses to access your schema registry. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs.property.uri">Uri</a></code> | <code>string</code> | The URI of the secret (Secrets Manager secret ARN) to authenticate with your schema registry. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of authentication Lambda uses to access your schema registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#type LambdaEventSourceMapping#type}

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

The URI of the secret (Secrets Manager secret ARN) to authenticate with your schema registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#uri LambdaEventSourceMapping#uri}

---

### LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs <a name="LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs {
    string Attribute = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs.property.attribute">Attribute</a></code> | <code>string</code> | The attributes you want your schema registry to validate and filter for. |

---

##### `Attribute`<sup>Optional</sup> <a name="Attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs.property.attribute"></a>

```csharp
public string Attribute { get; set; }
```

- *Type:* string

The attributes you want your schema registry to validate and filter for.

If you selected `JSON` as the `EventRecordFormat`, Lambda also deserializes the selected message attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#attribute LambdaEventSourceMapping#attribute}

---

### LambdaEventSourceMappingConfig <a name="LambdaEventSourceMappingConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaEventSourceMappingConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string FunctionName,
    LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig AmazonManagedKafkaEventSourceConfig = null,
    double BatchSize = null,
    bool|IResolvable BisectBatchOnFunctionError = null,
    LambdaEventSourceMappingDestinationConfig DestinationConfig = null,
    LambdaEventSourceMappingDocumentDbEventSourceConfig DocumentDbEventSourceConfig = null,
    bool|IResolvable Enabled = null,
    string EventSourceArn = null,
    LambdaEventSourceMappingFilterCriteria FilterCriteria = null,
    string[] FunctionResponseTypes = null,
    string KmsKeyArn = null,
    LambdaEventSourceMappingLoggingConfig LoggingConfig = null,
    double MaximumBatchingWindowInSeconds = null,
    double MaximumRecordAgeInSeconds = null,
    double MaximumRetryAttempts = null,
    LambdaEventSourceMappingMetricsConfig MetricsConfig = null,
    double ParallelizationFactor = null,
    LambdaEventSourceMappingProvisionedPollerConfig ProvisionedPollerConfig = null,
    string[] Queues = null,
    LambdaEventSourceMappingScalingConfig ScalingConfig = null,
    LambdaEventSourceMappingSelfManagedEventSource SelfManagedEventSource = null,
    LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig SelfManagedKafkaEventSourceConfig = null,
    IResolvable|LambdaEventSourceMappingSourceAccessConfigurations[] SourceAccessConfigurations = null,
    string StartingPosition = null,
    double StartingPositionTimestamp = null,
    IResolvable|LambdaEventSourceMappingTags[] Tags = null,
    string[] Topics = null,
    double TumblingWindowInSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.functionName">FunctionName</a></code> | <code>string</code> | The name or ARN of the Lambda function. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.amazonManagedKafkaEventSourceConfig">AmazonManagedKafkaEventSourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig</a></code> | Specific configuration settings for an Amazon Managed Streaming for Apache Kafka (Amazon MSK) event source. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.batchSize">BatchSize</a></code> | <code>double</code> | The maximum number of records in each batch that Lambda pulls from your stream or queue and sends to your function. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.bisectBatchOnFunctionError">BisectBatchOnFunctionError</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | (Kinesis and DynamoDB Streams only) If the function returns an error, split the batch in two and retry. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.destinationConfig">DestinationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig">LambdaEventSourceMappingDestinationConfig</a></code> | (Kinesis, DynamoDB Streams, Amazon MSK, and self-managed Apache Kafka) A configuration object that specifies the destination of an event after Lambda processes it. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.documentDbEventSourceConfig">DocumentDbEventSourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig">LambdaEventSourceMappingDocumentDbEventSourceConfig</a></code> | Specific configuration settings for a DocumentDB event source. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When true, the event source mapping is active. When false, Lambda pauses polling and invocation.  Default: True. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.eventSourceArn">EventSourceArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the event source. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.filterCriteria">FilterCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria">LambdaEventSourceMappingFilterCriteria</a></code> | An object that defines the filter criteria that determine whether Lambda should process an event. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.functionResponseTypes">FunctionResponseTypes</a></code> | <code>string[]</code> | (Kinesis, DynamoDB Streams, and SQS) A list of current response type enums applied to the event source mapping. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | The ARN of the KMSlong (KMS) customer managed key that Lambda uses to encrypt your function's [filter criteria](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html#filtering-basics). |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfig">LambdaEventSourceMappingLoggingConfig</a></code> | (Amazon MSK, and self-managed Apache Kafka only) The logging configuration for your event source. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.maximumBatchingWindowInSeconds">MaximumBatchingWindowInSeconds</a></code> | <code>double</code> | The maximum amount of time, in seconds, that Lambda spends gathering records before invoking the function. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.maximumRecordAgeInSeconds">MaximumRecordAgeInSeconds</a></code> | <code>double</code> | (Kinesis, DynamoDB Streams, Amazon MSK, and self-managed Apache Kafka) Discard records older than the specified age. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.maximumRetryAttempts">MaximumRetryAttempts</a></code> | <code>double</code> | (Kinesis, DynamoDB Streams, Amazon MSK, and self-managed Apache Kafka) Discard records after the specified number of retries. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.metricsConfig">MetricsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfig">LambdaEventSourceMappingMetricsConfig</a></code> | The metrics configuration for your event source. For more information, see [Event source mapping metrics](https://docs.aws.amazon.com/lambda/latest/dg/monitoring-metrics-types.html#event-source-mapping-metrics). |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.parallelizationFactor">ParallelizationFactor</a></code> | <code>double</code> | (Kinesis and DynamoDB Streams only) The number of batches to process concurrently from each shard. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.provisionedPollerConfig">ProvisionedPollerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig">LambdaEventSourceMappingProvisionedPollerConfig</a></code> | (Amazon SQS, Amazon MSK, and self-managed Apache Kafka only) The provisioned mode configuration for the event source. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.queues">Queues</a></code> | <code>string[]</code> | (Amazon MQ) The name of the Amazon MQ broker destination queue to consume. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.scalingConfig">ScalingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig">LambdaEventSourceMappingScalingConfig</a></code> | This property is for Amazon SQS event sources only. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.selfManagedEventSource">SelfManagedEventSource</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource">LambdaEventSourceMappingSelfManagedEventSource</a></code> | The self-managed Apache Kafka cluster for your event source. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.selfManagedKafkaEventSourceConfig">SelfManagedKafkaEventSourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig</a></code> | Specific configuration settings for a self-managed Apache Kafka event source. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.sourceAccessConfigurations">SourceAccessConfigurations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurations">LambdaEventSourceMappingSourceAccessConfigurations</a>[]</code> | An array of the authentication protocol, VPC components, or virtual host to secure and define your event source. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.startingPosition">StartingPosition</a></code> | <code>string</code> | The position in a stream from which to start reading. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.startingPositionTimestamp">StartingPositionTimestamp</a></code> | <code>double</code> | With ``StartingPosition`` set to ``AT_TIMESTAMP``, the time from which to start reading, in Unix time seconds. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTags">LambdaEventSourceMappingTags</a>[]</code> | A list of tags to add to the event source mapping. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.topics">Topics</a></code> | <code>string[]</code> | The name of the Kafka topic. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.tumblingWindowInSeconds">TumblingWindowInSeconds</a></code> | <code>double</code> | (Kinesis and DynamoDB Streams only) The duration in seconds of a processing window for DynamoDB and Kinesis Streams event sources. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.functionName"></a>

```csharp
public string FunctionName { get; set; }
```

- *Type:* string

The name or ARN of the Lambda function.

**Name formats**

* *Function name* – `MyFunction`.
* *Function ARN* – `arn:aws:lambda:us-west-2:123456789012:function:MyFunction`.
* *Version or Alias ARN* – `arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD`.
* *Partial ARN* – `123456789012:function:MyFunction`.

The length constraint applies only to the full ARN. If you specify only the function name, it's limited to 64 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#function_name LambdaEventSourceMapping#function_name}

---

##### `AmazonManagedKafkaEventSourceConfig`<sup>Optional</sup> <a name="AmazonManagedKafkaEventSourceConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.amazonManagedKafkaEventSourceConfig"></a>

```csharp
public LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig AmazonManagedKafkaEventSourceConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig</a>

Specific configuration settings for an Amazon Managed Streaming for Apache Kafka (Amazon MSK) event source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#amazon_managed_kafka_event_source_config LambdaEventSourceMapping#amazon_managed_kafka_event_source_config}

---

##### `BatchSize`<sup>Optional</sup> <a name="BatchSize" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.batchSize"></a>

```csharp
public double BatchSize { get; set; }
```

- *Type:* double

The maximum number of records in each batch that Lambda pulls from your stream or queue and sends to your function.

Lambda passes all of the records in the batch to the function in a single call, up to the payload limit for synchronous invocation (6 MB).

* *Amazon Kinesis* – Default 100. Max 10,000.
* *Amazon DynamoDB Streams* – Default 100. Max 10,000.
* *Amazon Simple Queue Service* – Default 10. For standard queues the max is 10,000. For FIFO queues the max is 10.
* *Amazon Managed Streaming for Apache Kafka* – Default 100. Max 10,000.
* *Self-managed Apache Kafka* – Default 100. Max 10,000.
* *Amazon MQ (ActiveMQ and RabbitMQ)* – Default 100. Max 10,000.
* *DocumentDB* – Default 100. Max 10,000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#batch_size LambdaEventSourceMapping#batch_size}

---

##### `BisectBatchOnFunctionError`<sup>Optional</sup> <a name="BisectBatchOnFunctionError" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.bisectBatchOnFunctionError"></a>

```csharp
public bool|IResolvable BisectBatchOnFunctionError { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

(Kinesis and DynamoDB Streams only) If the function returns an error, split the batch in two and retry.

The default value is false.
When using `BisectBatchOnFunctionError`, check the `BatchSize` parameter in the `OnFailure` destination message's metadata. The `BatchSize` could be greater than 1 since LAM consolidates failed messages metadata when writing to the `OnFailure` destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#bisect_batch_on_function_error LambdaEventSourceMapping#bisect_batch_on_function_error}

---

##### `DestinationConfig`<sup>Optional</sup> <a name="DestinationConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.destinationConfig"></a>

```csharp
public LambdaEventSourceMappingDestinationConfig DestinationConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig">LambdaEventSourceMappingDestinationConfig</a>

(Kinesis, DynamoDB Streams, Amazon MSK, and self-managed Apache Kafka) A configuration object that specifies the destination of an event after Lambda processes it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#destination_config LambdaEventSourceMapping#destination_config}

---

##### `DocumentDbEventSourceConfig`<sup>Optional</sup> <a name="DocumentDbEventSourceConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.documentDbEventSourceConfig"></a>

```csharp
public LambdaEventSourceMappingDocumentDbEventSourceConfig DocumentDbEventSourceConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig">LambdaEventSourceMappingDocumentDbEventSourceConfig</a>

Specific configuration settings for a DocumentDB event source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#document_db_event_source_config LambdaEventSourceMapping#document_db_event_source_config}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When true, the event source mapping is active. When false, Lambda pauses polling and invocation.  Default: True.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#enabled LambdaEventSourceMapping#enabled}

---

##### `EventSourceArn`<sup>Optional</sup> <a name="EventSourceArn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.eventSourceArn"></a>

```csharp
public string EventSourceArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the event source.

* *Amazon Kinesis* – The ARN of the data stream or a stream consumer.
* *Amazon DynamoDB Streams* – The ARN of the stream.
* *Amazon Simple Queue Service* – The ARN of the queue.
* *Amazon Managed Streaming for Apache Kafka* – The ARN of the cluster or the ARN of the VPC connection (for [cross-account event source mappings](https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#msk-multi-vpc)).
* *Amazon MQ* – The ARN of the broker.
* *Amazon DocumentDB* – The ARN of the DocumentDB change stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#event_source_arn LambdaEventSourceMapping#event_source_arn}

---

##### `FilterCriteria`<sup>Optional</sup> <a name="FilterCriteria" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.filterCriteria"></a>

```csharp
public LambdaEventSourceMappingFilterCriteria FilterCriteria { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria">LambdaEventSourceMappingFilterCriteria</a>

An object that defines the filter criteria that determine whether Lambda should process an event.

For more information, see [Lambda event filtering](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#filter_criteria LambdaEventSourceMapping#filter_criteria}

---

##### `FunctionResponseTypes`<sup>Optional</sup> <a name="FunctionResponseTypes" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.functionResponseTypes"></a>

```csharp
public string[] FunctionResponseTypes { get; set; }
```

- *Type:* string[]

(Kinesis, DynamoDB Streams, and SQS) A list of current response type enums applied to the event source mapping.

Valid Values: `ReportBatchItemFailures`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#function_response_types LambdaEventSourceMapping#function_response_types}

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

The ARN of the KMSlong (KMS) customer managed key that Lambda uses to encrypt your function's [filter criteria](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html#filtering-basics).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#kms_key_arn LambdaEventSourceMapping#kms_key_arn}

---

##### `LoggingConfig`<sup>Optional</sup> <a name="LoggingConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.loggingConfig"></a>

```csharp
public LambdaEventSourceMappingLoggingConfig LoggingConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfig">LambdaEventSourceMappingLoggingConfig</a>

(Amazon MSK, and self-managed Apache Kafka only) The logging configuration for your event source.

For more information, see [Event source mapping logging](https://docs.aws.amazon.com/lambda/latest/dg/esm-logging.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#logging_config LambdaEventSourceMapping#logging_config}

---

##### `MaximumBatchingWindowInSeconds`<sup>Optional</sup> <a name="MaximumBatchingWindowInSeconds" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.maximumBatchingWindowInSeconds"></a>

```csharp
public double MaximumBatchingWindowInSeconds { get; set; }
```

- *Type:* double

The maximum amount of time, in seconds, that Lambda spends gathering records before invoking the function.

*Default (, , event sources)*: 0
*Default (, Kafka, , event sources)*: 500 ms
*Related setting:* For SQS event sources, when you set `BatchSize` to a value greater than 10, you must set `MaximumBatchingWindowInSeconds` to at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#maximum_batching_window_in_seconds LambdaEventSourceMapping#maximum_batching_window_in_seconds}

---

##### `MaximumRecordAgeInSeconds`<sup>Optional</sup> <a name="MaximumRecordAgeInSeconds" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.maximumRecordAgeInSeconds"></a>

```csharp
public double MaximumRecordAgeInSeconds { get; set; }
```

- *Type:* double

(Kinesis, DynamoDB Streams, Amazon MSK, and self-managed Apache Kafka) Discard records older than the specified age.

The default value is -1, which sets the maximum age to infinite. When the value is set to infinite, Lambda never discards old records.
The minimum valid value for maximum record age is 60s. Although values less than 60 and greater than -1 fall within the parameter's absolute range, they are not allowed

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#maximum_record_age_in_seconds LambdaEventSourceMapping#maximum_record_age_in_seconds}

---

##### `MaximumRetryAttempts`<sup>Optional</sup> <a name="MaximumRetryAttempts" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.maximumRetryAttempts"></a>

```csharp
public double MaximumRetryAttempts { get; set; }
```

- *Type:* double

(Kinesis, DynamoDB Streams, Amazon MSK, and self-managed Apache Kafka) Discard records after the specified number of retries.

The default value is -1, which sets the maximum number of retries to infinite. When MaximumRetryAttempts is infinite, Lambda retries failed records until the record expires in the event source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#maximum_retry_attempts LambdaEventSourceMapping#maximum_retry_attempts}

---

##### `MetricsConfig`<sup>Optional</sup> <a name="MetricsConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.metricsConfig"></a>

```csharp
public LambdaEventSourceMappingMetricsConfig MetricsConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfig">LambdaEventSourceMappingMetricsConfig</a>

The metrics configuration for your event source. For more information, see [Event source mapping metrics](https://docs.aws.amazon.com/lambda/latest/dg/monitoring-metrics-types.html#event-source-mapping-metrics).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#metrics_config LambdaEventSourceMapping#metrics_config}

---

##### `ParallelizationFactor`<sup>Optional</sup> <a name="ParallelizationFactor" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.parallelizationFactor"></a>

```csharp
public double ParallelizationFactor { get; set; }
```

- *Type:* double

(Kinesis and DynamoDB Streams only) The number of batches to process concurrently from each shard.

The default value is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#parallelization_factor LambdaEventSourceMapping#parallelization_factor}

---

##### `ProvisionedPollerConfig`<sup>Optional</sup> <a name="ProvisionedPollerConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.provisionedPollerConfig"></a>

```csharp
public LambdaEventSourceMappingProvisionedPollerConfig ProvisionedPollerConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig">LambdaEventSourceMappingProvisionedPollerConfig</a>

(Amazon SQS, Amazon MSK, and self-managed Apache Kafka only) The provisioned mode configuration for the event source.

For more information, see [provisioned mode](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventsourcemapping.html#invocation-eventsourcemapping-provisioned-mode).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#provisioned_poller_config LambdaEventSourceMapping#provisioned_poller_config}

---

##### `Queues`<sup>Optional</sup> <a name="Queues" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.queues"></a>

```csharp
public string[] Queues { get; set; }
```

- *Type:* string[]

(Amazon MQ) The name of the Amazon MQ broker destination queue to consume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#queues LambdaEventSourceMapping#queues}

---

##### `ScalingConfig`<sup>Optional</sup> <a name="ScalingConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.scalingConfig"></a>

```csharp
public LambdaEventSourceMappingScalingConfig ScalingConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig">LambdaEventSourceMappingScalingConfig</a>

This property is for Amazon SQS event sources only.

You cannot use `ProvisionedPollerConfig` while using `ScalingConfig`. These options are mutually exclusive. To remove the scaling configuration, pass an empty value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#scaling_config LambdaEventSourceMapping#scaling_config}

---

##### `SelfManagedEventSource`<sup>Optional</sup> <a name="SelfManagedEventSource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.selfManagedEventSource"></a>

```csharp
public LambdaEventSourceMappingSelfManagedEventSource SelfManagedEventSource { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource">LambdaEventSourceMappingSelfManagedEventSource</a>

The self-managed Apache Kafka cluster for your event source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#self_managed_event_source LambdaEventSourceMapping#self_managed_event_source}

---

##### `SelfManagedKafkaEventSourceConfig`<sup>Optional</sup> <a name="SelfManagedKafkaEventSourceConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.selfManagedKafkaEventSourceConfig"></a>

```csharp
public LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig SelfManagedKafkaEventSourceConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig</a>

Specific configuration settings for a self-managed Apache Kafka event source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#self_managed_kafka_event_source_config LambdaEventSourceMapping#self_managed_kafka_event_source_config}

---

##### `SourceAccessConfigurations`<sup>Optional</sup> <a name="SourceAccessConfigurations" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.sourceAccessConfigurations"></a>

```csharp
public IResolvable|LambdaEventSourceMappingSourceAccessConfigurations[] SourceAccessConfigurations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurations">LambdaEventSourceMappingSourceAccessConfigurations</a>[]

An array of the authentication protocol, VPC components, or virtual host to secure and define your event source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#source_access_configurations LambdaEventSourceMapping#source_access_configurations}

---

##### `StartingPosition`<sup>Optional</sup> <a name="StartingPosition" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.startingPosition"></a>

```csharp
public string StartingPosition { get; set; }
```

- *Type:* string

The position in a stream from which to start reading.

Required for Amazon Kinesis and Amazon DynamoDB.

* *LATEST* - Read only new records.
* *TRIM_HORIZON* - Process all available records.
* *AT_TIMESTAMP* - Specify a time from which to start reading records.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#starting_position LambdaEventSourceMapping#starting_position}

---

##### `StartingPositionTimestamp`<sup>Optional</sup> <a name="StartingPositionTimestamp" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.startingPositionTimestamp"></a>

```csharp
public double StartingPositionTimestamp { get; set; }
```

- *Type:* double

With ``StartingPosition`` set to ``AT_TIMESTAMP``, the time from which to start reading, in Unix time seconds.

`StartingPositionTimestamp` cannot be in the future.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#starting_position_timestamp LambdaEventSourceMapping#starting_position_timestamp}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.tags"></a>

```csharp
public IResolvable|LambdaEventSourceMappingTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTags">LambdaEventSourceMappingTags</a>[]

A list of tags to add to the event source mapping.

You must have the `lambda:TagResource`, `lambda:UntagResource`, and `lambda:ListTags` permissions for your [principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html) to manage the CFN stack. If you don't have these permissions, there might be unexpected behavior with stack-level tags propagating to the resource during resource creation and update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#tags LambdaEventSourceMapping#tags}

---

##### `Topics`<sup>Optional</sup> <a name="Topics" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.topics"></a>

```csharp
public string[] Topics { get; set; }
```

- *Type:* string[]

The name of the Kafka topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#topics LambdaEventSourceMapping#topics}

---

##### `TumblingWindowInSeconds`<sup>Optional</sup> <a name="TumblingWindowInSeconds" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.tumblingWindowInSeconds"></a>

```csharp
public double TumblingWindowInSeconds { get; set; }
```

- *Type:* double

(Kinesis and DynamoDB Streams only) The duration in seconds of a processing window for DynamoDB and Kinesis Streams event sources.

A value of 0 seconds indicates no tumbling window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#tumbling_window_in_seconds LambdaEventSourceMapping#tumbling_window_in_seconds}

---

### LambdaEventSourceMappingDestinationConfig <a name="LambdaEventSourceMappingDestinationConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaEventSourceMappingDestinationConfig {
    LambdaEventSourceMappingDestinationConfigOnFailure OnFailure = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig.property.onFailure">OnFailure</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailure">LambdaEventSourceMappingDestinationConfigOnFailure</a></code> | The destination configuration for failed invocations. |

---

##### `OnFailure`<sup>Optional</sup> <a name="OnFailure" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig.property.onFailure"></a>

```csharp
public LambdaEventSourceMappingDestinationConfigOnFailure OnFailure { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailure">LambdaEventSourceMappingDestinationConfigOnFailure</a>

The destination configuration for failed invocations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#on_failure LambdaEventSourceMapping#on_failure}

---

### LambdaEventSourceMappingDestinationConfigOnFailure <a name="LambdaEventSourceMappingDestinationConfigOnFailure" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailure.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaEventSourceMappingDestinationConfigOnFailure {
    string Destination = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailure.property.destination">Destination</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the destination resource. |

---

##### `Destination`<sup>Optional</sup> <a name="Destination" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailure.property.destination"></a>

```csharp
public string Destination { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the destination resource.

To retain records of failed invocations from [Kinesis](https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html), [DynamoDB](https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html), [self-managed Apache Kafka](https://docs.aws.amazon.com/lambda/latest/dg/kafka-on-failure.html), or [Amazon MSK](https://docs.aws.amazon.com/lambda/latest/dg/kafka-on-failure.html), you can configure an Amazon SNS topic, Amazon SQS queue, Amazon S3 bucket, or Kafka topic as the destination.
Amazon SNS destinations have a message size limit of 256 KB. If the combined size of the function request and response payload exceeds the limit, Lambda will drop the payload when sending `OnFailure` event to the destination. For details on this behavior, refer to [Retaining records of asynchronous invocations](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async-retain-records.html).
To retain records of failed invocations from [Kinesis](https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html), [DynamoDB](https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html), [self-managed Kafka](https://docs.aws.amazon.com/lambda/latest/dg/with-kafka.html#services-smaa-onfailure-destination) or [Amazon MSK](https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-onfailure-destination), you can configure an Amazon SNS topic, Amazon SQS queue, or Amazon S3 bucket as the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#destination LambdaEventSourceMapping#destination}

---

### LambdaEventSourceMappingDocumentDbEventSourceConfig <a name="LambdaEventSourceMappingDocumentDbEventSourceConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaEventSourceMappingDocumentDbEventSourceConfig {
    string CollectionName = null,
    string DatabaseName = null,
    string FullDocument = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig.property.collectionName">CollectionName</a></code> | <code>string</code> | The name of the collection to consume within the database. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig.property.databaseName">DatabaseName</a></code> | <code>string</code> | The name of the database to consume within the DocumentDB cluster. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig.property.fullDocument">FullDocument</a></code> | <code>string</code> | Determines what DocumentDB sends to your event stream during document update operations. |

---

##### `CollectionName`<sup>Optional</sup> <a name="CollectionName" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig.property.collectionName"></a>

```csharp
public string CollectionName { get; set; }
```

- *Type:* string

The name of the collection to consume within the database.

If you do not specify a collection, Lambda consumes all collections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#collection_name LambdaEventSourceMapping#collection_name}

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

The name of the database to consume within the DocumentDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#database_name LambdaEventSourceMapping#database_name}

---

##### `FullDocument`<sup>Optional</sup> <a name="FullDocument" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig.property.fullDocument"></a>

```csharp
public string FullDocument { get; set; }
```

- *Type:* string

Determines what DocumentDB sends to your event stream during document update operations.

If set to UpdateLookup, DocumentDB sends a delta describing the changes, along with a copy of the entire document. Otherwise, DocumentDB sends only a partial document that contains the changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#full_document LambdaEventSourceMapping#full_document}

---

### LambdaEventSourceMappingFilterCriteria <a name="LambdaEventSourceMappingFilterCriteria" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaEventSourceMappingFilterCriteria {
    IResolvable|LambdaEventSourceMappingFilterCriteriaFilters[] Filters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria.property.filters">Filters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilters">LambdaEventSourceMappingFilterCriteriaFilters</a>[]</code> | A list of filters. |

---

##### `Filters`<sup>Optional</sup> <a name="Filters" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria.property.filters"></a>

```csharp
public IResolvable|LambdaEventSourceMappingFilterCriteriaFilters[] Filters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilters">LambdaEventSourceMappingFilterCriteriaFilters</a>[]

A list of filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#filters LambdaEventSourceMapping#filters}

---

### LambdaEventSourceMappingFilterCriteriaFilters <a name="LambdaEventSourceMappingFilterCriteriaFilters" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaEventSourceMappingFilterCriteriaFilters {
    string Pattern = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilters.property.pattern">Pattern</a></code> | <code>string</code> | A filter pattern. For more information on the syntax of a filter pattern, see [Filter rule syntax](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html#filtering-syntax). |

---

##### `Pattern`<sup>Optional</sup> <a name="Pattern" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilters.property.pattern"></a>

```csharp
public string Pattern { get; set; }
```

- *Type:* string

A filter pattern. For more information on the syntax of a filter pattern, see [Filter rule syntax](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html#filtering-syntax).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#pattern LambdaEventSourceMapping#pattern}

---

### LambdaEventSourceMappingLoggingConfig <a name="LambdaEventSourceMappingLoggingConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaEventSourceMappingLoggingConfig {
    string SystemLogLevel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfig.property.systemLogLevel">SystemLogLevel</a></code> | <code>string</code> | Set this property to filter the system logs for your function that Lambda sends to CloudWatch. |

---

##### `SystemLogLevel`<sup>Optional</sup> <a name="SystemLogLevel" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfig.property.systemLogLevel"></a>

```csharp
public string SystemLogLevel { get; set; }
```

- *Type:* string

Set this property to filter the system logs for your function that Lambda sends to CloudWatch.

Lambda only sends system logs at the selected level of detail and lower, where `DEBUG` is the highest level and `WARN` is the lowest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#system_log_level LambdaEventSourceMapping#system_log_level}

---

### LambdaEventSourceMappingMetricsConfig <a name="LambdaEventSourceMappingMetricsConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaEventSourceMappingMetricsConfig {
    string[] Metrics = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfig.property.metrics">Metrics</a></code> | <code>string[]</code> | The metrics you want your event source mapping to produce, including ``EventCount``, ``ErrorCount``, ``KafkaMetrics``. |

---

##### `Metrics`<sup>Optional</sup> <a name="Metrics" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfig.property.metrics"></a>

```csharp
public string[] Metrics { get; set; }
```

- *Type:* string[]

The metrics you want your event source mapping to produce, including ``EventCount``, ``ErrorCount``, ``KafkaMetrics``.

* `EventCount` to receive metrics related to the number of events processed by your event source mapping.
* `ErrorCount` (Amazon MSK and self-managed Apache Kafka) to receive metrics related to the number of errors in your event source mapping processing.
* `KafkaMetrics` (Amazon MSK and self-managed Apache Kafka) to receive metrics related to the Kafka consumers from your event source mapping.

For more information about these metrics, see [Event source mapping metrics](https://docs.aws.amazon.com/lambda/latest/dg/monitoring-metrics-types.html#event-source-mapping-metrics).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#metrics LambdaEventSourceMapping#metrics}

---

### LambdaEventSourceMappingProvisionedPollerConfig <a name="LambdaEventSourceMappingProvisionedPollerConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaEventSourceMappingProvisionedPollerConfig {
    double MaximumPollers = null,
    double MinimumPollers = null,
    string PollerGroupName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig.property.maximumPollers">MaximumPollers</a></code> | <code>double</code> | The maximum number of event pollers this event source can scale up to. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig.property.minimumPollers">MinimumPollers</a></code> | <code>double</code> | The minimum number of event pollers this event source can scale down to. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig.property.pollerGroupName">PollerGroupName</a></code> | <code>string</code> | (Amazon MSK and self-managed Apache Kafka) The name of the provisioned poller group. |

---

##### `MaximumPollers`<sup>Optional</sup> <a name="MaximumPollers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig.property.maximumPollers"></a>

```csharp
public double MaximumPollers { get; set; }
```

- *Type:* double

The maximum number of event pollers this event source can scale up to.

For Amazon SQS events source mappings, default is 200, and minimum value allowed is 2. For Amazon MSK and self-managed Apache Kafka event source mappings, default is 200, and minimum value allowed is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#maximum_pollers LambdaEventSourceMapping#maximum_pollers}

---

##### `MinimumPollers`<sup>Optional</sup> <a name="MinimumPollers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig.property.minimumPollers"></a>

```csharp
public double MinimumPollers { get; set; }
```

- *Type:* double

The minimum number of event pollers this event source can scale down to.

For Amazon SQS events source mappings, default is 2, and minimum 2 required. For Amazon MSK and self-managed Apache Kafka event source mappings, default is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#minimum_pollers LambdaEventSourceMapping#minimum_pollers}

---

##### `PollerGroupName`<sup>Optional</sup> <a name="PollerGroupName" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig.property.pollerGroupName"></a>

```csharp
public string PollerGroupName { get; set; }
```

- *Type:* string

(Amazon MSK and self-managed Apache Kafka) The name of the provisioned poller group.

Use this option to group multiple ESMs within the event source's VPC to share Event Poller Unit (EPU) capacity. You can use this option to optimize Provisioned mode costs for your ESMs. You can group up to 100 ESMs per poller group and aggregate maximum pollers across all ESMs in a group cannot exceed 2000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#poller_group_name LambdaEventSourceMapping#poller_group_name}

---

### LambdaEventSourceMappingScalingConfig <a name="LambdaEventSourceMappingScalingConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaEventSourceMappingScalingConfig {
    double MaximumConcurrency = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig.property.maximumConcurrency">MaximumConcurrency</a></code> | <code>double</code> | Limits the number of concurrent instances that the SQS event source can invoke. |

---

##### `MaximumConcurrency`<sup>Optional</sup> <a name="MaximumConcurrency" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig.property.maximumConcurrency"></a>

```csharp
public double MaximumConcurrency { get; set; }
```

- *Type:* double

Limits the number of concurrent instances that the SQS event source can invoke.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#maximum_concurrency LambdaEventSourceMapping#maximum_concurrency}

---

### LambdaEventSourceMappingSelfManagedEventSource <a name="LambdaEventSourceMappingSelfManagedEventSource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaEventSourceMappingSelfManagedEventSource {
    LambdaEventSourceMappingSelfManagedEventSourceEndpoints Endpoints = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource.property.endpoints">Endpoints</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpoints">LambdaEventSourceMappingSelfManagedEventSourceEndpoints</a></code> | The list of bootstrap servers for your Kafka brokers in the following format: ``"KafkaBootstrapServers": ["abc.xyz.com:xxxx","abc2.xyz.com:xxxx"]``. |

---

##### `Endpoints`<sup>Optional</sup> <a name="Endpoints" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource.property.endpoints"></a>

```csharp
public LambdaEventSourceMappingSelfManagedEventSourceEndpoints Endpoints { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpoints">LambdaEventSourceMappingSelfManagedEventSourceEndpoints</a>

The list of bootstrap servers for your Kafka brokers in the following format: ``"KafkaBootstrapServers": ["abc.xyz.com:xxxx","abc2.xyz.com:xxxx"]``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#endpoints LambdaEventSourceMapping#endpoints}

---

### LambdaEventSourceMappingSelfManagedEventSourceEndpoints <a name="LambdaEventSourceMappingSelfManagedEventSourceEndpoints" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpoints.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaEventSourceMappingSelfManagedEventSourceEndpoints {
    string[] KafkaBootstrapServers = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpoints.property.kafkaBootstrapServers">KafkaBootstrapServers</a></code> | <code>string[]</code> | The list of bootstrap servers for your Kafka brokers in the following format: ``"KafkaBootstrapServers": ["abc.xyz.com:xxxx","abc2.xyz.com:xxxx"]``. |

---

##### `KafkaBootstrapServers`<sup>Optional</sup> <a name="KafkaBootstrapServers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpoints.property.kafkaBootstrapServers"></a>

```csharp
public string[] KafkaBootstrapServers { get; set; }
```

- *Type:* string[]

The list of bootstrap servers for your Kafka brokers in the following format: ``"KafkaBootstrapServers": ["abc.xyz.com:xxxx","abc2.xyz.com:xxxx"]``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#kafka_bootstrap_servers LambdaEventSourceMapping#kafka_bootstrap_servers}

---

### LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig <a name="LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig {
    string ConsumerGroupId = null,
    LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig SchemaRegistryConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig.property.consumerGroupId">ConsumerGroupId</a></code> | <code>string</code> | The identifier for the Kafka consumer group to join. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig.property.schemaRegistryConfig">SchemaRegistryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig</a></code> | Specific configuration settings for a Kafka schema registry. |

---

##### `ConsumerGroupId`<sup>Optional</sup> <a name="ConsumerGroupId" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig.property.consumerGroupId"></a>

```csharp
public string ConsumerGroupId { get; set; }
```

- *Type:* string

The identifier for the Kafka consumer group to join.

The consumer group ID must be unique among all your Kafka event sources. After creating a Kafka event source mapping with the consumer group ID specified, you cannot update this value. For more information, see [Customizable consumer group ID](https://docs.aws.amazon.com/lambda/latest/dg/with-kafka-process.html#services-smaa-topic-add).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#consumer_group_id LambdaEventSourceMapping#consumer_group_id}

---

##### `SchemaRegistryConfig`<sup>Optional</sup> <a name="SchemaRegistryConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig.property.schemaRegistryConfig"></a>

```csharp
public LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig SchemaRegistryConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig</a>

Specific configuration settings for a Kafka schema registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#schema_registry_config LambdaEventSourceMapping#schema_registry_config}

---

### LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig <a name="LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig {
    IResolvable|LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs[] AccessConfigs = null,
    string EventRecordFormat = null,
    string SchemaRegistryUri = null,
    IResolvable|LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs[] SchemaValidationConfigs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig.property.accessConfigs">AccessConfigs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs</a>[]</code> | An array of access configuration objects that tell Lambda how to authenticate with your schema registry. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig.property.eventRecordFormat">EventRecordFormat</a></code> | <code>string</code> | The record format that Lambda delivers to your function after schema validation. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig.property.schemaRegistryUri">SchemaRegistryUri</a></code> | <code>string</code> | The URI for your schema registry. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig.property.schemaValidationConfigs">SchemaValidationConfigs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs</a>[]</code> | An array of schema validation configuration objects, which tell Lambda the message attributes you want to validate and filter using your schema registry. |

---

##### `AccessConfigs`<sup>Optional</sup> <a name="AccessConfigs" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig.property.accessConfigs"></a>

```csharp
public IResolvable|LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs[] AccessConfigs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs</a>[]

An array of access configuration objects that tell Lambda how to authenticate with your schema registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#access_configs LambdaEventSourceMapping#access_configs}

---

##### `EventRecordFormat`<sup>Optional</sup> <a name="EventRecordFormat" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig.property.eventRecordFormat"></a>

```csharp
public string EventRecordFormat { get; set; }
```

- *Type:* string

The record format that Lambda delivers to your function after schema validation.

* Choose `JSON` to have Lambda deliver the record to your function as a standard JSON object.
* Choose `SOURCE` to have Lambda deliver the record to your function in its original source format. Lambda removes all schema metadata, such as the schema ID, before sending the record to your function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#event_record_format LambdaEventSourceMapping#event_record_format}

---

##### `SchemaRegistryUri`<sup>Optional</sup> <a name="SchemaRegistryUri" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig.property.schemaRegistryUri"></a>

```csharp
public string SchemaRegistryUri { get; set; }
```

- *Type:* string

The URI for your schema registry.

The correct URI format depends on the type of schema registry you're using.

* For GLU schema registries, use the ARN of the registry.
* For Confluent schema registries, use the URL of the registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#schema_registry_uri LambdaEventSourceMapping#schema_registry_uri}

---

##### `SchemaValidationConfigs`<sup>Optional</sup> <a name="SchemaValidationConfigs" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig.property.schemaValidationConfigs"></a>

```csharp
public IResolvable|LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs[] SchemaValidationConfigs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs</a>[]

An array of schema validation configuration objects, which tell Lambda the message attributes you want to validate and filter using your schema registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#schema_validation_configs LambdaEventSourceMapping#schema_validation_configs}

---

### LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs <a name="LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs {
    string Type = null,
    string Uri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs.property.type">Type</a></code> | <code>string</code> | The type of authentication Lambda uses to access your schema registry. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs.property.uri">Uri</a></code> | <code>string</code> | The URI of the secret (Secrets Manager secret ARN) to authenticate with your schema registry. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of authentication Lambda uses to access your schema registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#type LambdaEventSourceMapping#type}

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

The URI of the secret (Secrets Manager secret ARN) to authenticate with your schema registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#uri LambdaEventSourceMapping#uri}

---

### LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs <a name="LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs {
    string Attribute = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs.property.attribute">Attribute</a></code> | <code>string</code> | The attributes you want your schema registry to validate and filter for. |

---

##### `Attribute`<sup>Optional</sup> <a name="Attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs.property.attribute"></a>

```csharp
public string Attribute { get; set; }
```

- *Type:* string

The attributes you want your schema registry to validate and filter for.

If you selected `JSON` as the `EventRecordFormat`, Lambda also deserializes the selected message attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#attribute LambdaEventSourceMapping#attribute}

---

### LambdaEventSourceMappingSourceAccessConfigurations <a name="LambdaEventSourceMappingSourceAccessConfigurations" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaEventSourceMappingSourceAccessConfigurations {
    string Type = null,
    string Uri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurations.property.type">Type</a></code> | <code>string</code> | The type of authentication protocol, VPC components, or virtual host for your event source. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurations.property.uri">Uri</a></code> | <code>string</code> | The value for your chosen configuration in ``Type``. For example: ``"URI": "arn:aws:secretsmanager:us-east-1:01234567890:secret:MyBrokerSecretName"``. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurations.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of authentication protocol, VPC components, or virtual host for your event source.

For example: `"Type":"SASL_SCRAM_512_AUTH"`.

* `BASIC_AUTH` – (Amazon MQ) The ASMlong secret that stores your broker credentials.
* `BASIC_AUTH` – (Self-managed Apache Kafka) The Secrets Manager ARN of your secret key used for SASL/PLAIN authentication of your Apache Kafka brokers.
* `VPC_SUBNET` – (Self-managed Apache Kafka) The subnets associated with your VPC. Lambda connects to these subnets to fetch data from your self-managed Apache Kafka cluster.
* `VPC_SECURITY_GROUP` – (Self-managed Apache Kafka) The VPC security group used to manage access to your self-managed Apache Kafka brokers.
* `SASL_SCRAM_256_AUTH` – (Self-managed Apache Kafka) The Secrets Manager ARN of your secret key used for SASL SCRAM-256 authentication of your self-managed Apache Kafka brokers.
* `SASL_SCRAM_512_AUTH` – (Amazon MSK, Self-managed Apache Kafka) The Secrets Manager ARN of your secret key used for SASL SCRAM-512 authentication of your self-managed Apache Kafka brokers.
* `VIRTUAL_HOST` –- (RabbitMQ) The name of the virtual host in your RabbitMQ broker. Lambda uses this RabbitMQ host as the event source. This property cannot be specified in an UpdateEventSourceMapping API call.
* `CLIENT_CERTIFICATE_TLS_AUTH` – (Amazon MSK, self-managed Apache Kafka) The Secrets Manager ARN of your secret key containing the certificate chain (X.509 PEM), private key (PKCS#8 PEM), and private key password (optional) used for mutual TLS authentication of your MSK/Apache Kafka brokers.
* `SERVER_ROOT_CA_CERTIFICATE` – (Self-managed Apache Kafka) The Secrets Manager ARN of your secret key containing the root CA certificate (X.509 PEM) used for TLS encryption of your Apache Kafka brokers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#type LambdaEventSourceMapping#type}

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurations.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

The value for your chosen configuration in ``Type``. For example: ``"URI": "arn:aws:secretsmanager:us-east-1:01234567890:secret:MyBrokerSecretName"``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#uri LambdaEventSourceMapping#uri}

---

### LambdaEventSourceMappingTags <a name="LambdaEventSourceMappingTags" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaEventSourceMappingTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTags.property.key">Key</a></code> | <code>string</code> | The key for this tag. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTags.property.value">Value</a></code> | <code>string</code> | The value for this tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key for this tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#key LambdaEventSourceMapping#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for this tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_source_mapping#value LambdaEventSourceMapping#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference <a name="LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.putSchemaRegistryConfig">PutSchemaRegistryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.resetConsumerGroupId">ResetConsumerGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.resetSchemaRegistryConfig">ResetSchemaRegistryConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSchemaRegistryConfig` <a name="PutSchemaRegistryConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.putSchemaRegistryConfig"></a>

```csharp
private void PutSchemaRegistryConfig(LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.putSchemaRegistryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig</a>

---

##### `ResetConsumerGroupId` <a name="ResetConsumerGroupId" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.resetConsumerGroupId"></a>

```csharp
private void ResetConsumerGroupId()
```

##### `ResetSchemaRegistryConfig` <a name="ResetSchemaRegistryConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.resetSchemaRegistryConfig"></a>

```csharp
private void ResetSchemaRegistryConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.schemaRegistryConfig">SchemaRegistryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.consumerGroupIdInput">ConsumerGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.schemaRegistryConfigInput">SchemaRegistryConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.consumerGroupId">ConsumerGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SchemaRegistryConfig`<sup>Required</sup> <a name="SchemaRegistryConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.schemaRegistryConfig"></a>

```csharp
public LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference SchemaRegistryConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference</a>

---

##### `ConsumerGroupIdInput`<sup>Optional</sup> <a name="ConsumerGroupIdInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.consumerGroupIdInput"></a>

```csharp
public string ConsumerGroupIdInput { get; }
```

- *Type:* string

---

##### `SchemaRegistryConfigInput`<sup>Optional</sup> <a name="SchemaRegistryConfigInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.schemaRegistryConfigInput"></a>

```csharp
public IResolvable|LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig SchemaRegistryConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig</a>

---

##### `ConsumerGroupId`<sup>Required</sup> <a name="ConsumerGroupId" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.consumerGroupId"></a>

```csharp
public string ConsumerGroupId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig</a>

---


### LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList <a name="LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.get"></a>

```csharp
private LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.property.internalValue"></a>

```csharp
public IResolvable|LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs</a>[]

---


### LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference <a name="LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.resetUri">ResetUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetUri` <a name="ResetUri" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.resetUri"></a>

```csharp
private void ResetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs</a>

---


### LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference <a name="LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.putAccessConfigs">PutAccessConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.putSchemaValidationConfigs">PutSchemaValidationConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetAccessConfigs">ResetAccessConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetEventRecordFormat">ResetEventRecordFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetSchemaRegistryUri">ResetSchemaRegistryUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetSchemaValidationConfigs">ResetSchemaValidationConfigs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccessConfigs` <a name="PutAccessConfigs" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.putAccessConfigs"></a>

```csharp
private void PutAccessConfigs(IResolvable|LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.putAccessConfigs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs</a>[]

---

##### `PutSchemaValidationConfigs` <a name="PutSchemaValidationConfigs" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.putSchemaValidationConfigs"></a>

```csharp
private void PutSchemaValidationConfigs(IResolvable|LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.putSchemaValidationConfigs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs</a>[]

---

##### `ResetAccessConfigs` <a name="ResetAccessConfigs" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetAccessConfigs"></a>

```csharp
private void ResetAccessConfigs()
```

##### `ResetEventRecordFormat` <a name="ResetEventRecordFormat" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetEventRecordFormat"></a>

```csharp
private void ResetEventRecordFormat()
```

##### `ResetSchemaRegistryUri` <a name="ResetSchemaRegistryUri" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetSchemaRegistryUri"></a>

```csharp
private void ResetSchemaRegistryUri()
```

##### `ResetSchemaValidationConfigs` <a name="ResetSchemaValidationConfigs" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetSchemaValidationConfigs"></a>

```csharp
private void ResetSchemaValidationConfigs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.accessConfigs">AccessConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaValidationConfigs">SchemaValidationConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.accessConfigsInput">AccessConfigsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.eventRecordFormatInput">EventRecordFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaRegistryUriInput">SchemaRegistryUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaValidationConfigsInput">SchemaValidationConfigsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.eventRecordFormat">EventRecordFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaRegistryUri">SchemaRegistryUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessConfigs`<sup>Required</sup> <a name="AccessConfigs" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.accessConfigs"></a>

```csharp
public LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList AccessConfigs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList</a>

---

##### `SchemaValidationConfigs`<sup>Required</sup> <a name="SchemaValidationConfigs" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaValidationConfigs"></a>

```csharp
public LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList SchemaValidationConfigs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList</a>

---

##### `AccessConfigsInput`<sup>Optional</sup> <a name="AccessConfigsInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.accessConfigsInput"></a>

```csharp
public IResolvable|LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs[] AccessConfigsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs</a>[]

---

##### `EventRecordFormatInput`<sup>Optional</sup> <a name="EventRecordFormatInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.eventRecordFormatInput"></a>

```csharp
public string EventRecordFormatInput { get; }
```

- *Type:* string

---

##### `SchemaRegistryUriInput`<sup>Optional</sup> <a name="SchemaRegistryUriInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaRegistryUriInput"></a>

```csharp
public string SchemaRegistryUriInput { get; }
```

- *Type:* string

---

##### `SchemaValidationConfigsInput`<sup>Optional</sup> <a name="SchemaValidationConfigsInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaValidationConfigsInput"></a>

```csharp
public IResolvable|LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs[] SchemaValidationConfigsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs</a>[]

---

##### `EventRecordFormat`<sup>Required</sup> <a name="EventRecordFormat" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.eventRecordFormat"></a>

```csharp
public string EventRecordFormat { get; }
```

- *Type:* string

---

##### `SchemaRegistryUri`<sup>Required</sup> <a name="SchemaRegistryUri" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaRegistryUri"></a>

```csharp
public string SchemaRegistryUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig</a>

---


### LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList <a name="LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.get"></a>

```csharp
private LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.property.internalValue"></a>

```csharp
public IResolvable|LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs</a>[]

---


### LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference <a name="LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.resetAttribute">ResetAttribute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttribute` <a name="ResetAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.resetAttribute"></a>

```csharp
private void ResetAttribute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.property.attributeInput">AttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.property.attribute">Attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttributeInput`<sup>Optional</sup> <a name="AttributeInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.property.attributeInput"></a>

```csharp
public string AttributeInput { get; }
```

- *Type:* string

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.property.attribute"></a>

```csharp
public string Attribute { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs</a>

---


### LambdaEventSourceMappingDestinationConfigOnFailureOutputReference <a name="LambdaEventSourceMappingDestinationConfigOnFailureOutputReference" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaEventSourceMappingDestinationConfigOnFailureOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.resetDestination">ResetDestination</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestination` <a name="ResetDestination" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.resetDestination"></a>

```csharp
private void ResetDestination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.property.destinationInput">DestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.property.destination">Destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailure">LambdaEventSourceMappingDestinationConfigOnFailure</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.property.destinationInput"></a>

```csharp
public string DestinationInput { get; }
```

- *Type:* string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.property.destination"></a>

```csharp
public string Destination { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaEventSourceMappingDestinationConfigOnFailure InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailure">LambdaEventSourceMappingDestinationConfigOnFailure</a>

---


### LambdaEventSourceMappingDestinationConfigOutputReference <a name="LambdaEventSourceMappingDestinationConfigOutputReference" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaEventSourceMappingDestinationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.putOnFailure">PutOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.resetOnFailure">ResetOnFailure</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOnFailure` <a name="PutOnFailure" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.putOnFailure"></a>

```csharp
private void PutOnFailure(LambdaEventSourceMappingDestinationConfigOnFailure Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.putOnFailure.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailure">LambdaEventSourceMappingDestinationConfigOnFailure</a>

---

##### `ResetOnFailure` <a name="ResetOnFailure" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.resetOnFailure"></a>

```csharp
private void ResetOnFailure()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.property.onFailure">OnFailure</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference">LambdaEventSourceMappingDestinationConfigOnFailureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.property.onFailureInput">OnFailureInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailure">LambdaEventSourceMappingDestinationConfigOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig">LambdaEventSourceMappingDestinationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OnFailure`<sup>Required</sup> <a name="OnFailure" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.property.onFailure"></a>

```csharp
public LambdaEventSourceMappingDestinationConfigOnFailureOutputReference OnFailure { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference">LambdaEventSourceMappingDestinationConfigOnFailureOutputReference</a>

---

##### `OnFailureInput`<sup>Optional</sup> <a name="OnFailureInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.property.onFailureInput"></a>

```csharp
public IResolvable|LambdaEventSourceMappingDestinationConfigOnFailure OnFailureInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailure">LambdaEventSourceMappingDestinationConfigOnFailure</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaEventSourceMappingDestinationConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig">LambdaEventSourceMappingDestinationConfig</a>

---


### LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference <a name="LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.resetCollectionName">ResetCollectionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.resetFullDocument">ResetFullDocument</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCollectionName` <a name="ResetCollectionName" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.resetCollectionName"></a>

```csharp
private void ResetCollectionName()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.resetDatabaseName"></a>

```csharp
private void ResetDatabaseName()
```

##### `ResetFullDocument` <a name="ResetFullDocument" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.resetFullDocument"></a>

```csharp
private void ResetFullDocument()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.collectionNameInput">CollectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.fullDocumentInput">FullDocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.collectionName">CollectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.fullDocument">FullDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig">LambdaEventSourceMappingDocumentDbEventSourceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CollectionNameInput`<sup>Optional</sup> <a name="CollectionNameInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.collectionNameInput"></a>

```csharp
public string CollectionNameInput { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `FullDocumentInput`<sup>Optional</sup> <a name="FullDocumentInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.fullDocumentInput"></a>

```csharp
public string FullDocumentInput { get; }
```

- *Type:* string

---

##### `CollectionName`<sup>Required</sup> <a name="CollectionName" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.collectionName"></a>

```csharp
public string CollectionName { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `FullDocument`<sup>Required</sup> <a name="FullDocument" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.fullDocument"></a>

```csharp
public string FullDocument { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaEventSourceMappingDocumentDbEventSourceConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig">LambdaEventSourceMappingDocumentDbEventSourceConfig</a>

---


### LambdaEventSourceMappingFilterCriteriaFiltersList <a name="LambdaEventSourceMappingFilterCriteriaFiltersList" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaEventSourceMappingFilterCriteriaFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersList.get"></a>

```csharp
private LambdaEventSourceMappingFilterCriteriaFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilters">LambdaEventSourceMappingFilterCriteriaFilters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersList.property.internalValue"></a>

```csharp
public IResolvable|LambdaEventSourceMappingFilterCriteriaFilters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilters">LambdaEventSourceMappingFilterCriteriaFilters</a>[]

---


### LambdaEventSourceMappingFilterCriteriaFiltersOutputReference <a name="LambdaEventSourceMappingFilterCriteriaFiltersOutputReference" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaEventSourceMappingFilterCriteriaFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.resetPattern">ResetPattern</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPattern` <a name="ResetPattern" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.resetPattern"></a>

```csharp
private void ResetPattern()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.property.patternInput">PatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.property.pattern">Pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilters">LambdaEventSourceMappingFilterCriteriaFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.property.patternInput"></a>

```csharp
public string PatternInput { get; }
```

- *Type:* string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.property.pattern"></a>

```csharp
public string Pattern { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaEventSourceMappingFilterCriteriaFilters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilters">LambdaEventSourceMappingFilterCriteriaFilters</a>

---


### LambdaEventSourceMappingFilterCriteriaOutputReference <a name="LambdaEventSourceMappingFilterCriteriaOutputReference" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaEventSourceMappingFilterCriteriaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.putFilters">PutFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.resetFilters">ResetFilters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFilters` <a name="PutFilters" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.putFilters"></a>

```csharp
private void PutFilters(IResolvable|LambdaEventSourceMappingFilterCriteriaFilters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.putFilters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilters">LambdaEventSourceMappingFilterCriteriaFilters</a>[]

---

##### `ResetFilters` <a name="ResetFilters" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.resetFilters"></a>

```csharp
private void ResetFilters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.property.filters">Filters</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersList">LambdaEventSourceMappingFilterCriteriaFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.property.filtersInput">FiltersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilters">LambdaEventSourceMappingFilterCriteriaFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria">LambdaEventSourceMappingFilterCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.property.filters"></a>

```csharp
public LambdaEventSourceMappingFilterCriteriaFiltersList Filters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFiltersList">LambdaEventSourceMappingFilterCriteriaFiltersList</a>

---

##### `FiltersInput`<sup>Optional</sup> <a name="FiltersInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.property.filtersInput"></a>

```csharp
public IResolvable|LambdaEventSourceMappingFilterCriteriaFilters[] FiltersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilters">LambdaEventSourceMappingFilterCriteriaFilters</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaEventSourceMappingFilterCriteria InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria">LambdaEventSourceMappingFilterCriteria</a>

---


### LambdaEventSourceMappingLoggingConfigOutputReference <a name="LambdaEventSourceMappingLoggingConfigOutputReference" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaEventSourceMappingLoggingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.resetSystemLogLevel">ResetSystemLogLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSystemLogLevel` <a name="ResetSystemLogLevel" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.resetSystemLogLevel"></a>

```csharp
private void ResetSystemLogLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.property.systemLogLevelInput">SystemLogLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.property.systemLogLevel">SystemLogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfig">LambdaEventSourceMappingLoggingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SystemLogLevelInput`<sup>Optional</sup> <a name="SystemLogLevelInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.property.systemLogLevelInput"></a>

```csharp
public string SystemLogLevelInput { get; }
```

- *Type:* string

---

##### `SystemLogLevel`<sup>Required</sup> <a name="SystemLogLevel" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.property.systemLogLevel"></a>

```csharp
public string SystemLogLevel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaEventSourceMappingLoggingConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingLoggingConfig">LambdaEventSourceMappingLoggingConfig</a>

---


### LambdaEventSourceMappingMetricsConfigOutputReference <a name="LambdaEventSourceMappingMetricsConfigOutputReference" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaEventSourceMappingMetricsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.resetMetrics">ResetMetrics</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetrics` <a name="ResetMetrics" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.resetMetrics"></a>

```csharp
private void ResetMetrics()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.property.metricsInput">MetricsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.property.metrics">Metrics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfig">LambdaEventSourceMappingMetricsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsInput`<sup>Optional</sup> <a name="MetricsInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.property.metricsInput"></a>

```csharp
public string[] MetricsInput { get; }
```

- *Type:* string[]

---

##### `Metrics`<sup>Required</sup> <a name="Metrics" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.property.metrics"></a>

```csharp
public string[] Metrics { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaEventSourceMappingMetricsConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfig">LambdaEventSourceMappingMetricsConfig</a>

---


### LambdaEventSourceMappingProvisionedPollerConfigOutputReference <a name="LambdaEventSourceMappingProvisionedPollerConfigOutputReference" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaEventSourceMappingProvisionedPollerConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.resetMaximumPollers">ResetMaximumPollers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.resetMinimumPollers">ResetMinimumPollers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.resetPollerGroupName">ResetPollerGroupName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaximumPollers` <a name="ResetMaximumPollers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.resetMaximumPollers"></a>

```csharp
private void ResetMaximumPollers()
```

##### `ResetMinimumPollers` <a name="ResetMinimumPollers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.resetMinimumPollers"></a>

```csharp
private void ResetMinimumPollers()
```

##### `ResetPollerGroupName` <a name="ResetPollerGroupName" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.resetPollerGroupName"></a>

```csharp
private void ResetPollerGroupName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.maximumPollersInput">MaximumPollersInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.minimumPollersInput">MinimumPollersInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.pollerGroupNameInput">PollerGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.maximumPollers">MaximumPollers</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.minimumPollers">MinimumPollers</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.pollerGroupName">PollerGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig">LambdaEventSourceMappingProvisionedPollerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaximumPollersInput`<sup>Optional</sup> <a name="MaximumPollersInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.maximumPollersInput"></a>

```csharp
public double MaximumPollersInput { get; }
```

- *Type:* double

---

##### `MinimumPollersInput`<sup>Optional</sup> <a name="MinimumPollersInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.minimumPollersInput"></a>

```csharp
public double MinimumPollersInput { get; }
```

- *Type:* double

---

##### `PollerGroupNameInput`<sup>Optional</sup> <a name="PollerGroupNameInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.pollerGroupNameInput"></a>

```csharp
public string PollerGroupNameInput { get; }
```

- *Type:* string

---

##### `MaximumPollers`<sup>Required</sup> <a name="MaximumPollers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.maximumPollers"></a>

```csharp
public double MaximumPollers { get; }
```

- *Type:* double

---

##### `MinimumPollers`<sup>Required</sup> <a name="MinimumPollers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.minimumPollers"></a>

```csharp
public double MinimumPollers { get; }
```

- *Type:* double

---

##### `PollerGroupName`<sup>Required</sup> <a name="PollerGroupName" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.pollerGroupName"></a>

```csharp
public string PollerGroupName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaEventSourceMappingProvisionedPollerConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig">LambdaEventSourceMappingProvisionedPollerConfig</a>

---


### LambdaEventSourceMappingScalingConfigOutputReference <a name="LambdaEventSourceMappingScalingConfigOutputReference" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaEventSourceMappingScalingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.resetMaximumConcurrency">ResetMaximumConcurrency</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaximumConcurrency` <a name="ResetMaximumConcurrency" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.resetMaximumConcurrency"></a>

```csharp
private void ResetMaximumConcurrency()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.property.maximumConcurrencyInput">MaximumConcurrencyInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.property.maximumConcurrency">MaximumConcurrency</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig">LambdaEventSourceMappingScalingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaximumConcurrencyInput`<sup>Optional</sup> <a name="MaximumConcurrencyInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.property.maximumConcurrencyInput"></a>

```csharp
public double MaximumConcurrencyInput { get; }
```

- *Type:* double

---

##### `MaximumConcurrency`<sup>Required</sup> <a name="MaximumConcurrency" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.property.maximumConcurrency"></a>

```csharp
public double MaximumConcurrency { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaEventSourceMappingScalingConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig">LambdaEventSourceMappingScalingConfig</a>

---


### LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference <a name="LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.resetKafkaBootstrapServers">ResetKafkaBootstrapServers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKafkaBootstrapServers` <a name="ResetKafkaBootstrapServers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.resetKafkaBootstrapServers"></a>

```csharp
private void ResetKafkaBootstrapServers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.property.kafkaBootstrapServersInput">KafkaBootstrapServersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.property.kafkaBootstrapServers">KafkaBootstrapServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpoints">LambdaEventSourceMappingSelfManagedEventSourceEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KafkaBootstrapServersInput`<sup>Optional</sup> <a name="KafkaBootstrapServersInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.property.kafkaBootstrapServersInput"></a>

```csharp
public string[] KafkaBootstrapServersInput { get; }
```

- *Type:* string[]

---

##### `KafkaBootstrapServers`<sup>Required</sup> <a name="KafkaBootstrapServers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.property.kafkaBootstrapServers"></a>

```csharp
public string[] KafkaBootstrapServers { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaEventSourceMappingSelfManagedEventSourceEndpoints InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpoints">LambdaEventSourceMappingSelfManagedEventSourceEndpoints</a>

---


### LambdaEventSourceMappingSelfManagedEventSourceOutputReference <a name="LambdaEventSourceMappingSelfManagedEventSourceOutputReference" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaEventSourceMappingSelfManagedEventSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.putEndpoints">PutEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.resetEndpoints">ResetEndpoints</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEndpoints` <a name="PutEndpoints" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.putEndpoints"></a>

```csharp
private void PutEndpoints(LambdaEventSourceMappingSelfManagedEventSourceEndpoints Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.putEndpoints.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpoints">LambdaEventSourceMappingSelfManagedEventSourceEndpoints</a>

---

##### `ResetEndpoints` <a name="ResetEndpoints" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.resetEndpoints"></a>

```csharp
private void ResetEndpoints()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.property.endpoints">Endpoints</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference">LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.property.endpointsInput">EndpointsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpoints">LambdaEventSourceMappingSelfManagedEventSourceEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource">LambdaEventSourceMappingSelfManagedEventSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Endpoints`<sup>Required</sup> <a name="Endpoints" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.property.endpoints"></a>

```csharp
public LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference Endpoints { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference">LambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference</a>

---

##### `EndpointsInput`<sup>Optional</sup> <a name="EndpointsInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.property.endpointsInput"></a>

```csharp
public IResolvable|LambdaEventSourceMappingSelfManagedEventSourceEndpoints EndpointsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceEndpoints">LambdaEventSourceMappingSelfManagedEventSourceEndpoints</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaEventSourceMappingSelfManagedEventSource InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource">LambdaEventSourceMappingSelfManagedEventSource</a>

---


### LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference <a name="LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.putSchemaRegistryConfig">PutSchemaRegistryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.resetConsumerGroupId">ResetConsumerGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.resetSchemaRegistryConfig">ResetSchemaRegistryConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSchemaRegistryConfig` <a name="PutSchemaRegistryConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.putSchemaRegistryConfig"></a>

```csharp
private void PutSchemaRegistryConfig(LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.putSchemaRegistryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig</a>

---

##### `ResetConsumerGroupId` <a name="ResetConsumerGroupId" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.resetConsumerGroupId"></a>

```csharp
private void ResetConsumerGroupId()
```

##### `ResetSchemaRegistryConfig` <a name="ResetSchemaRegistryConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.resetSchemaRegistryConfig"></a>

```csharp
private void ResetSchemaRegistryConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.schemaRegistryConfig">SchemaRegistryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.consumerGroupIdInput">ConsumerGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.schemaRegistryConfigInput">SchemaRegistryConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.consumerGroupId">ConsumerGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SchemaRegistryConfig`<sup>Required</sup> <a name="SchemaRegistryConfig" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.schemaRegistryConfig"></a>

```csharp
public LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference SchemaRegistryConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference</a>

---

##### `ConsumerGroupIdInput`<sup>Optional</sup> <a name="ConsumerGroupIdInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.consumerGroupIdInput"></a>

```csharp
public string ConsumerGroupIdInput { get; }
```

- *Type:* string

---

##### `SchemaRegistryConfigInput`<sup>Optional</sup> <a name="SchemaRegistryConfigInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.schemaRegistryConfigInput"></a>

```csharp
public IResolvable|LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig SchemaRegistryConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig</a>

---

##### `ConsumerGroupId`<sup>Required</sup> <a name="ConsumerGroupId" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.consumerGroupId"></a>

```csharp
public string ConsumerGroupId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig</a>

---


### LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList <a name="LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.get"></a>

```csharp
private LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.property.internalValue"></a>

```csharp
public IResolvable|LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs</a>[]

---


### LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference <a name="LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.resetUri">ResetUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetUri` <a name="ResetUri" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.resetUri"></a>

```csharp
private void ResetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs</a>

---


### LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference <a name="LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.putAccessConfigs">PutAccessConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.putSchemaValidationConfigs">PutSchemaValidationConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetAccessConfigs">ResetAccessConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetEventRecordFormat">ResetEventRecordFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetSchemaRegistryUri">ResetSchemaRegistryUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetSchemaValidationConfigs">ResetSchemaValidationConfigs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccessConfigs` <a name="PutAccessConfigs" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.putAccessConfigs"></a>

```csharp
private void PutAccessConfigs(IResolvable|LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.putAccessConfigs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs</a>[]

---

##### `PutSchemaValidationConfigs` <a name="PutSchemaValidationConfigs" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.putSchemaValidationConfigs"></a>

```csharp
private void PutSchemaValidationConfigs(IResolvable|LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.putSchemaValidationConfigs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs</a>[]

---

##### `ResetAccessConfigs` <a name="ResetAccessConfigs" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetAccessConfigs"></a>

```csharp
private void ResetAccessConfigs()
```

##### `ResetEventRecordFormat` <a name="ResetEventRecordFormat" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetEventRecordFormat"></a>

```csharp
private void ResetEventRecordFormat()
```

##### `ResetSchemaRegistryUri` <a name="ResetSchemaRegistryUri" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetSchemaRegistryUri"></a>

```csharp
private void ResetSchemaRegistryUri()
```

##### `ResetSchemaValidationConfigs` <a name="ResetSchemaValidationConfigs" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetSchemaValidationConfigs"></a>

```csharp
private void ResetSchemaValidationConfigs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.accessConfigs">AccessConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaValidationConfigs">SchemaValidationConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.accessConfigsInput">AccessConfigsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.eventRecordFormatInput">EventRecordFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaRegistryUriInput">SchemaRegistryUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaValidationConfigsInput">SchemaValidationConfigsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.eventRecordFormat">EventRecordFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaRegistryUri">SchemaRegistryUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessConfigs`<sup>Required</sup> <a name="AccessConfigs" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.accessConfigs"></a>

```csharp
public LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList AccessConfigs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList</a>

---

##### `SchemaValidationConfigs`<sup>Required</sup> <a name="SchemaValidationConfigs" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaValidationConfigs"></a>

```csharp
public LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList SchemaValidationConfigs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList</a>

---

##### `AccessConfigsInput`<sup>Optional</sup> <a name="AccessConfigsInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.accessConfigsInput"></a>

```csharp
public IResolvable|LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs[] AccessConfigsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs</a>[]

---

##### `EventRecordFormatInput`<sup>Optional</sup> <a name="EventRecordFormatInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.eventRecordFormatInput"></a>

```csharp
public string EventRecordFormatInput { get; }
```

- *Type:* string

---

##### `SchemaRegistryUriInput`<sup>Optional</sup> <a name="SchemaRegistryUriInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaRegistryUriInput"></a>

```csharp
public string SchemaRegistryUriInput { get; }
```

- *Type:* string

---

##### `SchemaValidationConfigsInput`<sup>Optional</sup> <a name="SchemaValidationConfigsInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaValidationConfigsInput"></a>

```csharp
public IResolvable|LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs[] SchemaValidationConfigsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs</a>[]

---

##### `EventRecordFormat`<sup>Required</sup> <a name="EventRecordFormat" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.eventRecordFormat"></a>

```csharp
public string EventRecordFormat { get; }
```

- *Type:* string

---

##### `SchemaRegistryUri`<sup>Required</sup> <a name="SchemaRegistryUri" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaRegistryUri"></a>

```csharp
public string SchemaRegistryUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig</a>

---


### LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList <a name="LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.get"></a>

```csharp
private LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.property.internalValue"></a>

```csharp
public IResolvable|LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs</a>[]

---


### LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference <a name="LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.resetAttribute">ResetAttribute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttribute` <a name="ResetAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.resetAttribute"></a>

```csharp
private void ResetAttribute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.property.attributeInput">AttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.property.attribute">Attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttributeInput`<sup>Optional</sup> <a name="AttributeInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.property.attributeInput"></a>

```csharp
public string AttributeInput { get; }
```

- *Type:* string

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.property.attribute"></a>

```csharp
public string Attribute { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs</a>

---


### LambdaEventSourceMappingSourceAccessConfigurationsList <a name="LambdaEventSourceMappingSourceAccessConfigurationsList" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaEventSourceMappingSourceAccessConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsList.get"></a>

```csharp
private LambdaEventSourceMappingSourceAccessConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurations">LambdaEventSourceMappingSourceAccessConfigurations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsList.property.internalValue"></a>

```csharp
public IResolvable|LambdaEventSourceMappingSourceAccessConfigurations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurations">LambdaEventSourceMappingSourceAccessConfigurations</a>[]

---


### LambdaEventSourceMappingSourceAccessConfigurationsOutputReference <a name="LambdaEventSourceMappingSourceAccessConfigurationsOutputReference" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaEventSourceMappingSourceAccessConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.resetUri">ResetUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetUri` <a name="ResetUri" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.resetUri"></a>

```csharp
private void ResetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurations">LambdaEventSourceMappingSourceAccessConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaEventSourceMappingSourceAccessConfigurations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurations">LambdaEventSourceMappingSourceAccessConfigurations</a>

---


### LambdaEventSourceMappingTagsList <a name="LambdaEventSourceMappingTagsList" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaEventSourceMappingTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsList.get"></a>

```csharp
private LambdaEventSourceMappingTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTags">LambdaEventSourceMappingTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsList.property.internalValue"></a>

```csharp
public IResolvable|LambdaEventSourceMappingTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTags">LambdaEventSourceMappingTags</a>[]

---


### LambdaEventSourceMappingTagsOutputReference <a name="LambdaEventSourceMappingTagsOutputReference" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaEventSourceMappingTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTags">LambdaEventSourceMappingTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaEventSourceMappingTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventSourceMapping.LambdaEventSourceMappingTags">LambdaEventSourceMappingTags</a>

---



