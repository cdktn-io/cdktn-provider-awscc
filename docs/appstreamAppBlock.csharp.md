# `appstreamAppBlock` Submodule <a name="`appstreamAppBlock` Submodule" id="@cdktn/provider-awscc.appstreamAppBlock"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppstreamAppBlock <a name="AppstreamAppBlock" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_app_block awscc_appstream_app_block}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamAppBlock(Construct Scope, string Id, AppstreamAppBlockConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig">AppstreamAppBlockConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig">AppstreamAppBlockConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putPostSetupScriptDetails">PutPostSetupScriptDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putSetupScriptDetails">PutSetupScriptDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putSourceS3Location">PutSourceS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetPackagingType">ResetPackagingType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetPostSetupScriptDetails">ResetPostSetupScriptDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetSetupScriptDetails">ResetSetupScriptDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPostSetupScriptDetails` <a name="PutPostSetupScriptDetails" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putPostSetupScriptDetails"></a>

```csharp
private void PutPostSetupScriptDetails(AppstreamAppBlockPostSetupScriptDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putPostSetupScriptDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails">AppstreamAppBlockPostSetupScriptDetails</a>

---

##### `PutSetupScriptDetails` <a name="PutSetupScriptDetails" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putSetupScriptDetails"></a>

```csharp
private void PutSetupScriptDetails(AppstreamAppBlockSetupScriptDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putSetupScriptDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails">AppstreamAppBlockSetupScriptDetails</a>

---

##### `PutSourceS3Location` <a name="PutSourceS3Location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putSourceS3Location"></a>

```csharp
private void PutSourceS3Location(AppstreamAppBlockSourceS3Location Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putSourceS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location">AppstreamAppBlockSourceS3Location</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putTags"></a>

```csharp
private void PutTags(IResolvable|AppstreamAppBlockTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags">AppstreamAppBlockTags</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetPackagingType` <a name="ResetPackagingType" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetPackagingType"></a>

```csharp
private void ResetPackagingType()
```

##### `ResetPostSetupScriptDetails` <a name="ResetPostSetupScriptDetails" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetPostSetupScriptDetails"></a>

```csharp
private void ResetPostSetupScriptDetails()
```

##### `ResetSetupScriptDetails` <a name="ResetSetupScriptDetails" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetSetupScriptDetails"></a>

```csharp
private void ResetSetupScriptDetails()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AppstreamAppBlock resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppstreamAppBlock.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppstreamAppBlock.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppstreamAppBlock.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppstreamAppBlock.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AppstreamAppBlock resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppstreamAppBlock to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppstreamAppBlock that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_app_block#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AppstreamAppBlock to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.createdTime">CreatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.postSetupScriptDetails">PostSetupScriptDetails</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference">AppstreamAppBlockPostSetupScriptDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.setupScriptDetails">SetupScriptDetails</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference">AppstreamAppBlockSetupScriptDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.sourceS3Location">SourceS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference">AppstreamAppBlockSourceS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList">AppstreamAppBlockTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.packagingTypeInput">PackagingTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.postSetupScriptDetailsInput">PostSetupScriptDetailsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails">AppstreamAppBlockPostSetupScriptDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.setupScriptDetailsInput">SetupScriptDetailsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails">AppstreamAppBlockSetupScriptDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.sourceS3LocationInput">SourceS3LocationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location">AppstreamAppBlockSourceS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags">AppstreamAppBlockTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.packagingType">PackagingType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.createdTime"></a>

```csharp
public string CreatedTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PostSetupScriptDetails`<sup>Required</sup> <a name="PostSetupScriptDetails" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.postSetupScriptDetails"></a>

```csharp
public AppstreamAppBlockPostSetupScriptDetailsOutputReference PostSetupScriptDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference">AppstreamAppBlockPostSetupScriptDetailsOutputReference</a>

---

##### `SetupScriptDetails`<sup>Required</sup> <a name="SetupScriptDetails" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.setupScriptDetails"></a>

```csharp
public AppstreamAppBlockSetupScriptDetailsOutputReference SetupScriptDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference">AppstreamAppBlockSetupScriptDetailsOutputReference</a>

---

##### `SourceS3Location`<sup>Required</sup> <a name="SourceS3Location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.sourceS3Location"></a>

```csharp
public AppstreamAppBlockSourceS3LocationOutputReference SourceS3Location { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference">AppstreamAppBlockSourceS3LocationOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.tags"></a>

```csharp
public AppstreamAppBlockTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList">AppstreamAppBlockTagsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PackagingTypeInput`<sup>Optional</sup> <a name="PackagingTypeInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.packagingTypeInput"></a>

```csharp
public string PackagingTypeInput { get; }
```

- *Type:* string

---

##### `PostSetupScriptDetailsInput`<sup>Optional</sup> <a name="PostSetupScriptDetailsInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.postSetupScriptDetailsInput"></a>

```csharp
public IResolvable|AppstreamAppBlockPostSetupScriptDetails PostSetupScriptDetailsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails">AppstreamAppBlockPostSetupScriptDetails</a>

---

##### `SetupScriptDetailsInput`<sup>Optional</sup> <a name="SetupScriptDetailsInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.setupScriptDetailsInput"></a>

```csharp
public IResolvable|AppstreamAppBlockSetupScriptDetails SetupScriptDetailsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails">AppstreamAppBlockSetupScriptDetails</a>

---

##### `SourceS3LocationInput`<sup>Optional</sup> <a name="SourceS3LocationInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.sourceS3LocationInput"></a>

```csharp
public IResolvable|AppstreamAppBlockSourceS3Location SourceS3LocationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location">AppstreamAppBlockSourceS3Location</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.tagsInput"></a>

```csharp
public IResolvable|AppstreamAppBlockTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags">AppstreamAppBlockTags</a>[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PackagingType`<sup>Required</sup> <a name="PackagingType" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.packagingType"></a>

```csharp
public string PackagingType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppstreamAppBlockConfig <a name="AppstreamAppBlockConfig" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamAppBlockConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    AppstreamAppBlockSourceS3Location SourceS3Location,
    string Description = null,
    string DisplayName = null,
    string PackagingType = null,
    AppstreamAppBlockPostSetupScriptDetails PostSetupScriptDetails = null,
    AppstreamAppBlockSetupScriptDetails SetupScriptDetails = null,
    IResolvable|AppstreamAppBlockTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_app_block#name AppstreamAppBlock#name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.sourceS3Location">SourceS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location">AppstreamAppBlockSourceS3Location</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_app_block#source_s3_location AppstreamAppBlock#source_s3_location}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_app_block#description AppstreamAppBlock#description}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_app_block#display_name AppstreamAppBlock#display_name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.packagingType">PackagingType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_app_block#packaging_type AppstreamAppBlock#packaging_type}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.postSetupScriptDetails">PostSetupScriptDetails</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails">AppstreamAppBlockPostSetupScriptDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_app_block#post_setup_script_details AppstreamAppBlock#post_setup_script_details}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.setupScriptDetails">SetupScriptDetails</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails">AppstreamAppBlockSetupScriptDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_app_block#setup_script_details AppstreamAppBlock#setup_script_details}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags">AppstreamAppBlockTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_app_block#tags AppstreamAppBlock#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_app_block#name AppstreamAppBlock#name}.

---

##### `SourceS3Location`<sup>Required</sup> <a name="SourceS3Location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.sourceS3Location"></a>

```csharp
public AppstreamAppBlockSourceS3Location SourceS3Location { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location">AppstreamAppBlockSourceS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_app_block#source_s3_location AppstreamAppBlock#source_s3_location}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_app_block#description AppstreamAppBlock#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_app_block#display_name AppstreamAppBlock#display_name}.

---

##### `PackagingType`<sup>Optional</sup> <a name="PackagingType" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.packagingType"></a>

```csharp
public string PackagingType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_app_block#packaging_type AppstreamAppBlock#packaging_type}.

---

##### `PostSetupScriptDetails`<sup>Optional</sup> <a name="PostSetupScriptDetails" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.postSetupScriptDetails"></a>

```csharp
public AppstreamAppBlockPostSetupScriptDetails PostSetupScriptDetails { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails">AppstreamAppBlockPostSetupScriptDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_app_block#post_setup_script_details AppstreamAppBlock#post_setup_script_details}.

---

##### `SetupScriptDetails`<sup>Optional</sup> <a name="SetupScriptDetails" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.setupScriptDetails"></a>

```csharp
public AppstreamAppBlockSetupScriptDetails SetupScriptDetails { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails">AppstreamAppBlockSetupScriptDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_app_block#setup_script_details AppstreamAppBlock#setup_script_details}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.tags"></a>

```csharp
public IResolvable|AppstreamAppBlockTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags">AppstreamAppBlockTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_app_block#tags AppstreamAppBlock#tags}.

---

### AppstreamAppBlockPostSetupScriptDetails <a name="AppstreamAppBlockPostSetupScriptDetails" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamAppBlockPostSetupScriptDetails {
    string ExecutableParameters = null,
    string ExecutablePath = null,
    AppstreamAppBlockPostSetupScriptDetailsScriptS3Location ScriptS3Location = null,
    double TimeoutInSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails.property.executableParameters">ExecutableParameters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_app_block#executable_parameters AppstreamAppBlock#executable_parameters}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails.property.executablePath">ExecutablePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_app_block#executable_path AppstreamAppBlock#executable_path}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails.property.scriptS3Location">ScriptS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location">AppstreamAppBlockPostSetupScriptDetailsScriptS3Location</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_app_block#script_s3_location AppstreamAppBlock#script_s3_location}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_app_block#timeout_in_seconds AppstreamAppBlock#timeout_in_seconds}. |

---

##### `ExecutableParameters`<sup>Optional</sup> <a name="ExecutableParameters" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails.property.executableParameters"></a>

```csharp
public string ExecutableParameters { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_app_block#executable_parameters AppstreamAppBlock#executable_parameters}.

---

##### `ExecutablePath`<sup>Optional</sup> <a name="ExecutablePath" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails.property.executablePath"></a>

```csharp
public string ExecutablePath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_app_block#executable_path AppstreamAppBlock#executable_path}.

---

##### `ScriptS3Location`<sup>Optional</sup> <a name="ScriptS3Location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails.property.scriptS3Location"></a>

```csharp
public AppstreamAppBlockPostSetupScriptDetailsScriptS3Location ScriptS3Location { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location">AppstreamAppBlockPostSetupScriptDetailsScriptS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_app_block#script_s3_location AppstreamAppBlock#script_s3_location}.

---

##### `TimeoutInSeconds`<sup>Optional</sup> <a name="TimeoutInSeconds" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails.property.timeoutInSeconds"></a>

```csharp
public double TimeoutInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_app_block#timeout_in_seconds AppstreamAppBlock#timeout_in_seconds}.

---

### AppstreamAppBlockPostSetupScriptDetailsScriptS3Location <a name="AppstreamAppBlockPostSetupScriptDetailsScriptS3Location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamAppBlockPostSetupScriptDetailsScriptS3Location {
    string S3Bucket = null,
    string S3Key = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location.property.s3Bucket">S3Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_app_block#s3_bucket AppstreamAppBlock#s3_bucket}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location.property.s3Key">S3Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_app_block#s3_key AppstreamAppBlock#s3_key}. |

---

##### `S3Bucket`<sup>Optional</sup> <a name="S3Bucket" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location.property.s3Bucket"></a>

```csharp
public string S3Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_app_block#s3_bucket AppstreamAppBlock#s3_bucket}.

---

##### `S3Key`<sup>Optional</sup> <a name="S3Key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location.property.s3Key"></a>

```csharp
public string S3Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_app_block#s3_key AppstreamAppBlock#s3_key}.

---

### AppstreamAppBlockSetupScriptDetails <a name="AppstreamAppBlockSetupScriptDetails" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamAppBlockSetupScriptDetails {
    string ExecutableParameters = null,
    string ExecutablePath = null,
    AppstreamAppBlockSetupScriptDetailsScriptS3Location ScriptS3Location = null,
    double TimeoutInSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails.property.executableParameters">ExecutableParameters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_app_block#executable_parameters AppstreamAppBlock#executable_parameters}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails.property.executablePath">ExecutablePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_app_block#executable_path AppstreamAppBlock#executable_path}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails.property.scriptS3Location">ScriptS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location">AppstreamAppBlockSetupScriptDetailsScriptS3Location</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_app_block#script_s3_location AppstreamAppBlock#script_s3_location}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_app_block#timeout_in_seconds AppstreamAppBlock#timeout_in_seconds}. |

---

##### `ExecutableParameters`<sup>Optional</sup> <a name="ExecutableParameters" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails.property.executableParameters"></a>

```csharp
public string ExecutableParameters { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_app_block#executable_parameters AppstreamAppBlock#executable_parameters}.

---

##### `ExecutablePath`<sup>Optional</sup> <a name="ExecutablePath" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails.property.executablePath"></a>

```csharp
public string ExecutablePath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_app_block#executable_path AppstreamAppBlock#executable_path}.

---

##### `ScriptS3Location`<sup>Optional</sup> <a name="ScriptS3Location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails.property.scriptS3Location"></a>

```csharp
public AppstreamAppBlockSetupScriptDetailsScriptS3Location ScriptS3Location { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location">AppstreamAppBlockSetupScriptDetailsScriptS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_app_block#script_s3_location AppstreamAppBlock#script_s3_location}.

---

##### `TimeoutInSeconds`<sup>Optional</sup> <a name="TimeoutInSeconds" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails.property.timeoutInSeconds"></a>

```csharp
public double TimeoutInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_app_block#timeout_in_seconds AppstreamAppBlock#timeout_in_seconds}.

---

### AppstreamAppBlockSetupScriptDetailsScriptS3Location <a name="AppstreamAppBlockSetupScriptDetailsScriptS3Location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamAppBlockSetupScriptDetailsScriptS3Location {
    string S3Bucket = null,
    string S3Key = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location.property.s3Bucket">S3Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_app_block#s3_bucket AppstreamAppBlock#s3_bucket}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location.property.s3Key">S3Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_app_block#s3_key AppstreamAppBlock#s3_key}. |

---

##### `S3Bucket`<sup>Optional</sup> <a name="S3Bucket" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location.property.s3Bucket"></a>

```csharp
public string S3Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_app_block#s3_bucket AppstreamAppBlock#s3_bucket}.

---

##### `S3Key`<sup>Optional</sup> <a name="S3Key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location.property.s3Key"></a>

```csharp
public string S3Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_app_block#s3_key AppstreamAppBlock#s3_key}.

---

### AppstreamAppBlockSourceS3Location <a name="AppstreamAppBlockSourceS3Location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamAppBlockSourceS3Location {
    string S3Bucket,
    string S3Key = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location.property.s3Bucket">S3Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_app_block#s3_bucket AppstreamAppBlock#s3_bucket}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location.property.s3Key">S3Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_app_block#s3_key AppstreamAppBlock#s3_key}. |

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location.property.s3Bucket"></a>

```csharp
public string S3Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_app_block#s3_bucket AppstreamAppBlock#s3_bucket}.

---

##### `S3Key`<sup>Optional</sup> <a name="S3Key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location.property.s3Key"></a>

```csharp
public string S3Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_app_block#s3_key AppstreamAppBlock#s3_key}.

---

### AppstreamAppBlockTags <a name="AppstreamAppBlockTags" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamAppBlockTags {
    string Key = null,
    string TagKey = null,
    string TagValue = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_app_block#key AppstreamAppBlock#key}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags.property.tagKey">TagKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_app_block#tag_key AppstreamAppBlock#tag_key}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags.property.tagValue">TagValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_app_block#tag_value AppstreamAppBlock#tag_value}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_app_block#value AppstreamAppBlock#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_app_block#key AppstreamAppBlock#key}.

---

##### `TagKey`<sup>Optional</sup> <a name="TagKey" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags.property.tagKey"></a>

```csharp
public string TagKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_app_block#tag_key AppstreamAppBlock#tag_key}.

---

##### `TagValue`<sup>Optional</sup> <a name="TagValue" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags.property.tagValue"></a>

```csharp
public string TagValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_app_block#tag_value AppstreamAppBlock#tag_value}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_app_block#value AppstreamAppBlock#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppstreamAppBlockPostSetupScriptDetailsOutputReference <a name="AppstreamAppBlockPostSetupScriptDetailsOutputReference" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamAppBlockPostSetupScriptDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.putScriptS3Location">PutScriptS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.resetExecutableParameters">ResetExecutableParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.resetExecutablePath">ResetExecutablePath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.resetScriptS3Location">ResetScriptS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.resetTimeoutInSeconds">ResetTimeoutInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScriptS3Location` <a name="PutScriptS3Location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.putScriptS3Location"></a>

```csharp
private void PutScriptS3Location(AppstreamAppBlockPostSetupScriptDetailsScriptS3Location Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.putScriptS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location">AppstreamAppBlockPostSetupScriptDetailsScriptS3Location</a>

---

##### `ResetExecutableParameters` <a name="ResetExecutableParameters" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.resetExecutableParameters"></a>

```csharp
private void ResetExecutableParameters()
```

##### `ResetExecutablePath` <a name="ResetExecutablePath" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.resetExecutablePath"></a>

```csharp
private void ResetExecutablePath()
```

##### `ResetScriptS3Location` <a name="ResetScriptS3Location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.resetScriptS3Location"></a>

```csharp
private void ResetScriptS3Location()
```

##### `ResetTimeoutInSeconds` <a name="ResetTimeoutInSeconds" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.resetTimeoutInSeconds"></a>

```csharp
private void ResetTimeoutInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.scriptS3Location">ScriptS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference">AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.executableParametersInput">ExecutableParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.executablePathInput">ExecutablePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.scriptS3LocationInput">ScriptS3LocationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location">AppstreamAppBlockPostSetupScriptDetailsScriptS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.timeoutInSecondsInput">TimeoutInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.executableParameters">ExecutableParameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.executablePath">ExecutablePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails">AppstreamAppBlockPostSetupScriptDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScriptS3Location`<sup>Required</sup> <a name="ScriptS3Location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.scriptS3Location"></a>

```csharp
public AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference ScriptS3Location { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference">AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference</a>

---

##### `ExecutableParametersInput`<sup>Optional</sup> <a name="ExecutableParametersInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.executableParametersInput"></a>

```csharp
public string ExecutableParametersInput { get; }
```

- *Type:* string

---

##### `ExecutablePathInput`<sup>Optional</sup> <a name="ExecutablePathInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.executablePathInput"></a>

```csharp
public string ExecutablePathInput { get; }
```

- *Type:* string

---

##### `ScriptS3LocationInput`<sup>Optional</sup> <a name="ScriptS3LocationInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.scriptS3LocationInput"></a>

```csharp
public IResolvable|AppstreamAppBlockPostSetupScriptDetailsScriptS3Location ScriptS3LocationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location">AppstreamAppBlockPostSetupScriptDetailsScriptS3Location</a>

---

##### `TimeoutInSecondsInput`<sup>Optional</sup> <a name="TimeoutInSecondsInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.timeoutInSecondsInput"></a>

```csharp
public double TimeoutInSecondsInput { get; }
```

- *Type:* double

---

##### `ExecutableParameters`<sup>Required</sup> <a name="ExecutableParameters" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.executableParameters"></a>

```csharp
public string ExecutableParameters { get; }
```

- *Type:* string

---

##### `ExecutablePath`<sup>Required</sup> <a name="ExecutablePath" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.executablePath"></a>

```csharp
public string ExecutablePath { get; }
```

- *Type:* string

---

##### `TimeoutInSeconds`<sup>Required</sup> <a name="TimeoutInSeconds" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.timeoutInSeconds"></a>

```csharp
public double TimeoutInSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppstreamAppBlockPostSetupScriptDetails InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails">AppstreamAppBlockPostSetupScriptDetails</a>

---


### AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference <a name="AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.resetS3Bucket">ResetS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.resetS3Key">ResetS3Key</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetS3Bucket` <a name="ResetS3Bucket" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.resetS3Bucket"></a>

```csharp
private void ResetS3Bucket()
```

##### `ResetS3Key` <a name="ResetS3Key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.resetS3Key"></a>

```csharp
private void ResetS3Key()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.s3BucketInput">S3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.s3KeyInput">S3KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.s3Bucket">S3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.s3Key">S3Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location">AppstreamAppBlockPostSetupScriptDetailsScriptS3Location</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3BucketInput`<sup>Optional</sup> <a name="S3BucketInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.s3BucketInput"></a>

```csharp
public string S3BucketInput { get; }
```

- *Type:* string

---

##### `S3KeyInput`<sup>Optional</sup> <a name="S3KeyInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.s3KeyInput"></a>

```csharp
public string S3KeyInput { get; }
```

- *Type:* string

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.s3Bucket"></a>

```csharp
public string S3Bucket { get; }
```

- *Type:* string

---

##### `S3Key`<sup>Required</sup> <a name="S3Key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.s3Key"></a>

```csharp
public string S3Key { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppstreamAppBlockPostSetupScriptDetailsScriptS3Location InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location">AppstreamAppBlockPostSetupScriptDetailsScriptS3Location</a>

---


### AppstreamAppBlockSetupScriptDetailsOutputReference <a name="AppstreamAppBlockSetupScriptDetailsOutputReference" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamAppBlockSetupScriptDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.putScriptS3Location">PutScriptS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.resetExecutableParameters">ResetExecutableParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.resetExecutablePath">ResetExecutablePath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.resetScriptS3Location">ResetScriptS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.resetTimeoutInSeconds">ResetTimeoutInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScriptS3Location` <a name="PutScriptS3Location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.putScriptS3Location"></a>

```csharp
private void PutScriptS3Location(AppstreamAppBlockSetupScriptDetailsScriptS3Location Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.putScriptS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location">AppstreamAppBlockSetupScriptDetailsScriptS3Location</a>

---

##### `ResetExecutableParameters` <a name="ResetExecutableParameters" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.resetExecutableParameters"></a>

```csharp
private void ResetExecutableParameters()
```

##### `ResetExecutablePath` <a name="ResetExecutablePath" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.resetExecutablePath"></a>

```csharp
private void ResetExecutablePath()
```

##### `ResetScriptS3Location` <a name="ResetScriptS3Location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.resetScriptS3Location"></a>

```csharp
private void ResetScriptS3Location()
```

##### `ResetTimeoutInSeconds` <a name="ResetTimeoutInSeconds" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.resetTimeoutInSeconds"></a>

```csharp
private void ResetTimeoutInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.scriptS3Location">ScriptS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference">AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.executableParametersInput">ExecutableParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.executablePathInput">ExecutablePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.scriptS3LocationInput">ScriptS3LocationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location">AppstreamAppBlockSetupScriptDetailsScriptS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.timeoutInSecondsInput">TimeoutInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.executableParameters">ExecutableParameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.executablePath">ExecutablePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails">AppstreamAppBlockSetupScriptDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScriptS3Location`<sup>Required</sup> <a name="ScriptS3Location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.scriptS3Location"></a>

```csharp
public AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference ScriptS3Location { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference">AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference</a>

---

##### `ExecutableParametersInput`<sup>Optional</sup> <a name="ExecutableParametersInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.executableParametersInput"></a>

```csharp
public string ExecutableParametersInput { get; }
```

- *Type:* string

---

##### `ExecutablePathInput`<sup>Optional</sup> <a name="ExecutablePathInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.executablePathInput"></a>

```csharp
public string ExecutablePathInput { get; }
```

- *Type:* string

---

##### `ScriptS3LocationInput`<sup>Optional</sup> <a name="ScriptS3LocationInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.scriptS3LocationInput"></a>

```csharp
public IResolvable|AppstreamAppBlockSetupScriptDetailsScriptS3Location ScriptS3LocationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location">AppstreamAppBlockSetupScriptDetailsScriptS3Location</a>

---

##### `TimeoutInSecondsInput`<sup>Optional</sup> <a name="TimeoutInSecondsInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.timeoutInSecondsInput"></a>

```csharp
public double TimeoutInSecondsInput { get; }
```

- *Type:* double

---

##### `ExecutableParameters`<sup>Required</sup> <a name="ExecutableParameters" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.executableParameters"></a>

```csharp
public string ExecutableParameters { get; }
```

- *Type:* string

---

##### `ExecutablePath`<sup>Required</sup> <a name="ExecutablePath" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.executablePath"></a>

```csharp
public string ExecutablePath { get; }
```

- *Type:* string

---

##### `TimeoutInSeconds`<sup>Required</sup> <a name="TimeoutInSeconds" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.timeoutInSeconds"></a>

```csharp
public double TimeoutInSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppstreamAppBlockSetupScriptDetails InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails">AppstreamAppBlockSetupScriptDetails</a>

---


### AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference <a name="AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.resetS3Bucket">ResetS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.resetS3Key">ResetS3Key</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetS3Bucket` <a name="ResetS3Bucket" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.resetS3Bucket"></a>

```csharp
private void ResetS3Bucket()
```

##### `ResetS3Key` <a name="ResetS3Key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.resetS3Key"></a>

```csharp
private void ResetS3Key()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.s3BucketInput">S3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.s3KeyInput">S3KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.s3Bucket">S3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.s3Key">S3Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location">AppstreamAppBlockSetupScriptDetailsScriptS3Location</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3BucketInput`<sup>Optional</sup> <a name="S3BucketInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.s3BucketInput"></a>

```csharp
public string S3BucketInput { get; }
```

- *Type:* string

---

##### `S3KeyInput`<sup>Optional</sup> <a name="S3KeyInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.s3KeyInput"></a>

```csharp
public string S3KeyInput { get; }
```

- *Type:* string

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.s3Bucket"></a>

```csharp
public string S3Bucket { get; }
```

- *Type:* string

---

##### `S3Key`<sup>Required</sup> <a name="S3Key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.s3Key"></a>

```csharp
public string S3Key { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppstreamAppBlockSetupScriptDetailsScriptS3Location InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location">AppstreamAppBlockSetupScriptDetailsScriptS3Location</a>

---


### AppstreamAppBlockSourceS3LocationOutputReference <a name="AppstreamAppBlockSourceS3LocationOutputReference" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamAppBlockSourceS3LocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.resetS3Key">ResetS3Key</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetS3Key` <a name="ResetS3Key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.resetS3Key"></a>

```csharp
private void ResetS3Key()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.s3BucketInput">S3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.s3KeyInput">S3KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.s3Bucket">S3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.s3Key">S3Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location">AppstreamAppBlockSourceS3Location</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3BucketInput`<sup>Optional</sup> <a name="S3BucketInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.s3BucketInput"></a>

```csharp
public string S3BucketInput { get; }
```

- *Type:* string

---

##### `S3KeyInput`<sup>Optional</sup> <a name="S3KeyInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.s3KeyInput"></a>

```csharp
public string S3KeyInput { get; }
```

- *Type:* string

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.s3Bucket"></a>

```csharp
public string S3Bucket { get; }
```

- *Type:* string

---

##### `S3Key`<sup>Required</sup> <a name="S3Key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.s3Key"></a>

```csharp
public string S3Key { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppstreamAppBlockSourceS3Location InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location">AppstreamAppBlockSourceS3Location</a>

---


### AppstreamAppBlockTagsList <a name="AppstreamAppBlockTagsList" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamAppBlockTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.get"></a>

```csharp
private AppstreamAppBlockTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags">AppstreamAppBlockTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.property.internalValue"></a>

```csharp
public IResolvable|AppstreamAppBlockTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags">AppstreamAppBlockTags</a>[]

---


### AppstreamAppBlockTagsOutputReference <a name="AppstreamAppBlockTagsOutputReference" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamAppBlockTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.resetTagKey">ResetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.resetTagValue">ResetTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetTagKey` <a name="ResetTagKey" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.resetTagKey"></a>

```csharp
private void ResetTagKey()
```

##### `ResetTagValue` <a name="ResetTagValue" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.resetTagValue"></a>

```csharp
private void ResetTagValue()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.tagKeyInput">TagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.tagValueInput">TagValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.tagKey">TagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.tagValue">TagValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags">AppstreamAppBlockTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `TagKeyInput`<sup>Optional</sup> <a name="TagKeyInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.tagKeyInput"></a>

```csharp
public string TagKeyInput { get; }
```

- *Type:* string

---

##### `TagValueInput`<sup>Optional</sup> <a name="TagValueInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.tagValueInput"></a>

```csharp
public string TagValueInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.tagKey"></a>

```csharp
public string TagKey { get; }
```

- *Type:* string

---

##### `TagValue`<sup>Required</sup> <a name="TagValue" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.tagValue"></a>

```csharp
public string TagValue { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppstreamAppBlockTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags">AppstreamAppBlockTags</a>

---



