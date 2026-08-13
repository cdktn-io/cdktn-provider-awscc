# `finspaceEnvironment` Submodule <a name="`finspaceEnvironment` Submodule" id="@cdktn/provider-awscc.finspaceEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FinspaceEnvironment <a name="FinspaceEnvironment" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/finspace_environment awscc_finspace_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FinspaceEnvironment(Construct Scope, string Id, FinspaceEnvironmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig">FinspaceEnvironmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig">FinspaceEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.putFederationParameters">PutFederationParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.putSuperuserParameters">PutSuperuserParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetDataBundles">ResetDataBundles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetFederationMode">ResetFederationMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetFederationParameters">ResetFederationParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetSuperuserParameters">ResetSuperuserParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFederationParameters` <a name="PutFederationParameters" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.putFederationParameters"></a>

```csharp
private void PutFederationParameters(FinspaceEnvironmentFederationParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.putFederationParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters">FinspaceEnvironmentFederationParameters</a>

---

##### `PutSuperuserParameters` <a name="PutSuperuserParameters" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.putSuperuserParameters"></a>

```csharp
private void PutSuperuserParameters(FinspaceEnvironmentSuperuserParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.putSuperuserParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters">FinspaceEnvironmentSuperuserParameters</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.putTags"></a>

```csharp
private void PutTags(IResolvable|FinspaceEnvironmentTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags">FinspaceEnvironmentTags</a>[]

---

##### `ResetDataBundles` <a name="ResetDataBundles" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetDataBundles"></a>

```csharp
private void ResetDataBundles()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFederationMode` <a name="ResetFederationMode" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetFederationMode"></a>

```csharp
private void ResetFederationMode()
```

##### `ResetFederationParameters` <a name="ResetFederationParameters" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetFederationParameters"></a>

```csharp
private void ResetFederationParameters()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetSuperuserParameters` <a name="ResetSuperuserParameters" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetSuperuserParameters"></a>

```csharp
private void ResetSuperuserParameters()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a FinspaceEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

FinspaceEnvironment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

FinspaceEnvironment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

FinspaceEnvironment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

FinspaceEnvironment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a FinspaceEnvironment resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FinspaceEnvironment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FinspaceEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/finspace_environment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the FinspaceEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.dedicatedServiceAccountId">DedicatedServiceAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.environmentArn">EnvironmentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.environmentId">EnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.environmentUrl">EnvironmentUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.federationParameters">FederationParameters</a></code> | <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference">FinspaceEnvironmentFederationParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.sageMakerStudioDomainUrl">SageMakerStudioDomainUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.superuserParameters">SuperuserParameters</a></code> | <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference">FinspaceEnvironmentSuperuserParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList">FinspaceEnvironmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.dataBundlesInput">DataBundlesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.federationModeInput">FederationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.federationParametersInput">FederationParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters">FinspaceEnvironmentFederationParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.superuserParametersInput">SuperuserParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters">FinspaceEnvironmentSuperuserParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags">FinspaceEnvironmentTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.dataBundles">DataBundles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.federationMode">FederationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; }
```

- *Type:* string

---

##### `DedicatedServiceAccountId`<sup>Required</sup> <a name="DedicatedServiceAccountId" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.dedicatedServiceAccountId"></a>

```csharp
public string DedicatedServiceAccountId { get; }
```

- *Type:* string

---

##### `EnvironmentArn`<sup>Required</sup> <a name="EnvironmentArn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.environmentArn"></a>

```csharp
public string EnvironmentArn { get; }
```

- *Type:* string

---

##### `EnvironmentId`<sup>Required</sup> <a name="EnvironmentId" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.environmentId"></a>

```csharp
public string EnvironmentId { get; }
```

- *Type:* string

---

##### `EnvironmentUrl`<sup>Required</sup> <a name="EnvironmentUrl" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.environmentUrl"></a>

```csharp
public string EnvironmentUrl { get; }
```

- *Type:* string

---

##### `FederationParameters`<sup>Required</sup> <a name="FederationParameters" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.federationParameters"></a>

```csharp
public FinspaceEnvironmentFederationParametersOutputReference FederationParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference">FinspaceEnvironmentFederationParametersOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SageMakerStudioDomainUrl`<sup>Required</sup> <a name="SageMakerStudioDomainUrl" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.sageMakerStudioDomainUrl"></a>

```csharp
public string SageMakerStudioDomainUrl { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `SuperuserParameters`<sup>Required</sup> <a name="SuperuserParameters" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.superuserParameters"></a>

```csharp
public FinspaceEnvironmentSuperuserParametersOutputReference SuperuserParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference">FinspaceEnvironmentSuperuserParametersOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.tags"></a>

```csharp
public FinspaceEnvironmentTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList">FinspaceEnvironmentTagsList</a>

---

##### `DataBundlesInput`<sup>Optional</sup> <a name="DataBundlesInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.dataBundlesInput"></a>

```csharp
public string[] DataBundlesInput { get; }
```

- *Type:* string[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FederationModeInput`<sup>Optional</sup> <a name="FederationModeInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.federationModeInput"></a>

```csharp
public string FederationModeInput { get; }
```

- *Type:* string

---

##### `FederationParametersInput`<sup>Optional</sup> <a name="FederationParametersInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.federationParametersInput"></a>

```csharp
public IResolvable|FinspaceEnvironmentFederationParameters FederationParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters">FinspaceEnvironmentFederationParameters</a>

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SuperuserParametersInput`<sup>Optional</sup> <a name="SuperuserParametersInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.superuserParametersInput"></a>

```csharp
public IResolvable|FinspaceEnvironmentSuperuserParameters SuperuserParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters">FinspaceEnvironmentSuperuserParameters</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.tagsInput"></a>

```csharp
public IResolvable|FinspaceEnvironmentTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags">FinspaceEnvironmentTags</a>[]

---

##### `DataBundles`<sup>Required</sup> <a name="DataBundles" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.dataBundles"></a>

```csharp
public string[] DataBundles { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FederationMode`<sup>Required</sup> <a name="FederationMode" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.federationMode"></a>

```csharp
public string FederationMode { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FinspaceEnvironmentConfig <a name="FinspaceEnvironmentConfig" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FinspaceEnvironmentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string[] DataBundles = null,
    string Description = null,
    string FederationMode = null,
    FinspaceEnvironmentFederationParameters FederationParameters = null,
    string KmsKeyId = null,
    FinspaceEnvironmentSuperuserParameters SuperuserParameters = null,
    IResolvable|FinspaceEnvironmentTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.name">Name</a></code> | <code>string</code> | Name of the Environment. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.dataBundles">DataBundles</a></code> | <code>string[]</code> | ARNs of FinSpace Data Bundles to install. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.description">Description</a></code> | <code>string</code> | Description of the Environment. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.federationMode">FederationMode</a></code> | <code>string</code> | Federation mode used with the Environment. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.federationParameters">FederationParameters</a></code> | <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters">FinspaceEnvironmentFederationParameters</a></code> | Additional parameters to identify Federation mode. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | KMS key used to encrypt customer data within FinSpace Environment infrastructure. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.superuserParameters">SuperuserParameters</a></code> | <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters">FinspaceEnvironmentSuperuserParameters</a></code> | Parameters of the first Superuser for the FinSpace Environment. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags">FinspaceEnvironmentTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/finspace_environment#name FinspaceEnvironment#name}

---

##### `DataBundles`<sup>Optional</sup> <a name="DataBundles" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.dataBundles"></a>

```csharp
public string[] DataBundles { get; set; }
```

- *Type:* string[]

ARNs of FinSpace Data Bundles to install.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/finspace_environment#data_bundles FinspaceEnvironment#data_bundles}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/finspace_environment#description FinspaceEnvironment#description}

---

##### `FederationMode`<sup>Optional</sup> <a name="FederationMode" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.federationMode"></a>

```csharp
public string FederationMode { get; set; }
```

- *Type:* string

Federation mode used with the Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/finspace_environment#federation_mode FinspaceEnvironment#federation_mode}

---

##### `FederationParameters`<sup>Optional</sup> <a name="FederationParameters" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.federationParameters"></a>

```csharp
public FinspaceEnvironmentFederationParameters FederationParameters { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters">FinspaceEnvironmentFederationParameters</a>

Additional parameters to identify Federation mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/finspace_environment#federation_parameters FinspaceEnvironment#federation_parameters}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

KMS key used to encrypt customer data within FinSpace Environment infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/finspace_environment#kms_key_id FinspaceEnvironment#kms_key_id}

---

##### `SuperuserParameters`<sup>Optional</sup> <a name="SuperuserParameters" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.superuserParameters"></a>

```csharp
public FinspaceEnvironmentSuperuserParameters SuperuserParameters { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters">FinspaceEnvironmentSuperuserParameters</a>

Parameters of the first Superuser for the FinSpace Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/finspace_environment#superuser_parameters FinspaceEnvironment#superuser_parameters}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.tags"></a>

```csharp
public IResolvable|FinspaceEnvironmentTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags">FinspaceEnvironmentTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/finspace_environment#tags FinspaceEnvironment#tags}

---

### FinspaceEnvironmentFederationParameters <a name="FinspaceEnvironmentFederationParameters" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FinspaceEnvironmentFederationParameters {
    string ApplicationCallBackUrl = null,
    IResolvable|FinspaceEnvironmentFederationParametersAttributeMap[] AttributeMap = null,
    string FederationProviderName = null,
    string FederationUrn = null,
    string SamlMetadataDocument = null,
    string SamlMetadataUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.property.applicationCallBackUrl">ApplicationCallBackUrl</a></code> | <code>string</code> | SAML metadata URL to link with the Environment. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.property.attributeMap">AttributeMap</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap">FinspaceEnvironmentFederationParametersAttributeMap</a>[]</code> | Attribute map for SAML configuration. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.property.federationProviderName">FederationProviderName</a></code> | <code>string</code> | Federation provider name to link with the Environment. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.property.federationUrn">FederationUrn</a></code> | <code>string</code> | SAML metadata URL to link with the Environment. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.property.samlMetadataDocument">SamlMetadataDocument</a></code> | <code>string</code> | SAML metadata document to link the federation provider to the Environment. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.property.samlMetadataUrl">SamlMetadataUrl</a></code> | <code>string</code> | SAML metadata URL to link with the Environment. |

---

##### `ApplicationCallBackUrl`<sup>Optional</sup> <a name="ApplicationCallBackUrl" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.property.applicationCallBackUrl"></a>

```csharp
public string ApplicationCallBackUrl { get; set; }
```

- *Type:* string

SAML metadata URL to link with the Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/finspace_environment#application_call_back_url FinspaceEnvironment#application_call_back_url}

---

##### `AttributeMap`<sup>Optional</sup> <a name="AttributeMap" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.property.attributeMap"></a>

```csharp
public IResolvable|FinspaceEnvironmentFederationParametersAttributeMap[] AttributeMap { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap">FinspaceEnvironmentFederationParametersAttributeMap</a>[]

Attribute map for SAML configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/finspace_environment#attribute_map FinspaceEnvironment#attribute_map}

---

##### `FederationProviderName`<sup>Optional</sup> <a name="FederationProviderName" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.property.federationProviderName"></a>

```csharp
public string FederationProviderName { get; set; }
```

- *Type:* string

Federation provider name to link with the Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/finspace_environment#federation_provider_name FinspaceEnvironment#federation_provider_name}

---

##### `FederationUrn`<sup>Optional</sup> <a name="FederationUrn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.property.federationUrn"></a>

```csharp
public string FederationUrn { get; set; }
```

- *Type:* string

SAML metadata URL to link with the Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/finspace_environment#federation_urn FinspaceEnvironment#federation_urn}

---

##### `SamlMetadataDocument`<sup>Optional</sup> <a name="SamlMetadataDocument" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.property.samlMetadataDocument"></a>

```csharp
public string SamlMetadataDocument { get; set; }
```

- *Type:* string

SAML metadata document to link the federation provider to the Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/finspace_environment#saml_metadata_document FinspaceEnvironment#saml_metadata_document}

---

##### `SamlMetadataUrl`<sup>Optional</sup> <a name="SamlMetadataUrl" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.property.samlMetadataUrl"></a>

```csharp
public string SamlMetadataUrl { get; set; }
```

- *Type:* string

SAML metadata URL to link with the Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/finspace_environment#saml_metadata_url FinspaceEnvironment#saml_metadata_url}

---

### FinspaceEnvironmentFederationParametersAttributeMap <a name="FinspaceEnvironmentFederationParametersAttributeMap" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FinspaceEnvironmentFederationParametersAttributeMap {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/finspace_environment#key FinspaceEnvironment#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/finspace_environment#value FinspaceEnvironment#value}

---

### FinspaceEnvironmentSuperuserParameters <a name="FinspaceEnvironmentSuperuserParameters" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FinspaceEnvironmentSuperuserParameters {
    string EmailAddress = null,
    string FirstName = null,
    string LastName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters.property.emailAddress">EmailAddress</a></code> | <code>string</code> | Email address. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters.property.firstName">FirstName</a></code> | <code>string</code> | First name. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters.property.lastName">LastName</a></code> | <code>string</code> | Last name. |

---

##### `EmailAddress`<sup>Optional</sup> <a name="EmailAddress" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters.property.emailAddress"></a>

```csharp
public string EmailAddress { get; set; }
```

- *Type:* string

Email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/finspace_environment#email_address FinspaceEnvironment#email_address}

---

##### `FirstName`<sup>Optional</sup> <a name="FirstName" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters.property.firstName"></a>

```csharp
public string FirstName { get; set; }
```

- *Type:* string

First name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/finspace_environment#first_name FinspaceEnvironment#first_name}

---

##### `LastName`<sup>Optional</sup> <a name="LastName" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters.property.lastName"></a>

```csharp
public string LastName { get; set; }
```

- *Type:* string

Last name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/finspace_environment#last_name FinspaceEnvironment#last_name}

---

### FinspaceEnvironmentTags <a name="FinspaceEnvironmentTags" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FinspaceEnvironmentTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/finspace_environment#key FinspaceEnvironment#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/finspace_environment#value FinspaceEnvironment#value}

---

## Classes <a name="Classes" id="Classes"></a>

### FinspaceEnvironmentFederationParametersAttributeMapList <a name="FinspaceEnvironmentFederationParametersAttributeMapList" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FinspaceEnvironmentFederationParametersAttributeMapList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.get"></a>

```csharp
private FinspaceEnvironmentFederationParametersAttributeMapOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap">FinspaceEnvironmentFederationParametersAttributeMap</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.property.internalValue"></a>

```csharp
public IResolvable|FinspaceEnvironmentFederationParametersAttributeMap[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap">FinspaceEnvironmentFederationParametersAttributeMap</a>[]

---


### FinspaceEnvironmentFederationParametersAttributeMapOutputReference <a name="FinspaceEnvironmentFederationParametersAttributeMapOutputReference" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FinspaceEnvironmentFederationParametersAttributeMapOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap">FinspaceEnvironmentFederationParametersAttributeMap</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FinspaceEnvironmentFederationParametersAttributeMap InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap">FinspaceEnvironmentFederationParametersAttributeMap</a>

---


### FinspaceEnvironmentFederationParametersOutputReference <a name="FinspaceEnvironmentFederationParametersOutputReference" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FinspaceEnvironmentFederationParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.putAttributeMap">PutAttributeMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resetApplicationCallBackUrl">ResetApplicationCallBackUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resetAttributeMap">ResetAttributeMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resetFederationProviderName">ResetFederationProviderName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resetFederationUrn">ResetFederationUrn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resetSamlMetadataDocument">ResetSamlMetadataDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resetSamlMetadataUrl">ResetSamlMetadataUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAttributeMap` <a name="PutAttributeMap" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.putAttributeMap"></a>

```csharp
private void PutAttributeMap(IResolvable|FinspaceEnvironmentFederationParametersAttributeMap[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.putAttributeMap.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap">FinspaceEnvironmentFederationParametersAttributeMap</a>[]

---

##### `ResetApplicationCallBackUrl` <a name="ResetApplicationCallBackUrl" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resetApplicationCallBackUrl"></a>

```csharp
private void ResetApplicationCallBackUrl()
```

##### `ResetAttributeMap` <a name="ResetAttributeMap" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resetAttributeMap"></a>

```csharp
private void ResetAttributeMap()
```

##### `ResetFederationProviderName` <a name="ResetFederationProviderName" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resetFederationProviderName"></a>

```csharp
private void ResetFederationProviderName()
```

##### `ResetFederationUrn` <a name="ResetFederationUrn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resetFederationUrn"></a>

```csharp
private void ResetFederationUrn()
```

##### `ResetSamlMetadataDocument` <a name="ResetSamlMetadataDocument" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resetSamlMetadataDocument"></a>

```csharp
private void ResetSamlMetadataDocument()
```

##### `ResetSamlMetadataUrl` <a name="ResetSamlMetadataUrl" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resetSamlMetadataUrl"></a>

```csharp
private void ResetSamlMetadataUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.attributeMap">AttributeMap</a></code> | <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList">FinspaceEnvironmentFederationParametersAttributeMapList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.applicationCallBackUrlInput">ApplicationCallBackUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.attributeMapInput">AttributeMapInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap">FinspaceEnvironmentFederationParametersAttributeMap</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.federationProviderNameInput">FederationProviderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.federationUrnInput">FederationUrnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.samlMetadataDocumentInput">SamlMetadataDocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.samlMetadataUrlInput">SamlMetadataUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.applicationCallBackUrl">ApplicationCallBackUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.federationProviderName">FederationProviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.federationUrn">FederationUrn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.samlMetadataDocument">SamlMetadataDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.samlMetadataUrl">SamlMetadataUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters">FinspaceEnvironmentFederationParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttributeMap`<sup>Required</sup> <a name="AttributeMap" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.attributeMap"></a>

```csharp
public FinspaceEnvironmentFederationParametersAttributeMapList AttributeMap { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList">FinspaceEnvironmentFederationParametersAttributeMapList</a>

---

##### `ApplicationCallBackUrlInput`<sup>Optional</sup> <a name="ApplicationCallBackUrlInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.applicationCallBackUrlInput"></a>

```csharp
public string ApplicationCallBackUrlInput { get; }
```

- *Type:* string

---

##### `AttributeMapInput`<sup>Optional</sup> <a name="AttributeMapInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.attributeMapInput"></a>

```csharp
public IResolvable|FinspaceEnvironmentFederationParametersAttributeMap[] AttributeMapInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap">FinspaceEnvironmentFederationParametersAttributeMap</a>[]

---

##### `FederationProviderNameInput`<sup>Optional</sup> <a name="FederationProviderNameInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.federationProviderNameInput"></a>

```csharp
public string FederationProviderNameInput { get; }
```

- *Type:* string

---

##### `FederationUrnInput`<sup>Optional</sup> <a name="FederationUrnInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.federationUrnInput"></a>

```csharp
public string FederationUrnInput { get; }
```

- *Type:* string

---

##### `SamlMetadataDocumentInput`<sup>Optional</sup> <a name="SamlMetadataDocumentInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.samlMetadataDocumentInput"></a>

```csharp
public string SamlMetadataDocumentInput { get; }
```

- *Type:* string

---

##### `SamlMetadataUrlInput`<sup>Optional</sup> <a name="SamlMetadataUrlInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.samlMetadataUrlInput"></a>

```csharp
public string SamlMetadataUrlInput { get; }
```

- *Type:* string

---

##### `ApplicationCallBackUrl`<sup>Required</sup> <a name="ApplicationCallBackUrl" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.applicationCallBackUrl"></a>

```csharp
public string ApplicationCallBackUrl { get; }
```

- *Type:* string

---

##### `FederationProviderName`<sup>Required</sup> <a name="FederationProviderName" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.federationProviderName"></a>

```csharp
public string FederationProviderName { get; }
```

- *Type:* string

---

##### `FederationUrn`<sup>Required</sup> <a name="FederationUrn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.federationUrn"></a>

```csharp
public string FederationUrn { get; }
```

- *Type:* string

---

##### `SamlMetadataDocument`<sup>Required</sup> <a name="SamlMetadataDocument" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.samlMetadataDocument"></a>

```csharp
public string SamlMetadataDocument { get; }
```

- *Type:* string

---

##### `SamlMetadataUrl`<sup>Required</sup> <a name="SamlMetadataUrl" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.samlMetadataUrl"></a>

```csharp
public string SamlMetadataUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FinspaceEnvironmentFederationParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters">FinspaceEnvironmentFederationParameters</a>

---


### FinspaceEnvironmentSuperuserParametersOutputReference <a name="FinspaceEnvironmentSuperuserParametersOutputReference" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FinspaceEnvironmentSuperuserParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.resetEmailAddress">ResetEmailAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.resetFirstName">ResetFirstName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.resetLastName">ResetLastName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmailAddress` <a name="ResetEmailAddress" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.resetEmailAddress"></a>

```csharp
private void ResetEmailAddress()
```

##### `ResetFirstName` <a name="ResetFirstName" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.resetFirstName"></a>

```csharp
private void ResetFirstName()
```

##### `ResetLastName` <a name="ResetLastName" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.resetLastName"></a>

```csharp
private void ResetLastName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.emailAddressInput">EmailAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.firstNameInput">FirstNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.lastNameInput">LastNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.emailAddress">EmailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.firstName">FirstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.lastName">LastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters">FinspaceEnvironmentSuperuserParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmailAddressInput`<sup>Optional</sup> <a name="EmailAddressInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.emailAddressInput"></a>

```csharp
public string EmailAddressInput { get; }
```

- *Type:* string

---

##### `FirstNameInput`<sup>Optional</sup> <a name="FirstNameInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.firstNameInput"></a>

```csharp
public string FirstNameInput { get; }
```

- *Type:* string

---

##### `LastNameInput`<sup>Optional</sup> <a name="LastNameInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.lastNameInput"></a>

```csharp
public string LastNameInput { get; }
```

- *Type:* string

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.emailAddress"></a>

```csharp
public string EmailAddress { get; }
```

- *Type:* string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.firstName"></a>

```csharp
public string FirstName { get; }
```

- *Type:* string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.lastName"></a>

```csharp
public string LastName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FinspaceEnvironmentSuperuserParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters">FinspaceEnvironmentSuperuserParameters</a>

---


### FinspaceEnvironmentTagsList <a name="FinspaceEnvironmentTagsList" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FinspaceEnvironmentTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.get"></a>

```csharp
private FinspaceEnvironmentTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags">FinspaceEnvironmentTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.property.internalValue"></a>

```csharp
public IResolvable|FinspaceEnvironmentTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags">FinspaceEnvironmentTags</a>[]

---


### FinspaceEnvironmentTagsOutputReference <a name="FinspaceEnvironmentTagsOutputReference" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FinspaceEnvironmentTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags">FinspaceEnvironmentTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FinspaceEnvironmentTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags">FinspaceEnvironmentTags</a>

---



