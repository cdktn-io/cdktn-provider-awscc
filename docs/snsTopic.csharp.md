# `snsTopic` Submodule <a name="`snsTopic` Submodule" id="@cdktn/provider-awscc.snsTopic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SnsTopic <a name="SnsTopic" id="@cdktn/provider-awscc.snsTopic.SnsTopic"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sns_topic awscc_sns_topic}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SnsTopic(Construct Scope, string Id, SnsTopicConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig">SnsTopicConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig">SnsTopicConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.putDeliveryStatusLogging">PutDeliveryStatusLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.putSubscription">PutSubscription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetArchivePolicy">ResetArchivePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetContentBasedDeduplication">ResetContentBasedDeduplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetDataProtectionPolicy">ResetDataProtectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetDeliveryStatusLogging">ResetDeliveryStatusLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetFifoThroughputScope">ResetFifoThroughputScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetFifoTopic">ResetFifoTopic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetKmsMasterKeyId">ResetKmsMasterKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetSignatureVersion">ResetSignatureVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetSubscription">ResetSubscription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetTopicName">ResetTopicName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetTracingConfig">ResetTracingConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.snsTopic.SnsTopic.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.snsTopic.SnsTopic.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.snsTopic.SnsTopic.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.snsTopic.SnsTopic.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.snsTopic.SnsTopic.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.snsTopic.SnsTopic.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.snsTopic.SnsTopic.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.snsTopic.SnsTopic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.snsTopic.SnsTopic.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.snsTopic.SnsTopic.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.snsTopic.SnsTopic.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.snsTopic.SnsTopic.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.snsTopic.SnsTopic.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.snsTopic.SnsTopic.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.snsTopic.SnsTopic.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.snsTopic.SnsTopic.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.snsTopic.SnsTopic.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.snsTopic.SnsTopic.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.snsTopic.SnsTopic.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.snsTopic.SnsTopic.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.snsTopic.SnsTopic.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.snsTopic.SnsTopic.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.snsTopic.SnsTopic.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.snsTopic.SnsTopic.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDeliveryStatusLogging` <a name="PutDeliveryStatusLogging" id="@cdktn/provider-awscc.snsTopic.SnsTopic.putDeliveryStatusLogging"></a>

```csharp
private void PutDeliveryStatusLogging(IResolvable|SnsTopicDeliveryStatusLogging[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.snsTopic.SnsTopic.putDeliveryStatusLogging.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging">SnsTopicDeliveryStatusLogging</a>[]

---

##### `PutSubscription` <a name="PutSubscription" id="@cdktn/provider-awscc.snsTopic.SnsTopic.putSubscription"></a>

```csharp
private void PutSubscription(IResolvable|SnsTopicSubscription[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.snsTopic.SnsTopic.putSubscription.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscription">SnsTopicSubscription</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.snsTopic.SnsTopic.putTags"></a>

```csharp
private void PutTags(IResolvable|SnsTopicTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.snsTopic.SnsTopic.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTags">SnsTopicTags</a>[]

---

##### `ResetArchivePolicy` <a name="ResetArchivePolicy" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetArchivePolicy"></a>

```csharp
private void ResetArchivePolicy()
```

##### `ResetContentBasedDeduplication` <a name="ResetContentBasedDeduplication" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetContentBasedDeduplication"></a>

```csharp
private void ResetContentBasedDeduplication()
```

##### `ResetDataProtectionPolicy` <a name="ResetDataProtectionPolicy" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetDataProtectionPolicy"></a>

```csharp
private void ResetDataProtectionPolicy()
```

##### `ResetDeliveryStatusLogging` <a name="ResetDeliveryStatusLogging" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetDeliveryStatusLogging"></a>

```csharp
private void ResetDeliveryStatusLogging()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFifoThroughputScope` <a name="ResetFifoThroughputScope" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetFifoThroughputScope"></a>

```csharp
private void ResetFifoThroughputScope()
```

##### `ResetFifoTopic` <a name="ResetFifoTopic" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetFifoTopic"></a>

```csharp
private void ResetFifoTopic()
```

##### `ResetKmsMasterKeyId` <a name="ResetKmsMasterKeyId" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetKmsMasterKeyId"></a>

```csharp
private void ResetKmsMasterKeyId()
```

##### `ResetSignatureVersion` <a name="ResetSignatureVersion" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetSignatureVersion"></a>

```csharp
private void ResetSignatureVersion()
```

##### `ResetSubscription` <a name="ResetSubscription" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetSubscription"></a>

```csharp
private void ResetSubscription()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTopicName` <a name="ResetTopicName" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetTopicName"></a>

```csharp
private void ResetTopicName()
```

##### `ResetTracingConfig` <a name="ResetTracingConfig" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetTracingConfig"></a>

```csharp
private void ResetTracingConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SnsTopic resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.snsTopic.SnsTopic.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SnsTopic.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.snsTopic.SnsTopic.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.snsTopic.SnsTopic.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SnsTopic.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.snsTopic.SnsTopic.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.snsTopic.SnsTopic.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SnsTopic.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.snsTopic.SnsTopic.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.snsTopic.SnsTopic.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SnsTopic.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SnsTopic resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.snsTopic.SnsTopic.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.snsTopic.SnsTopic.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SnsTopic to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.snsTopic.SnsTopic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SnsTopic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sns_topic#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.snsTopic.SnsTopic.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SnsTopic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.deliveryStatusLogging">DeliveryStatusLogging</a></code> | <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList">SnsTopicDeliveryStatusLoggingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.subscription">Subscription</a></code> | <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList">SnsTopicSubscriptionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList">SnsTopicTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.topicArn">TopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.archivePolicyInput">ArchivePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.contentBasedDeduplicationInput">ContentBasedDeduplicationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.dataProtectionPolicyInput">DataProtectionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.deliveryStatusLoggingInput">DeliveryStatusLoggingInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging">SnsTopicDeliveryStatusLogging</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.fifoThroughputScopeInput">FifoThroughputScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.fifoTopicInput">FifoTopicInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.kmsMasterKeyIdInput">KmsMasterKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.signatureVersionInput">SignatureVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.subscriptionInput">SubscriptionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscription">SnsTopicSubscription</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTags">SnsTopicTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.topicNameInput">TopicNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.tracingConfigInput">TracingConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.archivePolicy">ArchivePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.contentBasedDeduplication">ContentBasedDeduplication</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.dataProtectionPolicy">DataProtectionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.fifoThroughputScope">FifoThroughputScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.fifoTopic">FifoTopic</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.kmsMasterKeyId">KmsMasterKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.signatureVersion">SignatureVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.topicName">TopicName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.tracingConfig">TracingConfig</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DeliveryStatusLogging`<sup>Required</sup> <a name="DeliveryStatusLogging" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.deliveryStatusLogging"></a>

```csharp
public SnsTopicDeliveryStatusLoggingList DeliveryStatusLogging { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList">SnsTopicDeliveryStatusLoggingList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Subscription`<sup>Required</sup> <a name="Subscription" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.subscription"></a>

```csharp
public SnsTopicSubscriptionList Subscription { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList">SnsTopicSubscriptionList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.tags"></a>

```csharp
public SnsTopicTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList">SnsTopicTagsList</a>

---

##### `TopicArn`<sup>Required</sup> <a name="TopicArn" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.topicArn"></a>

```csharp
public string TopicArn { get; }
```

- *Type:* string

---

##### `ArchivePolicyInput`<sup>Optional</sup> <a name="ArchivePolicyInput" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.archivePolicyInput"></a>

```csharp
public string ArchivePolicyInput { get; }
```

- *Type:* string

---

##### `ContentBasedDeduplicationInput`<sup>Optional</sup> <a name="ContentBasedDeduplicationInput" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.contentBasedDeduplicationInput"></a>

```csharp
public bool|IResolvable ContentBasedDeduplicationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DataProtectionPolicyInput`<sup>Optional</sup> <a name="DataProtectionPolicyInput" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.dataProtectionPolicyInput"></a>

```csharp
public string DataProtectionPolicyInput { get; }
```

- *Type:* string

---

##### `DeliveryStatusLoggingInput`<sup>Optional</sup> <a name="DeliveryStatusLoggingInput" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.deliveryStatusLoggingInput"></a>

```csharp
public IResolvable|SnsTopicDeliveryStatusLogging[] DeliveryStatusLoggingInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging">SnsTopicDeliveryStatusLogging</a>[]

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FifoThroughputScopeInput`<sup>Optional</sup> <a name="FifoThroughputScopeInput" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.fifoThroughputScopeInput"></a>

```csharp
public string FifoThroughputScopeInput { get; }
```

- *Type:* string

---

##### `FifoTopicInput`<sup>Optional</sup> <a name="FifoTopicInput" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.fifoTopicInput"></a>

```csharp
public bool|IResolvable FifoTopicInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KmsMasterKeyIdInput`<sup>Optional</sup> <a name="KmsMasterKeyIdInput" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.kmsMasterKeyIdInput"></a>

```csharp
public string KmsMasterKeyIdInput { get; }
```

- *Type:* string

---

##### `SignatureVersionInput`<sup>Optional</sup> <a name="SignatureVersionInput" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.signatureVersionInput"></a>

```csharp
public string SignatureVersionInput { get; }
```

- *Type:* string

---

##### `SubscriptionInput`<sup>Optional</sup> <a name="SubscriptionInput" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.subscriptionInput"></a>

```csharp
public IResolvable|SnsTopicSubscription[] SubscriptionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscription">SnsTopicSubscription</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.tagsInput"></a>

```csharp
public IResolvable|SnsTopicTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTags">SnsTopicTags</a>[]

---

##### `TopicNameInput`<sup>Optional</sup> <a name="TopicNameInput" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.topicNameInput"></a>

```csharp
public string TopicNameInput { get; }
```

- *Type:* string

---

##### `TracingConfigInput`<sup>Optional</sup> <a name="TracingConfigInput" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.tracingConfigInput"></a>

```csharp
public string TracingConfigInput { get; }
```

- *Type:* string

---

##### `ArchivePolicy`<sup>Required</sup> <a name="ArchivePolicy" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.archivePolicy"></a>

```csharp
public string ArchivePolicy { get; }
```

- *Type:* string

---

##### `ContentBasedDeduplication`<sup>Required</sup> <a name="ContentBasedDeduplication" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.contentBasedDeduplication"></a>

```csharp
public bool|IResolvable ContentBasedDeduplication { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DataProtectionPolicy`<sup>Required</sup> <a name="DataProtectionPolicy" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.dataProtectionPolicy"></a>

```csharp
public string DataProtectionPolicy { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FifoThroughputScope`<sup>Required</sup> <a name="FifoThroughputScope" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.fifoThroughputScope"></a>

```csharp
public string FifoThroughputScope { get; }
```

- *Type:* string

---

##### `FifoTopic`<sup>Required</sup> <a name="FifoTopic" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.fifoTopic"></a>

```csharp
public bool|IResolvable FifoTopic { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KmsMasterKeyId`<sup>Required</sup> <a name="KmsMasterKeyId" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.kmsMasterKeyId"></a>

```csharp
public string KmsMasterKeyId { get; }
```

- *Type:* string

---

##### `SignatureVersion`<sup>Required</sup> <a name="SignatureVersion" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.signatureVersion"></a>

```csharp
public string SignatureVersion { get; }
```

- *Type:* string

---

##### `TopicName`<sup>Required</sup> <a name="TopicName" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.topicName"></a>

```csharp
public string TopicName { get; }
```

- *Type:* string

---

##### `TracingConfig`<sup>Required</sup> <a name="TracingConfig" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.tracingConfig"></a>

```csharp
public string TracingConfig { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SnsTopicConfig <a name="SnsTopicConfig" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SnsTopicConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ArchivePolicy = null,
    bool|IResolvable ContentBasedDeduplication = null,
    string DataProtectionPolicy = null,
    IResolvable|SnsTopicDeliveryStatusLogging[] DeliveryStatusLogging = null,
    string DisplayName = null,
    string FifoThroughputScope = null,
    bool|IResolvable FifoTopic = null,
    string KmsMasterKeyId = null,
    string SignatureVersion = null,
    IResolvable|SnsTopicSubscription[] Subscription = null,
    IResolvable|SnsTopicTags[] Tags = null,
    string TopicName = null,
    string TracingConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.archivePolicy">ArchivePolicy</a></code> | <code>string</code> | The ``ArchivePolicy`` determines the number of days SNS retains messages in FIFO topics. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.contentBasedDeduplication">ContentBasedDeduplication</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | ``ContentBasedDeduplication`` enables deduplication of messages based on their content for FIFO topics. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.dataProtectionPolicy">DataProtectionPolicy</a></code> | <code>string</code> | The body of the policy document you want to use for this topic. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.deliveryStatusLogging">DeliveryStatusLogging</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging">SnsTopicDeliveryStatusLogging</a>[]</code> | The ``DeliveryStatusLogging`` configuration enables you to log the delivery status of messages sent from your Amazon SNS topic to subscribed endpoints with the following supported delivery protocols:   +  HTTP    +  Amazon Kinesis Data Firehose   +  AWS Lambda   +  Platform application endpoint   +  Amazon Simple Queue Service     Once configured, log entries are sent to Amazon CloudWatch Logs. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The display name to use for an SNS topic with SMS subscriptions. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.fifoThroughputScope">FifoThroughputScope</a></code> | <code>string</code> | Specifies the throughput quota and deduplication behavior to apply for the FIFO topic. Valid values are ``Topic`` or ``MessageGroup``. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.fifoTopic">FifoTopic</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Set to true to create a FIFO topic. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.kmsMasterKeyId">KmsMasterKeyId</a></code> | <code>string</code> | The ID of an AWS managed customer master key (CMK) for SNS or a custom CMK. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.signatureVersion">SignatureVersion</a></code> | <code>string</code> | The signature version corresponds to the hashing algorithm used while creating the signature of the notifications, subscription confirmations, or unsubscribe confirmation messages sent by Amazon SNS. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.subscription">Subscription</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscription">SnsTopicSubscription</a>[]</code> | The SNS subscriptions (endpoints) for this topic. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTags">SnsTopicTags</a>[]</code> | The list of tags to add to a new topic. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.topicName">TopicName</a></code> | <code>string</code> | The name of the topic you want to create. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.tracingConfig">TracingConfig</a></code> | <code>string</code> | Tracing mode of an SNS topic. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ArchivePolicy`<sup>Optional</sup> <a name="ArchivePolicy" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.archivePolicy"></a>

```csharp
public string ArchivePolicy { get; set; }
```

- *Type:* string

The ``ArchivePolicy`` determines the number of days SNS retains messages in FIFO topics.

You can set a retention period ranging from 1 to 365 days. This property is only applicable to FIFO topics; attempting to use it with standard topics will result in a creation failure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sns_topic#archive_policy SnsTopic#archive_policy}

---

##### `ContentBasedDeduplication`<sup>Optional</sup> <a name="ContentBasedDeduplication" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.contentBasedDeduplication"></a>

```csharp
public bool|IResolvable ContentBasedDeduplication { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

``ContentBasedDeduplication`` enables deduplication of messages based on their content for FIFO topics.

By default, this property is set to false. If you create a FIFO topic with `ContentBasedDeduplication` set to false, you must provide a `MessageDeduplicationId` for each `Publish` action. When set to true, SNS automatically generates a `MessageDeduplicationId` using a SHA-256 hash of the message body (excluding message attributes). You can optionally override this generated value by specifying a `MessageDeduplicationId` in the `Publish` action. Note that this property only applies to FIFO topics; using it with standard topics will cause the creation to fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sns_topic#content_based_deduplication SnsTopic#content_based_deduplication}

---

##### `DataProtectionPolicy`<sup>Optional</sup> <a name="DataProtectionPolicy" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.dataProtectionPolicy"></a>

```csharp
public string DataProtectionPolicy { get; set; }
```

- *Type:* string

The body of the policy document you want to use for this topic.

You can only add one policy per topic.
The policy must be in JSON string format.
Length Constraints: Maximum length of 30,720.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sns_topic#data_protection_policy SnsTopic#data_protection_policy}

---

##### `DeliveryStatusLogging`<sup>Optional</sup> <a name="DeliveryStatusLogging" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.deliveryStatusLogging"></a>

```csharp
public IResolvable|SnsTopicDeliveryStatusLogging[] DeliveryStatusLogging { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging">SnsTopicDeliveryStatusLogging</a>[]

The ``DeliveryStatusLogging`` configuration enables you to log the delivery status of messages sent from your Amazon SNS topic to subscribed endpoints with the following supported delivery protocols:   +  HTTP    +  Amazon Kinesis Data Firehose   +  AWS Lambda   +  Platform application endpoint   +  Amazon Simple Queue Service     Once configured, log entries are sent to Amazon CloudWatch Logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sns_topic#delivery_status_logging SnsTopic#delivery_status_logging}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name to use for an SNS topic with SMS subscriptions.

The display name must be maximum 100 characters long, including hyphens (-), underscores (_), spaces, and tabs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sns_topic#display_name SnsTopic#display_name}

---

##### `FifoThroughputScope`<sup>Optional</sup> <a name="FifoThroughputScope" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.fifoThroughputScope"></a>

```csharp
public string FifoThroughputScope { get; set; }
```

- *Type:* string

Specifies the throughput quota and deduplication behavior to apply for the FIFO topic. Valid values are ``Topic`` or ``MessageGroup``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sns_topic#fifo_throughput_scope SnsTopic#fifo_throughput_scope}

---

##### `FifoTopic`<sup>Optional</sup> <a name="FifoTopic" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.fifoTopic"></a>

```csharp
public bool|IResolvable FifoTopic { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Set to true to create a FIFO topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sns_topic#fifo_topic SnsTopic#fifo_topic}

---

##### `KmsMasterKeyId`<sup>Optional</sup> <a name="KmsMasterKeyId" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.kmsMasterKeyId"></a>

```csharp
public string KmsMasterKeyId { get; set; }
```

- *Type:* string

The ID of an AWS managed customer master key (CMK) for SNS or a custom CMK.

For more information, see [Key terms](https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html#sse-key-terms). For more examples, see `KeyId` in the *API Reference*.
This property applies only to [server-side-encryption](https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sns_topic#kms_master_key_id SnsTopic#kms_master_key_id}

---

##### `SignatureVersion`<sup>Optional</sup> <a name="SignatureVersion" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.signatureVersion"></a>

```csharp
public string SignatureVersion { get; set; }
```

- *Type:* string

The signature version corresponds to the hashing algorithm used while creating the signature of the notifications, subscription confirmations, or unsubscribe confirmation messages sent by Amazon SNS.

By default, `SignatureVersion` is set to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sns_topic#signature_version SnsTopic#signature_version}

---

##### `Subscription`<sup>Optional</sup> <a name="Subscription" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.subscription"></a>

```csharp
public IResolvable|SnsTopicSubscription[] Subscription { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscription">SnsTopicSubscription</a>[]

The SNS subscriptions (endpoints) for this topic.

If you specify the `Subscription` property in the `AWS::SNS::Topic` resource and it creates an associated subscription resource, the associated subscription is not deleted when the `AWS::SNS::Topic` resource is deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sns_topic#subscription SnsTopic#subscription}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.tags"></a>

```csharp
public IResolvable|SnsTopicTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTags">SnsTopicTags</a>[]

The list of tags to add to a new topic.

To be able to tag a topic on creation, you must have the `sns:CreateTopic` and `sns:TagResource` permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sns_topic#tags SnsTopic#tags}

---

##### `TopicName`<sup>Optional</sup> <a name="TopicName" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.topicName"></a>

```csharp
public string TopicName { get; set; }
```

- *Type:* string

The name of the topic you want to create.

Topic names must include only uppercase and lowercase ASCII letters, numbers, underscores, and hyphens, and must be between 1 and 256 characters long. FIFO topic names must end with `.fifo`.
If you don't specify a name, CFN generates a unique physical ID and uses that ID for the topic name. For more information, see [Name type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
If you specify a name, you can't perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sns_topic#topic_name SnsTopic#topic_name}

---

##### `TracingConfig`<sup>Optional</sup> <a name="TracingConfig" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.tracingConfig"></a>

```csharp
public string TracingConfig { get; set; }
```

- *Type:* string

Tracing mode of an SNS topic.

By default `TracingConfig` is set to `PassThrough`, and the topic passes through the tracing header it receives from an SNS publisher to its subscriptions. If set to `Active`, SNS will vend X-Ray segment data to topic owner account if the sampled flag in the tracing header is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sns_topic#tracing_config SnsTopic#tracing_config}

---

### SnsTopicDeliveryStatusLogging <a name="SnsTopicDeliveryStatusLogging" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SnsTopicDeliveryStatusLogging {
    string FailureFeedbackRoleArn = null,
    string Protocol = null,
    string SuccessFeedbackRoleArn = null,
    string SuccessFeedbackSampleRate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging.property.failureFeedbackRoleArn">FailureFeedbackRoleArn</a></code> | <code>string</code> | The IAM role ARN to be used when logging failed message deliveries in Amazon CloudWatch. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging.property.protocol">Protocol</a></code> | <code>string</code> | Indicates one of the supported protocols for the Amazon SNS topic. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging.property.successFeedbackRoleArn">SuccessFeedbackRoleArn</a></code> | <code>string</code> | The IAM role ARN to be used when logging successful message deliveries in Amazon CloudWatch. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging.property.successFeedbackSampleRate">SuccessFeedbackSampleRate</a></code> | <code>string</code> | The percentage of successful message deliveries to be logged in Amazon CloudWatch. |

---

##### `FailureFeedbackRoleArn`<sup>Optional</sup> <a name="FailureFeedbackRoleArn" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging.property.failureFeedbackRoleArn"></a>

```csharp
public string FailureFeedbackRoleArn { get; set; }
```

- *Type:* string

The IAM role ARN to be used when logging failed message deliveries in Amazon CloudWatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sns_topic#failure_feedback_role_arn SnsTopic#failure_feedback_role_arn}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Indicates one of the supported protocols for the Amazon SNS topic.

At least one of the other three `LoggingConfig` properties is recommend along with `Protocol`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sns_topic#protocol SnsTopic#protocol}

---

##### `SuccessFeedbackRoleArn`<sup>Optional</sup> <a name="SuccessFeedbackRoleArn" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging.property.successFeedbackRoleArn"></a>

```csharp
public string SuccessFeedbackRoleArn { get; set; }
```

- *Type:* string

The IAM role ARN to be used when logging successful message deliveries in Amazon CloudWatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sns_topic#success_feedback_role_arn SnsTopic#success_feedback_role_arn}

---

##### `SuccessFeedbackSampleRate`<sup>Optional</sup> <a name="SuccessFeedbackSampleRate" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging.property.successFeedbackSampleRate"></a>

```csharp
public string SuccessFeedbackSampleRate { get; set; }
```

- *Type:* string

The percentage of successful message deliveries to be logged in Amazon CloudWatch.

Valid percentage values range from 0 to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sns_topic#success_feedback_sample_rate SnsTopic#success_feedback_sample_rate}

---

### SnsTopicSubscription <a name="SnsTopicSubscription" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscription"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscription.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SnsTopicSubscription {
    string Endpoint = null,
    string Protocol = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscription.property.endpoint">Endpoint</a></code> | <code>string</code> | The endpoint that receives notifications from the SNS topic. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscription.property.protocol">Protocol</a></code> | <code>string</code> | The subscription's protocol. For more information, see the ``Protocol`` parameter of the ``Subscribe`` action in the *API Reference*. |

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscription.property.endpoint"></a>

```csharp
public string Endpoint { get; set; }
```

- *Type:* string

The endpoint that receives notifications from the SNS topic.

The endpoint value depends on the protocol that you specify. For more information, see the `Endpoint` parameter of the `Subscribe` action in the *API Reference*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sns_topic#endpoint SnsTopic#endpoint}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscription.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

The subscription's protocol. For more information, see the ``Protocol`` parameter of the ``Subscribe`` action in the *API Reference*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sns_topic#protocol SnsTopic#protocol}

---

### SnsTopicTags <a name="SnsTopicTags" id="@cdktn/provider-awscc.snsTopic.SnsTopicTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.snsTopic.SnsTopicTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SnsTopicTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTags.property.key">Key</a></code> | <code>string</code> | The required key portion of the tag. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTags.property.value">Value</a></code> | <code>string</code> | The optional value portion of the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.snsTopic.SnsTopicTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The required key portion of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sns_topic#key SnsTopic#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.snsTopic.SnsTopicTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The optional value portion of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sns_topic#value SnsTopic#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SnsTopicDeliveryStatusLoggingList <a name="SnsTopicDeliveryStatusLoggingList" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SnsTopicDeliveryStatusLoggingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.get"></a>

```csharp
private SnsTopicDeliveryStatusLoggingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging">SnsTopicDeliveryStatusLogging</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.property.internalValue"></a>

```csharp
public IResolvable|SnsTopicDeliveryStatusLogging[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging">SnsTopicDeliveryStatusLogging</a>[]

---


### SnsTopicDeliveryStatusLoggingOutputReference <a name="SnsTopicDeliveryStatusLoggingOutputReference" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SnsTopicDeliveryStatusLoggingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.resetFailureFeedbackRoleArn">ResetFailureFeedbackRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.resetSuccessFeedbackRoleArn">ResetSuccessFeedbackRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.resetSuccessFeedbackSampleRate">ResetSuccessFeedbackSampleRate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFailureFeedbackRoleArn` <a name="ResetFailureFeedbackRoleArn" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.resetFailureFeedbackRoleArn"></a>

```csharp
private void ResetFailureFeedbackRoleArn()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

##### `ResetSuccessFeedbackRoleArn` <a name="ResetSuccessFeedbackRoleArn" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.resetSuccessFeedbackRoleArn"></a>

```csharp
private void ResetSuccessFeedbackRoleArn()
```

##### `ResetSuccessFeedbackSampleRate` <a name="ResetSuccessFeedbackSampleRate" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.resetSuccessFeedbackSampleRate"></a>

```csharp
private void ResetSuccessFeedbackSampleRate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.failureFeedbackRoleArnInput">FailureFeedbackRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.successFeedbackRoleArnInput">SuccessFeedbackRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.successFeedbackSampleRateInput">SuccessFeedbackSampleRateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.failureFeedbackRoleArn">FailureFeedbackRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.successFeedbackRoleArn">SuccessFeedbackRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.successFeedbackSampleRate">SuccessFeedbackSampleRate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging">SnsTopicDeliveryStatusLogging</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FailureFeedbackRoleArnInput`<sup>Optional</sup> <a name="FailureFeedbackRoleArnInput" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.failureFeedbackRoleArnInput"></a>

```csharp
public string FailureFeedbackRoleArnInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `SuccessFeedbackRoleArnInput`<sup>Optional</sup> <a name="SuccessFeedbackRoleArnInput" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.successFeedbackRoleArnInput"></a>

```csharp
public string SuccessFeedbackRoleArnInput { get; }
```

- *Type:* string

---

##### `SuccessFeedbackSampleRateInput`<sup>Optional</sup> <a name="SuccessFeedbackSampleRateInput" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.successFeedbackSampleRateInput"></a>

```csharp
public string SuccessFeedbackSampleRateInput { get; }
```

- *Type:* string

---

##### `FailureFeedbackRoleArn`<sup>Required</sup> <a name="FailureFeedbackRoleArn" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.failureFeedbackRoleArn"></a>

```csharp
public string FailureFeedbackRoleArn { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `SuccessFeedbackRoleArn`<sup>Required</sup> <a name="SuccessFeedbackRoleArn" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.successFeedbackRoleArn"></a>

```csharp
public string SuccessFeedbackRoleArn { get; }
```

- *Type:* string

---

##### `SuccessFeedbackSampleRate`<sup>Required</sup> <a name="SuccessFeedbackSampleRate" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.successFeedbackSampleRate"></a>

```csharp
public string SuccessFeedbackSampleRate { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SnsTopicDeliveryStatusLogging InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging">SnsTopicDeliveryStatusLogging</a>

---


### SnsTopicSubscriptionList <a name="SnsTopicSubscriptionList" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SnsTopicSubscriptionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.get"></a>

```csharp
private SnsTopicSubscriptionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscription">SnsTopicSubscription</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.property.internalValue"></a>

```csharp
public IResolvable|SnsTopicSubscription[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscription">SnsTopicSubscription</a>[]

---


### SnsTopicSubscriptionOutputReference <a name="SnsTopicSubscriptionOutputReference" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SnsTopicSubscriptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.resetEndpoint"></a>

```csharp
private void ResetEndpoint()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.resetProtocol"></a>

```csharp
private void ResetProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.endpointInput">EndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscription">SnsTopicSubscription</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.endpointInput"></a>

```csharp
public string EndpointInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SnsTopicSubscription InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscription">SnsTopicSubscription</a>

---


### SnsTopicTagsList <a name="SnsTopicTagsList" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SnsTopicTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.get"></a>

```csharp
private SnsTopicTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTags">SnsTopicTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.property.internalValue"></a>

```csharp
public IResolvable|SnsTopicTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTags">SnsTopicTags</a>[]

---


### SnsTopicTagsOutputReference <a name="SnsTopicTagsOutputReference" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SnsTopicTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTags">SnsTopicTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SnsTopicTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTags">SnsTopicTags</a>

---



