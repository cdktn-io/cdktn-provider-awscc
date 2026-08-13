# `pcaconnectoradTemplateGroupAccessControlEntry` Submodule <a name="`pcaconnectoradTemplateGroupAccessControlEntry` Submodule" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PcaconnectoradTemplateGroupAccessControlEntry <a name="PcaconnectoradTemplateGroupAccessControlEntry" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pcaconnectorad_template_group_access_control_entry awscc_pcaconnectorad_template_group_access_control_entry}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PcaconnectoradTemplateGroupAccessControlEntry(Construct Scope, string Id, PcaconnectoradTemplateGroupAccessControlEntryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig">PcaconnectoradTemplateGroupAccessControlEntryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig">PcaconnectoradTemplateGroupAccessControlEntryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.putAccessRights">PutAccessRights</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccessRights` <a name="PutAccessRights" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.putAccessRights"></a>

```csharp
private void PutAccessRights(PcaconnectoradTemplateGroupAccessControlEntryAccessRights Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.putAccessRights.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights">PcaconnectoradTemplateGroupAccessControlEntryAccessRights</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PcaconnectoradTemplateGroupAccessControlEntry resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

PcaconnectoradTemplateGroupAccessControlEntry.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

PcaconnectoradTemplateGroupAccessControlEntry.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

PcaconnectoradTemplateGroupAccessControlEntry.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

PcaconnectoradTemplateGroupAccessControlEntry.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a PcaconnectoradTemplateGroupAccessControlEntry resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PcaconnectoradTemplateGroupAccessControlEntry to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PcaconnectoradTemplateGroupAccessControlEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pcaconnectorad_template_group_access_control_entry#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the PcaconnectoradTemplateGroupAccessControlEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.accessRights">AccessRights</a></code> | <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference">PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.accessRightsInput">AccessRightsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights">PcaconnectoradTemplateGroupAccessControlEntryAccessRights</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.groupDisplayNameInput">GroupDisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.groupSecurityIdentifierInput">GroupSecurityIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.templateArnInput">TemplateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.groupDisplayName">GroupDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.groupSecurityIdentifier">GroupSecurityIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.templateArn">TemplateArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccessRights`<sup>Required</sup> <a name="AccessRights" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.accessRights"></a>

```csharp
public PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference AccessRights { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference">PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `AccessRightsInput`<sup>Optional</sup> <a name="AccessRightsInput" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.accessRightsInput"></a>

```csharp
public IResolvable|PcaconnectoradTemplateGroupAccessControlEntryAccessRights AccessRightsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights">PcaconnectoradTemplateGroupAccessControlEntryAccessRights</a>

---

##### `GroupDisplayNameInput`<sup>Optional</sup> <a name="GroupDisplayNameInput" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.groupDisplayNameInput"></a>

```csharp
public string GroupDisplayNameInput { get; }
```

- *Type:* string

---

##### `GroupSecurityIdentifierInput`<sup>Optional</sup> <a name="GroupSecurityIdentifierInput" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.groupSecurityIdentifierInput"></a>

```csharp
public string GroupSecurityIdentifierInput { get; }
```

- *Type:* string

---

##### `TemplateArnInput`<sup>Optional</sup> <a name="TemplateArnInput" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.templateArnInput"></a>

```csharp
public string TemplateArnInput { get; }
```

- *Type:* string

---

##### `GroupDisplayName`<sup>Required</sup> <a name="GroupDisplayName" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.groupDisplayName"></a>

```csharp
public string GroupDisplayName { get; }
```

- *Type:* string

---

##### `GroupSecurityIdentifier`<sup>Required</sup> <a name="GroupSecurityIdentifier" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.groupSecurityIdentifier"></a>

```csharp
public string GroupSecurityIdentifier { get; }
```

- *Type:* string

---

##### `TemplateArn`<sup>Required</sup> <a name="TemplateArn" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.templateArn"></a>

```csharp
public string TemplateArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PcaconnectoradTemplateGroupAccessControlEntryAccessRights <a name="PcaconnectoradTemplateGroupAccessControlEntryAccessRights" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PcaconnectoradTemplateGroupAccessControlEntryAccessRights {
    string AutoEnroll = null,
    string Enroll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights.property.autoEnroll">AutoEnroll</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pcaconnectorad_template_group_access_control_entry#auto_enroll PcaconnectoradTemplateGroupAccessControlEntry#auto_enroll}. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights.property.enroll">Enroll</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pcaconnectorad_template_group_access_control_entry#enroll PcaconnectoradTemplateGroupAccessControlEntry#enroll}. |

---

##### `AutoEnroll`<sup>Optional</sup> <a name="AutoEnroll" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights.property.autoEnroll"></a>

```csharp
public string AutoEnroll { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pcaconnectorad_template_group_access_control_entry#auto_enroll PcaconnectoradTemplateGroupAccessControlEntry#auto_enroll}.

---

##### `Enroll`<sup>Optional</sup> <a name="Enroll" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights.property.enroll"></a>

```csharp
public string Enroll { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pcaconnectorad_template_group_access_control_entry#enroll PcaconnectoradTemplateGroupAccessControlEntry#enroll}.

---

### PcaconnectoradTemplateGroupAccessControlEntryConfig <a name="PcaconnectoradTemplateGroupAccessControlEntryConfig" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PcaconnectoradTemplateGroupAccessControlEntryConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    PcaconnectoradTemplateGroupAccessControlEntryAccessRights AccessRights,
    string GroupDisplayName,
    string GroupSecurityIdentifier,
    string TemplateArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.accessRights">AccessRights</a></code> | <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights">PcaconnectoradTemplateGroupAccessControlEntryAccessRights</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pcaconnectorad_template_group_access_control_entry#access_rights PcaconnectoradTemplateGroupAccessControlEntry#access_rights}. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.groupDisplayName">GroupDisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pcaconnectorad_template_group_access_control_entry#group_display_name PcaconnectoradTemplateGroupAccessControlEntry#group_display_name}. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.groupSecurityIdentifier">GroupSecurityIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pcaconnectorad_template_group_access_control_entry#group_security_identifier PcaconnectoradTemplateGroupAccessControlEntry#group_security_identifier}. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.templateArn">TemplateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pcaconnectorad_template_group_access_control_entry#template_arn PcaconnectoradTemplateGroupAccessControlEntry#template_arn}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccessRights`<sup>Required</sup> <a name="AccessRights" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.accessRights"></a>

```csharp
public PcaconnectoradTemplateGroupAccessControlEntryAccessRights AccessRights { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights">PcaconnectoradTemplateGroupAccessControlEntryAccessRights</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pcaconnectorad_template_group_access_control_entry#access_rights PcaconnectoradTemplateGroupAccessControlEntry#access_rights}.

---

##### `GroupDisplayName`<sup>Required</sup> <a name="GroupDisplayName" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.groupDisplayName"></a>

```csharp
public string GroupDisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pcaconnectorad_template_group_access_control_entry#group_display_name PcaconnectoradTemplateGroupAccessControlEntry#group_display_name}.

---

##### `GroupSecurityIdentifier`<sup>Required</sup> <a name="GroupSecurityIdentifier" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.groupSecurityIdentifier"></a>

```csharp
public string GroupSecurityIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pcaconnectorad_template_group_access_control_entry#group_security_identifier PcaconnectoradTemplateGroupAccessControlEntry#group_security_identifier}.

---

##### `TemplateArn`<sup>Required</sup> <a name="TemplateArn" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.templateArn"></a>

```csharp
public string TemplateArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pcaconnectorad_template_group_access_control_entry#template_arn PcaconnectoradTemplateGroupAccessControlEntry#template_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference <a name="PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.resetAutoEnroll">ResetAutoEnroll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.resetEnroll">ResetEnroll</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutoEnroll` <a name="ResetAutoEnroll" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.resetAutoEnroll"></a>

```csharp
private void ResetAutoEnroll()
```

##### `ResetEnroll` <a name="ResetEnroll" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.resetEnroll"></a>

```csharp
private void ResetEnroll()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.autoEnrollInput">AutoEnrollInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.enrollInput">EnrollInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.autoEnroll">AutoEnroll</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.enroll">Enroll</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights">PcaconnectoradTemplateGroupAccessControlEntryAccessRights</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoEnrollInput`<sup>Optional</sup> <a name="AutoEnrollInput" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.autoEnrollInput"></a>

```csharp
public string AutoEnrollInput { get; }
```

- *Type:* string

---

##### `EnrollInput`<sup>Optional</sup> <a name="EnrollInput" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.enrollInput"></a>

```csharp
public string EnrollInput { get; }
```

- *Type:* string

---

##### `AutoEnroll`<sup>Required</sup> <a name="AutoEnroll" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.autoEnroll"></a>

```csharp
public string AutoEnroll { get; }
```

- *Type:* string

---

##### `Enroll`<sup>Required</sup> <a name="Enroll" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.enroll"></a>

```csharp
public string Enroll { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PcaconnectoradTemplateGroupAccessControlEntryAccessRights InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights">PcaconnectoradTemplateGroupAccessControlEntryAccessRights</a>

---



