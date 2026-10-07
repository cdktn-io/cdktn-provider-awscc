# `directoryserviceMicrosoftAd` Submodule <a name="`directoryserviceMicrosoftAd` Submodule" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectoryserviceMicrosoftAd <a name="DirectoryserviceMicrosoftAd" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad awscc_directoryservice_microsoft_ad}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DirectoryserviceMicrosoftAd(Construct Scope, string Id, DirectoryserviceMicrosoftAdConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig">DirectoryserviceMicrosoftAdConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig">DirectoryserviceMicrosoftAdConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.putVpcSettings">PutVpcSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.resetCreateAlias">ResetCreateAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.resetEdition">ResetEdition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.resetEnableSso">ResetEnableSso</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.resetShortName">ResetShortName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutVpcSettings` <a name="PutVpcSettings" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.putVpcSettings"></a>

```csharp
private void PutVpcSettings(DirectoryserviceMicrosoftAdVpcSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.putVpcSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings">DirectoryserviceMicrosoftAdVpcSettings</a>

---

##### `ResetCreateAlias` <a name="ResetCreateAlias" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.resetCreateAlias"></a>

```csharp
private void ResetCreateAlias()
```

##### `ResetEdition` <a name="ResetEdition" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.resetEdition"></a>

```csharp
private void ResetEdition()
```

##### `ResetEnableSso` <a name="ResetEnableSso" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.resetEnableSso"></a>

```csharp
private void ResetEnableSso()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetShortName` <a name="ResetShortName" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.resetShortName"></a>

```csharp
private void ResetShortName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DirectoryserviceMicrosoftAd resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DirectoryserviceMicrosoftAd.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DirectoryserviceMicrosoftAd.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DirectoryserviceMicrosoftAd.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DirectoryserviceMicrosoftAd.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DirectoryserviceMicrosoftAd resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DirectoryserviceMicrosoftAd to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DirectoryserviceMicrosoftAd that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DirectoryserviceMicrosoftAd to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.directoryId">DirectoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.dnsIpAddresses">DnsIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.vpcSettings">VpcSettings</a></code> | <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference">DirectoryserviceMicrosoftAdVpcSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.createAliasInput">CreateAliasInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.editionInput">EditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.enableSsoInput">EnableSsoInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.shortNameInput">ShortNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.vpcSettingsInput">VpcSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings">DirectoryserviceMicrosoftAdVpcSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.createAlias">CreateAlias</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.edition">Edition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.enableSso">EnableSso</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.shortName">ShortName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.directoryId"></a>

```csharp
public string DirectoryId { get; }
```

- *Type:* string

---

##### `DnsIpAddresses`<sup>Required</sup> <a name="DnsIpAddresses" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.dnsIpAddresses"></a>

```csharp
public string[] DnsIpAddresses { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `VpcSettings`<sup>Required</sup> <a name="VpcSettings" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.vpcSettings"></a>

```csharp
public DirectoryserviceMicrosoftAdVpcSettingsOutputReference VpcSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference">DirectoryserviceMicrosoftAdVpcSettingsOutputReference</a>

---

##### `CreateAliasInput`<sup>Optional</sup> <a name="CreateAliasInput" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.createAliasInput"></a>

```csharp
public bool|IResolvable CreateAliasInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EditionInput`<sup>Optional</sup> <a name="EditionInput" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.editionInput"></a>

```csharp
public string EditionInput { get; }
```

- *Type:* string

---

##### `EnableSsoInput`<sup>Optional</sup> <a name="EnableSsoInput" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.enableSsoInput"></a>

```csharp
public bool|IResolvable EnableSsoInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `ShortNameInput`<sup>Optional</sup> <a name="ShortNameInput" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.shortNameInput"></a>

```csharp
public string ShortNameInput { get; }
```

- *Type:* string

---

##### `VpcSettingsInput`<sup>Optional</sup> <a name="VpcSettingsInput" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.vpcSettingsInput"></a>

```csharp
public IResolvable|DirectoryserviceMicrosoftAdVpcSettings VpcSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings">DirectoryserviceMicrosoftAdVpcSettings</a>

---

##### `CreateAlias`<sup>Required</sup> <a name="CreateAlias" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.createAlias"></a>

```csharp
public bool|IResolvable CreateAlias { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Edition`<sup>Required</sup> <a name="Edition" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.edition"></a>

```csharp
public string Edition { get; }
```

- *Type:* string

---

##### `EnableSso`<sup>Required</sup> <a name="EnableSso" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.enableSso"></a>

```csharp
public bool|IResolvable EnableSso { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `ShortName`<sup>Required</sup> <a name="ShortName" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.shortName"></a>

```csharp
public string ShortName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DirectoryserviceMicrosoftAdConfig <a name="DirectoryserviceMicrosoftAdConfig" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DirectoryserviceMicrosoftAdConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    DirectoryserviceMicrosoftAdVpcSettings VpcSettings,
    bool|IResolvable CreateAlias = null,
    string Edition = null,
    bool|IResolvable EnableSso = null,
    string Password = null,
    string ShortName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.name">Name</a></code> | <code>string</code> | The fully qualified domain name for the AWS Managed Microsoft AD directory, such as corp.example.com. This name will resolve inside your VPC only. It does not need to be publicly resolvable. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.vpcSettings">VpcSettings</a></code> | <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings">DirectoryserviceMicrosoftAdVpcSettings</a></code> | Specifies the VPC settings of the Microsoft AD directory server in AWS. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.createAlias">CreateAlias</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies an alias for a directory and assigns the alias to the directory. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.edition">Edition</a></code> | <code>string</code> | AWS Managed Microsoft AD is available in two editions: Standard and Enterprise. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.enableSso">EnableSso</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to enable single sign-on for a Microsoft Active Directory in AWS. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.password">Password</a></code> | <code>string</code> | The password for the default administrative user named Admin. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.shortName">ShortName</a></code> | <code>string</code> | The NetBIOS name for your domain, such as CORP. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The fully qualified domain name for the AWS Managed Microsoft AD directory, such as corp.example.com. This name will resolve inside your VPC only. It does not need to be publicly resolvable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#name DirectoryserviceMicrosoftAd#name}

---

##### `VpcSettings`<sup>Required</sup> <a name="VpcSettings" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.vpcSettings"></a>

```csharp
public DirectoryserviceMicrosoftAdVpcSettings VpcSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings">DirectoryserviceMicrosoftAdVpcSettings</a>

Specifies the VPC settings of the Microsoft AD directory server in AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#vpc_settings DirectoryserviceMicrosoftAd#vpc_settings}

---

##### `CreateAlias`<sup>Optional</sup> <a name="CreateAlias" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.createAlias"></a>

```csharp
public bool|IResolvable CreateAlias { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies an alias for a directory and assigns the alias to the directory.

The alias is used to construct the access URL for the directory, such as http://<alias>.awsapps.com. By default, AWS CloudFormation does not create an alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#create_alias DirectoryserviceMicrosoftAd#create_alias}

---

##### `Edition`<sup>Optional</sup> <a name="Edition" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.edition"></a>

```csharp
public string Edition { get; set; }
```

- *Type:* string

AWS Managed Microsoft AD is available in two editions: Standard and Enterprise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#edition DirectoryserviceMicrosoftAd#edition}

---

##### `EnableSso`<sup>Optional</sup> <a name="EnableSso" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.enableSso"></a>

```csharp
public bool|IResolvable EnableSso { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to enable single sign-on for a Microsoft Active Directory in AWS.

Single sign-on allows users in your directory to access certain AWS services from a computer joined to the directory without having to enter their credentials separately. If you don't specify a value, AWS CloudFormation disables single sign-on by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#enable_sso DirectoryserviceMicrosoftAd#enable_sso}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

The password for the default administrative user named Admin.

If you need to change the password for the administrator account, see the ResetUserPassword API call in the AWS Directory Service API Reference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#password DirectoryserviceMicrosoftAd#password}

---

##### `ShortName`<sup>Optional</sup> <a name="ShortName" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.shortName"></a>

```csharp
public string ShortName { get; set; }
```

- *Type:* string

The NetBIOS name for your domain, such as CORP.

If you don't specify a NetBIOS name, it will default to the first part of your directory DNS. For example, CORP for the directory DNS corp.example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#short_name DirectoryserviceMicrosoftAd#short_name}

---

### DirectoryserviceMicrosoftAdVpcSettings <a name="DirectoryserviceMicrosoftAdVpcSettings" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DirectoryserviceMicrosoftAdVpcSettings {
    string[] SubnetIds,
    string VpcId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | The identifiers of the subnets for the directory servers. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings.property.vpcId">VpcId</a></code> | <code>string</code> | The identifier of the VPC in which to create the directory. |

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

The identifiers of the subnets for the directory servers.

The two subnets must be in different Availability Zones. AWS Directory Service specifies a directory server and a DNS server in each of these subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#subnet_ids DirectoryserviceMicrosoftAd#subnet_ids}

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

The identifier of the VPC in which to create the directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#vpc_id DirectoryserviceMicrosoftAd#vpc_id}

---

## Classes <a name="Classes" id="Classes"></a>

### DirectoryserviceMicrosoftAdVpcSettingsOutputReference <a name="DirectoryserviceMicrosoftAdVpcSettingsOutputReference" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DirectoryserviceMicrosoftAdVpcSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings">DirectoryserviceMicrosoftAdVpcSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DirectoryserviceMicrosoftAdVpcSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings">DirectoryserviceMicrosoftAdVpcSettings</a>

---



