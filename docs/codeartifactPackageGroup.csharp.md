# `codeartifactPackageGroup` Submodule <a name="`codeartifactPackageGroup` Submodule" id="@cdktn/provider-awscc.codeartifactPackageGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodeartifactPackageGroup <a name="CodeartifactPackageGroup" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group awscc_codeartifact_package_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodeartifactPackageGroup(Construct Scope, string Id, CodeartifactPackageGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig">CodeartifactPackageGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig">CodeartifactPackageGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.putOriginConfiguration">PutOriginConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.resetContactInfo">ResetContactInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.resetDomainOwner">ResetDomainOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.resetOriginConfiguration">ResetOriginConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOriginConfiguration` <a name="PutOriginConfiguration" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.putOriginConfiguration"></a>

```csharp
private void PutOriginConfiguration(CodeartifactPackageGroupOriginConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.putOriginConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfiguration">CodeartifactPackageGroupOriginConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.putTags"></a>

```csharp
private void PutTags(IResolvable|CodeartifactPackageGroupTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags">CodeartifactPackageGroupTags</a>[]

---

##### `ResetContactInfo` <a name="ResetContactInfo" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.resetContactInfo"></a>

```csharp
private void ResetContactInfo()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDomainOwner` <a name="ResetDomainOwner" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.resetDomainOwner"></a>

```csharp
private void ResetDomainOwner()
```

##### `ResetOriginConfiguration` <a name="ResetOriginConfiguration" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.resetOriginConfiguration"></a>

```csharp
private void ResetOriginConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CodeartifactPackageGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CodeartifactPackageGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CodeartifactPackageGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CodeartifactPackageGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CodeartifactPackageGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CodeartifactPackageGroup resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CodeartifactPackageGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CodeartifactPackageGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CodeartifactPackageGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.originConfiguration">OriginConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference">CodeartifactPackageGroupOriginConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList">CodeartifactPackageGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.contactInfoInput">ContactInfoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.domainNameInput">DomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.domainOwnerInput">DomainOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.originConfigurationInput">OriginConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfiguration">CodeartifactPackageGroupOriginConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.patternInput">PatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags">CodeartifactPackageGroupTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.contactInfo">ContactInfo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.domainOwner">DomainOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.pattern">Pattern</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OriginConfiguration`<sup>Required</sup> <a name="OriginConfiguration" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.originConfiguration"></a>

```csharp
public CodeartifactPackageGroupOriginConfigurationOutputReference OriginConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference">CodeartifactPackageGroupOriginConfigurationOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.tags"></a>

```csharp
public CodeartifactPackageGroupTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList">CodeartifactPackageGroupTagsList</a>

---

##### `ContactInfoInput`<sup>Optional</sup> <a name="ContactInfoInput" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.contactInfoInput"></a>

```csharp
public string ContactInfoInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.domainNameInput"></a>

```csharp
public string DomainNameInput { get; }
```

- *Type:* string

---

##### `DomainOwnerInput`<sup>Optional</sup> <a name="DomainOwnerInput" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.domainOwnerInput"></a>

```csharp
public string DomainOwnerInput { get; }
```

- *Type:* string

---

##### `OriginConfigurationInput`<sup>Optional</sup> <a name="OriginConfigurationInput" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.originConfigurationInput"></a>

```csharp
public IResolvable|CodeartifactPackageGroupOriginConfiguration OriginConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfiguration">CodeartifactPackageGroupOriginConfiguration</a>

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.patternInput"></a>

```csharp
public string PatternInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.tagsInput"></a>

```csharp
public IResolvable|CodeartifactPackageGroupTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags">CodeartifactPackageGroupTags</a>[]

---

##### `ContactInfo`<sup>Required</sup> <a name="ContactInfo" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.contactInfo"></a>

```csharp
public string ContactInfo { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `DomainOwner`<sup>Required</sup> <a name="DomainOwner" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.domainOwner"></a>

```csharp
public string DomainOwner { get; }
```

- *Type:* string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.pattern"></a>

```csharp
public string Pattern { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CodeartifactPackageGroupConfig <a name="CodeartifactPackageGroupConfig" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodeartifactPackageGroupConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DomainName,
    string Pattern,
    string ContactInfo = null,
    string Description = null,
    string DomainOwner = null,
    CodeartifactPackageGroupOriginConfiguration OriginConfiguration = null,
    IResolvable|CodeartifactPackageGroupTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.domainName">DomainName</a></code> | <code>string</code> | The name of the domain that contains the package group. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.pattern">Pattern</a></code> | <code>string</code> | The package group pattern that is used to gather packages. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.contactInfo">ContactInfo</a></code> | <code>string</code> | The contact info of the package group. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.description">Description</a></code> | <code>string</code> | The text description of the package group. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.domainOwner">DomainOwner</a></code> | <code>string</code> | The 12-digit account ID of the AWS account that owns the domain. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.originConfiguration">OriginConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfiguration">CodeartifactPackageGroupOriginConfiguration</a></code> | The package origin configuration of the package group. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags">CodeartifactPackageGroupTags</a>[]</code> | An array of key-value pairs to apply to the package group. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.domainName"></a>

```csharp
public string DomainName { get; set; }
```

- *Type:* string

The name of the domain that contains the package group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#domain_name CodeartifactPackageGroup#domain_name}

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.pattern"></a>

```csharp
public string Pattern { get; set; }
```

- *Type:* string

The package group pattern that is used to gather packages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#pattern CodeartifactPackageGroup#pattern}

---

##### `ContactInfo`<sup>Optional</sup> <a name="ContactInfo" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.contactInfo"></a>

```csharp
public string ContactInfo { get; set; }
```

- *Type:* string

The contact info of the package group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#contact_info CodeartifactPackageGroup#contact_info}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The text description of the package group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#description CodeartifactPackageGroup#description}

---

##### `DomainOwner`<sup>Optional</sup> <a name="DomainOwner" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.domainOwner"></a>

```csharp
public string DomainOwner { get; set; }
```

- *Type:* string

The 12-digit account ID of the AWS account that owns the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#domain_owner CodeartifactPackageGroup#domain_owner}

---

##### `OriginConfiguration`<sup>Optional</sup> <a name="OriginConfiguration" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.originConfiguration"></a>

```csharp
public CodeartifactPackageGroupOriginConfiguration OriginConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfiguration">CodeartifactPackageGroupOriginConfiguration</a>

The package origin configuration of the package group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#origin_configuration CodeartifactPackageGroup#origin_configuration}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.tags"></a>

```csharp
public IResolvable|CodeartifactPackageGroupTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags">CodeartifactPackageGroupTags</a>[]

An array of key-value pairs to apply to the package group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#tags CodeartifactPackageGroup#tags}

---

### CodeartifactPackageGroupOriginConfiguration <a name="CodeartifactPackageGroupOriginConfiguration" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodeartifactPackageGroupOriginConfiguration {
    CodeartifactPackageGroupOriginConfigurationRestrictions Restrictions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfiguration.property.restrictions">Restrictions</a></code> | <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions">CodeartifactPackageGroupOriginConfigurationRestrictions</a></code> | The origin configuration that is applied to the package group. |

---

##### `Restrictions`<sup>Optional</sup> <a name="Restrictions" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfiguration.property.restrictions"></a>

```csharp
public CodeartifactPackageGroupOriginConfigurationRestrictions Restrictions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions">CodeartifactPackageGroupOriginConfigurationRestrictions</a>

The origin configuration that is applied to the package group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#restrictions CodeartifactPackageGroup#restrictions}

---

### CodeartifactPackageGroupOriginConfigurationRestrictions <a name="CodeartifactPackageGroupOriginConfigurationRestrictions" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodeartifactPackageGroupOriginConfigurationRestrictions {
    CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream ExternalUpstream = null,
    CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream InternalUpstream = null,
    CodeartifactPackageGroupOriginConfigurationRestrictionsPublish Publish = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions.property.externalUpstream">ExternalUpstream</a></code> | <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream">CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream</a></code> | The external upstream restriction determines if new package versions can be ingested or retained from external connections. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions.property.internalUpstream">InternalUpstream</a></code> | <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream">CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream</a></code> | The internal upstream restriction determines if new package versions can be ingested or retained from upstream repositories. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions.property.publish">Publish</a></code> | <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublish">CodeartifactPackageGroupOriginConfigurationRestrictionsPublish</a></code> | The publish restriction determines if new package versions can be published. |

---

##### `ExternalUpstream`<sup>Optional</sup> <a name="ExternalUpstream" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions.property.externalUpstream"></a>

```csharp
public CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream ExternalUpstream { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream">CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream</a>

The external upstream restriction determines if new package versions can be ingested or retained from external connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#external_upstream CodeartifactPackageGroup#external_upstream}

---

##### `InternalUpstream`<sup>Optional</sup> <a name="InternalUpstream" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions.property.internalUpstream"></a>

```csharp
public CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream InternalUpstream { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream">CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream</a>

The internal upstream restriction determines if new package versions can be ingested or retained from upstream repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#internal_upstream CodeartifactPackageGroup#internal_upstream}

---

##### `Publish`<sup>Optional</sup> <a name="Publish" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions.property.publish"></a>

```csharp
public CodeartifactPackageGroupOriginConfigurationRestrictionsPublish Publish { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublish">CodeartifactPackageGroupOriginConfigurationRestrictionsPublish</a>

The publish restriction determines if new package versions can be published.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#publish CodeartifactPackageGroup#publish}

---

### CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream <a name="CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream {
    string[] Repositories = null,
    string RestrictionMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream.property.repositories">Repositories</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#repositories CodeartifactPackageGroup#repositories}. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream.property.restrictionMode">RestrictionMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#restriction_mode CodeartifactPackageGroup#restriction_mode}. |

---

##### `Repositories`<sup>Optional</sup> <a name="Repositories" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream.property.repositories"></a>

```csharp
public string[] Repositories { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#repositories CodeartifactPackageGroup#repositories}.

---

##### `RestrictionMode`<sup>Optional</sup> <a name="RestrictionMode" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream.property.restrictionMode"></a>

```csharp
public string RestrictionMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#restriction_mode CodeartifactPackageGroup#restriction_mode}.

---

### CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream <a name="CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream {
    string[] Repositories = null,
    string RestrictionMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream.property.repositories">Repositories</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#repositories CodeartifactPackageGroup#repositories}. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream.property.restrictionMode">RestrictionMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#restriction_mode CodeartifactPackageGroup#restriction_mode}. |

---

##### `Repositories`<sup>Optional</sup> <a name="Repositories" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream.property.repositories"></a>

```csharp
public string[] Repositories { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#repositories CodeartifactPackageGroup#repositories}.

---

##### `RestrictionMode`<sup>Optional</sup> <a name="RestrictionMode" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream.property.restrictionMode"></a>

```csharp
public string RestrictionMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#restriction_mode CodeartifactPackageGroup#restriction_mode}.

---

### CodeartifactPackageGroupOriginConfigurationRestrictionsPublish <a name="CodeartifactPackageGroupOriginConfigurationRestrictionsPublish" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublish"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublish.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodeartifactPackageGroupOriginConfigurationRestrictionsPublish {
    string[] Repositories = null,
    string RestrictionMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublish.property.repositories">Repositories</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#repositories CodeartifactPackageGroup#repositories}. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublish.property.restrictionMode">RestrictionMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#restriction_mode CodeartifactPackageGroup#restriction_mode}. |

---

##### `Repositories`<sup>Optional</sup> <a name="Repositories" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublish.property.repositories"></a>

```csharp
public string[] Repositories { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#repositories CodeartifactPackageGroup#repositories}.

---

##### `RestrictionMode`<sup>Optional</sup> <a name="RestrictionMode" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublish.property.restrictionMode"></a>

```csharp
public string RestrictionMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#restriction_mode CodeartifactPackageGroup#restriction_mode}.

---

### CodeartifactPackageGroupTags <a name="CodeartifactPackageGroupTags" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodeartifactPackageGroupTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#key CodeartifactPackageGroup#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 1 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#value CodeartifactPackageGroup#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CodeartifactPackageGroupOriginConfigurationOutputReference <a name="CodeartifactPackageGroupOriginConfigurationOutputReference" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodeartifactPackageGroupOriginConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.putRestrictions">PutRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.resetRestrictions">ResetRestrictions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRestrictions` <a name="PutRestrictions" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.putRestrictions"></a>

```csharp
private void PutRestrictions(CodeartifactPackageGroupOriginConfigurationRestrictions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.putRestrictions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions">CodeartifactPackageGroupOriginConfigurationRestrictions</a>

---

##### `ResetRestrictions` <a name="ResetRestrictions" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.resetRestrictions"></a>

```csharp
private void ResetRestrictions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.property.restrictions">Restrictions</a></code> | <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference">CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.property.restrictionsInput">RestrictionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions">CodeartifactPackageGroupOriginConfigurationRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfiguration">CodeartifactPackageGroupOriginConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Restrictions`<sup>Required</sup> <a name="Restrictions" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.property.restrictions"></a>

```csharp
public CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference Restrictions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference">CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference</a>

---

##### `RestrictionsInput`<sup>Optional</sup> <a name="RestrictionsInput" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.property.restrictionsInput"></a>

```csharp
public IResolvable|CodeartifactPackageGroupOriginConfigurationRestrictions RestrictionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions">CodeartifactPackageGroupOriginConfigurationRestrictions</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CodeartifactPackageGroupOriginConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfiguration">CodeartifactPackageGroupOriginConfiguration</a>

---


### CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference <a name="CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.resetRepositories">ResetRepositories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.resetRestrictionMode">ResetRestrictionMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRepositories` <a name="ResetRepositories" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.resetRepositories"></a>

```csharp
private void ResetRepositories()
```

##### `ResetRestrictionMode` <a name="ResetRestrictionMode" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.resetRestrictionMode"></a>

```csharp
private void ResetRestrictionMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.repositoriesInput">RepositoriesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.restrictionModeInput">RestrictionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.repositories">Repositories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.restrictionMode">RestrictionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream">CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RepositoriesInput`<sup>Optional</sup> <a name="RepositoriesInput" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.repositoriesInput"></a>

```csharp
public string[] RepositoriesInput { get; }
```

- *Type:* string[]

---

##### `RestrictionModeInput`<sup>Optional</sup> <a name="RestrictionModeInput" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.restrictionModeInput"></a>

```csharp
public string RestrictionModeInput { get; }
```

- *Type:* string

---

##### `Repositories`<sup>Required</sup> <a name="Repositories" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.repositories"></a>

```csharp
public string[] Repositories { get; }
```

- *Type:* string[]

---

##### `RestrictionMode`<sup>Required</sup> <a name="RestrictionMode" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.restrictionMode"></a>

```csharp
public string RestrictionMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream">CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream</a>

---


### CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference <a name="CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.resetRepositories">ResetRepositories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.resetRestrictionMode">ResetRestrictionMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRepositories` <a name="ResetRepositories" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.resetRepositories"></a>

```csharp
private void ResetRepositories()
```

##### `ResetRestrictionMode` <a name="ResetRestrictionMode" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.resetRestrictionMode"></a>

```csharp
private void ResetRestrictionMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.repositoriesInput">RepositoriesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.restrictionModeInput">RestrictionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.repositories">Repositories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.restrictionMode">RestrictionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream">CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RepositoriesInput`<sup>Optional</sup> <a name="RepositoriesInput" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.repositoriesInput"></a>

```csharp
public string[] RepositoriesInput { get; }
```

- *Type:* string[]

---

##### `RestrictionModeInput`<sup>Optional</sup> <a name="RestrictionModeInput" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.restrictionModeInput"></a>

```csharp
public string RestrictionModeInput { get; }
```

- *Type:* string

---

##### `Repositories`<sup>Required</sup> <a name="Repositories" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.repositories"></a>

```csharp
public string[] Repositories { get; }
```

- *Type:* string[]

---

##### `RestrictionMode`<sup>Required</sup> <a name="RestrictionMode" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.restrictionMode"></a>

```csharp
public string RestrictionMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream">CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream</a>

---


### CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference <a name="CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.putExternalUpstream">PutExternalUpstream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.putInternalUpstream">PutInternalUpstream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.putPublish">PutPublish</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.resetExternalUpstream">ResetExternalUpstream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.resetInternalUpstream">ResetInternalUpstream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.resetPublish">ResetPublish</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExternalUpstream` <a name="PutExternalUpstream" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.putExternalUpstream"></a>

```csharp
private void PutExternalUpstream(CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.putExternalUpstream.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream">CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream</a>

---

##### `PutInternalUpstream` <a name="PutInternalUpstream" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.putInternalUpstream"></a>

```csharp
private void PutInternalUpstream(CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.putInternalUpstream.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream">CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream</a>

---

##### `PutPublish` <a name="PutPublish" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.putPublish"></a>

```csharp
private void PutPublish(CodeartifactPackageGroupOriginConfigurationRestrictionsPublish Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.putPublish.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublish">CodeartifactPackageGroupOriginConfigurationRestrictionsPublish</a>

---

##### `ResetExternalUpstream` <a name="ResetExternalUpstream" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.resetExternalUpstream"></a>

```csharp
private void ResetExternalUpstream()
```

##### `ResetInternalUpstream` <a name="ResetInternalUpstream" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.resetInternalUpstream"></a>

```csharp
private void ResetInternalUpstream()
```

##### `ResetPublish` <a name="ResetPublish" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.resetPublish"></a>

```csharp
private void ResetPublish()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.externalUpstream">ExternalUpstream</a></code> | <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference">CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.internalUpstream">InternalUpstream</a></code> | <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference">CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.publish">Publish</a></code> | <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference">CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.externalUpstreamInput">ExternalUpstreamInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream">CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.internalUpstreamInput">InternalUpstreamInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream">CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.publishInput">PublishInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublish">CodeartifactPackageGroupOriginConfigurationRestrictionsPublish</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions">CodeartifactPackageGroupOriginConfigurationRestrictions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExternalUpstream`<sup>Required</sup> <a name="ExternalUpstream" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.externalUpstream"></a>

```csharp
public CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference ExternalUpstream { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference">CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference</a>

---

##### `InternalUpstream`<sup>Required</sup> <a name="InternalUpstream" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.internalUpstream"></a>

```csharp
public CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference InternalUpstream { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference">CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference</a>

---

##### `Publish`<sup>Required</sup> <a name="Publish" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.publish"></a>

```csharp
public CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference Publish { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference">CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference</a>

---

##### `ExternalUpstreamInput`<sup>Optional</sup> <a name="ExternalUpstreamInput" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.externalUpstreamInput"></a>

```csharp
public IResolvable|CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream ExternalUpstreamInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream">CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream</a>

---

##### `InternalUpstreamInput`<sup>Optional</sup> <a name="InternalUpstreamInput" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.internalUpstreamInput"></a>

```csharp
public IResolvable|CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream InternalUpstreamInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream">CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream</a>

---

##### `PublishInput`<sup>Optional</sup> <a name="PublishInput" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.publishInput"></a>

```csharp
public IResolvable|CodeartifactPackageGroupOriginConfigurationRestrictionsPublish PublishInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublish">CodeartifactPackageGroupOriginConfigurationRestrictionsPublish</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CodeartifactPackageGroupOriginConfigurationRestrictions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions">CodeartifactPackageGroupOriginConfigurationRestrictions</a>

---


### CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference <a name="CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.resetRepositories">ResetRepositories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.resetRestrictionMode">ResetRestrictionMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRepositories` <a name="ResetRepositories" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.resetRepositories"></a>

```csharp
private void ResetRepositories()
```

##### `ResetRestrictionMode` <a name="ResetRestrictionMode" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.resetRestrictionMode"></a>

```csharp
private void ResetRestrictionMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.repositoriesInput">RepositoriesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.restrictionModeInput">RestrictionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.repositories">Repositories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.restrictionMode">RestrictionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublish">CodeartifactPackageGroupOriginConfigurationRestrictionsPublish</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RepositoriesInput`<sup>Optional</sup> <a name="RepositoriesInput" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.repositoriesInput"></a>

```csharp
public string[] RepositoriesInput { get; }
```

- *Type:* string[]

---

##### `RestrictionModeInput`<sup>Optional</sup> <a name="RestrictionModeInput" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.restrictionModeInput"></a>

```csharp
public string RestrictionModeInput { get; }
```

- *Type:* string

---

##### `Repositories`<sup>Required</sup> <a name="Repositories" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.repositories"></a>

```csharp
public string[] Repositories { get; }
```

- *Type:* string[]

---

##### `RestrictionMode`<sup>Required</sup> <a name="RestrictionMode" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.restrictionMode"></a>

```csharp
public string RestrictionMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CodeartifactPackageGroupOriginConfigurationRestrictionsPublish InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublish">CodeartifactPackageGroupOriginConfigurationRestrictionsPublish</a>

---


### CodeartifactPackageGroupTagsList <a name="CodeartifactPackageGroupTagsList" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodeartifactPackageGroupTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.get"></a>

```csharp
private CodeartifactPackageGroupTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags">CodeartifactPackageGroupTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.property.internalValue"></a>

```csharp
public IResolvable|CodeartifactPackageGroupTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags">CodeartifactPackageGroupTags</a>[]

---


### CodeartifactPackageGroupTagsOutputReference <a name="CodeartifactPackageGroupTagsOutputReference" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodeartifactPackageGroupTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags">CodeartifactPackageGroupTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CodeartifactPackageGroupTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags">CodeartifactPackageGroupTags</a>

---



