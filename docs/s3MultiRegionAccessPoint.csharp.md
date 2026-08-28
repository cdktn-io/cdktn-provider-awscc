# `s3MultiRegionAccessPoint` Submodule <a name="`s3MultiRegionAccessPoint` Submodule" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3MultiRegionAccessPoint <a name="S3MultiRegionAccessPoint" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_multi_region_access_point awscc_s3_multi_region_access_point}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3MultiRegionAccessPoint(Construct Scope, string Id, S3MultiRegionAccessPointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointConfig">S3MultiRegionAccessPointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointConfig">S3MultiRegionAccessPointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.putPublicAccessBlockConfiguration">PutPublicAccessBlockConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.putRegions">PutRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.resetPublicAccessBlockConfiguration">ResetPublicAccessBlockConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPublicAccessBlockConfiguration` <a name="PutPublicAccessBlockConfiguration" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.putPublicAccessBlockConfiguration"></a>

```csharp
private void PutPublicAccessBlockConfiguration(S3MultiRegionAccessPointPublicAccessBlockConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.putPublicAccessBlockConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfiguration">S3MultiRegionAccessPointPublicAccessBlockConfiguration</a>

---

##### `PutRegions` <a name="PutRegions" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.putRegions"></a>

```csharp
private void PutRegions(IResolvable|S3MultiRegionAccessPointRegions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.putRegions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegions">S3MultiRegionAccessPointRegions</a>[]

---

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPublicAccessBlockConfiguration` <a name="ResetPublicAccessBlockConfiguration" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.resetPublicAccessBlockConfiguration"></a>

```csharp
private void ResetPublicAccessBlockConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a S3MultiRegionAccessPoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

S3MultiRegionAccessPoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

S3MultiRegionAccessPoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

S3MultiRegionAccessPoint.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

S3MultiRegionAccessPoint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a S3MultiRegionAccessPoint resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the S3MultiRegionAccessPoint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing S3MultiRegionAccessPoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_multi_region_access_point#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the S3MultiRegionAccessPoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.publicAccessBlockConfiguration">PublicAccessBlockConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference">S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.regions">Regions</a></code> | <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsList">S3MultiRegionAccessPointRegionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.publicAccessBlockConfigurationInput">PublicAccessBlockConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfiguration">S3MultiRegionAccessPointPublicAccessBlockConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.regionsInput">RegionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegions">S3MultiRegionAccessPointRegions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PublicAccessBlockConfiguration`<sup>Required</sup> <a name="PublicAccessBlockConfiguration" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.publicAccessBlockConfiguration"></a>

```csharp
public S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference PublicAccessBlockConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference">S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference</a>

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.regions"></a>

```csharp
public S3MultiRegionAccessPointRegionsList Regions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsList">S3MultiRegionAccessPointRegionsList</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PublicAccessBlockConfigurationInput`<sup>Optional</sup> <a name="PublicAccessBlockConfigurationInput" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.publicAccessBlockConfigurationInput"></a>

```csharp
public IResolvable|S3MultiRegionAccessPointPublicAccessBlockConfiguration PublicAccessBlockConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfiguration">S3MultiRegionAccessPointPublicAccessBlockConfiguration</a>

---

##### `RegionsInput`<sup>Optional</sup> <a name="RegionsInput" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.regionsInput"></a>

```csharp
public IResolvable|S3MultiRegionAccessPointRegions[] RegionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegions">S3MultiRegionAccessPointRegions</a>[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3MultiRegionAccessPointConfig <a name="S3MultiRegionAccessPointConfig" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3MultiRegionAccessPointConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|S3MultiRegionAccessPointRegions[] Regions,
    string Name = null,
    S3MultiRegionAccessPointPublicAccessBlockConfiguration PublicAccessBlockConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointConfig.property.regions">Regions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegions">S3MultiRegionAccessPointRegions</a>[]</code> | The list of buckets that you want to associate this Multi Region Access Point with. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointConfig.property.name">Name</a></code> | <code>string</code> | The name you want to assign to this Multi Region Access Point. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointConfig.property.publicAccessBlockConfiguration">PublicAccessBlockConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfiguration">S3MultiRegionAccessPointPublicAccessBlockConfiguration</a></code> | The PublicAccessBlock configuration that you want to apply to this Multi Region Access Point. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointConfig.property.regions"></a>

```csharp
public IResolvable|S3MultiRegionAccessPointRegions[] Regions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegions">S3MultiRegionAccessPointRegions</a>[]

The list of buckets that you want to associate this Multi Region Access Point with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_multi_region_access_point#regions S3MultiRegionAccessPoint#regions}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name you want to assign to this Multi Region Access Point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_multi_region_access_point#name S3MultiRegionAccessPoint#name}

---

##### `PublicAccessBlockConfiguration`<sup>Optional</sup> <a name="PublicAccessBlockConfiguration" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointConfig.property.publicAccessBlockConfiguration"></a>

```csharp
public S3MultiRegionAccessPointPublicAccessBlockConfiguration PublicAccessBlockConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfiguration">S3MultiRegionAccessPointPublicAccessBlockConfiguration</a>

The PublicAccessBlock configuration that you want to apply to this Multi Region Access Point.

You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status 'The Meaning of Public' in the Amazon Simple Storage Service Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_multi_region_access_point#public_access_block_configuration S3MultiRegionAccessPoint#public_access_block_configuration}

---

### S3MultiRegionAccessPointPublicAccessBlockConfiguration <a name="S3MultiRegionAccessPointPublicAccessBlockConfiguration" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3MultiRegionAccessPointPublicAccessBlockConfiguration {
    bool|IResolvable BlockPublicAcls = null,
    bool|IResolvable BlockPublicPolicy = null,
    bool|IResolvable IgnorePublicAcls = null,
    bool|IResolvable RestrictPublicBuckets = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfiguration.property.blockPublicAcls">BlockPublicAcls</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether Amazon S3 should block public access control lists (ACLs) for buckets in this account. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfiguration.property.blockPublicPolicy">BlockPublicPolicy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether Amazon S3 should block public bucket policies for buckets in this account. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfiguration.property.ignorePublicAcls">IgnorePublicAcls</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether Amazon S3 should ignore public ACLs for buckets in this account. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfiguration.property.restrictPublicBuckets">RestrictPublicBuckets</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether Amazon S3 should restrict public bucket policies for this bucket. |

---

##### `BlockPublicAcls`<sup>Optional</sup> <a name="BlockPublicAcls" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfiguration.property.blockPublicAcls"></a>

```csharp
public bool|IResolvable BlockPublicAcls { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether Amazon S3 should block public access control lists (ACLs) for buckets in this account.

Setting this element to TRUE causes the following behavior:

* PUT Bucket acl and PUT Object acl calls fail if the specified ACL is public.
* PUT Object calls fail if the request includes a public ACL.
  . - PUT Bucket calls fail if the request includes a public ACL.
  Enabling this setting doesn't affect existing policies or ACLs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_multi_region_access_point#block_public_acls S3MultiRegionAccessPoint#block_public_acls}

---

##### `BlockPublicPolicy`<sup>Optional</sup> <a name="BlockPublicPolicy" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfiguration.property.blockPublicPolicy"></a>

```csharp
public bool|IResolvable BlockPublicPolicy { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether Amazon S3 should block public bucket policies for buckets in this account.

Setting this element to TRUE causes Amazon S3 to reject calls to PUT Bucket policy if the specified bucket policy allows public access. Enabling this setting doesn't affect existing bucket policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_multi_region_access_point#block_public_policy S3MultiRegionAccessPoint#block_public_policy}

---

##### `IgnorePublicAcls`<sup>Optional</sup> <a name="IgnorePublicAcls" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfiguration.property.ignorePublicAcls"></a>

```csharp
public bool|IResolvable IgnorePublicAcls { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether Amazon S3 should ignore public ACLs for buckets in this account.

Setting this element to TRUE causes Amazon S3 to ignore all public ACLs on buckets in this account and any objects that they contain. Enabling this setting doesn't affect the persistence of any existing ACLs and doesn't prevent new public ACLs from being set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_multi_region_access_point#ignore_public_acls S3MultiRegionAccessPoint#ignore_public_acls}

---

##### `RestrictPublicBuckets`<sup>Optional</sup> <a name="RestrictPublicBuckets" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfiguration.property.restrictPublicBuckets"></a>

```csharp
public bool|IResolvable RestrictPublicBuckets { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether Amazon S3 should restrict public bucket policies for this bucket.

Setting this element to TRUE restricts access to this bucket to only AWS services and authorized users within this account if the bucket has a public policy.
Enabling this setting doesn't affect previously stored bucket policies, except that public and cross-account access within any public bucket policy, including non-public delegation to specific accounts, is blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_multi_region_access_point#restrict_public_buckets S3MultiRegionAccessPoint#restrict_public_buckets}

---

### S3MultiRegionAccessPointRegions <a name="S3MultiRegionAccessPointRegions" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3MultiRegionAccessPointRegions {
    string Bucket,
    string BucketAccountId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegions.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_multi_region_access_point#bucket S3MultiRegionAccessPoint#bucket}. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegions.property.bucketAccountId">BucketAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_multi_region_access_point#bucket_account_id S3MultiRegionAccessPoint#bucket_account_id}. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegions.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_multi_region_access_point#bucket S3MultiRegionAccessPoint#bucket}.

---

##### `BucketAccountId`<sup>Optional</sup> <a name="BucketAccountId" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegions.property.bucketAccountId"></a>

```csharp
public string BucketAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_multi_region_access_point#bucket_account_id S3MultiRegionAccessPoint#bucket_account_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference <a name="S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.resetBlockPublicAcls">ResetBlockPublicAcls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.resetBlockPublicPolicy">ResetBlockPublicPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.resetIgnorePublicAcls">ResetIgnorePublicAcls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.resetRestrictPublicBuckets">ResetRestrictPublicBuckets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBlockPublicAcls` <a name="ResetBlockPublicAcls" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.resetBlockPublicAcls"></a>

```csharp
private void ResetBlockPublicAcls()
```

##### `ResetBlockPublicPolicy` <a name="ResetBlockPublicPolicy" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.resetBlockPublicPolicy"></a>

```csharp
private void ResetBlockPublicPolicy()
```

##### `ResetIgnorePublicAcls` <a name="ResetIgnorePublicAcls" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.resetIgnorePublicAcls"></a>

```csharp
private void ResetIgnorePublicAcls()
```

##### `ResetRestrictPublicBuckets` <a name="ResetRestrictPublicBuckets" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.resetRestrictPublicBuckets"></a>

```csharp
private void ResetRestrictPublicBuckets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicAclsInput">BlockPublicAclsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicPolicyInput">BlockPublicPolicyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.property.ignorePublicAclsInput">IgnorePublicAclsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.property.restrictPublicBucketsInput">RestrictPublicBucketsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicAcls">BlockPublicAcls</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicPolicy">BlockPublicPolicy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.property.ignorePublicAcls">IgnorePublicAcls</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.property.restrictPublicBuckets">RestrictPublicBuckets</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfiguration">S3MultiRegionAccessPointPublicAccessBlockConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BlockPublicAclsInput`<sup>Optional</sup> <a name="BlockPublicAclsInput" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicAclsInput"></a>

```csharp
public bool|IResolvable BlockPublicAclsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `BlockPublicPolicyInput`<sup>Optional</sup> <a name="BlockPublicPolicyInput" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicPolicyInput"></a>

```csharp
public bool|IResolvable BlockPublicPolicyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IgnorePublicAclsInput`<sup>Optional</sup> <a name="IgnorePublicAclsInput" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.property.ignorePublicAclsInput"></a>

```csharp
public bool|IResolvable IgnorePublicAclsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RestrictPublicBucketsInput`<sup>Optional</sup> <a name="RestrictPublicBucketsInput" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.property.restrictPublicBucketsInput"></a>

```csharp
public bool|IResolvable RestrictPublicBucketsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `BlockPublicAcls`<sup>Required</sup> <a name="BlockPublicAcls" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicAcls"></a>

```csharp
public bool|IResolvable BlockPublicAcls { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `BlockPublicPolicy`<sup>Required</sup> <a name="BlockPublicPolicy" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicPolicy"></a>

```csharp
public bool|IResolvable BlockPublicPolicy { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IgnorePublicAcls`<sup>Required</sup> <a name="IgnorePublicAcls" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.property.ignorePublicAcls"></a>

```csharp
public bool|IResolvable IgnorePublicAcls { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RestrictPublicBuckets`<sup>Required</sup> <a name="RestrictPublicBuckets" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.property.restrictPublicBuckets"></a>

```csharp
public bool|IResolvable RestrictPublicBuckets { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3MultiRegionAccessPointPublicAccessBlockConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfiguration">S3MultiRegionAccessPointPublicAccessBlockConfiguration</a>

---


### S3MultiRegionAccessPointRegionsList <a name="S3MultiRegionAccessPointRegionsList" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3MultiRegionAccessPointRegionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsList.get"></a>

```csharp
private S3MultiRegionAccessPointRegionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegions">S3MultiRegionAccessPointRegions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsList.property.internalValue"></a>

```csharp
public IResolvable|S3MultiRegionAccessPointRegions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegions">S3MultiRegionAccessPointRegions</a>[]

---


### S3MultiRegionAccessPointRegionsOutputReference <a name="S3MultiRegionAccessPointRegionsOutputReference" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3MultiRegionAccessPointRegionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.resetBucketAccountId">ResetBucketAccountId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketAccountId` <a name="ResetBucketAccountId" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.resetBucketAccountId"></a>

```csharp
private void ResetBucketAccountId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.property.bucketAccountIdInput">BucketAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.property.bucketAccountId">BucketAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegions">S3MultiRegionAccessPointRegions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketAccountIdInput`<sup>Optional</sup> <a name="BucketAccountIdInput" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.property.bucketAccountIdInput"></a>

```csharp
public string BucketAccountIdInput { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `BucketAccountId`<sup>Required</sup> <a name="BucketAccountId" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.property.bucketAccountId"></a>

```csharp
public string BucketAccountId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3MultiRegionAccessPointRegions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegions">S3MultiRegionAccessPointRegions</a>

---



