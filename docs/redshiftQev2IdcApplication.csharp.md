# `redshiftQev2IdcApplication` Submodule <a name="`redshiftQev2IdcApplication` Submodule" id="@cdktn/provider-awscc.redshiftQev2IdcApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftQev2IdcApplication <a name="RedshiftQev2IdcApplication" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/redshift_qev2_idc_application awscc_redshift_qev2_idc_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RedshiftQev2IdcApplication(Construct Scope, string Id, RedshiftQev2IdcApplicationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationConfig">RedshiftQev2IdcApplicationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationConfig">RedshiftQev2IdcApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.putTags"></a>

```csharp
private void PutTags(IResolvable|RedshiftQev2IdcApplicationTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTags">RedshiftQev2IdcApplicationTags</a>[]

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RedshiftQev2IdcApplication resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RedshiftQev2IdcApplication.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RedshiftQev2IdcApplication.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RedshiftQev2IdcApplication.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RedshiftQev2IdcApplication.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a RedshiftQev2IdcApplication resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RedshiftQev2IdcApplication to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RedshiftQev2IdcApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/redshift_qev2_idc_application#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the RedshiftQev2IdcApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.property.idcManagedApplicationArn">IdcManagedApplicationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.property.idcOnboardStatus">IdcOnboardStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.property.qev2IdcApplicationArn">Qev2IdcApplicationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsList">RedshiftQev2IdcApplicationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.property.idcDisplayNameInput">IdcDisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.property.idcInstanceArnInput">IdcInstanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.property.qev2IdcApplicationNameInput">Qev2IdcApplicationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTags">RedshiftQev2IdcApplicationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.property.idcDisplayName">IdcDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.property.idcInstanceArn">IdcInstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.property.qev2IdcApplicationName">Qev2IdcApplicationName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdcManagedApplicationArn`<sup>Required</sup> <a name="IdcManagedApplicationArn" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.property.idcManagedApplicationArn"></a>

```csharp
public string IdcManagedApplicationArn { get; }
```

- *Type:* string

---

##### `IdcOnboardStatus`<sup>Required</sup> <a name="IdcOnboardStatus" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.property.idcOnboardStatus"></a>

```csharp
public string IdcOnboardStatus { get; }
```

- *Type:* string

---

##### `Qev2IdcApplicationArn`<sup>Required</sup> <a name="Qev2IdcApplicationArn" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.property.qev2IdcApplicationArn"></a>

```csharp
public string Qev2IdcApplicationArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.property.tags"></a>

```csharp
public RedshiftQev2IdcApplicationTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsList">RedshiftQev2IdcApplicationTagsList</a>

---

##### `IdcDisplayNameInput`<sup>Optional</sup> <a name="IdcDisplayNameInput" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.property.idcDisplayNameInput"></a>

```csharp
public string IdcDisplayNameInput { get; }
```

- *Type:* string

---

##### `IdcInstanceArnInput`<sup>Optional</sup> <a name="IdcInstanceArnInput" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.property.idcInstanceArnInput"></a>

```csharp
public string IdcInstanceArnInput { get; }
```

- *Type:* string

---

##### `Qev2IdcApplicationNameInput`<sup>Optional</sup> <a name="Qev2IdcApplicationNameInput" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.property.qev2IdcApplicationNameInput"></a>

```csharp
public string Qev2IdcApplicationNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.property.tagsInput"></a>

```csharp
public IResolvable|RedshiftQev2IdcApplicationTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTags">RedshiftQev2IdcApplicationTags</a>[]

---

##### `IdcDisplayName`<sup>Required</sup> <a name="IdcDisplayName" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.property.idcDisplayName"></a>

```csharp
public string IdcDisplayName { get; }
```

- *Type:* string

---

##### `IdcInstanceArn`<sup>Required</sup> <a name="IdcInstanceArn" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.property.idcInstanceArn"></a>

```csharp
public string IdcInstanceArn { get; }
```

- *Type:* string

---

##### `Qev2IdcApplicationName`<sup>Required</sup> <a name="Qev2IdcApplicationName" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.property.qev2IdcApplicationName"></a>

```csharp
public string Qev2IdcApplicationName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplication.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftQev2IdcApplicationConfig <a name="RedshiftQev2IdcApplicationConfig" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RedshiftQev2IdcApplicationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string IdcDisplayName,
    string IdcInstanceArn,
    string Qev2IdcApplicationName,
    IResolvable|RedshiftQev2IdcApplicationTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationConfig.property.idcDisplayName">IdcDisplayName</a></code> | <code>string</code> | The display name for the Amazon Redshift Query Editor (QEV2) IAM Identity Center application. It appears in the console. |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationConfig.property.idcInstanceArn">IdcInstanceArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the IAM Identity Center instance used to create the Amazon Redshift Query Editor (QEV2) managed application. |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationConfig.property.qev2IdcApplicationName">Qev2IdcApplicationName</a></code> | <code>string</code> | The name of the Amazon Redshift Query Editor (QEV2) application in IAM Identity Center. |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTags">RedshiftQev2IdcApplicationTags</a>[]</code> | A list of tags associated with the application. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `IdcDisplayName`<sup>Required</sup> <a name="IdcDisplayName" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationConfig.property.idcDisplayName"></a>

```csharp
public string IdcDisplayName { get; set; }
```

- *Type:* string

The display name for the Amazon Redshift Query Editor (QEV2) IAM Identity Center application. It appears in the console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/redshift_qev2_idc_application#idc_display_name RedshiftQev2IdcApplication#idc_display_name}

---

##### `IdcInstanceArn`<sup>Required</sup> <a name="IdcInstanceArn" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationConfig.property.idcInstanceArn"></a>

```csharp
public string IdcInstanceArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the IAM Identity Center instance used to create the Amazon Redshift Query Editor (QEV2) managed application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/redshift_qev2_idc_application#idc_instance_arn RedshiftQev2IdcApplication#idc_instance_arn}

---

##### `Qev2IdcApplicationName`<sup>Required</sup> <a name="Qev2IdcApplicationName" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationConfig.property.qev2IdcApplicationName"></a>

```csharp
public string Qev2IdcApplicationName { get; set; }
```

- *Type:* string

The name of the Amazon Redshift Query Editor (QEV2) application in IAM Identity Center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/redshift_qev2_idc_application#qev_2_idc_application_name RedshiftQev2IdcApplication#qev_2_idc_application_name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationConfig.property.tags"></a>

```csharp
public IResolvable|RedshiftQev2IdcApplicationTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTags">RedshiftQev2IdcApplicationTags</a>[]

A list of tags associated with the application.

Tags are key-value pairs that you can use to organize and identify your resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/redshift_qev2_idc_application#tags RedshiftQev2IdcApplication#tags}

---

### RedshiftQev2IdcApplicationTags <a name="RedshiftQev2IdcApplicationTags" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RedshiftQev2IdcApplicationTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTags.property.key">Key</a></code> | <code>string</code> | The key, or name, for the resource tag. |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTags.property.value">Value</a></code> | <code>string</code> | The value for the resource tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key, or name, for the resource tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/redshift_qev2_idc_application#key RedshiftQev2IdcApplication#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the resource tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/redshift_qev2_idc_application#value RedshiftQev2IdcApplication#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RedshiftQev2IdcApplicationTagsList <a name="RedshiftQev2IdcApplicationTagsList" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RedshiftQev2IdcApplicationTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsList.get"></a>

```csharp
private RedshiftQev2IdcApplicationTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTags">RedshiftQev2IdcApplicationTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsList.property.internalValue"></a>

```csharp
public IResolvable|RedshiftQev2IdcApplicationTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTags">RedshiftQev2IdcApplicationTags</a>[]

---


### RedshiftQev2IdcApplicationTagsOutputReference <a name="RedshiftQev2IdcApplicationTagsOutputReference" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RedshiftQev2IdcApplicationTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTags">RedshiftQev2IdcApplicationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RedshiftQev2IdcApplicationTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftQev2IdcApplication.RedshiftQev2IdcApplicationTags">RedshiftQev2IdcApplicationTags</a>

---



