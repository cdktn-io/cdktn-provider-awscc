# `ivsChannel` Submodule <a name="`ivsChannel` Submodule" id="@cdktn/provider-awscc.ivsChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IvsChannel <a name="IvsChannel" id="@cdktn/provider-awscc.ivsChannel.IvsChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel awscc_ivs_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IvsChannel(Construct Scope, string Id, IvsChannelConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig">IvsChannelConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig">IvsChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.putMultitrackInputConfiguration">PutMultitrackInputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.resetAuthorized">ResetAuthorized</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.resetContainerFormat">ResetContainerFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.resetInsecureIngest">ResetInsecureIngest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.resetLatencyMode">ResetLatencyMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.resetMultitrackInputConfiguration">ResetMultitrackInputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.resetPreset">ResetPreset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.resetRecordingConfigurationArn">ResetRecordingConfigurationArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMultitrackInputConfiguration` <a name="PutMultitrackInputConfiguration" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.putMultitrackInputConfiguration"></a>

```csharp
private void PutMultitrackInputConfiguration(IvsChannelMultitrackInputConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.putMultitrackInputConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration">IvsChannelMultitrackInputConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.putTags"></a>

```csharp
private void PutTags(IResolvable|IvsChannelTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTags">IvsChannelTags</a>[]

---

##### `ResetAuthorized` <a name="ResetAuthorized" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.resetAuthorized"></a>

```csharp
private void ResetAuthorized()
```

##### `ResetContainerFormat` <a name="ResetContainerFormat" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.resetContainerFormat"></a>

```csharp
private void ResetContainerFormat()
```

##### `ResetInsecureIngest` <a name="ResetInsecureIngest" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.resetInsecureIngest"></a>

```csharp
private void ResetInsecureIngest()
```

##### `ResetLatencyMode` <a name="ResetLatencyMode" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.resetLatencyMode"></a>

```csharp
private void ResetLatencyMode()
```

##### `ResetMultitrackInputConfiguration` <a name="ResetMultitrackInputConfiguration" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.resetMultitrackInputConfiguration"></a>

```csharp
private void ResetMultitrackInputConfiguration()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPreset` <a name="ResetPreset" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.resetPreset"></a>

```csharp
private void ResetPreset()
```

##### `ResetRecordingConfigurationArn` <a name="ResetRecordingConfigurationArn" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.resetRecordingConfigurationArn"></a>

```csharp
private void ResetRecordingConfigurationArn()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IvsChannel resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IvsChannel.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IvsChannel.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IvsChannel.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IvsChannel.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a IvsChannel resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IvsChannel to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IvsChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the IvsChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.ingestEndpoint">IngestEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.multitrackInputConfiguration">MultitrackInputConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference">IvsChannelMultitrackInputConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.playbackUrl">PlaybackUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList">IvsChannelTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.authorizedInput">AuthorizedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.containerFormatInput">ContainerFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.insecureIngestInput">InsecureIngestInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.latencyModeInput">LatencyModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.multitrackInputConfigurationInput">MultitrackInputConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration">IvsChannelMultitrackInputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.presetInput">PresetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.recordingConfigurationArnInput">RecordingConfigurationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTags">IvsChannelTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.authorized">Authorized</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.containerFormat">ContainerFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.insecureIngest">InsecureIngest</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.latencyMode">LatencyMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.preset">Preset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.recordingConfigurationArn">RecordingConfigurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IngestEndpoint`<sup>Required</sup> <a name="IngestEndpoint" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.ingestEndpoint"></a>

```csharp
public string IngestEndpoint { get; }
```

- *Type:* string

---

##### `MultitrackInputConfiguration`<sup>Required</sup> <a name="MultitrackInputConfiguration" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.multitrackInputConfiguration"></a>

```csharp
public IvsChannelMultitrackInputConfigurationOutputReference MultitrackInputConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference">IvsChannelMultitrackInputConfigurationOutputReference</a>

---

##### `PlaybackUrl`<sup>Required</sup> <a name="PlaybackUrl" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.playbackUrl"></a>

```csharp
public string PlaybackUrl { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.tags"></a>

```csharp
public IvsChannelTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList">IvsChannelTagsList</a>

---

##### `AuthorizedInput`<sup>Optional</sup> <a name="AuthorizedInput" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.authorizedInput"></a>

```csharp
public bool|IResolvable AuthorizedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ContainerFormatInput`<sup>Optional</sup> <a name="ContainerFormatInput" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.containerFormatInput"></a>

```csharp
public string ContainerFormatInput { get; }
```

- *Type:* string

---

##### `InsecureIngestInput`<sup>Optional</sup> <a name="InsecureIngestInput" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.insecureIngestInput"></a>

```csharp
public bool|IResolvable InsecureIngestInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LatencyModeInput`<sup>Optional</sup> <a name="LatencyModeInput" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.latencyModeInput"></a>

```csharp
public string LatencyModeInput { get; }
```

- *Type:* string

---

##### `MultitrackInputConfigurationInput`<sup>Optional</sup> <a name="MultitrackInputConfigurationInput" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.multitrackInputConfigurationInput"></a>

```csharp
public IResolvable|IvsChannelMultitrackInputConfiguration MultitrackInputConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration">IvsChannelMultitrackInputConfiguration</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PresetInput`<sup>Optional</sup> <a name="PresetInput" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.presetInput"></a>

```csharp
public string PresetInput { get; }
```

- *Type:* string

---

##### `RecordingConfigurationArnInput`<sup>Optional</sup> <a name="RecordingConfigurationArnInput" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.recordingConfigurationArnInput"></a>

```csharp
public string RecordingConfigurationArnInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.tagsInput"></a>

```csharp
public IResolvable|IvsChannelTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTags">IvsChannelTags</a>[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Authorized`<sup>Required</sup> <a name="Authorized" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.authorized"></a>

```csharp
public bool|IResolvable Authorized { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ContainerFormat`<sup>Required</sup> <a name="ContainerFormat" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.containerFormat"></a>

```csharp
public string ContainerFormat { get; }
```

- *Type:* string

---

##### `InsecureIngest`<sup>Required</sup> <a name="InsecureIngest" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.insecureIngest"></a>

```csharp
public bool|IResolvable InsecureIngest { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LatencyMode`<sup>Required</sup> <a name="LatencyMode" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.latencyMode"></a>

```csharp
public string LatencyMode { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Preset`<sup>Required</sup> <a name="Preset" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.preset"></a>

```csharp
public string Preset { get; }
```

- *Type:* string

---

##### `RecordingConfigurationArn`<sup>Required</sup> <a name="RecordingConfigurationArn" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.recordingConfigurationArn"></a>

```csharp
public string RecordingConfigurationArn { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IvsChannelConfig <a name="IvsChannelConfig" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IvsChannelConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    bool|IResolvable Authorized = null,
    string ContainerFormat = null,
    bool|IResolvable InsecureIngest = null,
    string LatencyMode = null,
    IvsChannelMultitrackInputConfiguration MultitrackInputConfiguration = null,
    string Name = null,
    string Preset = null,
    string RecordingConfigurationArn = null,
    IResolvable|IvsChannelTags[] Tags = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.authorized">Authorized</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the channel is authorized. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.containerFormat">ContainerFormat</a></code> | <code>string</code> | Indicates which content-packaging format is used (MPEG-TS or fMP4). |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.insecureIngest">InsecureIngest</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the channel allows insecure ingest. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.latencyMode">LatencyMode</a></code> | <code>string</code> | Channel latency mode. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.multitrackInputConfiguration">MultitrackInputConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration">IvsChannelMultitrackInputConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#multitrack_input_configuration IvsChannel#multitrack_input_configuration}. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.name">Name</a></code> | <code>string</code> | Channel. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.preset">Preset</a></code> | <code>string</code> | Optional transcode preset for the channel. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.recordingConfigurationArn">RecordingConfigurationArn</a></code> | <code>string</code> | Recording Configuration ARN. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTags">IvsChannelTags</a>[]</code> | A list of key-value pairs that contain metadata for the asset model. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.type">Type</a></code> | <code>string</code> | Channel type, which determines the allowable resolution and bitrate. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Authorized`<sup>Optional</sup> <a name="Authorized" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.authorized"></a>

```csharp
public bool|IResolvable Authorized { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the channel is authorized.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#authorized IvsChannel#authorized}

---

##### `ContainerFormat`<sup>Optional</sup> <a name="ContainerFormat" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.containerFormat"></a>

```csharp
public string ContainerFormat { get; set; }
```

- *Type:* string

Indicates which content-packaging format is used (MPEG-TS or fMP4).

If multitrackInputConfiguration is specified and enabled is true, then containerFormat is required and must be set to FRAGMENTED_MP4. Otherwise, containerFormat may be set to TS or FRAGMENTED_MP4. Default: TS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#container_format IvsChannel#container_format}

---

##### `InsecureIngest`<sup>Optional</sup> <a name="InsecureIngest" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.insecureIngest"></a>

```csharp
public bool|IResolvable InsecureIngest { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the channel allows insecure ingest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#insecure_ingest IvsChannel#insecure_ingest}

---

##### `LatencyMode`<sup>Optional</sup> <a name="LatencyMode" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.latencyMode"></a>

```csharp
public string LatencyMode { get; set; }
```

- *Type:* string

Channel latency mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#latency_mode IvsChannel#latency_mode}

---

##### `MultitrackInputConfiguration`<sup>Optional</sup> <a name="MultitrackInputConfiguration" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.multitrackInputConfiguration"></a>

```csharp
public IvsChannelMultitrackInputConfiguration MultitrackInputConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration">IvsChannelMultitrackInputConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#multitrack_input_configuration IvsChannel#multitrack_input_configuration}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#name IvsChannel#name}

---

##### `Preset`<sup>Optional</sup> <a name="Preset" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.preset"></a>

```csharp
public string Preset { get; set; }
```

- *Type:* string

Optional transcode preset for the channel.

This is selectable only for ADVANCED_HD and ADVANCED_SD channel types. For those channel types, the default preset is HIGHER_BANDWIDTH_DELIVERY. For other channel types (BASIC and STANDARD), preset is the empty string ("").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#preset IvsChannel#preset}

---

##### `RecordingConfigurationArn`<sup>Optional</sup> <a name="RecordingConfigurationArn" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.recordingConfigurationArn"></a>

```csharp
public string RecordingConfigurationArn { get; set; }
```

- *Type:* string

Recording Configuration ARN.

A value other than an empty string indicates that recording is enabled. Default: "" (recording is disabled).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#recording_configuration_arn IvsChannel#recording_configuration_arn}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.tags"></a>

```csharp
public IResolvable|IvsChannelTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTags">IvsChannelTags</a>[]

A list of key-value pairs that contain metadata for the asset model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#tags IvsChannel#tags}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Channel type, which determines the allowable resolution and bitrate.

If you exceed the allowable resolution or bitrate, the stream probably will disconnect immediately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#type IvsChannel#type}

---

### IvsChannelMultitrackInputConfiguration <a name="IvsChannelMultitrackInputConfiguration" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IvsChannelMultitrackInputConfiguration {
    bool|IResolvable Enabled = null,
    string MaximumResolution = null,
    string Policy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether multitrack input is enabled. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration.property.maximumResolution">MaximumResolution</a></code> | <code>string</code> | Maximum resolution for multitrack input. Required if enabled is true. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration.property.policy">Policy</a></code> | <code>string</code> | Indicates whether multitrack input is allowed or required. Required if enabled is true. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether multitrack input is enabled.

Can be set to true only if channel type is STANDARD. Setting enabled to true with any other channel type will cause an exception. If true, then policy, maximumResolution, and containerFormat are required, and containerFormat must be set to FRAGMENTED_MP4. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#enabled IvsChannel#enabled}

---

##### `MaximumResolution`<sup>Optional</sup> <a name="MaximumResolution" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration.property.maximumResolution"></a>

```csharp
public string MaximumResolution { get; set; }
```

- *Type:* string

Maximum resolution for multitrack input. Required if enabled is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#maximum_resolution IvsChannel#maximum_resolution}

---

##### `Policy`<sup>Optional</sup> <a name="Policy" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration.property.policy"></a>

```csharp
public string Policy { get; set; }
```

- *Type:* string

Indicates whether multitrack input is allowed or required. Required if enabled is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#policy IvsChannel#policy}

---

### IvsChannelTags <a name="IvsChannelTags" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IvsChannelTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#key IvsChannel#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#value IvsChannel#value}

---

## Classes <a name="Classes" id="Classes"></a>

### IvsChannelMultitrackInputConfigurationOutputReference <a name="IvsChannelMultitrackInputConfigurationOutputReference" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IvsChannelMultitrackInputConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.resetMaximumResolution">ResetMaximumResolution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.resetPolicy">ResetPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetMaximumResolution` <a name="ResetMaximumResolution" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.resetMaximumResolution"></a>

```csharp
private void ResetMaximumResolution()
```

##### `ResetPolicy` <a name="ResetPolicy" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.resetPolicy"></a>

```csharp
private void ResetPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.maximumResolutionInput">MaximumResolutionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.policyInput">PolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.maximumResolution">MaximumResolution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.policy">Policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration">IvsChannelMultitrackInputConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaximumResolutionInput`<sup>Optional</sup> <a name="MaximumResolutionInput" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.maximumResolutionInput"></a>

```csharp
public string MaximumResolutionInput { get; }
```

- *Type:* string

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.policyInput"></a>

```csharp
public string PolicyInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaximumResolution`<sup>Required</sup> <a name="MaximumResolution" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.maximumResolution"></a>

```csharp
public string MaximumResolution { get; }
```

- *Type:* string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.policy"></a>

```csharp
public string Policy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IvsChannelMultitrackInputConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration">IvsChannelMultitrackInputConfiguration</a>

---


### IvsChannelTagsList <a name="IvsChannelTagsList" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IvsChannelTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.get"></a>

```csharp
private IvsChannelTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTags">IvsChannelTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.property.internalValue"></a>

```csharp
public IResolvable|IvsChannelTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTags">IvsChannelTags</a>[]

---


### IvsChannelTagsOutputReference <a name="IvsChannelTagsOutputReference" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IvsChannelTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTags">IvsChannelTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IvsChannelTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTags">IvsChannelTags</a>

---



