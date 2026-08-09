# `appconfigExtensionAssociation` Submodule <a name="`appconfigExtensionAssociation` Submodule" id="@cdktn/provider-awscc.appconfigExtensionAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppconfigExtensionAssociation <a name="AppconfigExtensionAssociation" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_extension_association awscc_appconfig_extension_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppconfigExtensionAssociation(Construct Scope, string Id, AppconfigExtensionAssociationConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig">AppconfigExtensionAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig">AppconfigExtensionAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.resetExtensionIdentifier">ResetExtensionIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.resetExtensionVersionNumber">ResetExtensionVersionNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.resetResourceIdentifier">ResetResourceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.putTags"></a>

```csharp
private void PutTags(IResolvable|AppconfigExtensionAssociationTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTags">AppconfigExtensionAssociationTags</a>[]

---

##### `ResetExtensionIdentifier` <a name="ResetExtensionIdentifier" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.resetExtensionIdentifier"></a>

```csharp
private void ResetExtensionIdentifier()
```

##### `ResetExtensionVersionNumber` <a name="ResetExtensionVersionNumber" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.resetExtensionVersionNumber"></a>

```csharp
private void ResetExtensionVersionNumber()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetResourceIdentifier` <a name="ResetResourceIdentifier" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.resetResourceIdentifier"></a>

```csharp
private void ResetResourceIdentifier()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AppconfigExtensionAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppconfigExtensionAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppconfigExtensionAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppconfigExtensionAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppconfigExtensionAssociation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AppconfigExtensionAssociation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppconfigExtensionAssociation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppconfigExtensionAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_extension_association#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AppconfigExtensionAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.extensionArn">ExtensionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.extensionAssociationId">ExtensionAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.resourceArn">ResourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsList">AppconfigExtensionAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.extensionIdentifierInput">ExtensionIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.extensionVersionNumberInput">ExtensionVersionNumberInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.resourceIdentifierInput">ResourceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTags">AppconfigExtensionAssociationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.extensionIdentifier">ExtensionIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.extensionVersionNumber">ExtensionVersionNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.resourceIdentifier">ResourceIdentifier</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ExtensionArn`<sup>Required</sup> <a name="ExtensionArn" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.extensionArn"></a>

```csharp
public string ExtensionArn { get; }
```

- *Type:* string

---

##### `ExtensionAssociationId`<sup>Required</sup> <a name="ExtensionAssociationId" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.extensionAssociationId"></a>

```csharp
public string ExtensionAssociationId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.resourceArn"></a>

```csharp
public string ResourceArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.tags"></a>

```csharp
public AppconfigExtensionAssociationTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsList">AppconfigExtensionAssociationTagsList</a>

---

##### `ExtensionIdentifierInput`<sup>Optional</sup> <a name="ExtensionIdentifierInput" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.extensionIdentifierInput"></a>

```csharp
public string ExtensionIdentifierInput { get; }
```

- *Type:* string

---

##### `ExtensionVersionNumberInput`<sup>Optional</sup> <a name="ExtensionVersionNumberInput" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.extensionVersionNumberInput"></a>

```csharp
public double ExtensionVersionNumberInput { get; }
```

- *Type:* double

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ResourceIdentifierInput`<sup>Optional</sup> <a name="ResourceIdentifierInput" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.resourceIdentifierInput"></a>

```csharp
public string ResourceIdentifierInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.tagsInput"></a>

```csharp
public IResolvable|AppconfigExtensionAssociationTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTags">AppconfigExtensionAssociationTags</a>[]

---

##### `ExtensionIdentifier`<sup>Required</sup> <a name="ExtensionIdentifier" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.extensionIdentifier"></a>

```csharp
public string ExtensionIdentifier { get; }
```

- *Type:* string

---

##### `ExtensionVersionNumber`<sup>Required</sup> <a name="ExtensionVersionNumber" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.extensionVersionNumber"></a>

```csharp
public double ExtensionVersionNumber { get; }
```

- *Type:* double

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ResourceIdentifier`<sup>Required</sup> <a name="ResourceIdentifier" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.resourceIdentifier"></a>

```csharp
public string ResourceIdentifier { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppconfigExtensionAssociationConfig <a name="AppconfigExtensionAssociationConfig" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppconfigExtensionAssociationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ExtensionIdentifier = null,
    double ExtensionVersionNumber = null,
    System.Collections.Generic.IDictionary<string, string> Parameters = null,
    string ResourceIdentifier = null,
    IResolvable|AppconfigExtensionAssociationTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.extensionIdentifier">ExtensionIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_extension_association#extension_identifier AppconfigExtensionAssociation#extension_identifier}. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.extensionVersionNumber">ExtensionVersionNumber</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_extension_association#extension_version_number AppconfigExtensionAssociation#extension_version_number}. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_extension_association#parameters AppconfigExtensionAssociation#parameters}. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.resourceIdentifier">ResourceIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_extension_association#resource_identifier AppconfigExtensionAssociation#resource_identifier}. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTags">AppconfigExtensionAssociationTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ExtensionIdentifier`<sup>Optional</sup> <a name="ExtensionIdentifier" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.extensionIdentifier"></a>

```csharp
public string ExtensionIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_extension_association#extension_identifier AppconfigExtensionAssociation#extension_identifier}.

---

##### `ExtensionVersionNumber`<sup>Optional</sup> <a name="ExtensionVersionNumber" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.extensionVersionNumber"></a>

```csharp
public double ExtensionVersionNumber { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_extension_association#extension_version_number AppconfigExtensionAssociation#extension_version_number}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_extension_association#parameters AppconfigExtensionAssociation#parameters}.

---

##### `ResourceIdentifier`<sup>Optional</sup> <a name="ResourceIdentifier" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.resourceIdentifier"></a>

```csharp
public string ResourceIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_extension_association#resource_identifier AppconfigExtensionAssociation#resource_identifier}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.tags"></a>

```csharp
public IResolvable|AppconfigExtensionAssociationTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTags">AppconfigExtensionAssociationTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_extension_association#tags AppconfigExtensionAssociation#tags}

---

### AppconfigExtensionAssociationTags <a name="AppconfigExtensionAssociationTags" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppconfigExtensionAssociationTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_extension_association#key AppconfigExtensionAssociation#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_extension_association#value AppconfigExtensionAssociation#value}

---

## Classes <a name="Classes" id="Classes"></a>

### AppconfigExtensionAssociationTagsList <a name="AppconfigExtensionAssociationTagsList" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppconfigExtensionAssociationTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsList.get"></a>

```csharp
private AppconfigExtensionAssociationTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTags">AppconfigExtensionAssociationTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsList.property.internalValue"></a>

```csharp
public IResolvable|AppconfigExtensionAssociationTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTags">AppconfigExtensionAssociationTags</a>[]

---


### AppconfigExtensionAssociationTagsOutputReference <a name="AppconfigExtensionAssociationTagsOutputReference" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppconfigExtensionAssociationTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTags">AppconfigExtensionAssociationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppconfigExtensionAssociationTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTags">AppconfigExtensionAssociationTags</a>

---



