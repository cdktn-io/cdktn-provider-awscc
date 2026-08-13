# `awsexternalanthropicWorkspace` Submodule <a name="`awsexternalanthropicWorkspace` Submodule" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsexternalanthropicWorkspace <a name="AwsexternalanthropicWorkspace" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/awsexternalanthropic_workspace awscc_awsexternalanthropic_workspace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AwsexternalanthropicWorkspace(Construct Scope, string Id, AwsexternalanthropicWorkspaceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig">AwsexternalanthropicWorkspaceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig">AwsexternalanthropicWorkspaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.putDataResidency">PutDataResidency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.resetDataResidency">ResetDataResidency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDataResidency` <a name="PutDataResidency" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.putDataResidency"></a>

```csharp
private void PutDataResidency(AwsexternalanthropicWorkspaceDataResidency Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.putDataResidency.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidency">AwsexternalanthropicWorkspaceDataResidency</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.putTags"></a>

```csharp
private void PutTags(IResolvable|AwsexternalanthropicWorkspaceTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTags">AwsexternalanthropicWorkspaceTags</a>[]

---

##### `ResetDataResidency` <a name="ResetDataResidency" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.resetDataResidency"></a>

```csharp
private void ResetDataResidency()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AwsexternalanthropicWorkspace resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AwsexternalanthropicWorkspace.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AwsexternalanthropicWorkspace.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AwsexternalanthropicWorkspace.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AwsexternalanthropicWorkspace.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AwsexternalanthropicWorkspace resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AwsexternalanthropicWorkspace to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AwsexternalanthropicWorkspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/awsexternalanthropic_workspace#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AwsexternalanthropicWorkspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.dataResidency">DataResidency</a></code> | <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference">AwsexternalanthropicWorkspaceDataResidencyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList">AwsexternalanthropicWorkspaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.dataResidencyInput">DataResidencyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidency">AwsexternalanthropicWorkspaceDataResidency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTags">AwsexternalanthropicWorkspaceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `DataResidency`<sup>Required</sup> <a name="DataResidency" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.dataResidency"></a>

```csharp
public AwsexternalanthropicWorkspaceDataResidencyOutputReference DataResidency { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference">AwsexternalanthropicWorkspaceDataResidencyOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.tags"></a>

```csharp
public AwsexternalanthropicWorkspaceTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList">AwsexternalanthropicWorkspaceTagsList</a>

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `DataResidencyInput`<sup>Optional</sup> <a name="DataResidencyInput" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.dataResidencyInput"></a>

```csharp
public IResolvable|AwsexternalanthropicWorkspaceDataResidency DataResidencyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidency">AwsexternalanthropicWorkspaceDataResidency</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.tagsInput"></a>

```csharp
public IResolvable|AwsexternalanthropicWorkspaceTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTags">AwsexternalanthropicWorkspaceTags</a>[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AwsexternalanthropicWorkspaceConfig <a name="AwsexternalanthropicWorkspaceConfig" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AwsexternalanthropicWorkspaceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    AwsexternalanthropicWorkspaceDataResidency DataResidency = null,
    IResolvable|AwsexternalanthropicWorkspaceTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.name">Name</a></code> | <code>string</code> | The name of the workspace. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.dataResidency">DataResidency</a></code> | <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidency">AwsexternalanthropicWorkspaceDataResidency</a></code> | Data residency configuration for the workspace. WorkspaceGeo is immutable after creation. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTags">AwsexternalanthropicWorkspaceTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/awsexternalanthropic_workspace#name AwsexternalanthropicWorkspace#name}

---

##### `DataResidency`<sup>Optional</sup> <a name="DataResidency" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.dataResidency"></a>

```csharp
public AwsexternalanthropicWorkspaceDataResidency DataResidency { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidency">AwsexternalanthropicWorkspaceDataResidency</a>

Data residency configuration for the workspace. WorkspaceGeo is immutable after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/awsexternalanthropic_workspace#data_residency AwsexternalanthropicWorkspace#data_residency}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.tags"></a>

```csharp
public IResolvable|AwsexternalanthropicWorkspaceTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTags">AwsexternalanthropicWorkspaceTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/awsexternalanthropic_workspace#tags AwsexternalanthropicWorkspace#tags}

---

### AwsexternalanthropicWorkspaceDataResidency <a name="AwsexternalanthropicWorkspaceDataResidency" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidency"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidency.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AwsexternalanthropicWorkspaceDataResidency {
    string[] AllowedInferenceGeos = null,
    string DefaultInferenceGeo = null,
    string WorkspaceGeo = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidency.property.allowedInferenceGeos">AllowedInferenceGeos</a></code> | <code>string[]</code> | Permitted inference geo values. Omit to allow all geos (the service default of 'unrestricted'); otherwise list specific geos. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidency.property.defaultInferenceGeo">DefaultInferenceGeo</a></code> | <code>string</code> | Default inference geo applied when requests omit the parameter. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidency.property.workspaceGeo">WorkspaceGeo</a></code> | <code>string</code> | Geographic region for workspace data storage. Immutable after creation. Defaults to 'us' if omitted. |

---

##### `AllowedInferenceGeos`<sup>Optional</sup> <a name="AllowedInferenceGeos" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidency.property.allowedInferenceGeos"></a>

```csharp
public string[] AllowedInferenceGeos { get; set; }
```

- *Type:* string[]

Permitted inference geo values. Omit to allow all geos (the service default of 'unrestricted'); otherwise list specific geos.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/awsexternalanthropic_workspace#allowed_inference_geos AwsexternalanthropicWorkspace#allowed_inference_geos}

---

##### `DefaultInferenceGeo`<sup>Optional</sup> <a name="DefaultInferenceGeo" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidency.property.defaultInferenceGeo"></a>

```csharp
public string DefaultInferenceGeo { get; set; }
```

- *Type:* string

Default inference geo applied when requests omit the parameter.

Defaults to 'global' if omitted. Must be a member of AllowedInferenceGeos unless AllowedInferenceGeos is omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/awsexternalanthropic_workspace#default_inference_geo AwsexternalanthropicWorkspace#default_inference_geo}

---

##### `WorkspaceGeo`<sup>Optional</sup> <a name="WorkspaceGeo" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidency.property.workspaceGeo"></a>

```csharp
public string WorkspaceGeo { get; set; }
```

- *Type:* string

Geographic region for workspace data storage. Immutable after creation. Defaults to 'us' if omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/awsexternalanthropic_workspace#workspace_geo AwsexternalanthropicWorkspace#workspace_geo}

---

### AwsexternalanthropicWorkspaceTags <a name="AwsexternalanthropicWorkspaceTags" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AwsexternalanthropicWorkspaceTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/awsexternalanthropic_workspace#key AwsexternalanthropicWorkspace#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/awsexternalanthropic_workspace#value AwsexternalanthropicWorkspace#value}

---

## Classes <a name="Classes" id="Classes"></a>

### AwsexternalanthropicWorkspaceDataResidencyOutputReference <a name="AwsexternalanthropicWorkspaceDataResidencyOutputReference" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AwsexternalanthropicWorkspaceDataResidencyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.resetAllowedInferenceGeos">ResetAllowedInferenceGeos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.resetDefaultInferenceGeo">ResetDefaultInferenceGeo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.resetWorkspaceGeo">ResetWorkspaceGeo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedInferenceGeos` <a name="ResetAllowedInferenceGeos" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.resetAllowedInferenceGeos"></a>

```csharp
private void ResetAllowedInferenceGeos()
```

##### `ResetDefaultInferenceGeo` <a name="ResetDefaultInferenceGeo" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.resetDefaultInferenceGeo"></a>

```csharp
private void ResetDefaultInferenceGeo()
```

##### `ResetWorkspaceGeo` <a name="ResetWorkspaceGeo" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.resetWorkspaceGeo"></a>

```csharp
private void ResetWorkspaceGeo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.allowedInferenceGeosInput">AllowedInferenceGeosInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.defaultInferenceGeoInput">DefaultInferenceGeoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.workspaceGeoInput">WorkspaceGeoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.allowedInferenceGeos">AllowedInferenceGeos</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.defaultInferenceGeo">DefaultInferenceGeo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.workspaceGeo">WorkspaceGeo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidency">AwsexternalanthropicWorkspaceDataResidency</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedInferenceGeosInput`<sup>Optional</sup> <a name="AllowedInferenceGeosInput" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.allowedInferenceGeosInput"></a>

```csharp
public string[] AllowedInferenceGeosInput { get; }
```

- *Type:* string[]

---

##### `DefaultInferenceGeoInput`<sup>Optional</sup> <a name="DefaultInferenceGeoInput" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.defaultInferenceGeoInput"></a>

```csharp
public string DefaultInferenceGeoInput { get; }
```

- *Type:* string

---

##### `WorkspaceGeoInput`<sup>Optional</sup> <a name="WorkspaceGeoInput" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.workspaceGeoInput"></a>

```csharp
public string WorkspaceGeoInput { get; }
```

- *Type:* string

---

##### `AllowedInferenceGeos`<sup>Required</sup> <a name="AllowedInferenceGeos" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.allowedInferenceGeos"></a>

```csharp
public string[] AllowedInferenceGeos { get; }
```

- *Type:* string[]

---

##### `DefaultInferenceGeo`<sup>Required</sup> <a name="DefaultInferenceGeo" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.defaultInferenceGeo"></a>

```csharp
public string DefaultInferenceGeo { get; }
```

- *Type:* string

---

##### `WorkspaceGeo`<sup>Required</sup> <a name="WorkspaceGeo" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.workspaceGeo"></a>

```csharp
public string WorkspaceGeo { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AwsexternalanthropicWorkspaceDataResidency InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidency">AwsexternalanthropicWorkspaceDataResidency</a>

---


### AwsexternalanthropicWorkspaceTagsList <a name="AwsexternalanthropicWorkspaceTagsList" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AwsexternalanthropicWorkspaceTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.get"></a>

```csharp
private AwsexternalanthropicWorkspaceTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTags">AwsexternalanthropicWorkspaceTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.property.internalValue"></a>

```csharp
public IResolvable|AwsexternalanthropicWorkspaceTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTags">AwsexternalanthropicWorkspaceTags</a>[]

---


### AwsexternalanthropicWorkspaceTagsOutputReference <a name="AwsexternalanthropicWorkspaceTagsOutputReference" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AwsexternalanthropicWorkspaceTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTags">AwsexternalanthropicWorkspaceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AwsexternalanthropicWorkspaceTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTags">AwsexternalanthropicWorkspaceTags</a>

---



