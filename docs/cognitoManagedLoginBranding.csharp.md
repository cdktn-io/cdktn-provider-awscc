# `cognitoManagedLoginBranding` Submodule <a name="`cognitoManagedLoginBranding` Submodule" id="@cdktn/provider-awscc.cognitoManagedLoginBranding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoManagedLoginBranding <a name="CognitoManagedLoginBranding" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_managed_login_branding awscc_cognito_managed_login_branding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoManagedLoginBranding(Construct Scope, string Id, CognitoManagedLoginBrandingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig">CognitoManagedLoginBrandingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig">CognitoManagedLoginBrandingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.putAssets">PutAssets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.resetAssets">ResetAssets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.resetReturnMergedResources">ResetReturnMergedResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.resetSettings">ResetSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.resetUseCognitoProvidedValues">ResetUseCognitoProvidedValues</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAssets` <a name="PutAssets" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.putAssets"></a>

```csharp
private void PutAssets(IResolvable|CognitoManagedLoginBrandingAssets[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.putAssets.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets">CognitoManagedLoginBrandingAssets</a>[]

---

##### `ResetAssets` <a name="ResetAssets" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.resetAssets"></a>

```csharp
private void ResetAssets()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetReturnMergedResources` <a name="ResetReturnMergedResources" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.resetReturnMergedResources"></a>

```csharp
private void ResetReturnMergedResources()
```

##### `ResetSettings` <a name="ResetSettings" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.resetSettings"></a>

```csharp
private void ResetSettings()
```

##### `ResetUseCognitoProvidedValues` <a name="ResetUseCognitoProvidedValues" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.resetUseCognitoProvidedValues"></a>

```csharp
private void ResetUseCognitoProvidedValues()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CognitoManagedLoginBranding resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CognitoManagedLoginBranding.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CognitoManagedLoginBranding.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CognitoManagedLoginBranding.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CognitoManagedLoginBranding.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CognitoManagedLoginBranding resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CognitoManagedLoginBranding to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CognitoManagedLoginBranding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_managed_login_branding#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CognitoManagedLoginBranding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.assets">Assets</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList">CognitoManagedLoginBrandingAssetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.managedLoginBrandingId">ManagedLoginBrandingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.assetsInput">AssetsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets">CognitoManagedLoginBrandingAssets</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.returnMergedResourcesInput">ReturnMergedResourcesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.settingsInput">SettingsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.useCognitoProvidedValuesInput">UseCognitoProvidedValuesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.userPoolIdInput">UserPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.returnMergedResources">ReturnMergedResources</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.settings">Settings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.useCognitoProvidedValues">UseCognitoProvidedValues</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.userPoolId">UserPoolId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Assets`<sup>Required</sup> <a name="Assets" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.assets"></a>

```csharp
public CognitoManagedLoginBrandingAssetsList Assets { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList">CognitoManagedLoginBrandingAssetsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ManagedLoginBrandingId`<sup>Required</sup> <a name="ManagedLoginBrandingId" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.managedLoginBrandingId"></a>

```csharp
public string ManagedLoginBrandingId { get; }
```

- *Type:* string

---

##### `AssetsInput`<sup>Optional</sup> <a name="AssetsInput" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.assetsInput"></a>

```csharp
public IResolvable|CognitoManagedLoginBrandingAssets[] AssetsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets">CognitoManagedLoginBrandingAssets</a>[]

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ReturnMergedResourcesInput`<sup>Optional</sup> <a name="ReturnMergedResourcesInput" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.returnMergedResourcesInput"></a>

```csharp
public bool|IResolvable ReturnMergedResourcesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.settingsInput"></a>

```csharp
public string SettingsInput { get; }
```

- *Type:* string

---

##### `UseCognitoProvidedValuesInput`<sup>Optional</sup> <a name="UseCognitoProvidedValuesInput" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.useCognitoProvidedValuesInput"></a>

```csharp
public bool|IResolvable UseCognitoProvidedValuesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UserPoolIdInput`<sup>Optional</sup> <a name="UserPoolIdInput" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.userPoolIdInput"></a>

```csharp
public string UserPoolIdInput { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ReturnMergedResources`<sup>Required</sup> <a name="ReturnMergedResources" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.returnMergedResources"></a>

```csharp
public bool|IResolvable ReturnMergedResources { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.settings"></a>

```csharp
public string Settings { get; }
```

- *Type:* string

---

##### `UseCognitoProvidedValues`<sup>Required</sup> <a name="UseCognitoProvidedValues" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.useCognitoProvidedValues"></a>

```csharp
public bool|IResolvable UseCognitoProvidedValues { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.userPoolId"></a>

```csharp
public string UserPoolId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoManagedLoginBrandingAssets <a name="CognitoManagedLoginBrandingAssets" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoManagedLoginBrandingAssets {
    string Bytes = null,
    string Category = null,
    string ColorMode = null,
    string Extension = null,
    string ResourceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets.property.bytes">Bytes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_managed_login_branding#bytes CognitoManagedLoginBranding#bytes}. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets.property.category">Category</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_managed_login_branding#category CognitoManagedLoginBranding#category}. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets.property.colorMode">ColorMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_managed_login_branding#color_mode CognitoManagedLoginBranding#color_mode}. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets.property.extension">Extension</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_managed_login_branding#extension CognitoManagedLoginBranding#extension}. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets.property.resourceId">ResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_managed_login_branding#resource_id CognitoManagedLoginBranding#resource_id}. |

---

##### `Bytes`<sup>Optional</sup> <a name="Bytes" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets.property.bytes"></a>

```csharp
public string Bytes { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_managed_login_branding#bytes CognitoManagedLoginBranding#bytes}.

---

##### `Category`<sup>Optional</sup> <a name="Category" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets.property.category"></a>

```csharp
public string Category { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_managed_login_branding#category CognitoManagedLoginBranding#category}.

---

##### `ColorMode`<sup>Optional</sup> <a name="ColorMode" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets.property.colorMode"></a>

```csharp
public string ColorMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_managed_login_branding#color_mode CognitoManagedLoginBranding#color_mode}.

---

##### `Extension`<sup>Optional</sup> <a name="Extension" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets.property.extension"></a>

```csharp
public string Extension { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_managed_login_branding#extension CognitoManagedLoginBranding#extension}.

---

##### `ResourceId`<sup>Optional</sup> <a name="ResourceId" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets.property.resourceId"></a>

```csharp
public string ResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_managed_login_branding#resource_id CognitoManagedLoginBranding#resource_id}.

---

### CognitoManagedLoginBrandingConfig <a name="CognitoManagedLoginBrandingConfig" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoManagedLoginBrandingConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string UserPoolId,
    IResolvable|CognitoManagedLoginBrandingAssets[] Assets = null,
    string ClientId = null,
    bool|IResolvable ReturnMergedResources = null,
    string Settings = null,
    bool|IResolvable UseCognitoProvidedValues = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.userPoolId">UserPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_managed_login_branding#user_pool_id CognitoManagedLoginBranding#user_pool_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.assets">Assets</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets">CognitoManagedLoginBrandingAssets</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_managed_login_branding#assets CognitoManagedLoginBranding#assets}. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_managed_login_branding#client_id CognitoManagedLoginBranding#client_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.returnMergedResources">ReturnMergedResources</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_managed_login_branding#return_merged_resources CognitoManagedLoginBranding#return_merged_resources}. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.settings">Settings</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_managed_login_branding#settings CognitoManagedLoginBranding#settings}. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.useCognitoProvidedValues">UseCognitoProvidedValues</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_managed_login_branding#use_cognito_provided_values CognitoManagedLoginBranding#use_cognito_provided_values}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.userPoolId"></a>

```csharp
public string UserPoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_managed_login_branding#user_pool_id CognitoManagedLoginBranding#user_pool_id}.

---

##### `Assets`<sup>Optional</sup> <a name="Assets" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.assets"></a>

```csharp
public IResolvable|CognitoManagedLoginBrandingAssets[] Assets { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets">CognitoManagedLoginBrandingAssets</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_managed_login_branding#assets CognitoManagedLoginBranding#assets}.

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_managed_login_branding#client_id CognitoManagedLoginBranding#client_id}.

---

##### `ReturnMergedResources`<sup>Optional</sup> <a name="ReturnMergedResources" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.returnMergedResources"></a>

```csharp
public bool|IResolvable ReturnMergedResources { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_managed_login_branding#return_merged_resources CognitoManagedLoginBranding#return_merged_resources}.

---

##### `Settings`<sup>Optional</sup> <a name="Settings" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.settings"></a>

```csharp
public string Settings { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_managed_login_branding#settings CognitoManagedLoginBranding#settings}.

---

##### `UseCognitoProvidedValues`<sup>Optional</sup> <a name="UseCognitoProvidedValues" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.useCognitoProvidedValues"></a>

```csharp
public bool|IResolvable UseCognitoProvidedValues { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_managed_login_branding#use_cognito_provided_values CognitoManagedLoginBranding#use_cognito_provided_values}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitoManagedLoginBrandingAssetsList <a name="CognitoManagedLoginBrandingAssetsList" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoManagedLoginBrandingAssetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.get"></a>

```csharp
private CognitoManagedLoginBrandingAssetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets">CognitoManagedLoginBrandingAssets</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.property.internalValue"></a>

```csharp
public IResolvable|CognitoManagedLoginBrandingAssets[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets">CognitoManagedLoginBrandingAssets</a>[]

---


### CognitoManagedLoginBrandingAssetsOutputReference <a name="CognitoManagedLoginBrandingAssetsOutputReference" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoManagedLoginBrandingAssetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.resetBytes">ResetBytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.resetCategory">ResetCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.resetColorMode">ResetColorMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.resetExtension">ResetExtension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.resetResourceId">ResetResourceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBytes` <a name="ResetBytes" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.resetBytes"></a>

```csharp
private void ResetBytes()
```

##### `ResetCategory` <a name="ResetCategory" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.resetCategory"></a>

```csharp
private void ResetCategory()
```

##### `ResetColorMode` <a name="ResetColorMode" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.resetColorMode"></a>

```csharp
private void ResetColorMode()
```

##### `ResetExtension` <a name="ResetExtension" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.resetExtension"></a>

```csharp
private void ResetExtension()
```

##### `ResetResourceId` <a name="ResetResourceId" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.resetResourceId"></a>

```csharp
private void ResetResourceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.bytesInput">BytesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.categoryInput">CategoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.colorModeInput">ColorModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.extensionInput">ExtensionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.resourceIdInput">ResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.bytes">Bytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.colorMode">ColorMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.extension">Extension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets">CognitoManagedLoginBrandingAssets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BytesInput`<sup>Optional</sup> <a name="BytesInput" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.bytesInput"></a>

```csharp
public string BytesInput { get; }
```

- *Type:* string

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.categoryInput"></a>

```csharp
public string CategoryInput { get; }
```

- *Type:* string

---

##### `ColorModeInput`<sup>Optional</sup> <a name="ColorModeInput" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.colorModeInput"></a>

```csharp
public string ColorModeInput { get; }
```

- *Type:* string

---

##### `ExtensionInput`<sup>Optional</sup> <a name="ExtensionInput" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.extensionInput"></a>

```csharp
public string ExtensionInput { get; }
```

- *Type:* string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.resourceIdInput"></a>

```csharp
public string ResourceIdInput { get; }
```

- *Type:* string

---

##### `Bytes`<sup>Required</sup> <a name="Bytes" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.bytes"></a>

```csharp
public string Bytes { get; }
```

- *Type:* string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `ColorMode`<sup>Required</sup> <a name="ColorMode" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.colorMode"></a>

```csharp
public string ColorMode { get; }
```

- *Type:* string

---

##### `Extension`<sup>Required</sup> <a name="Extension" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.extension"></a>

```csharp
public string Extension { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CognitoManagedLoginBrandingAssets InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets">CognitoManagedLoginBrandingAssets</a>

---



