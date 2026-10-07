# `licensemanagerReportGenerator` Submodule <a name="`licensemanagerReportGenerator` Submodule" id="@cdktn/provider-awscc.licensemanagerReportGenerator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LicensemanagerReportGenerator <a name="LicensemanagerReportGenerator" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator awscc_licensemanager_report_generator}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LicensemanagerReportGenerator(Construct Scope, string Id, LicensemanagerReportGeneratorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig">LicensemanagerReportGeneratorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig">LicensemanagerReportGeneratorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.putReportContext">PutReportContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.putReportFrequency">PutReportFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutReportContext` <a name="PutReportContext" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.putReportContext"></a>

```csharp
private void PutReportContext(LicensemanagerReportGeneratorReportContext Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.putReportContext.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext">LicensemanagerReportGeneratorReportContext</a>

---

##### `PutReportFrequency` <a name="PutReportFrequency" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.putReportFrequency"></a>

```csharp
private void PutReportFrequency(LicensemanagerReportGeneratorReportFrequency Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.putReportFrequency.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency">LicensemanagerReportGeneratorReportFrequency</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.putTags"></a>

```csharp
private void PutTags(IResolvable|LicensemanagerReportGeneratorTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags">LicensemanagerReportGeneratorTags</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LicensemanagerReportGenerator resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LicensemanagerReportGenerator.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LicensemanagerReportGenerator.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LicensemanagerReportGenerator.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LicensemanagerReportGenerator.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a LicensemanagerReportGenerator resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LicensemanagerReportGenerator to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LicensemanagerReportGenerator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the LicensemanagerReportGenerator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportContext">ReportContext</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference">LicensemanagerReportGeneratorReportContextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportCreatorAccount">ReportCreatorAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportFrequency">ReportFrequency</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference">LicensemanagerReportGeneratorReportFrequencyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.s3Location">S3Location</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference">LicensemanagerReportGeneratorS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList">LicensemanagerReportGeneratorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportContextInput">ReportContextInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext">LicensemanagerReportGeneratorReportContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportFrequencyInput">ReportFrequencyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency">LicensemanagerReportGeneratorReportFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportGeneratorNameInput">ReportGeneratorNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportTypeInput">ReportTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags">LicensemanagerReportGeneratorTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportGeneratorName">ReportGeneratorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportType">ReportType</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ReportContext`<sup>Required</sup> <a name="ReportContext" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportContext"></a>

```csharp
public LicensemanagerReportGeneratorReportContextOutputReference ReportContext { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference">LicensemanagerReportGeneratorReportContextOutputReference</a>

---

##### `ReportCreatorAccount`<sup>Required</sup> <a name="ReportCreatorAccount" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportCreatorAccount"></a>

```csharp
public string ReportCreatorAccount { get; }
```

- *Type:* string

---

##### `ReportFrequency`<sup>Required</sup> <a name="ReportFrequency" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportFrequency"></a>

```csharp
public LicensemanagerReportGeneratorReportFrequencyOutputReference ReportFrequency { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference">LicensemanagerReportGeneratorReportFrequencyOutputReference</a>

---

##### `S3Location`<sup>Required</sup> <a name="S3Location" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.s3Location"></a>

```csharp
public LicensemanagerReportGeneratorS3LocationOutputReference S3Location { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference">LicensemanagerReportGeneratorS3LocationOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.tags"></a>

```csharp
public LicensemanagerReportGeneratorTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList">LicensemanagerReportGeneratorTagsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ReportContextInput`<sup>Optional</sup> <a name="ReportContextInput" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportContextInput"></a>

```csharp
public IResolvable|LicensemanagerReportGeneratorReportContext ReportContextInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext">LicensemanagerReportGeneratorReportContext</a>

---

##### `ReportFrequencyInput`<sup>Optional</sup> <a name="ReportFrequencyInput" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportFrequencyInput"></a>

```csharp
public IResolvable|LicensemanagerReportGeneratorReportFrequency ReportFrequencyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency">LicensemanagerReportGeneratorReportFrequency</a>

---

##### `ReportGeneratorNameInput`<sup>Optional</sup> <a name="ReportGeneratorNameInput" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportGeneratorNameInput"></a>

```csharp
public string ReportGeneratorNameInput { get; }
```

- *Type:* string

---

##### `ReportTypeInput`<sup>Optional</sup> <a name="ReportTypeInput" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportTypeInput"></a>

```csharp
public string[] ReportTypeInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.tagsInput"></a>

```csharp
public IResolvable|LicensemanagerReportGeneratorTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags">LicensemanagerReportGeneratorTags</a>[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ReportGeneratorName`<sup>Required</sup> <a name="ReportGeneratorName" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportGeneratorName"></a>

```csharp
public string ReportGeneratorName { get; }
```

- *Type:* string

---

##### `ReportType`<sup>Required</sup> <a name="ReportType" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportType"></a>

```csharp
public string[] ReportType { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LicensemanagerReportGeneratorConfig <a name="LicensemanagerReportGeneratorConfig" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LicensemanagerReportGeneratorConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    LicensemanagerReportGeneratorReportContext ReportContext,
    LicensemanagerReportGeneratorReportFrequency ReportFrequency,
    string ReportGeneratorName,
    string[] ReportType,
    string Description = null,
    IResolvable|LicensemanagerReportGeneratorTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.reportContext">ReportContext</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext">LicensemanagerReportGeneratorReportContext</a></code> | Details of the license configurations and asset groups that this generator reports on. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.reportFrequency">ReportFrequency</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency">LicensemanagerReportGeneratorReportFrequency</a></code> | Details about how frequently reports are generated. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.reportGeneratorName">ReportGeneratorName</a></code> | <code>string</code> | Name of the report generator. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.reportType">ReportType</a></code> | <code>string[]</code> | Type of reports to generate. The report type determines the data reported on. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.description">Description</a></code> | <code>string</code> | Description of the report generator. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags">LicensemanagerReportGeneratorTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ReportContext`<sup>Required</sup> <a name="ReportContext" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.reportContext"></a>

```csharp
public LicensemanagerReportGeneratorReportContext ReportContext { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext">LicensemanagerReportGeneratorReportContext</a>

Details of the license configurations and asset groups that this generator reports on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#report_context LicensemanagerReportGenerator#report_context}

---

##### `ReportFrequency`<sup>Required</sup> <a name="ReportFrequency" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.reportFrequency"></a>

```csharp
public LicensemanagerReportGeneratorReportFrequency ReportFrequency { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency">LicensemanagerReportGeneratorReportFrequency</a>

Details about how frequently reports are generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#report_frequency LicensemanagerReportGenerator#report_frequency}

---

##### `ReportGeneratorName`<sup>Required</sup> <a name="ReportGeneratorName" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.reportGeneratorName"></a>

```csharp
public string ReportGeneratorName { get; set; }
```

- *Type:* string

Name of the report generator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#report_generator_name LicensemanagerReportGenerator#report_generator_name}

---

##### `ReportType`<sup>Required</sup> <a name="ReportType" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.reportType"></a>

```csharp
public string[] ReportType { get; set; }
```

- *Type:* string[]

Type of reports to generate. The report type determines the data reported on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#report_type LicensemanagerReportGenerator#report_type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the report generator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#description LicensemanagerReportGenerator#description}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.tags"></a>

```csharp
public IResolvable|LicensemanagerReportGeneratorTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags">LicensemanagerReportGeneratorTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#tags LicensemanagerReportGenerator#tags}

---

### LicensemanagerReportGeneratorReportContext <a name="LicensemanagerReportGeneratorReportContext" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LicensemanagerReportGeneratorReportContext {
    string[] LicenseAssetGroupArns = null,
    string[] LicenseConfigurationArns = null,
    string ReportEndDate = null,
    string ReportStartDate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext.property.licenseAssetGroupArns">LicenseAssetGroupArns</a></code> | <code>string[]</code> | Amazon Resource Names (ARNs) of the license asset groups to include in the report. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext.property.licenseConfigurationArns">LicenseConfigurationArns</a></code> | <code>string[]</code> | Amazon Resource Names (ARNs) of the license configurations that this generator reports on. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext.property.reportEndDate">ReportEndDate</a></code> | <code>string</code> | End date for the report data collection period. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext.property.reportStartDate">ReportStartDate</a></code> | <code>string</code> | Start date for the report data collection period. |

---

##### `LicenseAssetGroupArns`<sup>Optional</sup> <a name="LicenseAssetGroupArns" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext.property.licenseAssetGroupArns"></a>

```csharp
public string[] LicenseAssetGroupArns { get; set; }
```

- *Type:* string[]

Amazon Resource Names (ARNs) of the license asset groups to include in the report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#license_asset_group_arns LicensemanagerReportGenerator#license_asset_group_arns}

---

##### `LicenseConfigurationArns`<sup>Optional</sup> <a name="LicenseConfigurationArns" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext.property.licenseConfigurationArns"></a>

```csharp
public string[] LicenseConfigurationArns { get; set; }
```

- *Type:* string[]

Amazon Resource Names (ARNs) of the license configurations that this generator reports on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#license_configuration_arns LicensemanagerReportGenerator#license_configuration_arns}

---

##### `ReportEndDate`<sup>Optional</sup> <a name="ReportEndDate" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext.property.reportEndDate"></a>

```csharp
public string ReportEndDate { get; set; }
```

- *Type:* string

End date for the report data collection period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#report_end_date LicensemanagerReportGenerator#report_end_date}

---

##### `ReportStartDate`<sup>Optional</sup> <a name="ReportStartDate" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext.property.reportStartDate"></a>

```csharp
public string ReportStartDate { get; set; }
```

- *Type:* string

Start date for the report data collection period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#report_start_date LicensemanagerReportGenerator#report_start_date}

---

### LicensemanagerReportGeneratorReportFrequency <a name="LicensemanagerReportGeneratorReportFrequency" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LicensemanagerReportGeneratorReportFrequency {
    string Period = null,
    double Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency.property.period">Period</a></code> | <code>string</code> | Time period between each report. The period can be daily, weekly, or monthly. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency.property.value">Value</a></code> | <code>double</code> | Number of times within the frequency period that a report is generated. The only supported value is 1. |

---

##### `Period`<sup>Optional</sup> <a name="Period" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency.property.period"></a>

```csharp
public string Period { get; set; }
```

- *Type:* string

Time period between each report. The period can be daily, weekly, or monthly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#period LicensemanagerReportGenerator#period}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

Number of times within the frequency period that a report is generated. The only supported value is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#value LicensemanagerReportGenerator#value}

---

### LicensemanagerReportGeneratorS3Location <a name="LicensemanagerReportGeneratorS3Location" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3Location.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LicensemanagerReportGeneratorS3Location {

};
```


### LicensemanagerReportGeneratorTags <a name="LicensemanagerReportGeneratorTags" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LicensemanagerReportGeneratorTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags.property.key">Key</a></code> | <code>string</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags.property.value">Value</a></code> | <code>string</code> | The tag value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#key LicensemanagerReportGenerator#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#value LicensemanagerReportGenerator#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LicensemanagerReportGeneratorReportContextOutputReference <a name="LicensemanagerReportGeneratorReportContextOutputReference" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LicensemanagerReportGeneratorReportContextOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.resetLicenseAssetGroupArns">ResetLicenseAssetGroupArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.resetLicenseConfigurationArns">ResetLicenseConfigurationArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.resetReportEndDate">ResetReportEndDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.resetReportStartDate">ResetReportStartDate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLicenseAssetGroupArns` <a name="ResetLicenseAssetGroupArns" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.resetLicenseAssetGroupArns"></a>

```csharp
private void ResetLicenseAssetGroupArns()
```

##### `ResetLicenseConfigurationArns` <a name="ResetLicenseConfigurationArns" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.resetLicenseConfigurationArns"></a>

```csharp
private void ResetLicenseConfigurationArns()
```

##### `ResetReportEndDate` <a name="ResetReportEndDate" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.resetReportEndDate"></a>

```csharp
private void ResetReportEndDate()
```

##### `ResetReportStartDate` <a name="ResetReportStartDate" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.resetReportStartDate"></a>

```csharp
private void ResetReportStartDate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.licenseAssetGroupArnsInput">LicenseAssetGroupArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.licenseConfigurationArnsInput">LicenseConfigurationArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.reportEndDateInput">ReportEndDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.reportStartDateInput">ReportStartDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.licenseAssetGroupArns">LicenseAssetGroupArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.licenseConfigurationArns">LicenseConfigurationArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.reportEndDate">ReportEndDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.reportStartDate">ReportStartDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext">LicensemanagerReportGeneratorReportContext</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LicenseAssetGroupArnsInput`<sup>Optional</sup> <a name="LicenseAssetGroupArnsInput" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.licenseAssetGroupArnsInput"></a>

```csharp
public string[] LicenseAssetGroupArnsInput { get; }
```

- *Type:* string[]

---

##### `LicenseConfigurationArnsInput`<sup>Optional</sup> <a name="LicenseConfigurationArnsInput" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.licenseConfigurationArnsInput"></a>

```csharp
public string[] LicenseConfigurationArnsInput { get; }
```

- *Type:* string[]

---

##### `ReportEndDateInput`<sup>Optional</sup> <a name="ReportEndDateInput" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.reportEndDateInput"></a>

```csharp
public string ReportEndDateInput { get; }
```

- *Type:* string

---

##### `ReportStartDateInput`<sup>Optional</sup> <a name="ReportStartDateInput" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.reportStartDateInput"></a>

```csharp
public string ReportStartDateInput { get; }
```

- *Type:* string

---

##### `LicenseAssetGroupArns`<sup>Required</sup> <a name="LicenseAssetGroupArns" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.licenseAssetGroupArns"></a>

```csharp
public string[] LicenseAssetGroupArns { get; }
```

- *Type:* string[]

---

##### `LicenseConfigurationArns`<sup>Required</sup> <a name="LicenseConfigurationArns" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.licenseConfigurationArns"></a>

```csharp
public string[] LicenseConfigurationArns { get; }
```

- *Type:* string[]

---

##### `ReportEndDate`<sup>Required</sup> <a name="ReportEndDate" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.reportEndDate"></a>

```csharp
public string ReportEndDate { get; }
```

- *Type:* string

---

##### `ReportStartDate`<sup>Required</sup> <a name="ReportStartDate" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.reportStartDate"></a>

```csharp
public string ReportStartDate { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LicensemanagerReportGeneratorReportContext InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext">LicensemanagerReportGeneratorReportContext</a>

---


### LicensemanagerReportGeneratorReportFrequencyOutputReference <a name="LicensemanagerReportGeneratorReportFrequencyOutputReference" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LicensemanagerReportGeneratorReportFrequencyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.resetPeriod">ResetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPeriod` <a name="ResetPeriod" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.resetPeriod"></a>

```csharp
private void ResetPeriod()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.periodInput">PeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.period">Period</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency">LicensemanagerReportGeneratorReportFrequency</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.periodInput"></a>

```csharp
public string PeriodInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.period"></a>

```csharp
public string Period { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LicensemanagerReportGeneratorReportFrequency InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency">LicensemanagerReportGeneratorReportFrequency</a>

---


### LicensemanagerReportGeneratorS3LocationOutputReference <a name="LicensemanagerReportGeneratorS3LocationOutputReference" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LicensemanagerReportGeneratorS3LocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.property.keyPrefix">KeyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3Location">LicensemanagerReportGeneratorS3Location</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `KeyPrefix`<sup>Required</sup> <a name="KeyPrefix" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.property.keyPrefix"></a>

```csharp
public string KeyPrefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.property.internalValue"></a>

```csharp
public LicensemanagerReportGeneratorS3Location InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3Location">LicensemanagerReportGeneratorS3Location</a>

---


### LicensemanagerReportGeneratorTagsList <a name="LicensemanagerReportGeneratorTagsList" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LicensemanagerReportGeneratorTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.get"></a>

```csharp
private LicensemanagerReportGeneratorTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags">LicensemanagerReportGeneratorTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.property.internalValue"></a>

```csharp
public IResolvable|LicensemanagerReportGeneratorTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags">LicensemanagerReportGeneratorTags</a>[]

---


### LicensemanagerReportGeneratorTagsOutputReference <a name="LicensemanagerReportGeneratorTagsOutputReference" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LicensemanagerReportGeneratorTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags">LicensemanagerReportGeneratorTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LicensemanagerReportGeneratorTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags">LicensemanagerReportGeneratorTags</a>

---



