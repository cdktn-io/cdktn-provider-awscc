# `panoramaPackageVersion` Submodule <a name="`panoramaPackageVersion` Submodule" id="@cdktn/provider-awscc.panoramaPackageVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PanoramaPackageVersion <a name="PanoramaPackageVersion" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_package_version awscc_panorama_package_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PanoramaPackageVersion(Construct Scope, string Id, PanoramaPackageVersionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig">PanoramaPackageVersionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig">PanoramaPackageVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.resetMarkLatest">ResetMarkLatest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.resetOwnerAccount">ResetOwnerAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.resetUpdatedLatestPatchVersion">ResetUpdatedLatestPatchVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetMarkLatest` <a name="ResetMarkLatest" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.resetMarkLatest"></a>

```csharp
private void ResetMarkLatest()
```

##### `ResetOwnerAccount` <a name="ResetOwnerAccount" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.resetOwnerAccount"></a>

```csharp
private void ResetOwnerAccount()
```

##### `ResetUpdatedLatestPatchVersion` <a name="ResetUpdatedLatestPatchVersion" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.resetUpdatedLatestPatchVersion"></a>

```csharp
private void ResetUpdatedLatestPatchVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PanoramaPackageVersion resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

PanoramaPackageVersion.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

PanoramaPackageVersion.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

PanoramaPackageVersion.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

PanoramaPackageVersion.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a PanoramaPackageVersion resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PanoramaPackageVersion to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PanoramaPackageVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_package_version#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the PanoramaPackageVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.isLatestPatch">IsLatestPatch</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.packageArn">PackageArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.packageName">PackageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.registeredTime">RegisteredTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.statusDescription">StatusDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.markLatestInput">MarkLatestInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.ownerAccountInput">OwnerAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.packageIdInput">PackageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.packageVersionInput">PackageVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.patchVersionInput">PatchVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.updatedLatestPatchVersionInput">UpdatedLatestPatchVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.markLatest">MarkLatest</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.ownerAccount">OwnerAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.packageId">PackageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.packageVersion">PackageVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.patchVersion">PatchVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.updatedLatestPatchVersion">UpdatedLatestPatchVersion</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsLatestPatch`<sup>Required</sup> <a name="IsLatestPatch" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.isLatestPatch"></a>

```csharp
public IResolvable IsLatestPatch { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `PackageArn`<sup>Required</sup> <a name="PackageArn" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.packageArn"></a>

```csharp
public string PackageArn { get; }
```

- *Type:* string

---

##### `PackageName`<sup>Required</sup> <a name="PackageName" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.packageName"></a>

```csharp
public string PackageName { get; }
```

- *Type:* string

---

##### `RegisteredTime`<sup>Required</sup> <a name="RegisteredTime" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.registeredTime"></a>

```csharp
public double RegisteredTime { get; }
```

- *Type:* double

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusDescription`<sup>Required</sup> <a name="StatusDescription" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.statusDescription"></a>

```csharp
public string StatusDescription { get; }
```

- *Type:* string

---

##### `MarkLatestInput`<sup>Optional</sup> <a name="MarkLatestInput" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.markLatestInput"></a>

```csharp
public bool|IResolvable MarkLatestInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `OwnerAccountInput`<sup>Optional</sup> <a name="OwnerAccountInput" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.ownerAccountInput"></a>

```csharp
public string OwnerAccountInput { get; }
```

- *Type:* string

---

##### `PackageIdInput`<sup>Optional</sup> <a name="PackageIdInput" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.packageIdInput"></a>

```csharp
public string PackageIdInput { get; }
```

- *Type:* string

---

##### `PackageVersionInput`<sup>Optional</sup> <a name="PackageVersionInput" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.packageVersionInput"></a>

```csharp
public string PackageVersionInput { get; }
```

- *Type:* string

---

##### `PatchVersionInput`<sup>Optional</sup> <a name="PatchVersionInput" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.patchVersionInput"></a>

```csharp
public string PatchVersionInput { get; }
```

- *Type:* string

---

##### `UpdatedLatestPatchVersionInput`<sup>Optional</sup> <a name="UpdatedLatestPatchVersionInput" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.updatedLatestPatchVersionInput"></a>

```csharp
public string UpdatedLatestPatchVersionInput { get; }
```

- *Type:* string

---

##### `MarkLatest`<sup>Required</sup> <a name="MarkLatest" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.markLatest"></a>

```csharp
public bool|IResolvable MarkLatest { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `OwnerAccount`<sup>Required</sup> <a name="OwnerAccount" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.ownerAccount"></a>

```csharp
public string OwnerAccount { get; }
```

- *Type:* string

---

##### `PackageId`<sup>Required</sup> <a name="PackageId" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.packageId"></a>

```csharp
public string PackageId { get; }
```

- *Type:* string

---

##### `PackageVersion`<sup>Required</sup> <a name="PackageVersion" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.packageVersion"></a>

```csharp
public string PackageVersion { get; }
```

- *Type:* string

---

##### `PatchVersion`<sup>Required</sup> <a name="PatchVersion" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.patchVersion"></a>

```csharp
public string PatchVersion { get; }
```

- *Type:* string

---

##### `UpdatedLatestPatchVersion`<sup>Required</sup> <a name="UpdatedLatestPatchVersion" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.updatedLatestPatchVersion"></a>

```csharp
public string UpdatedLatestPatchVersion { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PanoramaPackageVersionConfig <a name="PanoramaPackageVersionConfig" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PanoramaPackageVersionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string PackageId,
    string PackageVersion,
    string PatchVersion,
    bool|IResolvable MarkLatest = null,
    string OwnerAccount = null,
    string UpdatedLatestPatchVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.packageId">PackageId</a></code> | <code>string</code> | A package ID. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.packageVersion">PackageVersion</a></code> | <code>string</code> | A package version. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.patchVersion">PatchVersion</a></code> | <code>string</code> | A patch version. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.markLatest">MarkLatest</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to mark the new version as the latest version. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.ownerAccount">OwnerAccount</a></code> | <code>string</code> | An owner account. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.updatedLatestPatchVersion">UpdatedLatestPatchVersion</a></code> | <code>string</code> | If the version was marked latest, the new version to maker as latest. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `PackageId`<sup>Required</sup> <a name="PackageId" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.packageId"></a>

```csharp
public string PackageId { get; set; }
```

- *Type:* string

A package ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_package_version#package_id PanoramaPackageVersion#package_id}

---

##### `PackageVersion`<sup>Required</sup> <a name="PackageVersion" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.packageVersion"></a>

```csharp
public string PackageVersion { get; set; }
```

- *Type:* string

A package version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_package_version#package_version PanoramaPackageVersion#package_version}

---

##### `PatchVersion`<sup>Required</sup> <a name="PatchVersion" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.patchVersion"></a>

```csharp
public string PatchVersion { get; set; }
```

- *Type:* string

A patch version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_package_version#patch_version PanoramaPackageVersion#patch_version}

---

##### `MarkLatest`<sup>Optional</sup> <a name="MarkLatest" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.markLatest"></a>

```csharp
public bool|IResolvable MarkLatest { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to mark the new version as the latest version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_package_version#mark_latest PanoramaPackageVersion#mark_latest}

---

##### `OwnerAccount`<sup>Optional</sup> <a name="OwnerAccount" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.ownerAccount"></a>

```csharp
public string OwnerAccount { get; set; }
```

- *Type:* string

An owner account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_package_version#owner_account PanoramaPackageVersion#owner_account}

---

##### `UpdatedLatestPatchVersion`<sup>Optional</sup> <a name="UpdatedLatestPatchVersion" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.updatedLatestPatchVersion"></a>

```csharp
public string UpdatedLatestPatchVersion { get; set; }
```

- *Type:* string

If the version was marked latest, the new version to maker as latest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_package_version#updated_latest_patch_version PanoramaPackageVersion#updated_latest_patch_version}

---



