# `codestarconnectionsRepositoryLink` Submodule <a name="`codestarconnectionsRepositoryLink` Submodule" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodestarconnectionsRepositoryLink <a name="CodestarconnectionsRepositoryLink" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarconnections_repository_link awscc_codestarconnections_repository_link}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodestarconnectionsRepositoryLink(Construct Scope, string Id, CodestarconnectionsRepositoryLinkConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig">CodestarconnectionsRepositoryLinkConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig">CodestarconnectionsRepositoryLinkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.resetEncryptionKeyArn">ResetEncryptionKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.putTags"></a>

```csharp
private void PutTags(IResolvable|CodestarconnectionsRepositoryLinkTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTags">CodestarconnectionsRepositoryLinkTags</a>[]

---

##### `ResetEncryptionKeyArn` <a name="ResetEncryptionKeyArn" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.resetEncryptionKeyArn"></a>

```csharp
private void ResetEncryptionKeyArn()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CodestarconnectionsRepositoryLink resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CodestarconnectionsRepositoryLink.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CodestarconnectionsRepositoryLink.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CodestarconnectionsRepositoryLink.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CodestarconnectionsRepositoryLink.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CodestarconnectionsRepositoryLink resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CodestarconnectionsRepositoryLink to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CodestarconnectionsRepositoryLink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarconnections_repository_link#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CodestarconnectionsRepositoryLink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.providerType">ProviderType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.repositoryLinkArn">RepositoryLinkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.repositoryLinkId">RepositoryLinkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList">CodestarconnectionsRepositoryLinkTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.connectionArnInput">ConnectionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.encryptionKeyArnInput">EncryptionKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.ownerIdInput">OwnerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.repositoryNameInput">RepositoryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTags">CodestarconnectionsRepositoryLinkTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.connectionArn">ConnectionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.encryptionKeyArn">EncryptionKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.ownerId">OwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.repositoryName">RepositoryName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProviderType`<sup>Required</sup> <a name="ProviderType" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.providerType"></a>

```csharp
public string ProviderType { get; }
```

- *Type:* string

---

##### `RepositoryLinkArn`<sup>Required</sup> <a name="RepositoryLinkArn" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.repositoryLinkArn"></a>

```csharp
public string RepositoryLinkArn { get; }
```

- *Type:* string

---

##### `RepositoryLinkId`<sup>Required</sup> <a name="RepositoryLinkId" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.repositoryLinkId"></a>

```csharp
public string RepositoryLinkId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.tags"></a>

```csharp
public CodestarconnectionsRepositoryLinkTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList">CodestarconnectionsRepositoryLinkTagsList</a>

---

##### `ConnectionArnInput`<sup>Optional</sup> <a name="ConnectionArnInput" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.connectionArnInput"></a>

```csharp
public string ConnectionArnInput { get; }
```

- *Type:* string

---

##### `EncryptionKeyArnInput`<sup>Optional</sup> <a name="EncryptionKeyArnInput" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.encryptionKeyArnInput"></a>

```csharp
public string EncryptionKeyArnInput { get; }
```

- *Type:* string

---

##### `OwnerIdInput`<sup>Optional</sup> <a name="OwnerIdInput" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.ownerIdInput"></a>

```csharp
public string OwnerIdInput { get; }
```

- *Type:* string

---

##### `RepositoryNameInput`<sup>Optional</sup> <a name="RepositoryNameInput" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.repositoryNameInput"></a>

```csharp
public string RepositoryNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.tagsInput"></a>

```csharp
public IResolvable|CodestarconnectionsRepositoryLinkTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTags">CodestarconnectionsRepositoryLinkTags</a>[]

---

##### `ConnectionArn`<sup>Required</sup> <a name="ConnectionArn" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.connectionArn"></a>

```csharp
public string ConnectionArn { get; }
```

- *Type:* string

---

##### `EncryptionKeyArn`<sup>Required</sup> <a name="EncryptionKeyArn" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.encryptionKeyArn"></a>

```csharp
public string EncryptionKeyArn { get; }
```

- *Type:* string

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.ownerId"></a>

```csharp
public string OwnerId { get; }
```

- *Type:* string

---

##### `RepositoryName`<sup>Required</sup> <a name="RepositoryName" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.repositoryName"></a>

```csharp
public string RepositoryName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CodestarconnectionsRepositoryLinkConfig <a name="CodestarconnectionsRepositoryLinkConfig" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodestarconnectionsRepositoryLinkConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ConnectionArn,
    string OwnerId,
    string RepositoryName,
    string EncryptionKeyArn = null,
    IResolvable|CodestarconnectionsRepositoryLinkTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.connectionArn">ConnectionArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the CodeStarConnection. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.ownerId">OwnerId</a></code> | <code>string</code> | the ID of the entity that owns the repository. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.repositoryName">RepositoryName</a></code> | <code>string</code> | The repository for which the link is being created. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.encryptionKeyArn">EncryptionKeyArn</a></code> | <code>string</code> | The ARN of the KMS key that the customer can optionally specify to use to encrypt RepositoryLink properties. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTags">CodestarconnectionsRepositoryLinkTags</a>[]</code> | Specifies the tags applied to a RepositoryLink. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ConnectionArn`<sup>Required</sup> <a name="ConnectionArn" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.connectionArn"></a>

```csharp
public string ConnectionArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the CodeStarConnection.

The ARN is used as the connection reference when the connection is shared between AWS services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarconnections_repository_link#connection_arn CodestarconnectionsRepositoryLink#connection_arn}

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.ownerId"></a>

```csharp
public string OwnerId { get; set; }
```

- *Type:* string

the ID of the entity that owns the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarconnections_repository_link#owner_id CodestarconnectionsRepositoryLink#owner_id}

---

##### `RepositoryName`<sup>Required</sup> <a name="RepositoryName" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.repositoryName"></a>

```csharp
public string RepositoryName { get; set; }
```

- *Type:* string

The repository for which the link is being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarconnections_repository_link#repository_name CodestarconnectionsRepositoryLink#repository_name}

---

##### `EncryptionKeyArn`<sup>Optional</sup> <a name="EncryptionKeyArn" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.encryptionKeyArn"></a>

```csharp
public string EncryptionKeyArn { get; set; }
```

- *Type:* string

The ARN of the KMS key that the customer can optionally specify to use to encrypt RepositoryLink properties.

If not specified, a default key will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarconnections_repository_link#encryption_key_arn CodestarconnectionsRepositoryLink#encryption_key_arn}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.tags"></a>

```csharp
public IResolvable|CodestarconnectionsRepositoryLinkTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTags">CodestarconnectionsRepositoryLinkTags</a>[]

Specifies the tags applied to a RepositoryLink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarconnections_repository_link#tags CodestarconnectionsRepositoryLink#tags}

---

### CodestarconnectionsRepositoryLinkTags <a name="CodestarconnectionsRepositoryLinkTags" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodestarconnectionsRepositoryLinkTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, , ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarconnections_repository_link#key CodestarconnectionsRepositoryLink#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, , ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarconnections_repository_link#value CodestarconnectionsRepositoryLink#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CodestarconnectionsRepositoryLinkTagsList <a name="CodestarconnectionsRepositoryLinkTagsList" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodestarconnectionsRepositoryLinkTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.get"></a>

```csharp
private CodestarconnectionsRepositoryLinkTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTags">CodestarconnectionsRepositoryLinkTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.property.internalValue"></a>

```csharp
public IResolvable|CodestarconnectionsRepositoryLinkTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTags">CodestarconnectionsRepositoryLinkTags</a>[]

---


### CodestarconnectionsRepositoryLinkTagsOutputReference <a name="CodestarconnectionsRepositoryLinkTagsOutputReference" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodestarconnectionsRepositoryLinkTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTags">CodestarconnectionsRepositoryLinkTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CodestarconnectionsRepositoryLinkTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTags">CodestarconnectionsRepositoryLinkTags</a>

---



