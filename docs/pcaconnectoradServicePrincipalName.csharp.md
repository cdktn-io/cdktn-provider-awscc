# `pcaconnectoradServicePrincipalName` Submodule <a name="`pcaconnectoradServicePrincipalName` Submodule" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PcaconnectoradServicePrincipalName <a name="PcaconnectoradServicePrincipalName" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pcaconnectorad_service_principal_name awscc_pcaconnectorad_service_principal_name}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PcaconnectoradServicePrincipalName(Construct Scope, string Id, PcaconnectoradServicePrincipalNameConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalNameConfig">PcaconnectoradServicePrincipalNameConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalNameConfig">PcaconnectoradServicePrincipalNameConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PcaconnectoradServicePrincipalName resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

PcaconnectoradServicePrincipalName.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

PcaconnectoradServicePrincipalName.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

PcaconnectoradServicePrincipalName.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

PcaconnectoradServicePrincipalName.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a PcaconnectoradServicePrincipalName resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PcaconnectoradServicePrincipalName to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PcaconnectoradServicePrincipalName that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pcaconnectorad_service_principal_name#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the PcaconnectoradServicePrincipalName to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.property.connectorArnInput">ConnectorArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.property.directoryRegistrationArnInput">DirectoryRegistrationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.property.connectorArn">ConnectorArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.property.directoryRegistrationArn">DirectoryRegistrationArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ConnectorArnInput`<sup>Optional</sup> <a name="ConnectorArnInput" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.property.connectorArnInput"></a>

```csharp
public string ConnectorArnInput { get; }
```

- *Type:* string

---

##### `DirectoryRegistrationArnInput`<sup>Optional</sup> <a name="DirectoryRegistrationArnInput" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.property.directoryRegistrationArnInput"></a>

```csharp
public string DirectoryRegistrationArnInput { get; }
```

- *Type:* string

---

##### `ConnectorArn`<sup>Required</sup> <a name="ConnectorArn" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.property.connectorArn"></a>

```csharp
public string ConnectorArn { get; }
```

- *Type:* string

---

##### `DirectoryRegistrationArn`<sup>Required</sup> <a name="DirectoryRegistrationArn" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.property.directoryRegistrationArn"></a>

```csharp
public string DirectoryRegistrationArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalName.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PcaconnectoradServicePrincipalNameConfig <a name="PcaconnectoradServicePrincipalNameConfig" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalNameConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalNameConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PcaconnectoradServicePrincipalNameConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ConnectorArn,
    string DirectoryRegistrationArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalNameConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalNameConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalNameConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalNameConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalNameConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalNameConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalNameConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalNameConfig.property.connectorArn">ConnectorArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pcaconnectorad_service_principal_name#connector_arn PcaconnectoradServicePrincipalName#connector_arn}. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalNameConfig.property.directoryRegistrationArn">DirectoryRegistrationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pcaconnectorad_service_principal_name#directory_registration_arn PcaconnectoradServicePrincipalName#directory_registration_arn}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalNameConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalNameConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalNameConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalNameConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalNameConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalNameConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalNameConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ConnectorArn`<sup>Required</sup> <a name="ConnectorArn" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalNameConfig.property.connectorArn"></a>

```csharp
public string ConnectorArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pcaconnectorad_service_principal_name#connector_arn PcaconnectoradServicePrincipalName#connector_arn}.

---

##### `DirectoryRegistrationArn`<sup>Required</sup> <a name="DirectoryRegistrationArn" id="@cdktn/provider-awscc.pcaconnectoradServicePrincipalName.PcaconnectoradServicePrincipalNameConfig.property.directoryRegistrationArn"></a>

```csharp
public string DirectoryRegistrationArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pcaconnectorad_service_principal_name#directory_registration_arn PcaconnectoradServicePrincipalName#directory_registration_arn}.

---



