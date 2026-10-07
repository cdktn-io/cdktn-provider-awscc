# `eventsv2Subscriber` Submodule <a name="`eventsv2Subscriber` Submodule" id="@cdktn/provider-awscc.eventsv2Subscriber"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Eventsv2Subscriber <a name="Eventsv2Subscriber" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber awscc_eventsv2_subscriber}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2Subscriber(Construct Scope, string Id, Eventsv2SubscriberConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig">Eventsv2SubscriberConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig">Eventsv2SubscriberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putBatchConfiguration">PutBatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putFilterConfiguration">PutFilterConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putInvokeConfiguration">PutInvokeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putLogConfiguration">PutLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putOnFailureConfiguration">PutOnFailureConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putPointInTimeConfiguration">PutPointInTimeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putRetryPolicy">PutRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putTransformer">PutTransformer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetBatchConfiguration">ResetBatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetFilterConfiguration">ResetFilterConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetLogConfiguration">ResetLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetOnFailureConfiguration">ResetOnFailureConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetPointInTimeConfiguration">ResetPointInTimeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetResumePosition">ResetResumePosition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetRetryPolicy">ResetRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetStartingPosition">ResetStartingPosition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetTransformer">ResetTransformer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBatchConfiguration` <a name="PutBatchConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putBatchConfiguration"></a>

```csharp
private void PutBatchConfiguration(Eventsv2SubscriberBatchConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putBatchConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfiguration">Eventsv2SubscriberBatchConfiguration</a>

---

##### `PutFilterConfiguration` <a name="PutFilterConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putFilterConfiguration"></a>

```csharp
private void PutFilterConfiguration(Eventsv2SubscriberFilterConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putFilterConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfiguration">Eventsv2SubscriberFilterConfiguration</a>

---

##### `PutInvokeConfiguration` <a name="PutInvokeConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putInvokeConfiguration"></a>

```csharp
private void PutInvokeConfiguration(Eventsv2SubscriberInvokeConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putInvokeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration">Eventsv2SubscriberInvokeConfiguration</a>

---

##### `PutLogConfiguration` <a name="PutLogConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putLogConfiguration"></a>

```csharp
private void PutLogConfiguration(Eventsv2SubscriberLogConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putLogConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfiguration">Eventsv2SubscriberLogConfiguration</a>

---

##### `PutOnFailureConfiguration` <a name="PutOnFailureConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putOnFailureConfiguration"></a>

```csharp
private void PutOnFailureConfiguration(Eventsv2SubscriberOnFailureConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putOnFailureConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfiguration">Eventsv2SubscriberOnFailureConfiguration</a>

---

##### `PutPointInTimeConfiguration` <a name="PutPointInTimeConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putPointInTimeConfiguration"></a>

```csharp
private void PutPointInTimeConfiguration(Eventsv2SubscriberPointInTimeConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putPointInTimeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfiguration">Eventsv2SubscriberPointInTimeConfiguration</a>

---

##### `PutRetryPolicy` <a name="PutRetryPolicy" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putRetryPolicy"></a>

```csharp
private void PutRetryPolicy(Eventsv2SubscriberRetryPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putRetryPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicy">Eventsv2SubscriberRetryPolicy</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putTags"></a>

```csharp
private void PutTags(IResolvable|Eventsv2SubscriberTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTags">Eventsv2SubscriberTags</a>[]

---

##### `PutTransformer` <a name="PutTransformer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putTransformer"></a>

```csharp
private void PutTransformer(Eventsv2SubscriberTransformer Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putTransformer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformer">Eventsv2SubscriberTransformer</a>

---

##### `ResetBatchConfiguration` <a name="ResetBatchConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetBatchConfiguration"></a>

```csharp
private void ResetBatchConfiguration()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFilterConfiguration` <a name="ResetFilterConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetFilterConfiguration"></a>

```csharp
private void ResetFilterConfiguration()
```

##### `ResetLogConfiguration` <a name="ResetLogConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetLogConfiguration"></a>

```csharp
private void ResetLogConfiguration()
```

##### `ResetOnFailureConfiguration` <a name="ResetOnFailureConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetOnFailureConfiguration"></a>

```csharp
private void ResetOnFailureConfiguration()
```

##### `ResetPointInTimeConfiguration` <a name="ResetPointInTimeConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetPointInTimeConfiguration"></a>

```csharp
private void ResetPointInTimeConfiguration()
```

##### `ResetResumePosition` <a name="ResetResumePosition" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetResumePosition"></a>

```csharp
private void ResetResumePosition()
```

##### `ResetRetryPolicy` <a name="ResetRetryPolicy" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetRetryPolicy"></a>

```csharp
private void ResetRetryPolicy()
```

##### `ResetStartingPosition` <a name="ResetStartingPosition" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetStartingPosition"></a>

```csharp
private void ResetStartingPosition()
```

##### `ResetState` <a name="ResetState" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTransformer` <a name="ResetTransformer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetTransformer"></a>

```csharp
private void ResetTransformer()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Eventsv2Subscriber resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Eventsv2Subscriber.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Eventsv2Subscriber.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Eventsv2Subscriber.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Eventsv2Subscriber.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Eventsv2Subscriber resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Eventsv2Subscriber to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Eventsv2Subscriber that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Eventsv2Subscriber to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.batchConfiguration">BatchConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference">Eventsv2SubscriberBatchConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.busName">BusName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.filterConfiguration">FilterConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference">Eventsv2SubscriberFilterConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.invokeConfiguration">InvokeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference">Eventsv2SubscriberInvokeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.lastModifiedTime">LastModifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.logConfiguration">LogConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference">Eventsv2SubscriberLogConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.onFailureConfiguration">OnFailureConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference">Eventsv2SubscriberOnFailureConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.pointInTimeConfiguration">PointInTimeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference">Eventsv2SubscriberPointInTimeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.retryPolicy">RetryPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference">Eventsv2SubscriberRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.subscriberArn">SubscriberArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList">Eventsv2SubscriberTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.transformer">Transformer</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference">Eventsv2SubscriberTransformerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.batchConfigurationInput">BatchConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfiguration">Eventsv2SubscriberBatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.eventBusArnInput">EventBusArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.filterConfigurationInput">FilterConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfiguration">Eventsv2SubscriberFilterConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.invokeConfigurationInput">InvokeConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration">Eventsv2SubscriberInvokeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.logConfigurationInput">LogConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfiguration">Eventsv2SubscriberLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.onFailureConfigurationInput">OnFailureConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfiguration">Eventsv2SubscriberOnFailureConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.pointInTimeConfigurationInput">PointInTimeConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfiguration">Eventsv2SubscriberPointInTimeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.resumePositionInput">ResumePositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.retryPolicyInput">RetryPolicyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicy">Eventsv2SubscriberRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.startingPositionInput">StartingPositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTags">Eventsv2SubscriberTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.transformerInput">TransformerInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformer">Eventsv2SubscriberTransformer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.eventBusArn">EventBusArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.resumePosition">ResumePosition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.startingPosition">StartingPosition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BatchConfiguration`<sup>Required</sup> <a name="BatchConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.batchConfiguration"></a>

```csharp
public Eventsv2SubscriberBatchConfigurationOutputReference BatchConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference">Eventsv2SubscriberBatchConfigurationOutputReference</a>

---

##### `BusName`<sup>Required</sup> <a name="BusName" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.busName"></a>

```csharp
public string BusName { get; }
```

- *Type:* string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `FilterConfiguration`<sup>Required</sup> <a name="FilterConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.filterConfiguration"></a>

```csharp
public Eventsv2SubscriberFilterConfigurationOutputReference FilterConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference">Eventsv2SubscriberFilterConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InvokeConfiguration`<sup>Required</sup> <a name="InvokeConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.invokeConfiguration"></a>

```csharp
public Eventsv2SubscriberInvokeConfigurationOutputReference InvokeConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference">Eventsv2SubscriberInvokeConfigurationOutputReference</a>

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.lastModifiedTime"></a>

```csharp
public string LastModifiedTime { get; }
```

- *Type:* string

---

##### `LogConfiguration`<sup>Required</sup> <a name="LogConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.logConfiguration"></a>

```csharp
public Eventsv2SubscriberLogConfigurationOutputReference LogConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference">Eventsv2SubscriberLogConfigurationOutputReference</a>

---

##### `OnFailureConfiguration`<sup>Required</sup> <a name="OnFailureConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.onFailureConfiguration"></a>

```csharp
public Eventsv2SubscriberOnFailureConfigurationOutputReference OnFailureConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference">Eventsv2SubscriberOnFailureConfigurationOutputReference</a>

---

##### `PointInTimeConfiguration`<sup>Required</sup> <a name="PointInTimeConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.pointInTimeConfiguration"></a>

```csharp
public Eventsv2SubscriberPointInTimeConfigurationOutputReference PointInTimeConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference">Eventsv2SubscriberPointInTimeConfigurationOutputReference</a>

---

##### `RetryPolicy`<sup>Required</sup> <a name="RetryPolicy" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.retryPolicy"></a>

```csharp
public Eventsv2SubscriberRetryPolicyOutputReference RetryPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference">Eventsv2SubscriberRetryPolicyOutputReference</a>

---

##### `SubscriberArn`<sup>Required</sup> <a name="SubscriberArn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.subscriberArn"></a>

```csharp
public string SubscriberArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.tags"></a>

```csharp
public Eventsv2SubscriberTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList">Eventsv2SubscriberTagsList</a>

---

##### `Transformer`<sup>Required</sup> <a name="Transformer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.transformer"></a>

```csharp
public Eventsv2SubscriberTransformerOutputReference Transformer { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference">Eventsv2SubscriberTransformerOutputReference</a>

---

##### `BatchConfigurationInput`<sup>Optional</sup> <a name="BatchConfigurationInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.batchConfigurationInput"></a>

```csharp
public IResolvable|Eventsv2SubscriberBatchConfiguration BatchConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfiguration">Eventsv2SubscriberBatchConfiguration</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EventBusArnInput`<sup>Optional</sup> <a name="EventBusArnInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.eventBusArnInput"></a>

```csharp
public string EventBusArnInput { get; }
```

- *Type:* string

---

##### `FilterConfigurationInput`<sup>Optional</sup> <a name="FilterConfigurationInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.filterConfigurationInput"></a>

```csharp
public IResolvable|Eventsv2SubscriberFilterConfiguration FilterConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfiguration">Eventsv2SubscriberFilterConfiguration</a>

---

##### `InvokeConfigurationInput`<sup>Optional</sup> <a name="InvokeConfigurationInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.invokeConfigurationInput"></a>

```csharp
public IResolvable|Eventsv2SubscriberInvokeConfiguration InvokeConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration">Eventsv2SubscriberInvokeConfiguration</a>

---

##### `LogConfigurationInput`<sup>Optional</sup> <a name="LogConfigurationInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.logConfigurationInput"></a>

```csharp
public IResolvable|Eventsv2SubscriberLogConfiguration LogConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfiguration">Eventsv2SubscriberLogConfiguration</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OnFailureConfigurationInput`<sup>Optional</sup> <a name="OnFailureConfigurationInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.onFailureConfigurationInput"></a>

```csharp
public IResolvable|Eventsv2SubscriberOnFailureConfiguration OnFailureConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfiguration">Eventsv2SubscriberOnFailureConfiguration</a>

---

##### `PointInTimeConfigurationInput`<sup>Optional</sup> <a name="PointInTimeConfigurationInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.pointInTimeConfigurationInput"></a>

```csharp
public IResolvable|Eventsv2SubscriberPointInTimeConfiguration PointInTimeConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfiguration">Eventsv2SubscriberPointInTimeConfiguration</a>

---

##### `ResumePositionInput`<sup>Optional</sup> <a name="ResumePositionInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.resumePositionInput"></a>

```csharp
public string ResumePositionInput { get; }
```

- *Type:* string

---

##### `RetryPolicyInput`<sup>Optional</sup> <a name="RetryPolicyInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.retryPolicyInput"></a>

```csharp
public IResolvable|Eventsv2SubscriberRetryPolicy RetryPolicyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicy">Eventsv2SubscriberRetryPolicy</a>

---

##### `StartingPositionInput`<sup>Optional</sup> <a name="StartingPositionInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.startingPositionInput"></a>

```csharp
public string StartingPositionInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.tagsInput"></a>

```csharp
public IResolvable|Eventsv2SubscriberTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTags">Eventsv2SubscriberTags</a>[]

---

##### `TransformerInput`<sup>Optional</sup> <a name="TransformerInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.transformerInput"></a>

```csharp
public IResolvable|Eventsv2SubscriberTransformer TransformerInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformer">Eventsv2SubscriberTransformer</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EventBusArn`<sup>Required</sup> <a name="EventBusArn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.eventBusArn"></a>

```csharp
public string EventBusArn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResumePosition`<sup>Required</sup> <a name="ResumePosition" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.resumePosition"></a>

```csharp
public string ResumePosition { get; }
```

- *Type:* string

---

##### `StartingPosition`<sup>Required</sup> <a name="StartingPosition" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.startingPosition"></a>

```csharp
public string StartingPosition { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Eventsv2SubscriberBatchConfiguration <a name="Eventsv2SubscriberBatchConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2SubscriberBatchConfiguration {
    double MaxBatchSize = null,
    double MaxBatchWindowInSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfiguration.property.maxBatchSize">MaxBatchSize</a></code> | <code>double</code> | The maximum number of events in a single batch delivered to the target. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfiguration.property.maxBatchWindowInSeconds">MaxBatchWindowInSeconds</a></code> | <code>double</code> | The maximum time in seconds to wait for a batch to fill before delivering it, 0-300. |

---

##### `MaxBatchSize`<sup>Optional</sup> <a name="MaxBatchSize" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfiguration.property.maxBatchSize"></a>

```csharp
public double MaxBatchSize { get; set; }
```

- *Type:* double

The maximum number of events in a single batch delivered to the target.

The maximum depends on the target: 500 for Kinesis Data Streams and Amazon Data Firehose, 100 for Lambda, Step Functions, and AWS::EventsV2::EventBus targets, 10 for Amazon SQS, Amazon SNS, and AWS::Events::EventBus targets, and 1 for API Gateway, API destinations, and universal service integration targets. The service rejects a value above the target's maximum. Fewer events may be delivered when the batch window elapses. When omitted, the default is 10 for Lambda and Step Functions targets and the target's maximum for other targets. The resolved value applied by the service is returned on read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#max_batch_size Eventsv2Subscriber#max_batch_size}

---

##### `MaxBatchWindowInSeconds`<sup>Optional</sup> <a name="MaxBatchWindowInSeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfiguration.property.maxBatchWindowInSeconds"></a>

```csharp
public double MaxBatchWindowInSeconds { get; set; }
```

- *Type:* double

The maximum time in seconds to wait for a batch to fill before delivering it, 0-300.

The default is 0 (no wait). The resolved value applied by the service is returned on read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#max_batch_window_in_seconds Eventsv2Subscriber#max_batch_window_in_seconds}

---

### Eventsv2SubscriberConfig <a name="Eventsv2SubscriberConfig" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2SubscriberConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string EventBusArn,
    Eventsv2SubscriberInvokeConfiguration InvokeConfiguration,
    string Name,
    Eventsv2SubscriberBatchConfiguration BatchConfiguration = null,
    string Description = null,
    Eventsv2SubscriberFilterConfiguration FilterConfiguration = null,
    Eventsv2SubscriberLogConfiguration LogConfiguration = null,
    Eventsv2SubscriberOnFailureConfiguration OnFailureConfiguration = null,
    Eventsv2SubscriberPointInTimeConfiguration PointInTimeConfiguration = null,
    string ResumePosition = null,
    Eventsv2SubscriberRetryPolicy RetryPolicy = null,
    string StartingPosition = null,
    string State = null,
    IResolvable|Eventsv2SubscriberTags[] Tags = null,
    Eventsv2SubscriberTransformer Transformer = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.eventBusArn">EventBusArn</a></code> | <code>string</code> | The ARN of the event bus this subscriber belongs to. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.invokeConfiguration">InvokeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration">Eventsv2SubscriberInvokeConfiguration</a></code> | Configuration for how the subscriber invokes its target, including the target ARN, the IAM role used to invoke it, and, optionally, the target-specific parameters object that matches the target type. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.name">Name</a></code> | <code>string</code> | The name of the subscriber. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.batchConfiguration">BatchConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfiguration">Eventsv2SubscriberBatchConfiguration</a></code> | Configuration for batching events into a single delivery to the target. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.description">Description</a></code> | <code>string</code> | A description of the subscriber. Control characters and Unicode line separators are not allowed. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.filterConfiguration">FilterConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfiguration">Eventsv2SubscriberFilterConfiguration</a></code> | Configuration for filtering which events are delivered to the target. An event must match every filter to be delivered. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.logConfiguration">LogConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfiguration">Eventsv2SubscriberLogConfiguration</a></code> | Delivery logging configuration for the subscriber. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.onFailureConfiguration">OnFailureConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfiguration">Eventsv2SubscriberOnFailureConfiguration</a></code> | The destination for events that could not be delivered to the target. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.pointInTimeConfiguration">PointInTimeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfiguration">Eventsv2SubscriberPointInTimeConfiguration</a></code> | The point in time to start delivering events from. Used when StartingPosition is POINT_IN_TIME. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.resumePosition">ResumePosition</a></code> | <code>string</code> | Resume-time control, never returned by the service. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.retryPolicy">RetryPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicy">Eventsv2SubscriberRetryPolicy</a></code> | The retry policy for failed deliveries to the target. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.startingPosition">StartingPosition</a></code> | <code>string</code> | Where the subscriber starts reading events: LATEST starts from the newest events; |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.state">State</a></code> | <code>string</code> | The run state of the subscriber. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTags">Eventsv2SubscriberTags</a>[]</code> | The tags assigned to the subscriber. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.transformer">Transformer</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformer">Eventsv2SubscriberTransformer</a></code> | Configuration for transforming events before delivery to the target. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.type">Type</a></code> | <code>string</code> | The delivery ordering mode of the subscriber. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EventBusArn`<sup>Required</sup> <a name="EventBusArn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.eventBusArn"></a>

```csharp
public string EventBusArn { get; set; }
```

- *Type:* string

The ARN of the event bus this subscriber belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#event_bus_arn Eventsv2Subscriber#event_bus_arn}

---

##### `InvokeConfiguration`<sup>Required</sup> <a name="InvokeConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.invokeConfiguration"></a>

```csharp
public Eventsv2SubscriberInvokeConfiguration InvokeConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration">Eventsv2SubscriberInvokeConfiguration</a>

Configuration for how the subscriber invokes its target, including the target ARN, the IAM role used to invoke it, and, optionally, the target-specific parameters object that matches the target type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#invoke_configuration Eventsv2Subscriber#invoke_configuration}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the subscriber.

The first character must be alphanumeric; the remaining characters may also include '.', '-', and '_'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#name Eventsv2Subscriber#name}

---

##### `BatchConfiguration`<sup>Optional</sup> <a name="BatchConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.batchConfiguration"></a>

```csharp
public Eventsv2SubscriberBatchConfiguration BatchConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfiguration">Eventsv2SubscriberBatchConfiguration</a>

Configuration for batching events into a single delivery to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#batch_configuration Eventsv2Subscriber#batch_configuration}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the subscriber. Control characters and Unicode line separators are not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#description Eventsv2Subscriber#description}

---

##### `FilterConfiguration`<sup>Optional</sup> <a name="FilterConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.filterConfiguration"></a>

```csharp
public Eventsv2SubscriberFilterConfiguration FilterConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfiguration">Eventsv2SubscriberFilterConfiguration</a>

Configuration for filtering which events are delivered to the target. An event must match every filter to be delivered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#filter_configuration Eventsv2Subscriber#filter_configuration}

---

##### `LogConfiguration`<sup>Optional</sup> <a name="LogConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.logConfiguration"></a>

```csharp
public Eventsv2SubscriberLogConfiguration LogConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfiguration">Eventsv2SubscriberLogConfiguration</a>

Delivery logging configuration for the subscriber.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#log_configuration Eventsv2Subscriber#log_configuration}

---

##### `OnFailureConfiguration`<sup>Optional</sup> <a name="OnFailureConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.onFailureConfiguration"></a>

```csharp
public Eventsv2SubscriberOnFailureConfiguration OnFailureConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfiguration">Eventsv2SubscriberOnFailureConfiguration</a>

The destination for events that could not be delivered to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#on_failure_configuration Eventsv2Subscriber#on_failure_configuration}

---

##### `PointInTimeConfiguration`<sup>Optional</sup> <a name="PointInTimeConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.pointInTimeConfiguration"></a>

```csharp
public Eventsv2SubscriberPointInTimeConfiguration PointInTimeConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfiguration">Eventsv2SubscriberPointInTimeConfiguration</a>

The point in time to start delivering events from. Used when StartingPosition is POINT_IN_TIME.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#point_in_time_configuration Eventsv2Subscriber#point_in_time_configuration}

---

##### `ResumePosition`<sup>Optional</sup> <a name="ResumePosition" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.resumePosition"></a>

```csharp
public string ResumePosition { get; set; }
```

- *Type:* string

Resume-time control, never returned by the service.

Applied only when an update transitions State from STOPPED to RUNNING: LAST_PROCESSED (default) resumes from the last processed event, LATEST skips to the newest. Ignored on create and on any update that does not perform that transition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#resume_position Eventsv2Subscriber#resume_position}

---

##### `RetryPolicy`<sup>Optional</sup> <a name="RetryPolicy" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.retryPolicy"></a>

```csharp
public Eventsv2SubscriberRetryPolicy RetryPolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicy">Eventsv2SubscriberRetryPolicy</a>

The retry policy for failed deliveries to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#retry_policy Eventsv2Subscriber#retry_policy}

---

##### `StartingPosition`<sup>Optional</sup> <a name="StartingPosition" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.startingPosition"></a>

```csharp
public string StartingPosition { get; set; }
```

- *Type:* string

Where the subscriber starts reading events: LATEST starts from the newest events;

POINT_IN_TIME starts from the point specified in PointInTimeConfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#starting_position Eventsv2Subscriber#starting_position}

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

The run state of the subscriber.

Events are delivered only while the state is RUNNING. Setting the state to STOPPED pauses delivery. When an update sets a stopped subscriber back to RUNNING, ResumePosition controls where delivery resumes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#state Eventsv2Subscriber#state}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.tags"></a>

```csharp
public IResolvable|Eventsv2SubscriberTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTags">Eventsv2SubscriberTags</a>[]

The tags assigned to the subscriber.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#tags Eventsv2Subscriber#tags}

---

##### `Transformer`<sup>Optional</sup> <a name="Transformer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.transformer"></a>

```csharp
public Eventsv2SubscriberTransformer Transformer { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformer">Eventsv2SubscriberTransformer</a>

Configuration for transforming events before delivery to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#transformer Eventsv2Subscriber#transformer}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The delivery ordering mode of the subscriber.

FIFO delivers events in order within an event group; UNORDERED delivers without an ordering guarantee.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#type Eventsv2Subscriber#type}

---

### Eventsv2SubscriberFilterConfiguration <a name="Eventsv2SubscriberFilterConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2SubscriberFilterConfiguration {
    IResolvable|Eventsv2SubscriberFilterConfigurationFilters[] Filters = null,
    string Language = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfiguration.property.filters">Filters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFilters">Eventsv2SubscriberFilterConfigurationFilters</a>[]</code> | The list of filters, 1-50 entries. An event must match every filter to be delivered. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfiguration.property.language">Language</a></code> | <code>string</code> | The filter language. The default is EVENT_BRIDGE_PATTERN. |

---

##### `Filters`<sup>Optional</sup> <a name="Filters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfiguration.property.filters"></a>

```csharp
public IResolvable|Eventsv2SubscriberFilterConfigurationFilters[] Filters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFilters">Eventsv2SubscriberFilterConfigurationFilters</a>[]

The list of filters, 1-50 entries. An event must match every filter to be delivered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#filters Eventsv2Subscriber#filters}

---

##### `Language`<sup>Optional</sup> <a name="Language" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfiguration.property.language"></a>

```csharp
public string Language { get; set; }
```

- *Type:* string

The filter language. The default is EVENT_BRIDGE_PATTERN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#language Eventsv2Subscriber#language}

---

### Eventsv2SubscriberFilterConfigurationFilters <a name="Eventsv2SubscriberFilterConfigurationFilters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFilters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2SubscriberFilterConfigurationFilters {
    string Pattern = null,
    string Scope = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFilters.property.pattern">Pattern</a></code> | <code>string</code> | The event pattern, as a JSON string. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFilters.property.scope">Scope</a></code> | <code>string</code> | Which part of the event the pattern is evaluated against: DATA (the event payload), METADATA (event metadata), or SYSTEM_METADATA (service-generated metadata). |

---

##### `Pattern`<sup>Optional</sup> <a name="Pattern" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFilters.property.pattern"></a>

```csharp
public string Pattern { get; set; }
```

- *Type:* string

The event pattern, as a JSON string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#pattern Eventsv2Subscriber#pattern}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFilters.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

Which part of the event the pattern is evaluated against: DATA (the event payload), METADATA (event metadata), or SYSTEM_METADATA (service-generated metadata).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#scope Eventsv2Subscriber#scope}

---

### Eventsv2SubscriberInvokeConfiguration <a name="Eventsv2SubscriberInvokeConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2SubscriberInvokeConfiguration {
    string RoleArn,
    string TargetArn,
    Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters EventBusV2Parameters = null,
    Eventsv2SubscriberInvokeConfigurationHttpParameters HttpParameters = null,
    Eventsv2SubscriberInvokeConfigurationKinesisParameters KinesisParameters = null,
    Eventsv2SubscriberInvokeConfigurationLambdaParameters LambdaParameters = null,
    Eventsv2SubscriberInvokeConfigurationSnsParameters SnsParameters = null,
    Eventsv2SubscriberInvokeConfigurationSqsParameters SqsParameters = null,
    Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters StepFunctionsParameters = null,
    Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters UniversalTargetParameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.roleArn">RoleArn</a></code> | <code>string</code> | The ARN of the IAM role the service assumes to invoke the target. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.targetArn">TargetArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the target that the subscriber invokes. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.eventBusV2Parameters">EventBusV2Parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters">Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters</a></code> | Parameters for forwarding events to another EventBridge event bus, used when TargetArn is an event bus ARN of the form arn:{partition}:events:{region}:{account}:event-busv2/{name}/{id}. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.httpParameters">HttpParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters">Eventsv2SubscriberInvokeConfigurationHttpParameters</a></code> | Parameters for invoking an HTTP endpoint target, such as an Amazon API Gateway endpoint or an EventBridge API destination. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.kinesisParameters">KinesisParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParameters">Eventsv2SubscriberInvokeConfigurationKinesisParameters</a></code> | Parameters for writing events to an Amazon Kinesis Data Streams target. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.lambdaParameters">LambdaParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters">Eventsv2SubscriberInvokeConfigurationLambdaParameters</a></code> | Parameters for invoking an AWS Lambda function target. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.snsParameters">SnsParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters">Eventsv2SubscriberInvokeConfigurationSnsParameters</a></code> | Parameters for publishing events to an Amazon SNS topic target. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.sqsParameters">SqsParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters">Eventsv2SubscriberInvokeConfigurationSqsParameters</a></code> | Parameters for sending events to an Amazon SQS queue target. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.stepFunctionsParameters">StepFunctionsParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters">Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters</a></code> | Parameters for starting an AWS Step Functions state machine execution target. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.universalTargetParameters">UniversalTargetParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters">Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters</a></code> | Parameters for invoking an AWS service API as a universal service integration target, used when TargetArn has the form arn:{partition}:events:::aws-sdk:{service}:{apiAction}. |

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

The ARN of the IAM role the service assumes to invoke the target.

The role must belong to the same account as the subscriber.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#role_arn Eventsv2Subscriber#role_arn}

---

##### `TargetArn`<sup>Required</sup> <a name="TargetArn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.targetArn"></a>

```csharp
public string TargetArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the target that the subscriber invokes.

For universal service integration targets, use the form arn:{partition}:events:::aws-sdk:{service}:{apiAction}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#target_arn Eventsv2Subscriber#target_arn}

---

##### `EventBusV2Parameters`<sup>Optional</sup> <a name="EventBusV2Parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.eventBusV2Parameters"></a>

```csharp
public Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters EventBusV2Parameters { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters">Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters</a>

Parameters for forwarding events to another EventBridge event bus, used when TargetArn is an event bus ARN of the form arn:{partition}:events:{region}:{account}:event-busv2/{name}/{id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#event_bus_v2_parameters Eventsv2Subscriber#event_bus_v2_parameters}

---

##### `HttpParameters`<sup>Optional</sup> <a name="HttpParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.httpParameters"></a>

```csharp
public Eventsv2SubscriberInvokeConfigurationHttpParameters HttpParameters { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters">Eventsv2SubscriberInvokeConfigurationHttpParameters</a>

Parameters for invoking an HTTP endpoint target, such as an Amazon API Gateway endpoint or an EventBridge API destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#http_parameters Eventsv2Subscriber#http_parameters}

---

##### `KinesisParameters`<sup>Optional</sup> <a name="KinesisParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.kinesisParameters"></a>

```csharp
public Eventsv2SubscriberInvokeConfigurationKinesisParameters KinesisParameters { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParameters">Eventsv2SubscriberInvokeConfigurationKinesisParameters</a>

Parameters for writing events to an Amazon Kinesis Data Streams target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#kinesis_parameters Eventsv2Subscriber#kinesis_parameters}

---

##### `LambdaParameters`<sup>Optional</sup> <a name="LambdaParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.lambdaParameters"></a>

```csharp
public Eventsv2SubscriberInvokeConfigurationLambdaParameters LambdaParameters { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters">Eventsv2SubscriberInvokeConfigurationLambdaParameters</a>

Parameters for invoking an AWS Lambda function target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#lambda_parameters Eventsv2Subscriber#lambda_parameters}

---

##### `SnsParameters`<sup>Optional</sup> <a name="SnsParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.snsParameters"></a>

```csharp
public Eventsv2SubscriberInvokeConfigurationSnsParameters SnsParameters { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters">Eventsv2SubscriberInvokeConfigurationSnsParameters</a>

Parameters for publishing events to an Amazon SNS topic target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#sns_parameters Eventsv2Subscriber#sns_parameters}

---

##### `SqsParameters`<sup>Optional</sup> <a name="SqsParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.sqsParameters"></a>

```csharp
public Eventsv2SubscriberInvokeConfigurationSqsParameters SqsParameters { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters">Eventsv2SubscriberInvokeConfigurationSqsParameters</a>

Parameters for sending events to an Amazon SQS queue target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#sqs_parameters Eventsv2Subscriber#sqs_parameters}

---

##### `StepFunctionsParameters`<sup>Optional</sup> <a name="StepFunctionsParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.stepFunctionsParameters"></a>

```csharp
public Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters StepFunctionsParameters { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters">Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters</a>

Parameters for starting an AWS Step Functions state machine execution target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#step_functions_parameters Eventsv2Subscriber#step_functions_parameters}

---

##### `UniversalTargetParameters`<sup>Optional</sup> <a name="UniversalTargetParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.universalTargetParameters"></a>

```csharp
public Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters UniversalTargetParameters { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters">Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters</a>

Parameters for invoking an AWS service API as a universal service integration target, used when TargetArn has the form arn:{partition}:events:::aws-sdk:{service}:{apiAction}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#universal_target_parameters Eventsv2Subscriber#universal_target_parameters}

---

### Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters <a name="Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters {
    Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration DeduplicationConfiguration = null,
    System.Collections.Generic.IDictionary<string, string> Metadata = null,
    Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata SystemMetadata = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters.property.deduplicationConfiguration">DeduplicationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration</a></code> | Deduplication settings applied to the forwarded events on the downstream event bus. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Metadata forwarded with each event, as key-value string pairs. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters.property.systemMetadata">SystemMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata</a></code> | System metadata attached to each forwarded event, controlling FIFO ordering and deduplication on the downstream event bus. |

---

##### `DeduplicationConfiguration`<sup>Optional</sup> <a name="DeduplicationConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters.property.deduplicationConfiguration"></a>

```csharp
public Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration DeduplicationConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration</a>

Deduplication settings applied to the forwarded events on the downstream event bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#deduplication_configuration Eventsv2Subscriber#deduplication_configuration}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Metadata forwarded with each event, as key-value string pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#metadata Eventsv2Subscriber#metadata}

---

##### `SystemMetadata`<sup>Optional</sup> <a name="SystemMetadata" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters.property.systemMetadata"></a>

```csharp
public Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata SystemMetadata { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata</a>

System metadata attached to each forwarded event, controlling FIFO ordering and deduplication on the downstream event bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#system_metadata Eventsv2Subscriber#system_metadata}

---

### Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration <a name="Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration {
    string DeduplicationType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration.property.deduplicationType">DeduplicationType</a></code> | <code>string</code> | How duplicate events are detected: CONTENT_BASED deduplicates by a hash of the event content. |

---

##### `DeduplicationType`<sup>Optional</sup> <a name="DeduplicationType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration.property.deduplicationType"></a>

```csharp
public string DeduplicationType { get; set; }
```

- *Type:* string

How duplicate events are detected: CONTENT_BASED deduplicates by a hash of the event content.

To deduplicate by a caller-supplied token instead, omit DeduplicationConfiguration and set SystemMetadata.DeduplicationId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#deduplication_type Eventsv2Subscriber#deduplication_type}

---

### Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata <a name="Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata {
    string DeduplicationId = null,
    string EventGroupId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata.property.deduplicationId">DeduplicationId</a></code> | <code>string</code> | The deduplication ID for FIFO deduplication on the downstream event bus. Accepts a literal value or a JSONata expression. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata.property.eventGroupId">EventGroupId</a></code> | <code>string</code> | The event group ID for FIFO ordering on the downstream event bus. |

---

##### `DeduplicationId`<sup>Optional</sup> <a name="DeduplicationId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata.property.deduplicationId"></a>

```csharp
public string DeduplicationId { get; set; }
```

- *Type:* string

The deduplication ID for FIFO deduplication on the downstream event bus. Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#deduplication_id Eventsv2Subscriber#deduplication_id}

---

##### `EventGroupId`<sup>Optional</sup> <a name="EventGroupId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata.property.eventGroupId"></a>

```csharp
public string EventGroupId { get; set; }
```

- *Type:* string

The event group ID for FIFO ordering on the downstream event bus.

Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#event_group_id Eventsv2Subscriber#event_group_id}

---

### Eventsv2SubscriberInvokeConfigurationHttpParameters <a name="Eventsv2SubscriberInvokeConfigurationHttpParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2SubscriberInvokeConfigurationHttpParameters {
    System.Collections.Generic.IDictionary<string, string> HeaderParameters = null,
    string InvocationTimeoutSeconds = null,
    string[] PathParameterValues = null,
    System.Collections.Generic.IDictionary<string, string> QueryStringParameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters.property.headerParameters">HeaderParameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | HTTP headers to add to the request. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters.property.invocationTimeoutSeconds">InvocationTimeoutSeconds</a></code> | <code>string</code> | The timeout in seconds for each invocation of the target, written as a string. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters.property.pathParameterValues">PathParameterValues</a></code> | <code>string[]</code> | Values for the path parameters (wildcards) in the target URL, in order. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters.property.queryStringParameters">QueryStringParameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Query string parameters to add to the request. |

---

##### `HeaderParameters`<sup>Optional</sup> <a name="HeaderParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters.property.headerParameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> HeaderParameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

HTTP headers to add to the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#header_parameters Eventsv2Subscriber#header_parameters}

---

##### `InvocationTimeoutSeconds`<sup>Optional</sup> <a name="InvocationTimeoutSeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters.property.invocationTimeoutSeconds"></a>

```csharp
public string InvocationTimeoutSeconds { get; set; }
```

- *Type:* string

The timeout in seconds for each invocation of the target, written as a string.

Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#invocation_timeout_seconds Eventsv2Subscriber#invocation_timeout_seconds}

---

##### `PathParameterValues`<sup>Optional</sup> <a name="PathParameterValues" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters.property.pathParameterValues"></a>

```csharp
public string[] PathParameterValues { get; set; }
```

- *Type:* string[]

Values for the path parameters (wildcards) in the target URL, in order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#path_parameter_values Eventsv2Subscriber#path_parameter_values}

---

##### `QueryStringParameters`<sup>Optional</sup> <a name="QueryStringParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters.property.queryStringParameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> QueryStringParameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Query string parameters to add to the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#query_string_parameters Eventsv2Subscriber#query_string_parameters}

---

### Eventsv2SubscriberInvokeConfigurationKinesisParameters <a name="Eventsv2SubscriberInvokeConfigurationKinesisParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2SubscriberInvokeConfigurationKinesisParameters {
    string ExplicitHashKey = null,
    string PartitionKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParameters.property.explicitHashKey">ExplicitHashKey</a></code> | <code>string</code> | An explicit hash key that overrides the partition key's shard assignment. Accepts a literal value or a JSONata expression. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParameters.property.partitionKey">PartitionKey</a></code> | <code>string</code> | The partition key that determines which shard each record is written to. |

---

##### `ExplicitHashKey`<sup>Optional</sup> <a name="ExplicitHashKey" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParameters.property.explicitHashKey"></a>

```csharp
public string ExplicitHashKey { get; set; }
```

- *Type:* string

An explicit hash key that overrides the partition key's shard assignment. Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#explicit_hash_key Eventsv2Subscriber#explicit_hash_key}

---

##### `PartitionKey`<sup>Optional</sup> <a name="PartitionKey" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParameters.property.partitionKey"></a>

```csharp
public string PartitionKey { get; set; }
```

- *Type:* string

The partition key that determines which shard each record is written to.

Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#partition_key Eventsv2Subscriber#partition_key}

---

### Eventsv2SubscriberInvokeConfigurationLambdaParameters <a name="Eventsv2SubscriberInvokeConfigurationLambdaParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2SubscriberInvokeConfigurationLambdaParameters {
    string DurableExecutionName = null,
    string InvocationTimeoutSeconds = null,
    string InvocationType = null,
    string Qualifier = null,
    string TenantId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters.property.durableExecutionName">DurableExecutionName</a></code> | <code>string</code> | A unique name for a durable function execution. Accepts a literal value or a JSONata expression. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters.property.invocationTimeoutSeconds">InvocationTimeoutSeconds</a></code> | <code>string</code> | The timeout in seconds for each invocation of the target, written as a string. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters.property.invocationType">InvocationType</a></code> | <code>string</code> | How the function is invoked: EVENT (asynchronous) or REQUEST_RESPONSE (synchronous). |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters.property.qualifier">Qualifier</a></code> | <code>string</code> | The version or alias of the Lambda function to invoke. Accepts a literal value or a JSONata expression. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters.property.tenantId">TenantId</a></code> | <code>string</code> | The tenant identifier for multi-tenant Lambda functions. Accepts a literal value or a JSONata expression. |

---

##### `DurableExecutionName`<sup>Optional</sup> <a name="DurableExecutionName" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters.property.durableExecutionName"></a>

```csharp
public string DurableExecutionName { get; set; }
```

- *Type:* string

A unique name for a durable function execution. Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#durable_execution_name Eventsv2Subscriber#durable_execution_name}

---

##### `InvocationTimeoutSeconds`<sup>Optional</sup> <a name="InvocationTimeoutSeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters.property.invocationTimeoutSeconds"></a>

```csharp
public string InvocationTimeoutSeconds { get; set; }
```

- *Type:* string

The timeout in seconds for each invocation of the target, written as a string.

Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#invocation_timeout_seconds Eventsv2Subscriber#invocation_timeout_seconds}

---

##### `InvocationType`<sup>Optional</sup> <a name="InvocationType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters.property.invocationType"></a>

```csharp
public string InvocationType { get; set; }
```

- *Type:* string

How the function is invoked: EVENT (asynchronous) or REQUEST_RESPONSE (synchronous).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#invocation_type Eventsv2Subscriber#invocation_type}

---

##### `Qualifier`<sup>Optional</sup> <a name="Qualifier" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters.property.qualifier"></a>

```csharp
public string Qualifier { get; set; }
```

- *Type:* string

The version or alias of the Lambda function to invoke. Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#qualifier Eventsv2Subscriber#qualifier}

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

The tenant identifier for multi-tenant Lambda functions. Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#tenant_id Eventsv2Subscriber#tenant_id}

---

### Eventsv2SubscriberInvokeConfigurationSnsParameters <a name="Eventsv2SubscriberInvokeConfigurationSnsParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2SubscriberInvokeConfigurationSnsParameters {
    IResolvable|System.Collections.Generic.IDictionary<string, Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes> MessageAttributes = null,
    string MessageDeduplicationId = null,
    string MessageGroupId = null,
    string MessageStructure = null,
    string Subject = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters.property.messageAttributes">MessageAttributes</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes">Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes</a>></code> | Custom message attributes to attach to each message; Amazon SNS subscription filter policies can match on them. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters.property.messageDeduplicationId">MessageDeduplicationId</a></code> | <code>string</code> | The message deduplication ID to use when the target is a FIFO topic. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters.property.messageGroupId">MessageGroupId</a></code> | <code>string</code> | The message group ID to use when the target is a FIFO topic. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters.property.messageStructure">MessageStructure</a></code> | <code>string</code> | Set to json to send a different message per delivery protocol. Accepts a literal value or a JSONata expression. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters.property.subject">Subject</a></code> | <code>string</code> | The subject line to use for email-protocol subscriptions. Accepts a literal value or a JSONata expression. |

---

##### `MessageAttributes`<sup>Optional</sup> <a name="MessageAttributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters.property.messageAttributes"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes> MessageAttributes { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes">Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes</a>>

Custom message attributes to attach to each message; Amazon SNS subscription filter policies can match on them.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#message_attributes Eventsv2Subscriber#message_attributes}

---

##### `MessageDeduplicationId`<sup>Optional</sup> <a name="MessageDeduplicationId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters.property.messageDeduplicationId"></a>

```csharp
public string MessageDeduplicationId { get; set; }
```

- *Type:* string

The message deduplication ID to use when the target is a FIFO topic.

Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#message_deduplication_id Eventsv2Subscriber#message_deduplication_id}

---

##### `MessageGroupId`<sup>Optional</sup> <a name="MessageGroupId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters.property.messageGroupId"></a>

```csharp
public string MessageGroupId { get; set; }
```

- *Type:* string

The message group ID to use when the target is a FIFO topic.

Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#message_group_id Eventsv2Subscriber#message_group_id}

---

##### `MessageStructure`<sup>Optional</sup> <a name="MessageStructure" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters.property.messageStructure"></a>

```csharp
public string MessageStructure { get; set; }
```

- *Type:* string

Set to json to send a different message per delivery protocol. Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#message_structure Eventsv2Subscriber#message_structure}

---

##### `Subject`<sup>Optional</sup> <a name="Subject" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters.property.subject"></a>

```csharp
public string Subject { get; set; }
```

- *Type:* string

The subject line to use for email-protocol subscriptions. Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#subject Eventsv2Subscriber#subject}

---

### Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes <a name="Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes {
    string BinaryValue = null,
    string DataType = null,
    string StringValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes.property.binaryValue">BinaryValue</a></code> | <code>string</code> | The attribute value for the Binary data type, Base64-encoded. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes.property.dataType">DataType</a></code> | <code>string</code> | The attribute data type. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes.property.stringValue">StringValue</a></code> | <code>string</code> | The attribute value for the String and Number data types (and String.Array for Amazon SNS targets). |

---

##### `BinaryValue`<sup>Optional</sup> <a name="BinaryValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes.property.binaryValue"></a>

```csharp
public string BinaryValue { get; set; }
```

- *Type:* string

The attribute value for the Binary data type, Base64-encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#binary_value Eventsv2Subscriber#binary_value}

---

##### `DataType`<sup>Optional</sup> <a name="DataType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes.property.dataType"></a>

```csharp
public string DataType { get; set; }
```

- *Type:* string

The attribute data type.

For Amazon SQS targets, specify String, Number, or Binary, optionally with a custom label suffix such as Number.float. For Amazon SNS targets, specify String, String.Array, Number, or Binary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#data_type Eventsv2Subscriber#data_type}

---

##### `StringValue`<sup>Optional</sup> <a name="StringValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes.property.stringValue"></a>

```csharp
public string StringValue { get; set; }
```

- *Type:* string

The attribute value for the String and Number data types (and String.Array for Amazon SNS targets).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#string_value Eventsv2Subscriber#string_value}

---

### Eventsv2SubscriberInvokeConfigurationSqsParameters <a name="Eventsv2SubscriberInvokeConfigurationSqsParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2SubscriberInvokeConfigurationSqsParameters {
    string DelaySeconds = null,
    IResolvable|System.Collections.Generic.IDictionary<string, Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes> MessageAttributes = null,
    string MessageDeduplicationId = null,
    string MessageGroupId = null,
    IResolvable|System.Collections.Generic.IDictionary<string, Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes> MessageSystemAttributes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters.property.delaySeconds">DelaySeconds</a></code> | <code>string</code> | The delay in seconds for the message, written as a string. Accepts a literal value or a JSONata expression. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters.property.messageAttributes">MessageAttributes</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes</a>></code> | Custom message attributes to attach to each message. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters.property.messageDeduplicationId">MessageDeduplicationId</a></code> | <code>string</code> | The message deduplication ID to use when the target is a FIFO queue. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters.property.messageGroupId">MessageGroupId</a></code> | <code>string</code> | The message group ID to use when the target is a FIFO queue. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters.property.messageSystemAttributes">MessageSystemAttributes</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes</a>></code> | Message system attributes to attach to each message, such as AWSTraceHeader. |

---

##### `DelaySeconds`<sup>Optional</sup> <a name="DelaySeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters.property.delaySeconds"></a>

```csharp
public string DelaySeconds { get; set; }
```

- *Type:* string

The delay in seconds for the message, written as a string. Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#delay_seconds Eventsv2Subscriber#delay_seconds}

---

##### `MessageAttributes`<sup>Optional</sup> <a name="MessageAttributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters.property.messageAttributes"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes> MessageAttributes { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes</a>>

Custom message attributes to attach to each message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#message_attributes Eventsv2Subscriber#message_attributes}

---

##### `MessageDeduplicationId`<sup>Optional</sup> <a name="MessageDeduplicationId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters.property.messageDeduplicationId"></a>

```csharp
public string MessageDeduplicationId { get; set; }
```

- *Type:* string

The message deduplication ID to use when the target is a FIFO queue.

Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#message_deduplication_id Eventsv2Subscriber#message_deduplication_id}

---

##### `MessageGroupId`<sup>Optional</sup> <a name="MessageGroupId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters.property.messageGroupId"></a>

```csharp
public string MessageGroupId { get; set; }
```

- *Type:* string

The message group ID to use when the target is a FIFO queue.

Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#message_group_id Eventsv2Subscriber#message_group_id}

---

##### `MessageSystemAttributes`<sup>Optional</sup> <a name="MessageSystemAttributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters.property.messageSystemAttributes"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes> MessageSystemAttributes { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes</a>>

Message system attributes to attach to each message, such as AWSTraceHeader.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#message_system_attributes Eventsv2Subscriber#message_system_attributes}

---

### Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes <a name="Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes {
    string BinaryValue = null,
    string DataType = null,
    string StringValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes.property.binaryValue">BinaryValue</a></code> | <code>string</code> | The attribute value for the Binary data type, Base64-encoded. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes.property.dataType">DataType</a></code> | <code>string</code> | The attribute data type. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes.property.stringValue">StringValue</a></code> | <code>string</code> | The attribute value for the String and Number data types (and String.Array for Amazon SNS targets). |

---

##### `BinaryValue`<sup>Optional</sup> <a name="BinaryValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes.property.binaryValue"></a>

```csharp
public string BinaryValue { get; set; }
```

- *Type:* string

The attribute value for the Binary data type, Base64-encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#binary_value Eventsv2Subscriber#binary_value}

---

##### `DataType`<sup>Optional</sup> <a name="DataType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes.property.dataType"></a>

```csharp
public string DataType { get; set; }
```

- *Type:* string

The attribute data type.

For Amazon SQS targets, specify String, Number, or Binary, optionally with a custom label suffix such as Number.float. For Amazon SNS targets, specify String, String.Array, Number, or Binary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#data_type Eventsv2Subscriber#data_type}

---

##### `StringValue`<sup>Optional</sup> <a name="StringValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes.property.stringValue"></a>

```csharp
public string StringValue { get; set; }
```

- *Type:* string

The attribute value for the String and Number data types (and String.Array for Amazon SNS targets).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#string_value Eventsv2Subscriber#string_value}

---

### Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes <a name="Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes {
    string BinaryValue = null,
    string DataType = null,
    string StringValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes.property.binaryValue">BinaryValue</a></code> | <code>string</code> | The attribute value for the Binary data type, Base64-encoded. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes.property.dataType">DataType</a></code> | <code>string</code> | The attribute data type. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes.property.stringValue">StringValue</a></code> | <code>string</code> | The attribute value for the String and Number data types (and String.Array for Amazon SNS targets). |

---

##### `BinaryValue`<sup>Optional</sup> <a name="BinaryValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes.property.binaryValue"></a>

```csharp
public string BinaryValue { get; set; }
```

- *Type:* string

The attribute value for the Binary data type, Base64-encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#binary_value Eventsv2Subscriber#binary_value}

---

##### `DataType`<sup>Optional</sup> <a name="DataType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes.property.dataType"></a>

```csharp
public string DataType { get; set; }
```

- *Type:* string

The attribute data type.

For Amazon SQS targets, specify String, Number, or Binary, optionally with a custom label suffix such as Number.float. For Amazon SNS targets, specify String, String.Array, Number, or Binary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#data_type Eventsv2Subscriber#data_type}

---

##### `StringValue`<sup>Optional</sup> <a name="StringValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes.property.stringValue"></a>

```csharp
public string StringValue { get; set; }
```

- *Type:* string

The attribute value for the String and Number data types (and String.Array for Amazon SNS targets).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#string_value Eventsv2Subscriber#string_value}

---

### Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters <a name="Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters {
    string InvocationTimeoutSeconds = null,
    string InvocationType = null,
    string Name = null,
    string TraceHeader = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters.property.invocationTimeoutSeconds">InvocationTimeoutSeconds</a></code> | <code>string</code> | The timeout in seconds for each invocation of the target, written as a string. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters.property.invocationType">InvocationType</a></code> | <code>string</code> | How the execution is started: EVENT (StartExecution, asynchronous) or REQUEST_RESPONSE (StartSyncExecution, synchronous). |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters.property.name">Name</a></code> | <code>string</code> | A name for the execution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters.property.traceHeader">TraceHeader</a></code> | <code>string</code> | The AWS X-Ray trace header for distributed tracing. Accepts a literal value or a JSONata expression. |

---

##### `InvocationTimeoutSeconds`<sup>Optional</sup> <a name="InvocationTimeoutSeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters.property.invocationTimeoutSeconds"></a>

```csharp
public string InvocationTimeoutSeconds { get; set; }
```

- *Type:* string

The timeout in seconds for each invocation of the target, written as a string.

Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#invocation_timeout_seconds Eventsv2Subscriber#invocation_timeout_seconds}

---

##### `InvocationType`<sup>Optional</sup> <a name="InvocationType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters.property.invocationType"></a>

```csharp
public string InvocationType { get; set; }
```

- *Type:* string

How the execution is started: EVENT (StartExecution, asynchronous) or REQUEST_RESPONSE (StartSyncExecution, synchronous).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#invocation_type Eventsv2Subscriber#invocation_type}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A name for the execution.

Must be unique for the account, Region, and state machine. Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#name Eventsv2Subscriber#name}

---

##### `TraceHeader`<sup>Optional</sup> <a name="TraceHeader" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters.property.traceHeader"></a>

```csharp
public string TraceHeader { get; set; }
```

- *Type:* string

The AWS X-Ray trace header for distributed tracing. Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#trace_header Eventsv2Subscriber#trace_header}

---

### Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters <a name="Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters {
    string Input = null,
    string InvocationTimeoutSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters.property.input">Input</a></code> | <code>string</code> | JSON string or JSONata expression that produces the API request. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters.property.invocationTimeoutSeconds">InvocationTimeoutSeconds</a></code> | <code>string</code> | Timeout in seconds for each invocation of the target (1-30, default 30). |

---

##### `Input`<sup>Optional</sup> <a name="Input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters.property.input"></a>

```csharp
public string Input { get; set; }
```

- *Type:* string

JSON string or JSONata expression that produces the API request.

Supports {% ... %} JSONata expressions for dynamic values from the event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#input Eventsv2Subscriber#input}

---

##### `InvocationTimeoutSeconds`<sup>Optional</sup> <a name="InvocationTimeoutSeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters.property.invocationTimeoutSeconds"></a>

```csharp
public string InvocationTimeoutSeconds { get; set; }
```

- *Type:* string

Timeout in seconds for each invocation of the target (1-30, default 30).

Must be a literal integer written as a string; JSONata expressions are not supported for this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#invocation_timeout_seconds Eventsv2Subscriber#invocation_timeout_seconds}

---

### Eventsv2SubscriberLogConfiguration <a name="Eventsv2SubscriberLogConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2SubscriberLogConfiguration {
    string IncludePayload = null,
    string Level = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfiguration.property.includePayload">IncludePayload</a></code> | <code>string</code> | Whether the event payload is included in emitted log records: FULL includes it in every emitted record, and ON_ERROR_ONLY includes it only in error records. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfiguration.property.level">Level</a></code> | <code>string</code> | The minimum log level: OFF (no logging), ERROR, or INFO. |

---

##### `IncludePayload`<sup>Optional</sup> <a name="IncludePayload" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfiguration.property.includePayload"></a>

```csharp
public string IncludePayload { get; set; }
```

- *Type:* string

Whether the event payload is included in emitted log records: FULL includes it in every emitted record, and ON_ERROR_ONLY includes it only in error records.

The default is ON_ERROR_ONLY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#include_payload Eventsv2Subscriber#include_payload}

---

##### `Level`<sup>Optional</sup> <a name="Level" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfiguration.property.level"></a>

```csharp
public string Level { get; set; }
```

- *Type:* string

The minimum log level: OFF (no logging), ERROR, or INFO.

Records below this level are not emitted. The default is OFF.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#level Eventsv2Subscriber#level}

---

### Eventsv2SubscriberOnFailureConfiguration <a name="Eventsv2SubscriberOnFailureConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2SubscriberOnFailureConfiguration {
    string Arn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfiguration.property.arn">Arn</a></code> | <code>string</code> | The ARN of the destination that receives events that could not be delivered. |

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfiguration.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

The ARN of the destination that receives events that could not be delivered.

An Amazon SQS queue is the supported destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#arn Eventsv2Subscriber#arn}

---

### Eventsv2SubscriberPointInTimeConfiguration <a name="Eventsv2SubscriberPointInTimeConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2SubscriberPointInTimeConfiguration {
    double EndPoint = null,
    string PointType = null,
    double StartingPoint = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfiguration.property.endPoint">EndPoint</a></code> | <code>double</code> | An optional time to stop delivering events at, in seconds since the Unix epoch. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfiguration.property.pointType">PointType</a></code> | <code>string</code> | Where to start: HORIZON starts from the earliest available event; TIMESTAMP starts from the StartingPoint timestamp. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfiguration.property.startingPoint">StartingPoint</a></code> | <code>double</code> | The time to start delivering events from, in seconds since the Unix epoch. Required when PointType is TIMESTAMP. |

---

##### `EndPoint`<sup>Optional</sup> <a name="EndPoint" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfiguration.property.endPoint"></a>

```csharp
public double EndPoint { get; set; }
```

- *Type:* double

An optional time to stop delivering events at, in seconds since the Unix epoch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#end_point Eventsv2Subscriber#end_point}

---

##### `PointType`<sup>Optional</sup> <a name="PointType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfiguration.property.pointType"></a>

```csharp
public string PointType { get; set; }
```

- *Type:* string

Where to start: HORIZON starts from the earliest available event; TIMESTAMP starts from the StartingPoint timestamp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#point_type Eventsv2Subscriber#point_type}

---

##### `StartingPoint`<sup>Optional</sup> <a name="StartingPoint" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfiguration.property.startingPoint"></a>

```csharp
public double StartingPoint { get; set; }
```

- *Type:* double

The time to start delivering events from, in seconds since the Unix epoch. Required when PointType is TIMESTAMP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#starting_point Eventsv2Subscriber#starting_point}

---

### Eventsv2SubscriberRetryPolicy <a name="Eventsv2SubscriberRetryPolicy" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2SubscriberRetryPolicy {
    double MaxEventAgeInSeconds = null,
    double MaxRetryAttempts = null,
    string RetryStrategy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicy.property.maxEventAgeInSeconds">MaxEventAgeInSeconds</a></code> | <code>double</code> | The maximum age of an event in seconds, 60-86400 (24 hours). |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicy.property.maxRetryAttempts">MaxRetryAttempts</a></code> | <code>double</code> | The maximum number of retry attempts, 0-185. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicy.property.retryStrategy">RetryStrategy</a></code> | <code>string</code> | Which errors are retried. ALL retries all errors. The default is ALL. |

---

##### `MaxEventAgeInSeconds`<sup>Optional</sup> <a name="MaxEventAgeInSeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicy.property.maxEventAgeInSeconds"></a>

```csharp
public double MaxEventAgeInSeconds { get; set; }
```

- *Type:* double

The maximum age of an event in seconds, 60-86400 (24 hours).

When an event reaches this age, retries stop; if OnFailureConfiguration is set, the event is delivered to that destination, otherwise it is dropped. The default is 300.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#max_event_age_in_seconds Eventsv2Subscriber#max_event_age_in_seconds}

---

##### `MaxRetryAttempts`<sup>Optional</sup> <a name="MaxRetryAttempts" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicy.property.maxRetryAttempts"></a>

```csharp
public double MaxRetryAttempts { get; set; }
```

- *Type:* double

The maximum number of retry attempts, 0-185.

When the attempts are exhausted, retries stop; if OnFailureConfiguration is set, the event is delivered to that destination, otherwise it is dropped. The default is 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#max_retry_attempts Eventsv2Subscriber#max_retry_attempts}

---

##### `RetryStrategy`<sup>Optional</sup> <a name="RetryStrategy" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicy.property.retryStrategy"></a>

```csharp
public string RetryStrategy { get; set; }
```

- *Type:* string

Which errors are retried. ALL retries all errors. The default is ALL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#retry_strategy Eventsv2Subscriber#retry_strategy}

---

### Eventsv2SubscriberTags <a name="Eventsv2SubscriberTags" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2SubscriberTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTags.property.key">Key</a></code> | <code>string</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTags.property.value">Value</a></code> | <code>string</code> | The tag value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The tag key.

For each resource, each tag key must be unique and each key can have only one value; keys are case sensitive. A key cannot begin or end with a whitespace character; whitespace inside the key is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#key Eventsv2Subscriber#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The tag value.

May be empty. A value cannot begin or end with a whitespace character; whitespace inside the value is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#value Eventsv2Subscriber#value}

---

### Eventsv2SubscriberTransformer <a name="Eventsv2SubscriberTransformer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformer.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2SubscriberTransformer {
    Eventsv2SubscriberTransformerJsonataConfiguration JsonataConfiguration = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformer.property.jsonataConfiguration">JsonataConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfiguration">Eventsv2SubscriberTransformerJsonataConfiguration</a></code> | The JSONata expression configuration. Required when Type is JSONATA. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformer.property.type">Type</a></code> | <code>string</code> | The transform type: RAW delivers the event payload only; |

---

##### `JsonataConfiguration`<sup>Optional</sup> <a name="JsonataConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformer.property.jsonataConfiguration"></a>

```csharp
public Eventsv2SubscriberTransformerJsonataConfiguration JsonataConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfiguration">Eventsv2SubscriberTransformerJsonataConfiguration</a>

The JSONata expression configuration. Required when Type is JSONATA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#jsonata_configuration Eventsv2Subscriber#jsonata_configuration}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformer.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The transform type: RAW delivers the event payload only;

WITH_METADATA delivers the event with its metadata envelope; JSONATA delivers the output of the JSONata expression in JsonataConfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#type Eventsv2Subscriber#type}

---

### Eventsv2SubscriberTransformerJsonataConfiguration <a name="Eventsv2SubscriberTransformerJsonataConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2SubscriberTransformerJsonataConfiguration {
    string Expression = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfiguration.property.expression">Expression</a></code> | <code>string</code> | The JSONata expression that transforms the event, enclosed in {% %} delimiters. |

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfiguration.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

The JSONata expression that transforms the event, enclosed in {% %} delimiters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_subscriber#expression Eventsv2Subscriber#expression}

---

## Classes <a name="Classes" id="Classes"></a>

### Eventsv2SubscriberBatchConfigurationOutputReference <a name="Eventsv2SubscriberBatchConfigurationOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2SubscriberBatchConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.resetMaxBatchSize">ResetMaxBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.resetMaxBatchWindowInSeconds">ResetMaxBatchWindowInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxBatchSize` <a name="ResetMaxBatchSize" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.resetMaxBatchSize"></a>

```csharp
private void ResetMaxBatchSize()
```

##### `ResetMaxBatchWindowInSeconds` <a name="ResetMaxBatchWindowInSeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.resetMaxBatchWindowInSeconds"></a>

```csharp
private void ResetMaxBatchWindowInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.property.maxBatchSizeInput">MaxBatchSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.property.maxBatchWindowInSecondsInput">MaxBatchWindowInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.property.maxBatchSize">MaxBatchSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.property.maxBatchWindowInSeconds">MaxBatchWindowInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfiguration">Eventsv2SubscriberBatchConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxBatchSizeInput`<sup>Optional</sup> <a name="MaxBatchSizeInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.property.maxBatchSizeInput"></a>

```csharp
public double MaxBatchSizeInput { get; }
```

- *Type:* double

---

##### `MaxBatchWindowInSecondsInput`<sup>Optional</sup> <a name="MaxBatchWindowInSecondsInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.property.maxBatchWindowInSecondsInput"></a>

```csharp
public double MaxBatchWindowInSecondsInput { get; }
```

- *Type:* double

---

##### `MaxBatchSize`<sup>Required</sup> <a name="MaxBatchSize" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.property.maxBatchSize"></a>

```csharp
public double MaxBatchSize { get; }
```

- *Type:* double

---

##### `MaxBatchWindowInSeconds`<sup>Required</sup> <a name="MaxBatchWindowInSeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.property.maxBatchWindowInSeconds"></a>

```csharp
public double MaxBatchWindowInSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Eventsv2SubscriberBatchConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfiguration">Eventsv2SubscriberBatchConfiguration</a>

---


### Eventsv2SubscriberFilterConfigurationFiltersList <a name="Eventsv2SubscriberFilterConfigurationFiltersList" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2SubscriberFilterConfigurationFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.get"></a>

```csharp
private Eventsv2SubscriberFilterConfigurationFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFilters">Eventsv2SubscriberFilterConfigurationFilters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.property.internalValue"></a>

```csharp
public IResolvable|Eventsv2SubscriberFilterConfigurationFilters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFilters">Eventsv2SubscriberFilterConfigurationFilters</a>[]

---


### Eventsv2SubscriberFilterConfigurationFiltersOutputReference <a name="Eventsv2SubscriberFilterConfigurationFiltersOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2SubscriberFilterConfigurationFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.resetPattern">ResetPattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.resetScope">ResetScope</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPattern` <a name="ResetPattern" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.resetPattern"></a>

```csharp
private void ResetPattern()
```

##### `ResetScope` <a name="ResetScope" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.resetScope"></a>

```csharp
private void ResetScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.property.patternInput">PatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.property.pattern">Pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFilters">Eventsv2SubscriberFilterConfigurationFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.property.patternInput"></a>

```csharp
public string PatternInput { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.property.pattern"></a>

```csharp
public string Pattern { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Eventsv2SubscriberFilterConfigurationFilters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFilters">Eventsv2SubscriberFilterConfigurationFilters</a>

---


### Eventsv2SubscriberFilterConfigurationOutputReference <a name="Eventsv2SubscriberFilterConfigurationOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2SubscriberFilterConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.putFilters">PutFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.resetFilters">ResetFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.resetLanguage">ResetLanguage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFilters` <a name="PutFilters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.putFilters"></a>

```csharp
private void PutFilters(IResolvable|Eventsv2SubscriberFilterConfigurationFilters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.putFilters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFilters">Eventsv2SubscriberFilterConfigurationFilters</a>[]

---

##### `ResetFilters` <a name="ResetFilters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.resetFilters"></a>

```csharp
private void ResetFilters()
```

##### `ResetLanguage` <a name="ResetLanguage" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.resetLanguage"></a>

```csharp
private void ResetLanguage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.property.filters">Filters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList">Eventsv2SubscriberFilterConfigurationFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.property.filtersInput">FiltersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFilters">Eventsv2SubscriberFilterConfigurationFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.property.languageInput">LanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.property.language">Language</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfiguration">Eventsv2SubscriberFilterConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.property.filters"></a>

```csharp
public Eventsv2SubscriberFilterConfigurationFiltersList Filters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList">Eventsv2SubscriberFilterConfigurationFiltersList</a>

---

##### `FiltersInput`<sup>Optional</sup> <a name="FiltersInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.property.filtersInput"></a>

```csharp
public IResolvable|Eventsv2SubscriberFilterConfigurationFilters[] FiltersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFilters">Eventsv2SubscriberFilterConfigurationFilters</a>[]

---

##### `LanguageInput`<sup>Optional</sup> <a name="LanguageInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.property.languageInput"></a>

```csharp
public string LanguageInput { get; }
```

- *Type:* string

---

##### `Language`<sup>Required</sup> <a name="Language" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.property.language"></a>

```csharp
public string Language { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Eventsv2SubscriberFilterConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfiguration">Eventsv2SubscriberFilterConfiguration</a>

---


### Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference <a name="Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.resetDeduplicationType">ResetDeduplicationType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeduplicationType` <a name="ResetDeduplicationType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.resetDeduplicationType"></a>

```csharp
private void ResetDeduplicationType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.property.deduplicationTypeInput">DeduplicationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.property.deduplicationType">DeduplicationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeduplicationTypeInput`<sup>Optional</sup> <a name="DeduplicationTypeInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.property.deduplicationTypeInput"></a>

```csharp
public string DeduplicationTypeInput { get; }
```

- *Type:* string

---

##### `DeduplicationType`<sup>Required</sup> <a name="DeduplicationType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.property.deduplicationType"></a>

```csharp
public string DeduplicationType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration</a>

---


### Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference <a name="Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.putDeduplicationConfiguration">PutDeduplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.putSystemMetadata">PutSystemMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.resetDeduplicationConfiguration">ResetDeduplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.resetSystemMetadata">ResetSystemMetadata</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDeduplicationConfiguration` <a name="PutDeduplicationConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.putDeduplicationConfiguration"></a>

```csharp
private void PutDeduplicationConfiguration(Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.putDeduplicationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration</a>

---

##### `PutSystemMetadata` <a name="PutSystemMetadata" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.putSystemMetadata"></a>

```csharp
private void PutSystemMetadata(Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.putSystemMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata</a>

---

##### `ResetDeduplicationConfiguration` <a name="ResetDeduplicationConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.resetDeduplicationConfiguration"></a>

```csharp
private void ResetDeduplicationConfiguration()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetSystemMetadata` <a name="ResetSystemMetadata" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.resetSystemMetadata"></a>

```csharp
private void ResetSystemMetadata()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.deduplicationConfiguration">DeduplicationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.systemMetadata">SystemMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.deduplicationConfigurationInput">DeduplicationConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.metadataInput">MetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.systemMetadataInput">SystemMetadataInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters">Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeduplicationConfiguration`<sup>Required</sup> <a name="DeduplicationConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.deduplicationConfiguration"></a>

```csharp
public Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference DeduplicationConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference</a>

---

##### `SystemMetadata`<sup>Required</sup> <a name="SystemMetadata" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.systemMetadata"></a>

```csharp
public Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference SystemMetadata { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference</a>

---

##### `DeduplicationConfigurationInput`<sup>Optional</sup> <a name="DeduplicationConfigurationInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.deduplicationConfigurationInput"></a>

```csharp
public IResolvable|Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration DeduplicationConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration</a>

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.metadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SystemMetadataInput`<sup>Optional</sup> <a name="SystemMetadataInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.systemMetadataInput"></a>

```csharp
public IResolvable|Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata SystemMetadataInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata</a>

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters">Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters</a>

---


### Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference <a name="Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.resetDeduplicationId">ResetDeduplicationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.resetEventGroupId">ResetEventGroupId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeduplicationId` <a name="ResetDeduplicationId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.resetDeduplicationId"></a>

```csharp
private void ResetDeduplicationId()
```

##### `ResetEventGroupId` <a name="ResetEventGroupId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.resetEventGroupId"></a>

```csharp
private void ResetEventGroupId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.deduplicationIdInput">DeduplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.eventGroupIdInput">EventGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.deduplicationId">DeduplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.eventGroupId">EventGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeduplicationIdInput`<sup>Optional</sup> <a name="DeduplicationIdInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.deduplicationIdInput"></a>

```csharp
public string DeduplicationIdInput { get; }
```

- *Type:* string

---

##### `EventGroupIdInput`<sup>Optional</sup> <a name="EventGroupIdInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.eventGroupIdInput"></a>

```csharp
public string EventGroupIdInput { get; }
```

- *Type:* string

---

##### `DeduplicationId`<sup>Required</sup> <a name="DeduplicationId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.deduplicationId"></a>

```csharp
public string DeduplicationId { get; }
```

- *Type:* string

---

##### `EventGroupId`<sup>Required</sup> <a name="EventGroupId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.eventGroupId"></a>

```csharp
public string EventGroupId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata</a>

---


### Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference <a name="Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.resetHeaderParameters">ResetHeaderParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.resetInvocationTimeoutSeconds">ResetInvocationTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.resetPathParameterValues">ResetPathParameterValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.resetQueryStringParameters">ResetQueryStringParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHeaderParameters` <a name="ResetHeaderParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.resetHeaderParameters"></a>

```csharp
private void ResetHeaderParameters()
```

##### `ResetInvocationTimeoutSeconds` <a name="ResetInvocationTimeoutSeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.resetInvocationTimeoutSeconds"></a>

```csharp
private void ResetInvocationTimeoutSeconds()
```

##### `ResetPathParameterValues` <a name="ResetPathParameterValues" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.resetPathParameterValues"></a>

```csharp
private void ResetPathParameterValues()
```

##### `ResetQueryStringParameters` <a name="ResetQueryStringParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.resetQueryStringParameters"></a>

```csharp
private void ResetQueryStringParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.headerParametersInput">HeaderParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.invocationTimeoutSecondsInput">InvocationTimeoutSecondsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.pathParameterValuesInput">PathParameterValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.queryStringParametersInput">QueryStringParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.headerParameters">HeaderParameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.invocationTimeoutSeconds">InvocationTimeoutSeconds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.pathParameterValues">PathParameterValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.queryStringParameters">QueryStringParameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters">Eventsv2SubscriberInvokeConfigurationHttpParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HeaderParametersInput`<sup>Optional</sup> <a name="HeaderParametersInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.headerParametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> HeaderParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InvocationTimeoutSecondsInput`<sup>Optional</sup> <a name="InvocationTimeoutSecondsInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.invocationTimeoutSecondsInput"></a>

```csharp
public string InvocationTimeoutSecondsInput { get; }
```

- *Type:* string

---

##### `PathParameterValuesInput`<sup>Optional</sup> <a name="PathParameterValuesInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.pathParameterValuesInput"></a>

```csharp
public string[] PathParameterValuesInput { get; }
```

- *Type:* string[]

---

##### `QueryStringParametersInput`<sup>Optional</sup> <a name="QueryStringParametersInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.queryStringParametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> QueryStringParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `HeaderParameters`<sup>Required</sup> <a name="HeaderParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.headerParameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> HeaderParameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InvocationTimeoutSeconds`<sup>Required</sup> <a name="InvocationTimeoutSeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.invocationTimeoutSeconds"></a>

```csharp
public string InvocationTimeoutSeconds { get; }
```

- *Type:* string

---

##### `PathParameterValues`<sup>Required</sup> <a name="PathParameterValues" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.pathParameterValues"></a>

```csharp
public string[] PathParameterValues { get; }
```

- *Type:* string[]

---

##### `QueryStringParameters`<sup>Required</sup> <a name="QueryStringParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.queryStringParameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> QueryStringParameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Eventsv2SubscriberInvokeConfigurationHttpParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters">Eventsv2SubscriberInvokeConfigurationHttpParameters</a>

---


### Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference <a name="Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.resetExplicitHashKey">ResetExplicitHashKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.resetPartitionKey">ResetPartitionKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExplicitHashKey` <a name="ResetExplicitHashKey" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.resetExplicitHashKey"></a>

```csharp
private void ResetExplicitHashKey()
```

##### `ResetPartitionKey` <a name="ResetPartitionKey" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.resetPartitionKey"></a>

```csharp
private void ResetPartitionKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.explicitHashKeyInput">ExplicitHashKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.partitionKeyInput">PartitionKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.explicitHashKey">ExplicitHashKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.partitionKey">PartitionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParameters">Eventsv2SubscriberInvokeConfigurationKinesisParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExplicitHashKeyInput`<sup>Optional</sup> <a name="ExplicitHashKeyInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.explicitHashKeyInput"></a>

```csharp
public string ExplicitHashKeyInput { get; }
```

- *Type:* string

---

##### `PartitionKeyInput`<sup>Optional</sup> <a name="PartitionKeyInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.partitionKeyInput"></a>

```csharp
public string PartitionKeyInput { get; }
```

- *Type:* string

---

##### `ExplicitHashKey`<sup>Required</sup> <a name="ExplicitHashKey" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.explicitHashKey"></a>

```csharp
public string ExplicitHashKey { get; }
```

- *Type:* string

---

##### `PartitionKey`<sup>Required</sup> <a name="PartitionKey" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.partitionKey"></a>

```csharp
public string PartitionKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Eventsv2SubscriberInvokeConfigurationKinesisParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParameters">Eventsv2SubscriberInvokeConfigurationKinesisParameters</a>

---


### Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference <a name="Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.resetDurableExecutionName">ResetDurableExecutionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.resetInvocationTimeoutSeconds">ResetInvocationTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.resetInvocationType">ResetInvocationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.resetQualifier">ResetQualifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.resetTenantId">ResetTenantId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDurableExecutionName` <a name="ResetDurableExecutionName" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.resetDurableExecutionName"></a>

```csharp
private void ResetDurableExecutionName()
```

##### `ResetInvocationTimeoutSeconds` <a name="ResetInvocationTimeoutSeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.resetInvocationTimeoutSeconds"></a>

```csharp
private void ResetInvocationTimeoutSeconds()
```

##### `ResetInvocationType` <a name="ResetInvocationType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.resetInvocationType"></a>

```csharp
private void ResetInvocationType()
```

##### `ResetQualifier` <a name="ResetQualifier" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.resetQualifier"></a>

```csharp
private void ResetQualifier()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.resetTenantId"></a>

```csharp
private void ResetTenantId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.durableExecutionNameInput">DurableExecutionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.invocationTimeoutSecondsInput">InvocationTimeoutSecondsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.invocationTypeInput">InvocationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.qualifierInput">QualifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.durableExecutionName">DurableExecutionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.invocationTimeoutSeconds">InvocationTimeoutSeconds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.invocationType">InvocationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.qualifier">Qualifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters">Eventsv2SubscriberInvokeConfigurationLambdaParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DurableExecutionNameInput`<sup>Optional</sup> <a name="DurableExecutionNameInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.durableExecutionNameInput"></a>

```csharp
public string DurableExecutionNameInput { get; }
```

- *Type:* string

---

##### `InvocationTimeoutSecondsInput`<sup>Optional</sup> <a name="InvocationTimeoutSecondsInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.invocationTimeoutSecondsInput"></a>

```csharp
public string InvocationTimeoutSecondsInput { get; }
```

- *Type:* string

---

##### `InvocationTypeInput`<sup>Optional</sup> <a name="InvocationTypeInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.invocationTypeInput"></a>

```csharp
public string InvocationTypeInput { get; }
```

- *Type:* string

---

##### `QualifierInput`<sup>Optional</sup> <a name="QualifierInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.qualifierInput"></a>

```csharp
public string QualifierInput { get; }
```

- *Type:* string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `DurableExecutionName`<sup>Required</sup> <a name="DurableExecutionName" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.durableExecutionName"></a>

```csharp
public string DurableExecutionName { get; }
```

- *Type:* string

---

##### `InvocationTimeoutSeconds`<sup>Required</sup> <a name="InvocationTimeoutSeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.invocationTimeoutSeconds"></a>

```csharp
public string InvocationTimeoutSeconds { get; }
```

- *Type:* string

---

##### `InvocationType`<sup>Required</sup> <a name="InvocationType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.invocationType"></a>

```csharp
public string InvocationType { get; }
```

- *Type:* string

---

##### `Qualifier`<sup>Required</sup> <a name="Qualifier" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.qualifier"></a>

```csharp
public string Qualifier { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Eventsv2SubscriberInvokeConfigurationLambdaParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters">Eventsv2SubscriberInvokeConfigurationLambdaParameters</a>

---


### Eventsv2SubscriberInvokeConfigurationOutputReference <a name="Eventsv2SubscriberInvokeConfigurationOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2SubscriberInvokeConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putEventBusV2Parameters">PutEventBusV2Parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putHttpParameters">PutHttpParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putKinesisParameters">PutKinesisParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putLambdaParameters">PutLambdaParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putSnsParameters">PutSnsParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putSqsParameters">PutSqsParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putStepFunctionsParameters">PutStepFunctionsParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putUniversalTargetParameters">PutUniversalTargetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetEventBusV2Parameters">ResetEventBusV2Parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetHttpParameters">ResetHttpParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetKinesisParameters">ResetKinesisParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetLambdaParameters">ResetLambdaParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetSnsParameters">ResetSnsParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetSqsParameters">ResetSqsParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetStepFunctionsParameters">ResetStepFunctionsParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetUniversalTargetParameters">ResetUniversalTargetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEventBusV2Parameters` <a name="PutEventBusV2Parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putEventBusV2Parameters"></a>

```csharp
private void PutEventBusV2Parameters(Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putEventBusV2Parameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters">Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters</a>

---

##### `PutHttpParameters` <a name="PutHttpParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putHttpParameters"></a>

```csharp
private void PutHttpParameters(Eventsv2SubscriberInvokeConfigurationHttpParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putHttpParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters">Eventsv2SubscriberInvokeConfigurationHttpParameters</a>

---

##### `PutKinesisParameters` <a name="PutKinesisParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putKinesisParameters"></a>

```csharp
private void PutKinesisParameters(Eventsv2SubscriberInvokeConfigurationKinesisParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putKinesisParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParameters">Eventsv2SubscriberInvokeConfigurationKinesisParameters</a>

---

##### `PutLambdaParameters` <a name="PutLambdaParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putLambdaParameters"></a>

```csharp
private void PutLambdaParameters(Eventsv2SubscriberInvokeConfigurationLambdaParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putLambdaParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters">Eventsv2SubscriberInvokeConfigurationLambdaParameters</a>

---

##### `PutSnsParameters` <a name="PutSnsParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putSnsParameters"></a>

```csharp
private void PutSnsParameters(Eventsv2SubscriberInvokeConfigurationSnsParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putSnsParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters">Eventsv2SubscriberInvokeConfigurationSnsParameters</a>

---

##### `PutSqsParameters` <a name="PutSqsParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putSqsParameters"></a>

```csharp
private void PutSqsParameters(Eventsv2SubscriberInvokeConfigurationSqsParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putSqsParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters">Eventsv2SubscriberInvokeConfigurationSqsParameters</a>

---

##### `PutStepFunctionsParameters` <a name="PutStepFunctionsParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putStepFunctionsParameters"></a>

```csharp
private void PutStepFunctionsParameters(Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putStepFunctionsParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters">Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters</a>

---

##### `PutUniversalTargetParameters` <a name="PutUniversalTargetParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putUniversalTargetParameters"></a>

```csharp
private void PutUniversalTargetParameters(Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putUniversalTargetParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters">Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters</a>

---

##### `ResetEventBusV2Parameters` <a name="ResetEventBusV2Parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetEventBusV2Parameters"></a>

```csharp
private void ResetEventBusV2Parameters()
```

##### `ResetHttpParameters` <a name="ResetHttpParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetHttpParameters"></a>

```csharp
private void ResetHttpParameters()
```

##### `ResetKinesisParameters` <a name="ResetKinesisParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetKinesisParameters"></a>

```csharp
private void ResetKinesisParameters()
```

##### `ResetLambdaParameters` <a name="ResetLambdaParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetLambdaParameters"></a>

```csharp
private void ResetLambdaParameters()
```

##### `ResetSnsParameters` <a name="ResetSnsParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetSnsParameters"></a>

```csharp
private void ResetSnsParameters()
```

##### `ResetSqsParameters` <a name="ResetSqsParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetSqsParameters"></a>

```csharp
private void ResetSqsParameters()
```

##### `ResetStepFunctionsParameters` <a name="ResetStepFunctionsParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetStepFunctionsParameters"></a>

```csharp
private void ResetStepFunctionsParameters()
```

##### `ResetUniversalTargetParameters` <a name="ResetUniversalTargetParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetUniversalTargetParameters"></a>

```csharp
private void ResetUniversalTargetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.eventBusV2Parameters">EventBusV2Parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.httpParameters">HttpParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference">Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.kinesisParameters">KinesisParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference">Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.lambdaParameters">LambdaParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference">Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.snsParameters">SnsParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference">Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.sqsParameters">SqsParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference">Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.stepFunctionsParameters">StepFunctionsParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference">Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.universalTargetParameters">UniversalTargetParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference">Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.eventBusV2ParametersInput">EventBusV2ParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters">Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.httpParametersInput">HttpParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters">Eventsv2SubscriberInvokeConfigurationHttpParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.kinesisParametersInput">KinesisParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParameters">Eventsv2SubscriberInvokeConfigurationKinesisParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.lambdaParametersInput">LambdaParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters">Eventsv2SubscriberInvokeConfigurationLambdaParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.snsParametersInput">SnsParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters">Eventsv2SubscriberInvokeConfigurationSnsParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.sqsParametersInput">SqsParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters">Eventsv2SubscriberInvokeConfigurationSqsParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.stepFunctionsParametersInput">StepFunctionsParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters">Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.targetArnInput">TargetArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.universalTargetParametersInput">UniversalTargetParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters">Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.targetArn">TargetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration">Eventsv2SubscriberInvokeConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventBusV2Parameters`<sup>Required</sup> <a name="EventBusV2Parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.eventBusV2Parameters"></a>

```csharp
public Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference EventBusV2Parameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference</a>

---

##### `HttpParameters`<sup>Required</sup> <a name="HttpParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.httpParameters"></a>

```csharp
public Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference HttpParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference">Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference</a>

---

##### `KinesisParameters`<sup>Required</sup> <a name="KinesisParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.kinesisParameters"></a>

```csharp
public Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference KinesisParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference">Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference</a>

---

##### `LambdaParameters`<sup>Required</sup> <a name="LambdaParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.lambdaParameters"></a>

```csharp
public Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference LambdaParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference">Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference</a>

---

##### `SnsParameters`<sup>Required</sup> <a name="SnsParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.snsParameters"></a>

```csharp
public Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference SnsParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference">Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference</a>

---

##### `SqsParameters`<sup>Required</sup> <a name="SqsParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.sqsParameters"></a>

```csharp
public Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference SqsParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference">Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference</a>

---

##### `StepFunctionsParameters`<sup>Required</sup> <a name="StepFunctionsParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.stepFunctionsParameters"></a>

```csharp
public Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference StepFunctionsParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference">Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference</a>

---

##### `UniversalTargetParameters`<sup>Required</sup> <a name="UniversalTargetParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.universalTargetParameters"></a>

```csharp
public Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference UniversalTargetParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference">Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference</a>

---

##### `EventBusV2ParametersInput`<sup>Optional</sup> <a name="EventBusV2ParametersInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.eventBusV2ParametersInput"></a>

```csharp
public IResolvable|Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters EventBusV2ParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters">Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters</a>

---

##### `HttpParametersInput`<sup>Optional</sup> <a name="HttpParametersInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.httpParametersInput"></a>

```csharp
public IResolvable|Eventsv2SubscriberInvokeConfigurationHttpParameters HttpParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters">Eventsv2SubscriberInvokeConfigurationHttpParameters</a>

---

##### `KinesisParametersInput`<sup>Optional</sup> <a name="KinesisParametersInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.kinesisParametersInput"></a>

```csharp
public IResolvable|Eventsv2SubscriberInvokeConfigurationKinesisParameters KinesisParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParameters">Eventsv2SubscriberInvokeConfigurationKinesisParameters</a>

---

##### `LambdaParametersInput`<sup>Optional</sup> <a name="LambdaParametersInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.lambdaParametersInput"></a>

```csharp
public IResolvable|Eventsv2SubscriberInvokeConfigurationLambdaParameters LambdaParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters">Eventsv2SubscriberInvokeConfigurationLambdaParameters</a>

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `SnsParametersInput`<sup>Optional</sup> <a name="SnsParametersInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.snsParametersInput"></a>

```csharp
public IResolvable|Eventsv2SubscriberInvokeConfigurationSnsParameters SnsParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters">Eventsv2SubscriberInvokeConfigurationSnsParameters</a>

---

##### `SqsParametersInput`<sup>Optional</sup> <a name="SqsParametersInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.sqsParametersInput"></a>

```csharp
public IResolvable|Eventsv2SubscriberInvokeConfigurationSqsParameters SqsParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters">Eventsv2SubscriberInvokeConfigurationSqsParameters</a>

---

##### `StepFunctionsParametersInput`<sup>Optional</sup> <a name="StepFunctionsParametersInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.stepFunctionsParametersInput"></a>

```csharp
public IResolvable|Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters StepFunctionsParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters">Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters</a>

---

##### `TargetArnInput`<sup>Optional</sup> <a name="TargetArnInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.targetArnInput"></a>

```csharp
public string TargetArnInput { get; }
```

- *Type:* string

---

##### `UniversalTargetParametersInput`<sup>Optional</sup> <a name="UniversalTargetParametersInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.universalTargetParametersInput"></a>

```csharp
public IResolvable|Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters UniversalTargetParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters">Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters</a>

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `TargetArn`<sup>Required</sup> <a name="TargetArn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.targetArn"></a>

```csharp
public string TargetArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Eventsv2SubscriberInvokeConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration">Eventsv2SubscriberInvokeConfiguration</a>

---


### Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap <a name="Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.get"></a>

```csharp
private Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference Get(string Key)
```

###### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes">Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes</a>></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.property.internalValue"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes> InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes">Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes</a>>

---


### Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference <a name="Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, string ComplexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.Initializer.parameter.complexObjectKey">ComplexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectKey`<sup>Required</sup> <a name="ComplexObjectKey" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.resetBinaryValue">ResetBinaryValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.resetDataType">ResetDataType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.resetStringValue">ResetStringValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBinaryValue` <a name="ResetBinaryValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.resetBinaryValue"></a>

```csharp
private void ResetBinaryValue()
```

##### `ResetDataType` <a name="ResetDataType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.resetDataType"></a>

```csharp
private void ResetDataType()
```

##### `ResetStringValue` <a name="ResetStringValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.resetStringValue"></a>

```csharp
private void ResetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.binaryValueInput">BinaryValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.dataTypeInput">DataTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.stringValueInput">StringValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.binaryValue">BinaryValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.dataType">DataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.stringValue">StringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes">Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BinaryValueInput`<sup>Optional</sup> <a name="BinaryValueInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.binaryValueInput"></a>

```csharp
public string BinaryValueInput { get; }
```

- *Type:* string

---

##### `DataTypeInput`<sup>Optional</sup> <a name="DataTypeInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.dataTypeInput"></a>

```csharp
public string DataTypeInput { get; }
```

- *Type:* string

---

##### `StringValueInput`<sup>Optional</sup> <a name="StringValueInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.stringValueInput"></a>

```csharp
public string StringValueInput { get; }
```

- *Type:* string

---

##### `BinaryValue`<sup>Required</sup> <a name="BinaryValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.binaryValue"></a>

```csharp
public string BinaryValue { get; }
```

- *Type:* string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.dataType"></a>

```csharp
public string DataType { get; }
```

- *Type:* string

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.stringValue"></a>

```csharp
public string StringValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes">Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes</a>

---


### Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference <a name="Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.putMessageAttributes">PutMessageAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.resetMessageAttributes">ResetMessageAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.resetMessageDeduplicationId">ResetMessageDeduplicationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.resetMessageGroupId">ResetMessageGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.resetMessageStructure">ResetMessageStructure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.resetSubject">ResetSubject</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMessageAttributes` <a name="PutMessageAttributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.putMessageAttributes"></a>

```csharp
private void PutMessageAttributes(IResolvable|System.Collections.Generic.IDictionary<string, Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes> Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.putMessageAttributes.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes">Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes</a>>

---

##### `ResetMessageAttributes` <a name="ResetMessageAttributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.resetMessageAttributes"></a>

```csharp
private void ResetMessageAttributes()
```

##### `ResetMessageDeduplicationId` <a name="ResetMessageDeduplicationId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.resetMessageDeduplicationId"></a>

```csharp
private void ResetMessageDeduplicationId()
```

##### `ResetMessageGroupId` <a name="ResetMessageGroupId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.resetMessageGroupId"></a>

```csharp
private void ResetMessageGroupId()
```

##### `ResetMessageStructure` <a name="ResetMessageStructure" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.resetMessageStructure"></a>

```csharp
private void ResetMessageStructure()
```

##### `ResetSubject` <a name="ResetSubject" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.resetSubject"></a>

```csharp
private void ResetSubject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageAttributes">MessageAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap">Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageAttributesInput">MessageAttributesInput</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes">Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageDeduplicationIdInput">MessageDeduplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageGroupIdInput">MessageGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageStructureInput">MessageStructureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.subjectInput">SubjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageDeduplicationId">MessageDeduplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageGroupId">MessageGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageStructure">MessageStructure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.subject">Subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters">Eventsv2SubscriberInvokeConfigurationSnsParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MessageAttributes`<sup>Required</sup> <a name="MessageAttributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageAttributes"></a>

```csharp
public Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap MessageAttributes { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap">Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap</a>

---

##### `MessageAttributesInput`<sup>Optional</sup> <a name="MessageAttributesInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageAttributesInput"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes> MessageAttributesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes">Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes</a>>

---

##### `MessageDeduplicationIdInput`<sup>Optional</sup> <a name="MessageDeduplicationIdInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageDeduplicationIdInput"></a>

```csharp
public string MessageDeduplicationIdInput { get; }
```

- *Type:* string

---

##### `MessageGroupIdInput`<sup>Optional</sup> <a name="MessageGroupIdInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageGroupIdInput"></a>

```csharp
public string MessageGroupIdInput { get; }
```

- *Type:* string

---

##### `MessageStructureInput`<sup>Optional</sup> <a name="MessageStructureInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageStructureInput"></a>

```csharp
public string MessageStructureInput { get; }
```

- *Type:* string

---

##### `SubjectInput`<sup>Optional</sup> <a name="SubjectInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.subjectInput"></a>

```csharp
public string SubjectInput { get; }
```

- *Type:* string

---

##### `MessageDeduplicationId`<sup>Required</sup> <a name="MessageDeduplicationId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageDeduplicationId"></a>

```csharp
public string MessageDeduplicationId { get; }
```

- *Type:* string

---

##### `MessageGroupId`<sup>Required</sup> <a name="MessageGroupId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageGroupId"></a>

```csharp
public string MessageGroupId { get; }
```

- *Type:* string

---

##### `MessageStructure`<sup>Required</sup> <a name="MessageStructure" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageStructure"></a>

```csharp
public string MessageStructure { get; }
```

- *Type:* string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.subject"></a>

```csharp
public string Subject { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Eventsv2SubscriberInvokeConfigurationSnsParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters">Eventsv2SubscriberInvokeConfigurationSnsParameters</a>

---


### Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap <a name="Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.get"></a>

```csharp
private Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference Get(string Key)
```

###### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes</a>></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.property.internalValue"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes> InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes</a>>

---


### Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference <a name="Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, string ComplexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.Initializer.parameter.complexObjectKey">ComplexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectKey`<sup>Required</sup> <a name="ComplexObjectKey" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.resetBinaryValue">ResetBinaryValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.resetDataType">ResetDataType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.resetStringValue">ResetStringValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBinaryValue` <a name="ResetBinaryValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.resetBinaryValue"></a>

```csharp
private void ResetBinaryValue()
```

##### `ResetDataType` <a name="ResetDataType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.resetDataType"></a>

```csharp
private void ResetDataType()
```

##### `ResetStringValue` <a name="ResetStringValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.resetStringValue"></a>

```csharp
private void ResetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.binaryValueInput">BinaryValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.dataTypeInput">DataTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.stringValueInput">StringValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.binaryValue">BinaryValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.dataType">DataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.stringValue">StringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BinaryValueInput`<sup>Optional</sup> <a name="BinaryValueInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.binaryValueInput"></a>

```csharp
public string BinaryValueInput { get; }
```

- *Type:* string

---

##### `DataTypeInput`<sup>Optional</sup> <a name="DataTypeInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.dataTypeInput"></a>

```csharp
public string DataTypeInput { get; }
```

- *Type:* string

---

##### `StringValueInput`<sup>Optional</sup> <a name="StringValueInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.stringValueInput"></a>

```csharp
public string StringValueInput { get; }
```

- *Type:* string

---

##### `BinaryValue`<sup>Required</sup> <a name="BinaryValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.binaryValue"></a>

```csharp
public string BinaryValue { get; }
```

- *Type:* string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.dataType"></a>

```csharp
public string DataType { get; }
```

- *Type:* string

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.stringValue"></a>

```csharp
public string StringValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes</a>

---


### Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap <a name="Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.get"></a>

```csharp
private Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference Get(string Key)
```

###### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes</a>></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.property.internalValue"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes> InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes</a>>

---


### Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference <a name="Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, string ComplexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.Initializer.parameter.complexObjectKey">ComplexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectKey`<sup>Required</sup> <a name="ComplexObjectKey" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.resetBinaryValue">ResetBinaryValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.resetDataType">ResetDataType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.resetStringValue">ResetStringValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBinaryValue` <a name="ResetBinaryValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.resetBinaryValue"></a>

```csharp
private void ResetBinaryValue()
```

##### `ResetDataType` <a name="ResetDataType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.resetDataType"></a>

```csharp
private void ResetDataType()
```

##### `ResetStringValue` <a name="ResetStringValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.resetStringValue"></a>

```csharp
private void ResetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.binaryValueInput">BinaryValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.dataTypeInput">DataTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.stringValueInput">StringValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.binaryValue">BinaryValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.dataType">DataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.stringValue">StringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BinaryValueInput`<sup>Optional</sup> <a name="BinaryValueInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.binaryValueInput"></a>

```csharp
public string BinaryValueInput { get; }
```

- *Type:* string

---

##### `DataTypeInput`<sup>Optional</sup> <a name="DataTypeInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.dataTypeInput"></a>

```csharp
public string DataTypeInput { get; }
```

- *Type:* string

---

##### `StringValueInput`<sup>Optional</sup> <a name="StringValueInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.stringValueInput"></a>

```csharp
public string StringValueInput { get; }
```

- *Type:* string

---

##### `BinaryValue`<sup>Required</sup> <a name="BinaryValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.binaryValue"></a>

```csharp
public string BinaryValue { get; }
```

- *Type:* string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.dataType"></a>

```csharp
public string DataType { get; }
```

- *Type:* string

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.stringValue"></a>

```csharp
public string StringValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes</a>

---


### Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference <a name="Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.putMessageAttributes">PutMessageAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.putMessageSystemAttributes">PutMessageSystemAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.resetDelaySeconds">ResetDelaySeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.resetMessageAttributes">ResetMessageAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.resetMessageDeduplicationId">ResetMessageDeduplicationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.resetMessageGroupId">ResetMessageGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.resetMessageSystemAttributes">ResetMessageSystemAttributes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMessageAttributes` <a name="PutMessageAttributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.putMessageAttributes"></a>

```csharp
private void PutMessageAttributes(IResolvable|System.Collections.Generic.IDictionary<string, Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes> Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.putMessageAttributes.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes</a>>

---

##### `PutMessageSystemAttributes` <a name="PutMessageSystemAttributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.putMessageSystemAttributes"></a>

```csharp
private void PutMessageSystemAttributes(IResolvable|System.Collections.Generic.IDictionary<string, Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes> Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.putMessageSystemAttributes.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes</a>>

---

##### `ResetDelaySeconds` <a name="ResetDelaySeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.resetDelaySeconds"></a>

```csharp
private void ResetDelaySeconds()
```

##### `ResetMessageAttributes` <a name="ResetMessageAttributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.resetMessageAttributes"></a>

```csharp
private void ResetMessageAttributes()
```

##### `ResetMessageDeduplicationId` <a name="ResetMessageDeduplicationId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.resetMessageDeduplicationId"></a>

```csharp
private void ResetMessageDeduplicationId()
```

##### `ResetMessageGroupId` <a name="ResetMessageGroupId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.resetMessageGroupId"></a>

```csharp
private void ResetMessageGroupId()
```

##### `ResetMessageSystemAttributes` <a name="ResetMessageSystemAttributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.resetMessageSystemAttributes"></a>

```csharp
private void ResetMessageSystemAttributes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageAttributes">MessageAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageSystemAttributes">MessageSystemAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.delaySecondsInput">DelaySecondsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageAttributesInput">MessageAttributesInput</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageDeduplicationIdInput">MessageDeduplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageGroupIdInput">MessageGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageSystemAttributesInput">MessageSystemAttributesInput</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.delaySeconds">DelaySeconds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageDeduplicationId">MessageDeduplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageGroupId">MessageGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters">Eventsv2SubscriberInvokeConfigurationSqsParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MessageAttributes`<sup>Required</sup> <a name="MessageAttributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageAttributes"></a>

```csharp
public Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap MessageAttributes { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap</a>

---

##### `MessageSystemAttributes`<sup>Required</sup> <a name="MessageSystemAttributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageSystemAttributes"></a>

```csharp
public Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap MessageSystemAttributes { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap</a>

---

##### `DelaySecondsInput`<sup>Optional</sup> <a name="DelaySecondsInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.delaySecondsInput"></a>

```csharp
public string DelaySecondsInput { get; }
```

- *Type:* string

---

##### `MessageAttributesInput`<sup>Optional</sup> <a name="MessageAttributesInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageAttributesInput"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes> MessageAttributesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes</a>>

---

##### `MessageDeduplicationIdInput`<sup>Optional</sup> <a name="MessageDeduplicationIdInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageDeduplicationIdInput"></a>

```csharp
public string MessageDeduplicationIdInput { get; }
```

- *Type:* string

---

##### `MessageGroupIdInput`<sup>Optional</sup> <a name="MessageGroupIdInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageGroupIdInput"></a>

```csharp
public string MessageGroupIdInput { get; }
```

- *Type:* string

---

##### `MessageSystemAttributesInput`<sup>Optional</sup> <a name="MessageSystemAttributesInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageSystemAttributesInput"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes> MessageSystemAttributesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes</a>>

---

##### `DelaySeconds`<sup>Required</sup> <a name="DelaySeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.delaySeconds"></a>

```csharp
public string DelaySeconds { get; }
```

- *Type:* string

---

##### `MessageDeduplicationId`<sup>Required</sup> <a name="MessageDeduplicationId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageDeduplicationId"></a>

```csharp
public string MessageDeduplicationId { get; }
```

- *Type:* string

---

##### `MessageGroupId`<sup>Required</sup> <a name="MessageGroupId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageGroupId"></a>

```csharp
public string MessageGroupId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Eventsv2SubscriberInvokeConfigurationSqsParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters">Eventsv2SubscriberInvokeConfigurationSqsParameters</a>

---


### Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference <a name="Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.resetInvocationTimeoutSeconds">ResetInvocationTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.resetInvocationType">ResetInvocationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.resetTraceHeader">ResetTraceHeader</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInvocationTimeoutSeconds` <a name="ResetInvocationTimeoutSeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.resetInvocationTimeoutSeconds"></a>

```csharp
private void ResetInvocationTimeoutSeconds()
```

##### `ResetInvocationType` <a name="ResetInvocationType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.resetInvocationType"></a>

```csharp
private void ResetInvocationType()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetTraceHeader` <a name="ResetTraceHeader" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.resetTraceHeader"></a>

```csharp
private void ResetTraceHeader()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.invocationTimeoutSecondsInput">InvocationTimeoutSecondsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.invocationTypeInput">InvocationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.traceHeaderInput">TraceHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.invocationTimeoutSeconds">InvocationTimeoutSeconds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.invocationType">InvocationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.traceHeader">TraceHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters">Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InvocationTimeoutSecondsInput`<sup>Optional</sup> <a name="InvocationTimeoutSecondsInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.invocationTimeoutSecondsInput"></a>

```csharp
public string InvocationTimeoutSecondsInput { get; }
```

- *Type:* string

---

##### `InvocationTypeInput`<sup>Optional</sup> <a name="InvocationTypeInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.invocationTypeInput"></a>

```csharp
public string InvocationTypeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TraceHeaderInput`<sup>Optional</sup> <a name="TraceHeaderInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.traceHeaderInput"></a>

```csharp
public string TraceHeaderInput { get; }
```

- *Type:* string

---

##### `InvocationTimeoutSeconds`<sup>Required</sup> <a name="InvocationTimeoutSeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.invocationTimeoutSeconds"></a>

```csharp
public string InvocationTimeoutSeconds { get; }
```

- *Type:* string

---

##### `InvocationType`<sup>Required</sup> <a name="InvocationType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.invocationType"></a>

```csharp
public string InvocationType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TraceHeader`<sup>Required</sup> <a name="TraceHeader" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.traceHeader"></a>

```csharp
public string TraceHeader { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters">Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters</a>

---


### Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference <a name="Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.resetInput">ResetInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.resetInvocationTimeoutSeconds">ResetInvocationTimeoutSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInput` <a name="ResetInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.resetInput"></a>

```csharp
private void ResetInput()
```

##### `ResetInvocationTimeoutSeconds` <a name="ResetInvocationTimeoutSeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.resetInvocationTimeoutSeconds"></a>

```csharp
private void ResetInvocationTimeoutSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.inputInput">InputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.invocationTimeoutSecondsInput">InvocationTimeoutSecondsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.input">Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.invocationTimeoutSeconds">InvocationTimeoutSeconds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters">Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InputInput`<sup>Optional</sup> <a name="InputInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.inputInput"></a>

```csharp
public string InputInput { get; }
```

- *Type:* string

---

##### `InvocationTimeoutSecondsInput`<sup>Optional</sup> <a name="InvocationTimeoutSecondsInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.invocationTimeoutSecondsInput"></a>

```csharp
public string InvocationTimeoutSecondsInput { get; }
```

- *Type:* string

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.input"></a>

```csharp
public string Input { get; }
```

- *Type:* string

---

##### `InvocationTimeoutSeconds`<sup>Required</sup> <a name="InvocationTimeoutSeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.invocationTimeoutSeconds"></a>

```csharp
public string InvocationTimeoutSeconds { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters">Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters</a>

---


### Eventsv2SubscriberLogConfigurationOutputReference <a name="Eventsv2SubscriberLogConfigurationOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2SubscriberLogConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.resetIncludePayload">ResetIncludePayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.resetLevel">ResetLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludePayload` <a name="ResetIncludePayload" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.resetIncludePayload"></a>

```csharp
private void ResetIncludePayload()
```

##### `ResetLevel` <a name="ResetLevel" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.resetLevel"></a>

```csharp
private void ResetLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.property.includePayloadInput">IncludePayloadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.property.levelInput">LevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.property.includePayload">IncludePayload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.property.level">Level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfiguration">Eventsv2SubscriberLogConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IncludePayloadInput`<sup>Optional</sup> <a name="IncludePayloadInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.property.includePayloadInput"></a>

```csharp
public string IncludePayloadInput { get; }
```

- *Type:* string

---

##### `LevelInput`<sup>Optional</sup> <a name="LevelInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.property.levelInput"></a>

```csharp
public string LevelInput { get; }
```

- *Type:* string

---

##### `IncludePayload`<sup>Required</sup> <a name="IncludePayload" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.property.includePayload"></a>

```csharp
public string IncludePayload { get; }
```

- *Type:* string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.property.level"></a>

```csharp
public string Level { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Eventsv2SubscriberLogConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfiguration">Eventsv2SubscriberLogConfiguration</a>

---


### Eventsv2SubscriberOnFailureConfigurationOutputReference <a name="Eventsv2SubscriberOnFailureConfigurationOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2SubscriberOnFailureConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.resetArn">ResetArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArn` <a name="ResetArn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.resetArn"></a>

```csharp
private void ResetArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfiguration">Eventsv2SubscriberOnFailureConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Eventsv2SubscriberOnFailureConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfiguration">Eventsv2SubscriberOnFailureConfiguration</a>

---


### Eventsv2SubscriberPointInTimeConfigurationOutputReference <a name="Eventsv2SubscriberPointInTimeConfigurationOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2SubscriberPointInTimeConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.resetEndPoint">ResetEndPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.resetPointType">ResetPointType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.resetStartingPoint">ResetStartingPoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndPoint` <a name="ResetEndPoint" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.resetEndPoint"></a>

```csharp
private void ResetEndPoint()
```

##### `ResetPointType` <a name="ResetPointType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.resetPointType"></a>

```csharp
private void ResetPointType()
```

##### `ResetStartingPoint` <a name="ResetStartingPoint" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.resetStartingPoint"></a>

```csharp
private void ResetStartingPoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.endPointInput">EndPointInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.pointTypeInput">PointTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.startingPointInput">StartingPointInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.endPoint">EndPoint</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.pointType">PointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.startingPoint">StartingPoint</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfiguration">Eventsv2SubscriberPointInTimeConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndPointInput`<sup>Optional</sup> <a name="EndPointInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.endPointInput"></a>

```csharp
public double EndPointInput { get; }
```

- *Type:* double

---

##### `PointTypeInput`<sup>Optional</sup> <a name="PointTypeInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.pointTypeInput"></a>

```csharp
public string PointTypeInput { get; }
```

- *Type:* string

---

##### `StartingPointInput`<sup>Optional</sup> <a name="StartingPointInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.startingPointInput"></a>

```csharp
public double StartingPointInput { get; }
```

- *Type:* double

---

##### `EndPoint`<sup>Required</sup> <a name="EndPoint" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.endPoint"></a>

```csharp
public double EndPoint { get; }
```

- *Type:* double

---

##### `PointType`<sup>Required</sup> <a name="PointType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.pointType"></a>

```csharp
public string PointType { get; }
```

- *Type:* string

---

##### `StartingPoint`<sup>Required</sup> <a name="StartingPoint" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.startingPoint"></a>

```csharp
public double StartingPoint { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Eventsv2SubscriberPointInTimeConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfiguration">Eventsv2SubscriberPointInTimeConfiguration</a>

---


### Eventsv2SubscriberRetryPolicyOutputReference <a name="Eventsv2SubscriberRetryPolicyOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2SubscriberRetryPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.resetMaxEventAgeInSeconds">ResetMaxEventAgeInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.resetMaxRetryAttempts">ResetMaxRetryAttempts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.resetRetryStrategy">ResetRetryStrategy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxEventAgeInSeconds` <a name="ResetMaxEventAgeInSeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.resetMaxEventAgeInSeconds"></a>

```csharp
private void ResetMaxEventAgeInSeconds()
```

##### `ResetMaxRetryAttempts` <a name="ResetMaxRetryAttempts" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.resetMaxRetryAttempts"></a>

```csharp
private void ResetMaxRetryAttempts()
```

##### `ResetRetryStrategy` <a name="ResetRetryStrategy" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.resetRetryStrategy"></a>

```csharp
private void ResetRetryStrategy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.maxEventAgeInSecondsInput">MaxEventAgeInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.maxRetryAttemptsInput">MaxRetryAttemptsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.retryStrategyInput">RetryStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.maxEventAgeInSeconds">MaxEventAgeInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.maxRetryAttempts">MaxRetryAttempts</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.retryStrategy">RetryStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicy">Eventsv2SubscriberRetryPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxEventAgeInSecondsInput`<sup>Optional</sup> <a name="MaxEventAgeInSecondsInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.maxEventAgeInSecondsInput"></a>

```csharp
public double MaxEventAgeInSecondsInput { get; }
```

- *Type:* double

---

##### `MaxRetryAttemptsInput`<sup>Optional</sup> <a name="MaxRetryAttemptsInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.maxRetryAttemptsInput"></a>

```csharp
public double MaxRetryAttemptsInput { get; }
```

- *Type:* double

---

##### `RetryStrategyInput`<sup>Optional</sup> <a name="RetryStrategyInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.retryStrategyInput"></a>

```csharp
public string RetryStrategyInput { get; }
```

- *Type:* string

---

##### `MaxEventAgeInSeconds`<sup>Required</sup> <a name="MaxEventAgeInSeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.maxEventAgeInSeconds"></a>

```csharp
public double MaxEventAgeInSeconds { get; }
```

- *Type:* double

---

##### `MaxRetryAttempts`<sup>Required</sup> <a name="MaxRetryAttempts" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.maxRetryAttempts"></a>

```csharp
public double MaxRetryAttempts { get; }
```

- *Type:* double

---

##### `RetryStrategy`<sup>Required</sup> <a name="RetryStrategy" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.retryStrategy"></a>

```csharp
public string RetryStrategy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Eventsv2SubscriberRetryPolicy InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicy">Eventsv2SubscriberRetryPolicy</a>

---


### Eventsv2SubscriberTagsList <a name="Eventsv2SubscriberTagsList" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2SubscriberTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.get"></a>

```csharp
private Eventsv2SubscriberTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTags">Eventsv2SubscriberTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.property.internalValue"></a>

```csharp
public IResolvable|Eventsv2SubscriberTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTags">Eventsv2SubscriberTags</a>[]

---


### Eventsv2SubscriberTagsOutputReference <a name="Eventsv2SubscriberTagsOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2SubscriberTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTags">Eventsv2SubscriberTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Eventsv2SubscriberTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTags">Eventsv2SubscriberTags</a>

---


### Eventsv2SubscriberTransformerJsonataConfigurationOutputReference <a name="Eventsv2SubscriberTransformerJsonataConfigurationOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2SubscriberTransformerJsonataConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExpression` <a name="ResetExpression" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.resetExpression"></a>

```csharp
private void ResetExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfiguration">Eventsv2SubscriberTransformerJsonataConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Eventsv2SubscriberTransformerJsonataConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfiguration">Eventsv2SubscriberTransformerJsonataConfiguration</a>

---


### Eventsv2SubscriberTransformerOutputReference <a name="Eventsv2SubscriberTransformerOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2SubscriberTransformerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.putJsonataConfiguration">PutJsonataConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.resetJsonataConfiguration">ResetJsonataConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutJsonataConfiguration` <a name="PutJsonataConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.putJsonataConfiguration"></a>

```csharp
private void PutJsonataConfiguration(Eventsv2SubscriberTransformerJsonataConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.putJsonataConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfiguration">Eventsv2SubscriberTransformerJsonataConfiguration</a>

---

##### `ResetJsonataConfiguration` <a name="ResetJsonataConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.resetJsonataConfiguration"></a>

```csharp
private void ResetJsonataConfiguration()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.property.jsonataConfiguration">JsonataConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference">Eventsv2SubscriberTransformerJsonataConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.property.jsonataConfigurationInput">JsonataConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfiguration">Eventsv2SubscriberTransformerJsonataConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformer">Eventsv2SubscriberTransformer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `JsonataConfiguration`<sup>Required</sup> <a name="JsonataConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.property.jsonataConfiguration"></a>

```csharp
public Eventsv2SubscriberTransformerJsonataConfigurationOutputReference JsonataConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference">Eventsv2SubscriberTransformerJsonataConfigurationOutputReference</a>

---

##### `JsonataConfigurationInput`<sup>Optional</sup> <a name="JsonataConfigurationInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.property.jsonataConfigurationInput"></a>

```csharp
public IResolvable|Eventsv2SubscriberTransformerJsonataConfiguration JsonataConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfiguration">Eventsv2SubscriberTransformerJsonataConfiguration</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Eventsv2SubscriberTransformer InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformer">Eventsv2SubscriberTransformer</a>

---



