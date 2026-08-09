# `ssmDocument` Submodule <a name="`ssmDocument` Submodule" id="@cdktn/provider-awscc.ssmDocument"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmDocument <a name="SsmDocument" id="@cdktn/provider-awscc.ssmDocument.SsmDocument"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_document awscc_ssm_document}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmDocument(Construct Scope, string Id, SsmDocumentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentConfig">SsmDocumentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentConfig">SsmDocumentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.putAttachments">PutAttachments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.putRequires">PutRequires</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.resetAttachments">ResetAttachments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.resetDocumentFormat">ResetDocumentFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.resetDocumentType">ResetDocumentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.resetRequires">ResetRequires</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.resetTargetType">ResetTargetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.resetUpdateMethod">ResetUpdateMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.resetVersionName">ResetVersionName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAttachments` <a name="PutAttachments" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.putAttachments"></a>

```csharp
private void PutAttachments(IResolvable|SsmDocumentAttachments[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.putAttachments.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachments">SsmDocumentAttachments</a>[]

---

##### `PutRequires` <a name="PutRequires" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.putRequires"></a>

```csharp
private void PutRequires(IResolvable|SsmDocumentRequires[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.putRequires.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentRequires">SsmDocumentRequires</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.putTags"></a>

```csharp
private void PutTags(IResolvable|SsmDocumentTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentTags">SsmDocumentTags</a>[]

---

##### `ResetAttachments` <a name="ResetAttachments" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.resetAttachments"></a>

```csharp
private void ResetAttachments()
```

##### `ResetDocumentFormat` <a name="ResetDocumentFormat" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.resetDocumentFormat"></a>

```csharp
private void ResetDocumentFormat()
```

##### `ResetDocumentType` <a name="ResetDocumentType" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.resetDocumentType"></a>

```csharp
private void ResetDocumentType()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetRequires` <a name="ResetRequires" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.resetRequires"></a>

```csharp
private void ResetRequires()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTargetType` <a name="ResetTargetType" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.resetTargetType"></a>

```csharp
private void ResetTargetType()
```

##### `ResetUpdateMethod` <a name="ResetUpdateMethod" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.resetUpdateMethod"></a>

```csharp
private void ResetUpdateMethod()
```

##### `ResetVersionName` <a name="ResetVersionName" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.resetVersionName"></a>

```csharp
private void ResetVersionName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SsmDocument resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SsmDocument.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SsmDocument.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SsmDocument.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SsmDocument.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SsmDocument resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SsmDocument to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SsmDocument that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_document#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SsmDocument to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.property.attachments">Attachments</a></code> | <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsList">SsmDocumentAttachmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.property.requires">Requires</a></code> | <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresList">SsmDocumentRequiresList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsList">SsmDocumentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.property.attachmentsInput">AttachmentsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachments">SsmDocumentAttachments</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.property.documentFormatInput">DocumentFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.property.documentTypeInput">DocumentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.property.requiresInput">RequiresInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentRequires">SsmDocumentRequires</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentTags">SsmDocumentTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.property.targetTypeInput">TargetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.property.updateMethodInput">UpdateMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.property.versionNameInput">VersionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.property.documentFormat">DocumentFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.property.documentType">DocumentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.property.targetType">TargetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.property.updateMethod">UpdateMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.property.versionName">VersionName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Attachments`<sup>Required</sup> <a name="Attachments" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.property.attachments"></a>

```csharp
public SsmDocumentAttachmentsList Attachments { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsList">SsmDocumentAttachmentsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Requires`<sup>Required</sup> <a name="Requires" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.property.requires"></a>

```csharp
public SsmDocumentRequiresList Requires { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresList">SsmDocumentRequiresList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.property.tags"></a>

```csharp
public SsmDocumentTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsList">SsmDocumentTagsList</a>

---

##### `AttachmentsInput`<sup>Optional</sup> <a name="AttachmentsInput" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.property.attachmentsInput"></a>

```csharp
public IResolvable|SsmDocumentAttachments[] AttachmentsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachments">SsmDocumentAttachments</a>[]

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `DocumentFormatInput`<sup>Optional</sup> <a name="DocumentFormatInput" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.property.documentFormatInput"></a>

```csharp
public string DocumentFormatInput { get; }
```

- *Type:* string

---

##### `DocumentTypeInput`<sup>Optional</sup> <a name="DocumentTypeInput" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.property.documentTypeInput"></a>

```csharp
public string DocumentTypeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RequiresInput`<sup>Optional</sup> <a name="RequiresInput" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.property.requiresInput"></a>

```csharp
public IResolvable|SsmDocumentRequires[] RequiresInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentRequires">SsmDocumentRequires</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.property.tagsInput"></a>

```csharp
public IResolvable|SsmDocumentTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentTags">SsmDocumentTags</a>[]

---

##### `TargetTypeInput`<sup>Optional</sup> <a name="TargetTypeInput" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.property.targetTypeInput"></a>

```csharp
public string TargetTypeInput { get; }
```

- *Type:* string

---

##### `UpdateMethodInput`<sup>Optional</sup> <a name="UpdateMethodInput" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.property.updateMethodInput"></a>

```csharp
public string UpdateMethodInput { get; }
```

- *Type:* string

---

##### `VersionNameInput`<sup>Optional</sup> <a name="VersionNameInput" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.property.versionNameInput"></a>

```csharp
public string VersionNameInput { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `DocumentFormat`<sup>Required</sup> <a name="DocumentFormat" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.property.documentFormat"></a>

```csharp
public string DocumentFormat { get; }
```

- *Type:* string

---

##### `DocumentType`<sup>Required</sup> <a name="DocumentType" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.property.documentType"></a>

```csharp
public string DocumentType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TargetType`<sup>Required</sup> <a name="TargetType" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.property.targetType"></a>

```csharp
public string TargetType { get; }
```

- *Type:* string

---

##### `UpdateMethod`<sup>Required</sup> <a name="UpdateMethod" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.property.updateMethod"></a>

```csharp
public string UpdateMethod { get; }
```

- *Type:* string

---

##### `VersionName`<sup>Required</sup> <a name="VersionName" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.property.versionName"></a>

```csharp
public string VersionName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocument.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ssmDocument.SsmDocument.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SsmDocumentAttachments <a name="SsmDocumentAttachments" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachments.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmDocumentAttachments {
    string Key = null,
    string Name = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachments.property.key">Key</a></code> | <code>string</code> | The key of a key-value pair that identifies the location of an attachment to a document. |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachments.property.name">Name</a></code> | <code>string</code> | The name of the document attachment file. |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachments.property.values">Values</a></code> | <code>string[]</code> | The value of a key-value pair that identifies the location of an attachment to a document. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachments.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key of a key-value pair that identifies the location of an attachment to a document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_document#key SsmDocument#key}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachments.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the document attachment file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_document#name SsmDocument#name}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachments.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

The value of a key-value pair that identifies the location of an attachment to a document.

The format for Value depends on the type of key you specify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_document#values SsmDocument#values}

---

### SsmDocumentConfig <a name="SsmDocumentConfig" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmDocumentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Content,
    IResolvable|SsmDocumentAttachments[] Attachments = null,
    string DocumentFormat = null,
    string DocumentType = null,
    string Name = null,
    IResolvable|SsmDocumentRequires[] Requires = null,
    IResolvable|SsmDocumentTags[] Tags = null,
    string TargetType = null,
    string UpdateMethod = null,
    string VersionName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentConfig.property.content">Content</a></code> | <code>string</code> | The content for the Systems Manager document in JSON, YAML or String format. |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentConfig.property.attachments">Attachments</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachments">SsmDocumentAttachments</a>[]</code> | A list of key and value pairs that describe attachments to a version of a document. |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentConfig.property.documentFormat">DocumentFormat</a></code> | <code>string</code> | Specify the document format for the request. |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentConfig.property.documentType">DocumentType</a></code> | <code>string</code> | The type of document to create. |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentConfig.property.name">Name</a></code> | <code>string</code> | A name for the Systems Manager document. |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentConfig.property.requires">Requires</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentRequires">SsmDocumentRequires</a>[]</code> | A list of SSM documents required by a document. For example, an ApplicationConfiguration document requires an ApplicationConfigurationSchema document. |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentTags">SsmDocumentTags</a>[]</code> | Optional metadata that you assign to a resource. |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentConfig.property.targetType">TargetType</a></code> | <code>string</code> | Specify a target type to define the kinds of resources the document can run on. |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentConfig.property.updateMethod">UpdateMethod</a></code> | <code>string</code> | Update method - when set to 'Replace', the update will replace the existing document; |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentConfig.property.versionName">VersionName</a></code> | <code>string</code> | An optional field specifying the version of the artifact you are creating with the document. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentConfig.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

The content for the Systems Manager document in JSON, YAML or String format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_document#content SsmDocument#content}

---

##### `Attachments`<sup>Optional</sup> <a name="Attachments" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentConfig.property.attachments"></a>

```csharp
public IResolvable|SsmDocumentAttachments[] Attachments { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachments">SsmDocumentAttachments</a>[]

A list of key and value pairs that describe attachments to a version of a document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_document#attachments SsmDocument#attachments}

---

##### `DocumentFormat`<sup>Optional</sup> <a name="DocumentFormat" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentConfig.property.documentFormat"></a>

```csharp
public string DocumentFormat { get; set; }
```

- *Type:* string

Specify the document format for the request.

The document format can be either JSON or YAML. JSON is the default format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_document#document_format SsmDocument#document_format}

---

##### `DocumentType`<sup>Optional</sup> <a name="DocumentType" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentConfig.property.documentType"></a>

```csharp
public string DocumentType { get; set; }
```

- *Type:* string

The type of document to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_document#document_type SsmDocument#document_type}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A name for the Systems Manager document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_document#name SsmDocument#name}

---

##### `Requires`<sup>Optional</sup> <a name="Requires" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentConfig.property.requires"></a>

```csharp
public IResolvable|SsmDocumentRequires[] Requires { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentRequires">SsmDocumentRequires</a>[]

A list of SSM documents required by a document. For example, an ApplicationConfiguration document requires an ApplicationConfigurationSchema document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_document#requires SsmDocument#requires}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentConfig.property.tags"></a>

```csharp
public IResolvable|SsmDocumentTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentTags">SsmDocumentTags</a>[]

Optional metadata that you assign to a resource.

Tags enable you to categorize a resource in different ways, such as by purpose, owner, or environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_document#tags SsmDocument#tags}

---

##### `TargetType`<sup>Optional</sup> <a name="TargetType" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentConfig.property.targetType"></a>

```csharp
public string TargetType { get; set; }
```

- *Type:* string

Specify a target type to define the kinds of resources the document can run on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_document#target_type SsmDocument#target_type}

---

##### `UpdateMethod`<sup>Optional</sup> <a name="UpdateMethod" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentConfig.property.updateMethod"></a>

```csharp
public string UpdateMethod { get; set; }
```

- *Type:* string

Update method - when set to 'Replace', the update will replace the existing document;

when set to 'NewVersion', the update will create a new version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_document#update_method SsmDocument#update_method}

---

##### `VersionName`<sup>Optional</sup> <a name="VersionName" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentConfig.property.versionName"></a>

```csharp
public string VersionName { get; set; }
```

- *Type:* string

An optional field specifying the version of the artifact you are creating with the document.

This value is unique across all versions of a document, and cannot be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_document#version_name SsmDocument#version_name}

---

### SsmDocumentRequires <a name="SsmDocumentRequires" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentRequires"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentRequires.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmDocumentRequires {
    string Name = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentRequires.property.name">Name</a></code> | <code>string</code> | The name of the required SSM document. The name can be an Amazon Resource Name (ARN). |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentRequires.property.version">Version</a></code> | <code>string</code> | The document version required by the current document. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentRequires.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the required SSM document. The name can be an Amazon Resource Name (ARN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_document#name SsmDocument#name}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentRequires.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

The document version required by the current document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_document#version SsmDocument#version}

---

### SsmDocumentTags <a name="SsmDocumentTags" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmDocumentTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentTags.property.key">Key</a></code> | <code>string</code> | The name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentTags.property.value">Value</a></code> | <code>string</code> | The value of the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_document#key SsmDocument#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_document#value SsmDocument#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SsmDocumentAttachmentsList <a name="SsmDocumentAttachmentsList" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmDocumentAttachmentsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsList.get"></a>

```csharp
private SsmDocumentAttachmentsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachments">SsmDocumentAttachments</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsList.property.internalValue"></a>

```csharp
public IResolvable|SsmDocumentAttachments[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachments">SsmDocumentAttachments</a>[]

---


### SsmDocumentAttachmentsOutputReference <a name="SsmDocumentAttachmentsOutputReference" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmDocumentAttachmentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachments">SsmDocumentAttachments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachmentsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SsmDocumentAttachments InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentAttachments">SsmDocumentAttachments</a>

---


### SsmDocumentRequiresList <a name="SsmDocumentRequiresList" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmDocumentRequiresList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresList.get"></a>

```csharp
private SsmDocumentRequiresOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentRequires">SsmDocumentRequires</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresList.property.internalValue"></a>

```csharp
public IResolvable|SsmDocumentRequires[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentRequires">SsmDocumentRequires</a>[]

---


### SsmDocumentRequiresOutputReference <a name="SsmDocumentRequiresOutputReference" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmDocumentRequiresOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentRequires">SsmDocumentRequires</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentRequiresOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SsmDocumentRequires InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentRequires">SsmDocumentRequires</a>

---


### SsmDocumentTagsList <a name="SsmDocumentTagsList" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmDocumentTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsList.get"></a>

```csharp
private SsmDocumentTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentTags">SsmDocumentTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsList.property.internalValue"></a>

```csharp
public IResolvable|SsmDocumentTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentTags">SsmDocumentTags</a>[]

---


### SsmDocumentTagsOutputReference <a name="SsmDocumentTagsOutputReference" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmDocumentTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentTags">SsmDocumentTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmDocument.SsmDocumentTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SsmDocumentTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmDocument.SsmDocumentTags">SsmDocumentTags</a>

---



