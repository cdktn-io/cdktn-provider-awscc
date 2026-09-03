# `directoryserviceSimpleAd` Submodule <a name="`directoryserviceSimpleAd` Submodule" id="@cdktn/provider-awscc.directoryserviceSimpleAd"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectoryserviceSimpleAd <a name="DirectoryserviceSimpleAd" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directoryservice_simple_ad awscc_directoryservice_simple_ad}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DirectoryserviceSimpleAd(Construct Scope, string Id, DirectoryserviceSimpleAdConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig">DirectoryserviceSimpleAdConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig">DirectoryserviceSimpleAdConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.putVpcSettings">PutVpcSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.resetCreateAlias">ResetCreateAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.resetEnableSso">ResetEnableSso</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.resetShortName">ResetShortName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.putTags"></a>

```csharp
private void PutTags(IResolvable|DirectoryserviceSimpleAdTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags">DirectoryserviceSimpleAdTags</a>[]

---

##### `PutVpcSettings` <a name="PutVpcSettings" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.putVpcSettings"></a>

```csharp
private void PutVpcSettings(DirectoryserviceSimpleAdVpcSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.putVpcSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettings">DirectoryserviceSimpleAdVpcSettings</a>

---

##### `ResetCreateAlias` <a name="ResetCreateAlias" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.resetCreateAlias"></a>

```csharp
private void ResetCreateAlias()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnableSso` <a name="ResetEnableSso" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.resetEnableSso"></a>

```csharp
private void ResetEnableSso()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetShortName` <a name="ResetShortName" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.resetShortName"></a>

```csharp
private void ResetShortName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DirectoryserviceSimpleAd resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DirectoryserviceSimpleAd.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DirectoryserviceSimpleAd.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DirectoryserviceSimpleAd.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DirectoryserviceSimpleAd.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DirectoryserviceSimpleAd resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DirectoryserviceSimpleAd to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DirectoryserviceSimpleAd that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directoryservice_simple_ad#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DirectoryserviceSimpleAd to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.directoryId">DirectoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.dnsIpAddresses">DnsIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList">DirectoryserviceSimpleAdTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.vpcSettings">VpcSettings</a></code> | <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference">DirectoryserviceSimpleAdVpcSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.createAliasInput">CreateAliasInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.enableSsoInput">EnableSsoInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.shortNameInput">ShortNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.sizeInput">SizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags">DirectoryserviceSimpleAdTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.vpcSettingsInput">VpcSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettings">DirectoryserviceSimpleAdVpcSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.createAlias">CreateAlias</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.enableSso">EnableSso</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.shortName">ShortName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.size">Size</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.directoryId"></a>

```csharp
public string DirectoryId { get; }
```

- *Type:* string

---

##### `DnsIpAddresses`<sup>Required</sup> <a name="DnsIpAddresses" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.dnsIpAddresses"></a>

```csharp
public string[] DnsIpAddresses { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.tags"></a>

```csharp
public DirectoryserviceSimpleAdTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList">DirectoryserviceSimpleAdTagsList</a>

---

##### `VpcSettings`<sup>Required</sup> <a name="VpcSettings" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.vpcSettings"></a>

```csharp
public DirectoryserviceSimpleAdVpcSettingsOutputReference VpcSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference">DirectoryserviceSimpleAdVpcSettingsOutputReference</a>

---

##### `CreateAliasInput`<sup>Optional</sup> <a name="CreateAliasInput" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.createAliasInput"></a>

```csharp
public bool|IResolvable CreateAliasInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnableSsoInput`<sup>Optional</sup> <a name="EnableSsoInput" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.enableSsoInput"></a>

```csharp
public bool|IResolvable EnableSsoInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `ShortNameInput`<sup>Optional</sup> <a name="ShortNameInput" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.shortNameInput"></a>

```csharp
public string ShortNameInput { get; }
```

- *Type:* string

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.sizeInput"></a>

```csharp
public string SizeInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.tagsInput"></a>

```csharp
public IResolvable|DirectoryserviceSimpleAdTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags">DirectoryserviceSimpleAdTags</a>[]

---

##### `VpcSettingsInput`<sup>Optional</sup> <a name="VpcSettingsInput" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.vpcSettingsInput"></a>

```csharp
public IResolvable|DirectoryserviceSimpleAdVpcSettings VpcSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettings">DirectoryserviceSimpleAdVpcSettings</a>

---

##### `CreateAlias`<sup>Required</sup> <a name="CreateAlias" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.createAlias"></a>

```csharp
public bool|IResolvable CreateAlias { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EnableSso`<sup>Required</sup> <a name="EnableSso" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.enableSso"></a>

```csharp
public bool|IResolvable EnableSso { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `ShortName`<sup>Required</sup> <a name="ShortName" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.shortName"></a>

```csharp
public string ShortName { get; }
```

- *Type:* string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.size"></a>

```csharp
public string Size { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DirectoryserviceSimpleAdConfig <a name="DirectoryserviceSimpleAdConfig" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DirectoryserviceSimpleAdConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Size,
    DirectoryserviceSimpleAdVpcSettings VpcSettings,
    bool|IResolvable CreateAlias = null,
    string Description = null,
    bool|IResolvable EnableSso = null,
    string Password = null,
    string ShortName = null,
    IResolvable|DirectoryserviceSimpleAdTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.name">Name</a></code> | <code>string</code> | The fully qualified domain name for the AWS Managed Simple AD directory. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.size">Size</a></code> | <code>string</code> | The size of the directory. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.vpcSettings">VpcSettings</a></code> | <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettings">DirectoryserviceSimpleAdVpcSettings</a></code> | VPC settings of the Simple AD directory server in AWS. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.createAlias">CreateAlias</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | The name of the configuration set. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.description">Description</a></code> | <code>string</code> | Description for the directory. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.enableSso">EnableSso</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to enable single sign-on for a Simple Active Directory in AWS. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.password">Password</a></code> | <code>string</code> | The password for the default administrative user named Admin. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.shortName">ShortName</a></code> | <code>string</code> | The NetBIOS name for your domain. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags">DirectoryserviceSimpleAdTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directoryservice_simple_ad#tags DirectoryserviceSimpleAd#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The fully qualified domain name for the AWS Managed Simple AD directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directoryservice_simple_ad#name DirectoryserviceSimpleAd#name}

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.size"></a>

```csharp
public string Size { get; set; }
```

- *Type:* string

The size of the directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directoryservice_simple_ad#size DirectoryserviceSimpleAd#size}

---

##### `VpcSettings`<sup>Required</sup> <a name="VpcSettings" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.vpcSettings"></a>

```csharp
public DirectoryserviceSimpleAdVpcSettings VpcSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettings">DirectoryserviceSimpleAdVpcSettings</a>

VPC settings of the Simple AD directory server in AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directoryservice_simple_ad#vpc_settings DirectoryserviceSimpleAd#vpc_settings}

---

##### `CreateAlias`<sup>Optional</sup> <a name="CreateAlias" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.createAlias"></a>

```csharp
public bool|IResolvable CreateAlias { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

The name of the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directoryservice_simple_ad#create_alias DirectoryserviceSimpleAd#create_alias}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description for the directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directoryservice_simple_ad#description DirectoryserviceSimpleAd#description}

---

##### `EnableSso`<sup>Optional</sup> <a name="EnableSso" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.enableSso"></a>

```csharp
public bool|IResolvable EnableSso { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to enable single sign-on for a Simple Active Directory in AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directoryservice_simple_ad#enable_sso DirectoryserviceSimpleAd#enable_sso}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

The password for the default administrative user named Admin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directoryservice_simple_ad#password DirectoryserviceSimpleAd#password}

---

##### `ShortName`<sup>Optional</sup> <a name="ShortName" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.shortName"></a>

```csharp
public string ShortName { get; set; }
```

- *Type:* string

The NetBIOS name for your domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directoryservice_simple_ad#short_name DirectoryserviceSimpleAd#short_name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.tags"></a>

```csharp
public IResolvable|DirectoryserviceSimpleAdTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags">DirectoryserviceSimpleAdTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directoryservice_simple_ad#tags DirectoryserviceSimpleAd#tags}.

---

### DirectoryserviceSimpleAdTags <a name="DirectoryserviceSimpleAdTags" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DirectoryserviceSimpleAdTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directoryservice_simple_ad#key DirectoryserviceSimpleAd#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directoryservice_simple_ad#value DirectoryserviceSimpleAd#value}

---

### DirectoryserviceSimpleAdVpcSettings <a name="DirectoryserviceSimpleAdVpcSettings" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DirectoryserviceSimpleAdVpcSettings {
    string[] SubnetIds,
    string VpcId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettings.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | The identifiers of the subnets for the directory servers. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettings.property.vpcId">VpcId</a></code> | <code>string</code> | The identifier of the VPC in which to create the directory. |

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettings.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

The identifiers of the subnets for the directory servers.

The two subnets must be in different Availability Zones. AWS Directory Service specifies a directory server and a DNS server in each of these subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directoryservice_simple_ad#subnet_ids DirectoryserviceSimpleAd#subnet_ids}

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettings.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

The identifier of the VPC in which to create the directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directoryservice_simple_ad#vpc_id DirectoryserviceSimpleAd#vpc_id}

---

## Classes <a name="Classes" id="Classes"></a>

### DirectoryserviceSimpleAdTagsList <a name="DirectoryserviceSimpleAdTagsList" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DirectoryserviceSimpleAdTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.get"></a>

```csharp
private DirectoryserviceSimpleAdTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags">DirectoryserviceSimpleAdTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.property.internalValue"></a>

```csharp
public IResolvable|DirectoryserviceSimpleAdTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags">DirectoryserviceSimpleAdTags</a>[]

---


### DirectoryserviceSimpleAdTagsOutputReference <a name="DirectoryserviceSimpleAdTagsOutputReference" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DirectoryserviceSimpleAdTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags">DirectoryserviceSimpleAdTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DirectoryserviceSimpleAdTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags">DirectoryserviceSimpleAdTags</a>

---


### DirectoryserviceSimpleAdVpcSettingsOutputReference <a name="DirectoryserviceSimpleAdVpcSettingsOutputReference" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DirectoryserviceSimpleAdVpcSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettings">DirectoryserviceSimpleAdVpcSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DirectoryserviceSimpleAdVpcSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettings">DirectoryserviceSimpleAdVpcSettings</a>

---



