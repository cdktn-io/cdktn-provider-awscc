# `globalacceleratorCrossAccountAttachment` Submodule <a name="`globalacceleratorCrossAccountAttachment` Submodule" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlobalacceleratorCrossAccountAttachment <a name="GlobalacceleratorCrossAccountAttachment" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_cross_account_attachment awscc_globalaccelerator_cross_account_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlobalacceleratorCrossAccountAttachment(Construct Scope, string Id, GlobalacceleratorCrossAccountAttachmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig">GlobalacceleratorCrossAccountAttachmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig">GlobalacceleratorCrossAccountAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.putResources">PutResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.resetPrincipals">ResetPrincipals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.resetResources">ResetResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutResources` <a name="PutResources" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.putResources"></a>

```csharp
private void PutResources(IResolvable|GlobalacceleratorCrossAccountAttachmentResources[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.putResources.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResources">GlobalacceleratorCrossAccountAttachmentResources</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.putTags"></a>

```csharp
private void PutTags(IResolvable|GlobalacceleratorCrossAccountAttachmentTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTags">GlobalacceleratorCrossAccountAttachmentTags</a>[]

---

##### `ResetPrincipals` <a name="ResetPrincipals" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.resetPrincipals"></a>

```csharp
private void ResetPrincipals()
```

##### `ResetResources` <a name="ResetResources" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.resetResources"></a>

```csharp
private void ResetResources()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GlobalacceleratorCrossAccountAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GlobalacceleratorCrossAccountAttachment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GlobalacceleratorCrossAccountAttachment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GlobalacceleratorCrossAccountAttachment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GlobalacceleratorCrossAccountAttachment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GlobalacceleratorCrossAccountAttachment resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GlobalacceleratorCrossAccountAttachment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GlobalacceleratorCrossAccountAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_cross_account_attachment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GlobalacceleratorCrossAccountAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.attachmentArn">AttachmentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.resources">Resources</a></code> | <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList">GlobalacceleratorCrossAccountAttachmentResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList">GlobalacceleratorCrossAccountAttachmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.principalsInput">PrincipalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.resourcesInput">ResourcesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResources">GlobalacceleratorCrossAccountAttachmentResources</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTags">GlobalacceleratorCrossAccountAttachmentTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.principals">Principals</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AttachmentArn`<sup>Required</sup> <a name="AttachmentArn" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.attachmentArn"></a>

```csharp
public string AttachmentArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.resources"></a>

```csharp
public GlobalacceleratorCrossAccountAttachmentResourcesList Resources { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList">GlobalacceleratorCrossAccountAttachmentResourcesList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.tags"></a>

```csharp
public GlobalacceleratorCrossAccountAttachmentTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList">GlobalacceleratorCrossAccountAttachmentTagsList</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PrincipalsInput`<sup>Optional</sup> <a name="PrincipalsInput" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.principalsInput"></a>

```csharp
public string[] PrincipalsInput { get; }
```

- *Type:* string[]

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.resourcesInput"></a>

```csharp
public IResolvable|GlobalacceleratorCrossAccountAttachmentResources[] ResourcesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResources">GlobalacceleratorCrossAccountAttachmentResources</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.tagsInput"></a>

```csharp
public IResolvable|GlobalacceleratorCrossAccountAttachmentTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTags">GlobalacceleratorCrossAccountAttachmentTags</a>[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Principals`<sup>Required</sup> <a name="Principals" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.principals"></a>

```csharp
public string[] Principals { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlobalacceleratorCrossAccountAttachmentConfig <a name="GlobalacceleratorCrossAccountAttachmentConfig" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlobalacceleratorCrossAccountAttachmentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string[] Principals = null,
    IResolvable|GlobalacceleratorCrossAccountAttachmentResources[] Resources = null,
    IResolvable|GlobalacceleratorCrossAccountAttachmentTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.name">Name</a></code> | <code>string</code> | The Friendly identifier of the attachment. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.principals">Principals</a></code> | <code>string[]</code> | Principals to share the resources with. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.resources">Resources</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResources">GlobalacceleratorCrossAccountAttachmentResources</a>[]</code> | Resources shared using the attachment. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTags">GlobalacceleratorCrossAccountAttachmentTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_cross_account_attachment#tags GlobalacceleratorCrossAccountAttachment#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The Friendly identifier of the attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_cross_account_attachment#name GlobalacceleratorCrossAccountAttachment#name}

---

##### `Principals`<sup>Optional</sup> <a name="Principals" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.principals"></a>

```csharp
public string[] Principals { get; set; }
```

- *Type:* string[]

Principals to share the resources with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_cross_account_attachment#principals GlobalacceleratorCrossAccountAttachment#principals}

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.resources"></a>

```csharp
public IResolvable|GlobalacceleratorCrossAccountAttachmentResources[] Resources { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResources">GlobalacceleratorCrossAccountAttachmentResources</a>[]

Resources shared using the attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_cross_account_attachment#resources GlobalacceleratorCrossAccountAttachment#resources}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.tags"></a>

```csharp
public IResolvable|GlobalacceleratorCrossAccountAttachmentTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTags">GlobalacceleratorCrossAccountAttachmentTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_cross_account_attachment#tags GlobalacceleratorCrossAccountAttachment#tags}.

---

### GlobalacceleratorCrossAccountAttachmentResources <a name="GlobalacceleratorCrossAccountAttachmentResources" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResources.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlobalacceleratorCrossAccountAttachmentResources {
    string Cidr = null,
    string EndpointId = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResources.property.cidr">Cidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_cross_account_attachment#cidr GlobalacceleratorCrossAccountAttachment#cidr}. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResources.property.endpointId">EndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_cross_account_attachment#endpoint_id GlobalacceleratorCrossAccountAttachment#endpoint_id}. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResources.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_cross_account_attachment#region GlobalacceleratorCrossAccountAttachment#region}. |

---

##### `Cidr`<sup>Optional</sup> <a name="Cidr" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResources.property.cidr"></a>

```csharp
public string Cidr { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_cross_account_attachment#cidr GlobalacceleratorCrossAccountAttachment#cidr}.

---

##### `EndpointId`<sup>Optional</sup> <a name="EndpointId" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResources.property.endpointId"></a>

```csharp
public string EndpointId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_cross_account_attachment#endpoint_id GlobalacceleratorCrossAccountAttachment#endpoint_id}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResources.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_cross_account_attachment#region GlobalacceleratorCrossAccountAttachment#region}.

---

### GlobalacceleratorCrossAccountAttachmentTags <a name="GlobalacceleratorCrossAccountAttachmentTags" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlobalacceleratorCrossAccountAttachmentTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTags.property.key">Key</a></code> | <code>string</code> | Key of the tag. Value can be 1 to 127 characters. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTags.property.value">Value</a></code> | <code>string</code> | Value for the tag. Value can be 1 to 255 characters. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Key of the tag. Value can be 1 to 127 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_cross_account_attachment#key GlobalacceleratorCrossAccountAttachment#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Value for the tag. Value can be 1 to 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_cross_account_attachment#value GlobalacceleratorCrossAccountAttachment#value}

---

## Classes <a name="Classes" id="Classes"></a>

### GlobalacceleratorCrossAccountAttachmentResourcesList <a name="GlobalacceleratorCrossAccountAttachmentResourcesList" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlobalacceleratorCrossAccountAttachmentResourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.get"></a>

```csharp
private GlobalacceleratorCrossAccountAttachmentResourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResources">GlobalacceleratorCrossAccountAttachmentResources</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.property.internalValue"></a>

```csharp
public IResolvable|GlobalacceleratorCrossAccountAttachmentResources[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResources">GlobalacceleratorCrossAccountAttachmentResources</a>[]

---


### GlobalacceleratorCrossAccountAttachmentResourcesOutputReference <a name="GlobalacceleratorCrossAccountAttachmentResourcesOutputReference" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlobalacceleratorCrossAccountAttachmentResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.resetCidr">ResetCidr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.resetEndpointId">ResetEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCidr` <a name="ResetCidr" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.resetCidr"></a>

```csharp
private void ResetCidr()
```

##### `ResetEndpointId` <a name="ResetEndpointId" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.resetEndpointId"></a>

```csharp
private void ResetEndpointId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.resetRegion"></a>

```csharp
private void ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.cidrInput">CidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.endpointIdInput">EndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.cidr">Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.endpointId">EndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResources">GlobalacceleratorCrossAccountAttachmentResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CidrInput`<sup>Optional</sup> <a name="CidrInput" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.cidrInput"></a>

```csharp
public string CidrInput { get; }
```

- *Type:* string

---

##### `EndpointIdInput`<sup>Optional</sup> <a name="EndpointIdInput" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.endpointIdInput"></a>

```csharp
public string EndpointIdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.cidr"></a>

```csharp
public string Cidr { get; }
```

- *Type:* string

---

##### `EndpointId`<sup>Required</sup> <a name="EndpointId" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.endpointId"></a>

```csharp
public string EndpointId { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlobalacceleratorCrossAccountAttachmentResources InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResources">GlobalacceleratorCrossAccountAttachmentResources</a>

---


### GlobalacceleratorCrossAccountAttachmentTagsList <a name="GlobalacceleratorCrossAccountAttachmentTagsList" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlobalacceleratorCrossAccountAttachmentTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.get"></a>

```csharp
private GlobalacceleratorCrossAccountAttachmentTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTags">GlobalacceleratorCrossAccountAttachmentTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.property.internalValue"></a>

```csharp
public IResolvable|GlobalacceleratorCrossAccountAttachmentTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTags">GlobalacceleratorCrossAccountAttachmentTags</a>[]

---


### GlobalacceleratorCrossAccountAttachmentTagsOutputReference <a name="GlobalacceleratorCrossAccountAttachmentTagsOutputReference" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlobalacceleratorCrossAccountAttachmentTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTags">GlobalacceleratorCrossAccountAttachmentTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlobalacceleratorCrossAccountAttachmentTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTags">GlobalacceleratorCrossAccountAttachmentTags</a>

---



