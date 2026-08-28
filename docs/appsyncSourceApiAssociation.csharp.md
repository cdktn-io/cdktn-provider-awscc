# `appsyncSourceApiAssociation` Submodule <a name="`appsyncSourceApiAssociation` Submodule" id="@cdktn/provider-awscc.appsyncSourceApiAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsyncSourceApiAssociation <a name="AppsyncSourceApiAssociation" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_source_api_association awscc_appsync_source_api_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncSourceApiAssociation(Construct Scope, string Id, AppsyncSourceApiAssociationConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig">AppsyncSourceApiAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig">AppsyncSourceApiAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.putSourceApiAssociationConfig">PutSourceApiAssociationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.resetMergedApiIdentifier">ResetMergedApiIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.resetSourceApiAssociationConfig">ResetSourceApiAssociationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.resetSourceApiIdentifier">ResetSourceApiIdentifier</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSourceApiAssociationConfig` <a name="PutSourceApiAssociationConfig" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.putSourceApiAssociationConfig"></a>

```csharp
private void PutSourceApiAssociationConfig(AppsyncSourceApiAssociationSourceApiAssociationConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.putSourceApiAssociationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfig">AppsyncSourceApiAssociationSourceApiAssociationConfig</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetMergedApiIdentifier` <a name="ResetMergedApiIdentifier" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.resetMergedApiIdentifier"></a>

```csharp
private void ResetMergedApiIdentifier()
```

##### `ResetSourceApiAssociationConfig` <a name="ResetSourceApiAssociationConfig" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.resetSourceApiAssociationConfig"></a>

```csharp
private void ResetSourceApiAssociationConfig()
```

##### `ResetSourceApiIdentifier` <a name="ResetSourceApiIdentifier" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.resetSourceApiIdentifier"></a>

```csharp
private void ResetSourceApiIdentifier()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AppsyncSourceApiAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppsyncSourceApiAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppsyncSourceApiAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppsyncSourceApiAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppsyncSourceApiAssociation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AppsyncSourceApiAssociation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppsyncSourceApiAssociation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppsyncSourceApiAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_source_api_association#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AppsyncSourceApiAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.associationArn">AssociationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.associationId">AssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.lastSuccessfulMergeDate">LastSuccessfulMergeDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.mergedApiArn">MergedApiArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.mergedApiId">MergedApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.sourceApiArn">SourceApiArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.sourceApiAssociationConfig">SourceApiAssociationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference">AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.sourceApiAssociationStatus">SourceApiAssociationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.sourceApiAssociationStatusDetail">SourceApiAssociationStatusDetail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.sourceApiId">SourceApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.mergedApiIdentifierInput">MergedApiIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.sourceApiAssociationConfigInput">SourceApiAssociationConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfig">AppsyncSourceApiAssociationSourceApiAssociationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.sourceApiIdentifierInput">SourceApiIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.mergedApiIdentifier">MergedApiIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.sourceApiIdentifier">SourceApiIdentifier</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AssociationArn`<sup>Required</sup> <a name="AssociationArn" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.associationArn"></a>

```csharp
public string AssociationArn { get; }
```

- *Type:* string

---

##### `AssociationId`<sup>Required</sup> <a name="AssociationId" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.associationId"></a>

```csharp
public string AssociationId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastSuccessfulMergeDate`<sup>Required</sup> <a name="LastSuccessfulMergeDate" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.lastSuccessfulMergeDate"></a>

```csharp
public string LastSuccessfulMergeDate { get; }
```

- *Type:* string

---

##### `MergedApiArn`<sup>Required</sup> <a name="MergedApiArn" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.mergedApiArn"></a>

```csharp
public string MergedApiArn { get; }
```

- *Type:* string

---

##### `MergedApiId`<sup>Required</sup> <a name="MergedApiId" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.mergedApiId"></a>

```csharp
public string MergedApiId { get; }
```

- *Type:* string

---

##### `SourceApiArn`<sup>Required</sup> <a name="SourceApiArn" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.sourceApiArn"></a>

```csharp
public string SourceApiArn { get; }
```

- *Type:* string

---

##### `SourceApiAssociationConfig`<sup>Required</sup> <a name="SourceApiAssociationConfig" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.sourceApiAssociationConfig"></a>

```csharp
public AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference SourceApiAssociationConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference">AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference</a>

---

##### `SourceApiAssociationStatus`<sup>Required</sup> <a name="SourceApiAssociationStatus" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.sourceApiAssociationStatus"></a>

```csharp
public string SourceApiAssociationStatus { get; }
```

- *Type:* string

---

##### `SourceApiAssociationStatusDetail`<sup>Required</sup> <a name="SourceApiAssociationStatusDetail" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.sourceApiAssociationStatusDetail"></a>

```csharp
public string SourceApiAssociationStatusDetail { get; }
```

- *Type:* string

---

##### `SourceApiId`<sup>Required</sup> <a name="SourceApiId" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.sourceApiId"></a>

```csharp
public string SourceApiId { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `MergedApiIdentifierInput`<sup>Optional</sup> <a name="MergedApiIdentifierInput" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.mergedApiIdentifierInput"></a>

```csharp
public string MergedApiIdentifierInput { get; }
```

- *Type:* string

---

##### `SourceApiAssociationConfigInput`<sup>Optional</sup> <a name="SourceApiAssociationConfigInput" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.sourceApiAssociationConfigInput"></a>

```csharp
public IResolvable|AppsyncSourceApiAssociationSourceApiAssociationConfig SourceApiAssociationConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfig">AppsyncSourceApiAssociationSourceApiAssociationConfig</a>

---

##### `SourceApiIdentifierInput`<sup>Optional</sup> <a name="SourceApiIdentifierInput" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.sourceApiIdentifierInput"></a>

```csharp
public string SourceApiIdentifierInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `MergedApiIdentifier`<sup>Required</sup> <a name="MergedApiIdentifier" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.mergedApiIdentifier"></a>

```csharp
public string MergedApiIdentifier { get; }
```

- *Type:* string

---

##### `SourceApiIdentifier`<sup>Required</sup> <a name="SourceApiIdentifier" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.sourceApiIdentifier"></a>

```csharp
public string SourceApiIdentifier { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppsyncSourceApiAssociationConfig <a name="AppsyncSourceApiAssociationConfig" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncSourceApiAssociationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Description = null,
    string MergedApiIdentifier = null,
    AppsyncSourceApiAssociationSourceApiAssociationConfig SourceApiAssociationConfig = null,
    string SourceApiIdentifier = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.description">Description</a></code> | <code>string</code> | Description of the SourceApiAssociation. |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.mergedApiIdentifier">MergedApiIdentifier</a></code> | <code>string</code> | Identifier of the Merged GraphQLApi to associate. It could be either GraphQLApi ApiId or ARN. |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.sourceApiAssociationConfig">SourceApiAssociationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfig">AppsyncSourceApiAssociationSourceApiAssociationConfig</a></code> | Customized configuration for SourceApiAssociation. |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.sourceApiIdentifier">SourceApiIdentifier</a></code> | <code>string</code> | Identifier of the Source GraphQLApi to associate. It could be either GraphQLApi ApiId or ARN. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the SourceApiAssociation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_source_api_association#description AppsyncSourceApiAssociation#description}

---

##### `MergedApiIdentifier`<sup>Optional</sup> <a name="MergedApiIdentifier" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.mergedApiIdentifier"></a>

```csharp
public string MergedApiIdentifier { get; set; }
```

- *Type:* string

Identifier of the Merged GraphQLApi to associate. It could be either GraphQLApi ApiId or ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_source_api_association#merged_api_identifier AppsyncSourceApiAssociation#merged_api_identifier}

---

##### `SourceApiAssociationConfig`<sup>Optional</sup> <a name="SourceApiAssociationConfig" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.sourceApiAssociationConfig"></a>

```csharp
public AppsyncSourceApiAssociationSourceApiAssociationConfig SourceApiAssociationConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfig">AppsyncSourceApiAssociationSourceApiAssociationConfig</a>

Customized configuration for SourceApiAssociation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_source_api_association#source_api_association_config AppsyncSourceApiAssociation#source_api_association_config}

---

##### `SourceApiIdentifier`<sup>Optional</sup> <a name="SourceApiIdentifier" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.sourceApiIdentifier"></a>

```csharp
public string SourceApiIdentifier { get; set; }
```

- *Type:* string

Identifier of the Source GraphQLApi to associate. It could be either GraphQLApi ApiId or ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_source_api_association#source_api_identifier AppsyncSourceApiAssociation#source_api_identifier}

---

### AppsyncSourceApiAssociationSourceApiAssociationConfig <a name="AppsyncSourceApiAssociationSourceApiAssociationConfig" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncSourceApiAssociationSourceApiAssociationConfig {
    string MergeType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfig.property.mergeType">MergeType</a></code> | <code>string</code> | Configuration of the merged behavior for the association. |

---

##### `MergeType`<sup>Optional</sup> <a name="MergeType" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfig.property.mergeType"></a>

```csharp
public string MergeType { get; set; }
```

- *Type:* string

Configuration of the merged behavior for the association.

For example when it could be auto or has to be manual.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_source_api_association#merge_type AppsyncSourceApiAssociation#merge_type}

---

## Classes <a name="Classes" id="Classes"></a>

### AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference <a name="AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.resetMergeType">ResetMergeType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMergeType` <a name="ResetMergeType" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.resetMergeType"></a>

```csharp
private void ResetMergeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.mergeTypeInput">MergeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.mergeType">MergeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfig">AppsyncSourceApiAssociationSourceApiAssociationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MergeTypeInput`<sup>Optional</sup> <a name="MergeTypeInput" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.mergeTypeInput"></a>

```csharp
public string MergeTypeInput { get; }
```

- *Type:* string

---

##### `MergeType`<sup>Required</sup> <a name="MergeType" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.mergeType"></a>

```csharp
public string MergeType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppsyncSourceApiAssociationSourceApiAssociationConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfig">AppsyncSourceApiAssociationSourceApiAssociationConfig</a>

---



