# `sqsQueue` Submodule <a name="`sqsQueue` Submodule" id="@cdktn/provider-awscc.sqsQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqsQueue <a name="SqsQueue" id="@cdktn/provider-awscc.sqsQueue.SqsQueue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue awscc_sqs_queue}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SqsQueue(Construct Scope, string Id, SqsQueueConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig">SqsQueueConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig">SqsQueueConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.resetContentBasedDeduplication">ResetContentBasedDeduplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.resetDeduplicationScope">ResetDeduplicationScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.resetDelaySeconds">ResetDelaySeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.resetFifoQueue">ResetFifoQueue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.resetFifoThroughputLimit">ResetFifoThroughputLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.resetKmsDataKeyReusePeriodSeconds">ResetKmsDataKeyReusePeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.resetKmsMasterKeyId">ResetKmsMasterKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.resetMaximumMessageSize">ResetMaximumMessageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.resetMessageRetentionPeriod">ResetMessageRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.resetQueueName">ResetQueueName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.resetReceiveMessageWaitTimeSeconds">ResetReceiveMessageWaitTimeSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.resetRedriveAllowPolicy">ResetRedriveAllowPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.resetRedrivePolicy">ResetRedrivePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.resetSqsManagedSseEnabled">ResetSqsManagedSseEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.resetVisibilityTimeout">ResetVisibilityTimeout</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.putTags"></a>

```csharp
private void PutTags(IResolvable|SqsQueueTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTags">SqsQueueTags</a>[]

---

##### `ResetContentBasedDeduplication` <a name="ResetContentBasedDeduplication" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.resetContentBasedDeduplication"></a>

```csharp
private void ResetContentBasedDeduplication()
```

##### `ResetDeduplicationScope` <a name="ResetDeduplicationScope" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.resetDeduplicationScope"></a>

```csharp
private void ResetDeduplicationScope()
```

##### `ResetDelaySeconds` <a name="ResetDelaySeconds" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.resetDelaySeconds"></a>

```csharp
private void ResetDelaySeconds()
```

##### `ResetFifoQueue` <a name="ResetFifoQueue" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.resetFifoQueue"></a>

```csharp
private void ResetFifoQueue()
```

##### `ResetFifoThroughputLimit` <a name="ResetFifoThroughputLimit" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.resetFifoThroughputLimit"></a>

```csharp
private void ResetFifoThroughputLimit()
```

##### `ResetKmsDataKeyReusePeriodSeconds` <a name="ResetKmsDataKeyReusePeriodSeconds" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.resetKmsDataKeyReusePeriodSeconds"></a>

```csharp
private void ResetKmsDataKeyReusePeriodSeconds()
```

##### `ResetKmsMasterKeyId` <a name="ResetKmsMasterKeyId" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.resetKmsMasterKeyId"></a>

```csharp
private void ResetKmsMasterKeyId()
```

##### `ResetMaximumMessageSize` <a name="ResetMaximumMessageSize" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.resetMaximumMessageSize"></a>

```csharp
private void ResetMaximumMessageSize()
```

##### `ResetMessageRetentionPeriod` <a name="ResetMessageRetentionPeriod" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.resetMessageRetentionPeriod"></a>

```csharp
private void ResetMessageRetentionPeriod()
```

##### `ResetQueueName` <a name="ResetQueueName" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.resetQueueName"></a>

```csharp
private void ResetQueueName()
```

##### `ResetReceiveMessageWaitTimeSeconds` <a name="ResetReceiveMessageWaitTimeSeconds" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.resetReceiveMessageWaitTimeSeconds"></a>

```csharp
private void ResetReceiveMessageWaitTimeSeconds()
```

##### `ResetRedriveAllowPolicy` <a name="ResetRedriveAllowPolicy" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.resetRedriveAllowPolicy"></a>

```csharp
private void ResetRedriveAllowPolicy()
```

##### `ResetRedrivePolicy` <a name="ResetRedrivePolicy" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.resetRedrivePolicy"></a>

```csharp
private void ResetRedrivePolicy()
```

##### `ResetSqsManagedSseEnabled` <a name="ResetSqsManagedSseEnabled" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.resetSqsManagedSseEnabled"></a>

```csharp
private void ResetSqsManagedSseEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetVisibilityTimeout` <a name="ResetVisibilityTimeout" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.resetVisibilityTimeout"></a>

```csharp
private void ResetVisibilityTimeout()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SqsQueue resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SqsQueue.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SqsQueue.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SqsQueue.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SqsQueue.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SqsQueue resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SqsQueue to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SqsQueue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SqsQueue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.queueUrl">QueueUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList">SqsQueueTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.contentBasedDeduplicationInput">ContentBasedDeduplicationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.deduplicationScopeInput">DeduplicationScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.delaySecondsInput">DelaySecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.fifoQueueInput">FifoQueueInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.fifoThroughputLimitInput">FifoThroughputLimitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.kmsDataKeyReusePeriodSecondsInput">KmsDataKeyReusePeriodSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.kmsMasterKeyIdInput">KmsMasterKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.maximumMessageSizeInput">MaximumMessageSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.messageRetentionPeriodInput">MessageRetentionPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.queueNameInput">QueueNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.receiveMessageWaitTimeSecondsInput">ReceiveMessageWaitTimeSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.redriveAllowPolicyInput">RedriveAllowPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.redrivePolicyInput">RedrivePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.sqsManagedSseEnabledInput">SqsManagedSseEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTags">SqsQueueTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.visibilityTimeoutInput">VisibilityTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.contentBasedDeduplication">ContentBasedDeduplication</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.deduplicationScope">DeduplicationScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.delaySeconds">DelaySeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.fifoQueue">FifoQueue</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.fifoThroughputLimit">FifoThroughputLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.kmsDataKeyReusePeriodSeconds">KmsDataKeyReusePeriodSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.kmsMasterKeyId">KmsMasterKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.maximumMessageSize">MaximumMessageSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.messageRetentionPeriod">MessageRetentionPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.queueName">QueueName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.receiveMessageWaitTimeSeconds">ReceiveMessageWaitTimeSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.redriveAllowPolicy">RedriveAllowPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.redrivePolicy">RedrivePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.sqsManagedSseEnabled">SqsManagedSseEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.visibilityTimeout">VisibilityTimeout</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `QueueUrl`<sup>Required</sup> <a name="QueueUrl" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.queueUrl"></a>

```csharp
public string QueueUrl { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.tags"></a>

```csharp
public SqsQueueTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList">SqsQueueTagsList</a>

---

##### `ContentBasedDeduplicationInput`<sup>Optional</sup> <a name="ContentBasedDeduplicationInput" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.contentBasedDeduplicationInput"></a>

```csharp
public bool|IResolvable ContentBasedDeduplicationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeduplicationScopeInput`<sup>Optional</sup> <a name="DeduplicationScopeInput" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.deduplicationScopeInput"></a>

```csharp
public string DeduplicationScopeInput { get; }
```

- *Type:* string

---

##### `DelaySecondsInput`<sup>Optional</sup> <a name="DelaySecondsInput" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.delaySecondsInput"></a>

```csharp
public double DelaySecondsInput { get; }
```

- *Type:* double

---

##### `FifoQueueInput`<sup>Optional</sup> <a name="FifoQueueInput" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.fifoQueueInput"></a>

```csharp
public bool|IResolvable FifoQueueInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FifoThroughputLimitInput`<sup>Optional</sup> <a name="FifoThroughputLimitInput" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.fifoThroughputLimitInput"></a>

```csharp
public string FifoThroughputLimitInput { get; }
```

- *Type:* string

---

##### `KmsDataKeyReusePeriodSecondsInput`<sup>Optional</sup> <a name="KmsDataKeyReusePeriodSecondsInput" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.kmsDataKeyReusePeriodSecondsInput"></a>

```csharp
public double KmsDataKeyReusePeriodSecondsInput { get; }
```

- *Type:* double

---

##### `KmsMasterKeyIdInput`<sup>Optional</sup> <a name="KmsMasterKeyIdInput" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.kmsMasterKeyIdInput"></a>

```csharp
public string KmsMasterKeyIdInput { get; }
```

- *Type:* string

---

##### `MaximumMessageSizeInput`<sup>Optional</sup> <a name="MaximumMessageSizeInput" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.maximumMessageSizeInput"></a>

```csharp
public double MaximumMessageSizeInput { get; }
```

- *Type:* double

---

##### `MessageRetentionPeriodInput`<sup>Optional</sup> <a name="MessageRetentionPeriodInput" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.messageRetentionPeriodInput"></a>

```csharp
public double MessageRetentionPeriodInput { get; }
```

- *Type:* double

---

##### `QueueNameInput`<sup>Optional</sup> <a name="QueueNameInput" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.queueNameInput"></a>

```csharp
public string QueueNameInput { get; }
```

- *Type:* string

---

##### `ReceiveMessageWaitTimeSecondsInput`<sup>Optional</sup> <a name="ReceiveMessageWaitTimeSecondsInput" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.receiveMessageWaitTimeSecondsInput"></a>

```csharp
public double ReceiveMessageWaitTimeSecondsInput { get; }
```

- *Type:* double

---

##### `RedriveAllowPolicyInput`<sup>Optional</sup> <a name="RedriveAllowPolicyInput" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.redriveAllowPolicyInput"></a>

```csharp
public string RedriveAllowPolicyInput { get; }
```

- *Type:* string

---

##### `RedrivePolicyInput`<sup>Optional</sup> <a name="RedrivePolicyInput" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.redrivePolicyInput"></a>

```csharp
public string RedrivePolicyInput { get; }
```

- *Type:* string

---

##### `SqsManagedSseEnabledInput`<sup>Optional</sup> <a name="SqsManagedSseEnabledInput" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.sqsManagedSseEnabledInput"></a>

```csharp
public bool|IResolvable SqsManagedSseEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.tagsInput"></a>

```csharp
public IResolvable|SqsQueueTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTags">SqsQueueTags</a>[]

---

##### `VisibilityTimeoutInput`<sup>Optional</sup> <a name="VisibilityTimeoutInput" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.visibilityTimeoutInput"></a>

```csharp
public double VisibilityTimeoutInput { get; }
```

- *Type:* double

---

##### `ContentBasedDeduplication`<sup>Required</sup> <a name="ContentBasedDeduplication" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.contentBasedDeduplication"></a>

```csharp
public bool|IResolvable ContentBasedDeduplication { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeduplicationScope`<sup>Required</sup> <a name="DeduplicationScope" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.deduplicationScope"></a>

```csharp
public string DeduplicationScope { get; }
```

- *Type:* string

---

##### `DelaySeconds`<sup>Required</sup> <a name="DelaySeconds" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.delaySeconds"></a>

```csharp
public double DelaySeconds { get; }
```

- *Type:* double

---

##### `FifoQueue`<sup>Required</sup> <a name="FifoQueue" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.fifoQueue"></a>

```csharp
public bool|IResolvable FifoQueue { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FifoThroughputLimit`<sup>Required</sup> <a name="FifoThroughputLimit" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.fifoThroughputLimit"></a>

```csharp
public string FifoThroughputLimit { get; }
```

- *Type:* string

---

##### `KmsDataKeyReusePeriodSeconds`<sup>Required</sup> <a name="KmsDataKeyReusePeriodSeconds" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.kmsDataKeyReusePeriodSeconds"></a>

```csharp
public double KmsDataKeyReusePeriodSeconds { get; }
```

- *Type:* double

---

##### `KmsMasterKeyId`<sup>Required</sup> <a name="KmsMasterKeyId" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.kmsMasterKeyId"></a>

```csharp
public string KmsMasterKeyId { get; }
```

- *Type:* string

---

##### `MaximumMessageSize`<sup>Required</sup> <a name="MaximumMessageSize" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.maximumMessageSize"></a>

```csharp
public double MaximumMessageSize { get; }
```

- *Type:* double

---

##### `MessageRetentionPeriod`<sup>Required</sup> <a name="MessageRetentionPeriod" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.messageRetentionPeriod"></a>

```csharp
public double MessageRetentionPeriod { get; }
```

- *Type:* double

---

##### `QueueName`<sup>Required</sup> <a name="QueueName" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.queueName"></a>

```csharp
public string QueueName { get; }
```

- *Type:* string

---

##### `ReceiveMessageWaitTimeSeconds`<sup>Required</sup> <a name="ReceiveMessageWaitTimeSeconds" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.receiveMessageWaitTimeSeconds"></a>

```csharp
public double ReceiveMessageWaitTimeSeconds { get; }
```

- *Type:* double

---

##### `RedriveAllowPolicy`<sup>Required</sup> <a name="RedriveAllowPolicy" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.redriveAllowPolicy"></a>

```csharp
public string RedriveAllowPolicy { get; }
```

- *Type:* string

---

##### `RedrivePolicy`<sup>Required</sup> <a name="RedrivePolicy" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.redrivePolicy"></a>

```csharp
public string RedrivePolicy { get; }
```

- *Type:* string

---

##### `SqsManagedSseEnabled`<sup>Required</sup> <a name="SqsManagedSseEnabled" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.sqsManagedSseEnabled"></a>

```csharp
public bool|IResolvable SqsManagedSseEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `VisibilityTimeout`<sup>Required</sup> <a name="VisibilityTimeout" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.visibilityTimeout"></a>

```csharp
public double VisibilityTimeout { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueue.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.sqsQueue.SqsQueue.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SqsQueueConfig <a name="SqsQueueConfig" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SqsQueueConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    bool|IResolvable ContentBasedDeduplication = null,
    string DeduplicationScope = null,
    double DelaySeconds = null,
    bool|IResolvable FifoQueue = null,
    string FifoThroughputLimit = null,
    double KmsDataKeyReusePeriodSeconds = null,
    string KmsMasterKeyId = null,
    double MaximumMessageSize = null,
    double MessageRetentionPeriod = null,
    string QueueName = null,
    double ReceiveMessageWaitTimeSeconds = null,
    string RedriveAllowPolicy = null,
    string RedrivePolicy = null,
    bool|IResolvable SqsManagedSseEnabled = null,
    IResolvable|SqsQueueTags[] Tags = null,
    double VisibilityTimeout = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.contentBasedDeduplication">ContentBasedDeduplication</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | For first-in-first-out (FIFO) queues, specifies whether to enable content-based deduplication. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.deduplicationScope">DeduplicationScope</a></code> | <code>string</code> | For high throughput for FIFO queues, specifies whether message deduplication occurs at the message group or queue level. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.delaySeconds">DelaySeconds</a></code> | <code>double</code> | The time in seconds for which the delivery of all messages in the queue is delayed. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.fifoQueue">FifoQueue</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If set to true, creates a FIFO queue. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.fifoThroughputLimit">FifoThroughputLimit</a></code> | <code>string</code> | For high throughput for FIFO queues, specifies whether the FIFO queue throughput quota applies to the entire queue or per message group. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.kmsDataKeyReusePeriodSeconds">KmsDataKeyReusePeriodSeconds</a></code> | <code>double</code> | The length of time in seconds for which SQS can reuse a data key to encrypt or decrypt messages before calling KMS again. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.kmsMasterKeyId">KmsMasterKeyId</a></code> | <code>string</code> | The ID of an AWS Key Management Service (KMS) for SQS, or a custom KMS. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.maximumMessageSize">MaximumMessageSize</a></code> | <code>double</code> | The limit of how many bytes that a message can contain before SQS rejects it. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.messageRetentionPeriod">MessageRetentionPeriod</a></code> | <code>double</code> | The number of seconds that SQS retains a message. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.queueName">QueueName</a></code> | <code>string</code> | A name for the queue. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.receiveMessageWaitTimeSeconds">ReceiveMessageWaitTimeSeconds</a></code> | <code>double</code> | Specifies the duration, in seconds, that the ReceiveMessage action call waits until a message is in the queue in order to include it in the response, rather than returning an empty response if a message isn't yet available. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.redriveAllowPolicy">RedriveAllowPolicy</a></code> | <code>string</code> | The string that includes the parameters for the permissions for the dead-letter queue redrive permission and which source queues can specify dead-letter queues as a JSON object. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.redrivePolicy">RedrivePolicy</a></code> | <code>string</code> | The string that includes the parameters for the dead-letter queue functionality of the source queue as a JSON object. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.sqsManagedSseEnabled">SqsManagedSseEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Enables server-side queue encryption using SQS owned encryption keys. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTags">SqsQueueTags</a>[]</code> | The tags that you attach to this queue. For more information, see [Resource tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) in the *User Guide*. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.visibilityTimeout">VisibilityTimeout</a></code> | <code>double</code> | The length of time during which a message will be unavailable after a message is delivered from the queue. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ContentBasedDeduplication`<sup>Optional</sup> <a name="ContentBasedDeduplication" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.contentBasedDeduplication"></a>

```csharp
public bool|IResolvable ContentBasedDeduplication { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

For first-in-first-out (FIFO) queues, specifies whether to enable content-based deduplication.

During the deduplication interval, SQS treats messages that are sent with identical content as duplicates and delivers only one copy of the message. For more information, see the `ContentBasedDeduplication` attribute for the `CreateQueue` action in the *API Reference*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#content_based_deduplication SqsQueue#content_based_deduplication}

---

##### `DeduplicationScope`<sup>Optional</sup> <a name="DeduplicationScope" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.deduplicationScope"></a>

```csharp
public string DeduplicationScope { get; set; }
```

- *Type:* string

For high throughput for FIFO queues, specifies whether message deduplication occurs at the message group or queue level.

Valid values are `messageGroup` and `queue`.
To enable high throughput for a FIFO queue, set this attribute to `messageGroup`*and* set the `FifoThroughputLimit` attribute to `perMessageGroupId`. If you set these attributes to anything other than these values, normal throughput is in effect and deduplication occurs as specified. For more information, see [High throughput for FIFO queues](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/high-throughput-fifo.html) and [Quotas related to messages](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/quotas-messages.html) in the *Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#deduplication_scope SqsQueue#deduplication_scope}

---

##### `DelaySeconds`<sup>Optional</sup> <a name="DelaySeconds" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.delaySeconds"></a>

```csharp
public double DelaySeconds { get; set; }
```

- *Type:* double

The time in seconds for which the delivery of all messages in the queue is delayed.

You can specify an integer value of `0` to `900` (15 minutes). The default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#delay_seconds SqsQueue#delay_seconds}

---

##### `FifoQueue`<sup>Optional</sup> <a name="FifoQueue" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.fifoQueue"></a>

```csharp
public bool|IResolvable FifoQueue { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If set to true, creates a FIFO queue.

If you don't specify this property, SQS creates a standard queue. For more information, see [Amazon SQS FIFO queues](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-fifo-queues.html) in the *Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#fifo_queue SqsQueue#fifo_queue}

---

##### `FifoThroughputLimit`<sup>Optional</sup> <a name="FifoThroughputLimit" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.fifoThroughputLimit"></a>

```csharp
public string FifoThroughputLimit { get; set; }
```

- *Type:* string

For high throughput for FIFO queues, specifies whether the FIFO queue throughput quota applies to the entire queue or per message group.

Valid values are `perQueue` and `perMessageGroupId`.
To enable high throughput for a FIFO queue, set this attribute to `perMessageGroupId`*and* set the `DeduplicationScope` attribute to `messageGroup`. If you set these attributes to anything other than these values, normal throughput is in effect and deduplication occurs as specified. For more information, see [High throughput for FIFO queues](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/high-throughput-fifo.html) and [Quotas related to messages](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/quotas-messages.html) in the *Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#fifo_throughput_limit SqsQueue#fifo_throughput_limit}

---

##### `KmsDataKeyReusePeriodSeconds`<sup>Optional</sup> <a name="KmsDataKeyReusePeriodSeconds" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.kmsDataKeyReusePeriodSeconds"></a>

```csharp
public double KmsDataKeyReusePeriodSeconds { get; set; }
```

- *Type:* double

The length of time in seconds for which SQS can reuse a data key to encrypt or decrypt messages before calling KMS again.

The value must be an integer between 60 (1 minute) and 86,400 (24 hours). The default is 300 (5 minutes).
A shorter time period provides better security, but results in more calls to KMS, which might incur charges after Free Tier. For more information, see [Encryption at rest](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html#sqs-how-does-the-data-key-reuse-period-work) in the *Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#kms_data_key_reuse_period_seconds SqsQueue#kms_data_key_reuse_period_seconds}

---

##### `KmsMasterKeyId`<sup>Optional</sup> <a name="KmsMasterKeyId" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.kmsMasterKeyId"></a>

```csharp
public string KmsMasterKeyId { get; set; }
```

- *Type:* string

The ID of an AWS Key Management Service (KMS) for SQS, or a custom KMS.

To use the AWS managed KMS for SQS, specify a (default) alias ARN, alias name (for example `alias/aws/sqs`), key ARN, or key ID. For more information, see the following:

* [Encryption at rest](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html) in the *Developer Guide*
* [CreateQueue](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_CreateQueue.html) in the *API Reference*
* [Request Parameters](https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestParameters) in the *Key Management Service API Reference*
* The Key Management Service (KMS) section of the [Security best practices for Key Management Service](https://docs.aws.amazon.com/kms/latest/developerguide/best-practices.html) in the *Key Management Service Developer Guide*

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#kms_master_key_id SqsQueue#kms_master_key_id}

---

##### `MaximumMessageSize`<sup>Optional</sup> <a name="MaximumMessageSize" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.maximumMessageSize"></a>

```csharp
public double MaximumMessageSize { get; set; }
```

- *Type:* double

The limit of how many bytes that a message can contain before SQS rejects it.

You can specify an integer from 1,024 bytes (1 KiB) to 1,048,576 bytes (1 MiB). Default: 1,048,576 bytes (1 MiB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#maximum_message_size SqsQueue#maximum_message_size}

---

##### `MessageRetentionPeriod`<sup>Optional</sup> <a name="MessageRetentionPeriod" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.messageRetentionPeriod"></a>

```csharp
public double MessageRetentionPeriod { get; set; }
```

- *Type:* double

The number of seconds that SQS retains a message.

You can specify an integer value from `60` seconds (1 minute) to `1,209,600` seconds (14 days). The default value is `345,600` seconds (4 days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#message_retention_period SqsQueue#message_retention_period}

---

##### `QueueName`<sup>Optional</sup> <a name="QueueName" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.queueName"></a>

```csharp
public string QueueName { get; set; }
```

- *Type:* string

A name for the queue.

To create a FIFO queue, the name of your FIFO queue must end with the `.fifo` suffix. For more information, see [Amazon SQS FIFO queues](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-fifo-queues.html) in the *Developer Guide*.
If you don't specify a name, CFN generates a unique physical ID and uses that ID for the queue name. For more information, see [Name type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html) in the *User Guide*.
If you specify a name, you can't perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#queue_name SqsQueue#queue_name}

---

##### `ReceiveMessageWaitTimeSeconds`<sup>Optional</sup> <a name="ReceiveMessageWaitTimeSeconds" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.receiveMessageWaitTimeSeconds"></a>

```csharp
public double ReceiveMessageWaitTimeSeconds { get; set; }
```

- *Type:* double

Specifies the duration, in seconds, that the ReceiveMessage action call waits until a message is in the queue in order to include it in the response, rather than returning an empty response if a message isn't yet available.

You can specify an integer from 1 to 20. Short polling is used as the default or when you specify 0 for this property. For more information, see [Consuming messages using long polling](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-short-and-long-polling.html#sqs-long-polling) in the *Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#receive_message_wait_time_seconds SqsQueue#receive_message_wait_time_seconds}

---

##### `RedriveAllowPolicy`<sup>Optional</sup> <a name="RedriveAllowPolicy" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.redriveAllowPolicy"></a>

```csharp
public string RedriveAllowPolicy { get; set; }
```

- *Type:* string

The string that includes the parameters for the permissions for the dead-letter queue redrive permission and which source queues can specify dead-letter queues as a JSON object.

The parameters are as follows:

* `redrivePermission`: The permission type that defines which source queues can specify the current queue as the dead-letter queue. Valid values are:
* `allowAll`: (Default) Any source queues in this AWS account in the same Region can specify this queue as the dead-letter queue.
* `denyAll`: No source queues can specify this queue as the dead-letter queue.
* `byQueue`: Only queues specified by the `sourceQueueArns` parameter can specify this queue as the dead-letter queue.
* `sourceQueueArns`: The Amazon Resource Names (ARN)s of the source queues that can specify this queue as the dead-letter queue and redrive messages. You can specify this parameter only when the `redrivePermission` parameter is set to `byQueue`. You can specify up to 10 source queue ARNs. To allow more than 10 source queues to specify dead-letter queues, set the `redrivePermission` parameter to `allowAll`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#redrive_allow_policy SqsQueue#redrive_allow_policy}

---

##### `RedrivePolicy`<sup>Optional</sup> <a name="RedrivePolicy" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.redrivePolicy"></a>

```csharp
public string RedrivePolicy { get; set; }
```

- *Type:* string

The string that includes the parameters for the dead-letter queue functionality of the source queue as a JSON object.

The parameters are as follows:

* `deadLetterTargetArn`: The Amazon Resource Name (ARN) of the dead-letter queue to which SQS moves messages after the value of `maxReceiveCount` is exceeded.
* `maxReceiveCount`: The number of times a message is received by a consumer of the source queue before being moved to the dead-letter queue. When the `ReceiveCount` for a message exceeds the `maxReceiveCount` for a queue, SQS moves the message to the dead-letter-queue.

The dead-letter queue of a FIFO queue must also be a FIFO queue. Similarly, the dead-letter queue of a standard queue must also be a standard queue.
*JSON*
`{ "deadLetterTargetArn" : String, "maxReceiveCount" : Integer }`
*YAML*
`deadLetterTargetArn : String`
`maxReceiveCount : Integer`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#redrive_policy SqsQueue#redrive_policy}

---

##### `SqsManagedSseEnabled`<sup>Optional</sup> <a name="SqsManagedSseEnabled" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.sqsManagedSseEnabled"></a>

```csharp
public bool|IResolvable SqsManagedSseEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Enables server-side queue encryption using SQS owned encryption keys.

Only one server-side encryption option is supported per queue (for example, [SSE-KMS](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sse-existing-queue.html) or [SSE-SQS](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sqs-sse-queue.html)). When `SqsManagedSseEnabled` is not defined, `SSE-SQS` encryption is enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#sqs_managed_sse_enabled SqsQueue#sqs_managed_sse_enabled}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.tags"></a>

```csharp
public IResolvable|SqsQueueTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTags">SqsQueueTags</a>[]

The tags that you attach to this queue. For more information, see [Resource tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) in the *User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#tags SqsQueue#tags}

---

##### `VisibilityTimeout`<sup>Optional</sup> <a name="VisibilityTimeout" id="@cdktn/provider-awscc.sqsQueue.SqsQueueConfig.property.visibilityTimeout"></a>

```csharp
public double VisibilityTimeout { get; set; }
```

- *Type:* double

The length of time during which a message will be unavailable after a message is delivered from the queue.

This blocks other components from receiving the same message and gives the initial component time to process and delete the message from the queue.
Values must be from 0 to 43,200 seconds (12 hours). If you don't specify a value, AWS CloudFormation uses the default value of 30 seconds.
For more information about SQS queue visibility timeouts, see [Visibility timeout](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html) in the *Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#visibility_timeout SqsQueue#visibility_timeout}

---

### SqsQueueTags <a name="SqsQueueTags" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SqsQueueTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#key SqsQueue#key}. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#value SqsQueue#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#key SqsQueue#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#value SqsQueue#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### SqsQueueTagsList <a name="SqsQueueTagsList" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SqsQueueTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.get"></a>

```csharp
private SqsQueueTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTags">SqsQueueTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsList.property.internalValue"></a>

```csharp
public IResolvable|SqsQueueTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTags">SqsQueueTags</a>[]

---


### SqsQueueTagsOutputReference <a name="SqsQueueTagsOutputReference" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SqsQueueTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTags">SqsQueueTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sqsQueue.SqsQueueTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SqsQueueTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sqsQueue.SqsQueueTags">SqsQueueTags</a>

---



