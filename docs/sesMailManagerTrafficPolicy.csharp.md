# `sesMailManagerTrafficPolicy` Submodule <a name="`sesMailManagerTrafficPolicy` Submodule" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SesMailManagerTrafficPolicy <a name="SesMailManagerTrafficPolicy" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy awscc_ses_mail_manager_traffic_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesMailManagerTrafficPolicy(Construct Scope, string Id, SesMailManagerTrafficPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyConfig">SesMailManagerTrafficPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyConfig">SesMailManagerTrafficPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.putPolicyStatements">PutPolicyStatements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.resetMaxMessageSizeBytes">ResetMaxMessageSizeBytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.resetTrafficPolicyName">ResetTrafficPolicyName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPolicyStatements` <a name="PutPolicyStatements" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.putPolicyStatements"></a>

```csharp
private void PutPolicyStatements(IResolvable|SesMailManagerTrafficPolicyPolicyStatements[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.putPolicyStatements.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatements">SesMailManagerTrafficPolicyPolicyStatements</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.putTags"></a>

```csharp
private void PutTags(IResolvable|SesMailManagerTrafficPolicyTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTags">SesMailManagerTrafficPolicyTags</a>[]

---

##### `ResetMaxMessageSizeBytes` <a name="ResetMaxMessageSizeBytes" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.resetMaxMessageSizeBytes"></a>

```csharp
private void ResetMaxMessageSizeBytes()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTrafficPolicyName` <a name="ResetTrafficPolicyName" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.resetTrafficPolicyName"></a>

```csharp
private void ResetTrafficPolicyName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SesMailManagerTrafficPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SesMailManagerTrafficPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SesMailManagerTrafficPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SesMailManagerTrafficPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SesMailManagerTrafficPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SesMailManagerTrafficPolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SesMailManagerTrafficPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SesMailManagerTrafficPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SesMailManagerTrafficPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.policyStatements">PolicyStatements</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsList">SesMailManagerTrafficPolicyPolicyStatementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsList">SesMailManagerTrafficPolicyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.trafficPolicyArn">TrafficPolicyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.trafficPolicyId">TrafficPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.defaultActionInput">DefaultActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.maxMessageSizeBytesInput">MaxMessageSizeBytesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.policyStatementsInput">PolicyStatementsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatements">SesMailManagerTrafficPolicyPolicyStatements</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTags">SesMailManagerTrafficPolicyTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.trafficPolicyNameInput">TrafficPolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.defaultAction">DefaultAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.maxMessageSizeBytes">MaxMessageSizeBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.trafficPolicyName">TrafficPolicyName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PolicyStatements`<sup>Required</sup> <a name="PolicyStatements" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.policyStatements"></a>

```csharp
public SesMailManagerTrafficPolicyPolicyStatementsList PolicyStatements { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsList">SesMailManagerTrafficPolicyPolicyStatementsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.tags"></a>

```csharp
public SesMailManagerTrafficPolicyTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsList">SesMailManagerTrafficPolicyTagsList</a>

---

##### `TrafficPolicyArn`<sup>Required</sup> <a name="TrafficPolicyArn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.trafficPolicyArn"></a>

```csharp
public string TrafficPolicyArn { get; }
```

- *Type:* string

---

##### `TrafficPolicyId`<sup>Required</sup> <a name="TrafficPolicyId" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.trafficPolicyId"></a>

```csharp
public string TrafficPolicyId { get; }
```

- *Type:* string

---

##### `DefaultActionInput`<sup>Optional</sup> <a name="DefaultActionInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.defaultActionInput"></a>

```csharp
public string DefaultActionInput { get; }
```

- *Type:* string

---

##### `MaxMessageSizeBytesInput`<sup>Optional</sup> <a name="MaxMessageSizeBytesInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.maxMessageSizeBytesInput"></a>

```csharp
public double MaxMessageSizeBytesInput { get; }
```

- *Type:* double

---

##### `PolicyStatementsInput`<sup>Optional</sup> <a name="PolicyStatementsInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.policyStatementsInput"></a>

```csharp
public IResolvable|SesMailManagerTrafficPolicyPolicyStatements[] PolicyStatementsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatements">SesMailManagerTrafficPolicyPolicyStatements</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.tagsInput"></a>

```csharp
public IResolvable|SesMailManagerTrafficPolicyTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTags">SesMailManagerTrafficPolicyTags</a>[]

---

##### `TrafficPolicyNameInput`<sup>Optional</sup> <a name="TrafficPolicyNameInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.trafficPolicyNameInput"></a>

```csharp
public string TrafficPolicyNameInput { get; }
```

- *Type:* string

---

##### `DefaultAction`<sup>Required</sup> <a name="DefaultAction" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.defaultAction"></a>

```csharp
public string DefaultAction { get; }
```

- *Type:* string

---

##### `MaxMessageSizeBytes`<sup>Required</sup> <a name="MaxMessageSizeBytes" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.maxMessageSizeBytes"></a>

```csharp
public double MaxMessageSizeBytes { get; }
```

- *Type:* double

---

##### `TrafficPolicyName`<sup>Required</sup> <a name="TrafficPolicyName" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.trafficPolicyName"></a>

```csharp
public string TrafficPolicyName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SesMailManagerTrafficPolicyConfig <a name="SesMailManagerTrafficPolicyConfig" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesMailManagerTrafficPolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DefaultAction,
    IResolvable|SesMailManagerTrafficPolicyPolicyStatements[] PolicyStatements,
    double MaxMessageSizeBytes = null,
    IResolvable|SesMailManagerTrafficPolicyTags[] Tags = null,
    string TrafficPolicyName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyConfig.property.defaultAction">DefaultAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#default_action SesMailManagerTrafficPolicy#default_action}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyConfig.property.policyStatements">PolicyStatements</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatements">SesMailManagerTrafficPolicyPolicyStatements</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#policy_statements SesMailManagerTrafficPolicy#policy_statements}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyConfig.property.maxMessageSizeBytes">MaxMessageSizeBytes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#max_message_size_bytes SesMailManagerTrafficPolicy#max_message_size_bytes}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTags">SesMailManagerTrafficPolicyTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#tags SesMailManagerTrafficPolicy#tags}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyConfig.property.trafficPolicyName">TrafficPolicyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#traffic_policy_name SesMailManagerTrafficPolicy#traffic_policy_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DefaultAction`<sup>Required</sup> <a name="DefaultAction" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyConfig.property.defaultAction"></a>

```csharp
public string DefaultAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#default_action SesMailManagerTrafficPolicy#default_action}.

---

##### `PolicyStatements`<sup>Required</sup> <a name="PolicyStatements" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyConfig.property.policyStatements"></a>

```csharp
public IResolvable|SesMailManagerTrafficPolicyPolicyStatements[] PolicyStatements { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatements">SesMailManagerTrafficPolicyPolicyStatements</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#policy_statements SesMailManagerTrafficPolicy#policy_statements}.

---

##### `MaxMessageSizeBytes`<sup>Optional</sup> <a name="MaxMessageSizeBytes" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyConfig.property.maxMessageSizeBytes"></a>

```csharp
public double MaxMessageSizeBytes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#max_message_size_bytes SesMailManagerTrafficPolicy#max_message_size_bytes}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyConfig.property.tags"></a>

```csharp
public IResolvable|SesMailManagerTrafficPolicyTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTags">SesMailManagerTrafficPolicyTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#tags SesMailManagerTrafficPolicy#tags}.

---

##### `TrafficPolicyName`<sup>Optional</sup> <a name="TrafficPolicyName" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyConfig.property.trafficPolicyName"></a>

```csharp
public string TrafficPolicyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#traffic_policy_name SesMailManagerTrafficPolicy#traffic_policy_name}.

---

### SesMailManagerTrafficPolicyPolicyStatements <a name="SesMailManagerTrafficPolicyPolicyStatements" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatements.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesMailManagerTrafficPolicyPolicyStatements {
    string Action,
    IResolvable|SesMailManagerTrafficPolicyPolicyStatementsConditions[] Conditions
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatements.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#action SesMailManagerTrafficPolicy#action}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatements.property.conditions">Conditions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditions">SesMailManagerTrafficPolicyPolicyStatementsConditions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#conditions SesMailManagerTrafficPolicy#conditions}. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatements.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#action SesMailManagerTrafficPolicy#action}.

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatements.property.conditions"></a>

```csharp
public IResolvable|SesMailManagerTrafficPolicyPolicyStatementsConditions[] Conditions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditions">SesMailManagerTrafficPolicyPolicyStatementsConditions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#conditions SesMailManagerTrafficPolicy#conditions}.

---

### SesMailManagerTrafficPolicyPolicyStatementsConditions <a name="SesMailManagerTrafficPolicyPolicyStatementsConditions" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesMailManagerTrafficPolicyPolicyStatementsConditions {
    SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression BooleanExpression = null,
    SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression IpExpression = null,
    SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression Ipv6Expression = null,
    SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression StringExpression = null,
    SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression TlsExpression = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditions.property.booleanExpression">BooleanExpression</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#boolean_expression SesMailManagerTrafficPolicy#boolean_expression}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditions.property.ipExpression">IpExpression</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#ip_expression SesMailManagerTrafficPolicy#ip_expression}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditions.property.ipv6Expression">Ipv6Expression</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#ipv_6_expression SesMailManagerTrafficPolicy#ipv_6_expression}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditions.property.stringExpression">StringExpression</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression">SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#string_expression SesMailManagerTrafficPolicy#string_expression}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditions.property.tlsExpression">TlsExpression</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression">SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#tls_expression SesMailManagerTrafficPolicy#tls_expression}. |

---

##### `BooleanExpression`<sup>Optional</sup> <a name="BooleanExpression" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditions.property.booleanExpression"></a>

```csharp
public SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression BooleanExpression { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#boolean_expression SesMailManagerTrafficPolicy#boolean_expression}.

---

##### `IpExpression`<sup>Optional</sup> <a name="IpExpression" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditions.property.ipExpression"></a>

```csharp
public SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression IpExpression { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#ip_expression SesMailManagerTrafficPolicy#ip_expression}.

---

##### `Ipv6Expression`<sup>Optional</sup> <a name="Ipv6Expression" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditions.property.ipv6Expression"></a>

```csharp
public SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression Ipv6Expression { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#ipv_6_expression SesMailManagerTrafficPolicy#ipv_6_expression}.

---

##### `StringExpression`<sup>Optional</sup> <a name="StringExpression" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditions.property.stringExpression"></a>

```csharp
public SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression StringExpression { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression">SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#string_expression SesMailManagerTrafficPolicy#string_expression}.

---

##### `TlsExpression`<sup>Optional</sup> <a name="TlsExpression" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditions.property.tlsExpression"></a>

```csharp
public SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression TlsExpression { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression">SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#tls_expression SesMailManagerTrafficPolicy#tls_expression}.

---

### SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression <a name="SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression {
    SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate Evaluate = null,
    string Operator = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression.property.evaluate">Evaluate</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#evaluate SesMailManagerTrafficPolicy#evaluate}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#operator SesMailManagerTrafficPolicy#operator}. |

---

##### `Evaluate`<sup>Optional</sup> <a name="Evaluate" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression.property.evaluate"></a>

```csharp
public SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate Evaluate { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#evaluate SesMailManagerTrafficPolicy#evaluate}.

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#operator SesMailManagerTrafficPolicy#operator}.

---

### SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate <a name="SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate {
    SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis Analysis = null,
    SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct IsInAddressList = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate.property.analysis">Analysis</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#analysis SesMailManagerTrafficPolicy#analysis}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate.property.isInAddressList">IsInAddressList</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#is_in_address_list SesMailManagerTrafficPolicy#is_in_address_list}. |

---

##### `Analysis`<sup>Optional</sup> <a name="Analysis" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate.property.analysis"></a>

```csharp
public SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis Analysis { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#analysis SesMailManagerTrafficPolicy#analysis}.

---

##### `IsInAddressList`<sup>Optional</sup> <a name="IsInAddressList" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate.property.isInAddressList"></a>

```csharp
public SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct IsInAddressList { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#is_in_address_list SesMailManagerTrafficPolicy#is_in_address_list}.

---

### SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis <a name="SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis {
    string Analyzer = null,
    string ResultField = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis.property.analyzer">Analyzer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#analyzer SesMailManagerTrafficPolicy#analyzer}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis.property.resultField">ResultField</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#result_field SesMailManagerTrafficPolicy#result_field}. |

---

##### `Analyzer`<sup>Optional</sup> <a name="Analyzer" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis.property.analyzer"></a>

```csharp
public string Analyzer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#analyzer SesMailManagerTrafficPolicy#analyzer}.

---

##### `ResultField`<sup>Optional</sup> <a name="ResultField" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis.property.resultField"></a>

```csharp
public string ResultField { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#result_field SesMailManagerTrafficPolicy#result_field}.

---

### SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct <a name="SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct {
    string[] AddressLists = null,
    string Attribute = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct.property.addressLists">AddressLists</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#address_lists SesMailManagerTrafficPolicy#address_lists}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct.property.attribute">Attribute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#attribute SesMailManagerTrafficPolicy#attribute}. |

---

##### `AddressLists`<sup>Optional</sup> <a name="AddressLists" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct.property.addressLists"></a>

```csharp
public string[] AddressLists { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#address_lists SesMailManagerTrafficPolicy#address_lists}.

---

##### `Attribute`<sup>Optional</sup> <a name="Attribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct.property.attribute"></a>

```csharp
public string Attribute { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#attribute SesMailManagerTrafficPolicy#attribute}.

---

### SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression <a name="SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression {
    SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate Evaluate = null,
    string Operator = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression.property.evaluate">Evaluate</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#evaluate SesMailManagerTrafficPolicy#evaluate}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#operator SesMailManagerTrafficPolicy#operator}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#values SesMailManagerTrafficPolicy#values}. |

---

##### `Evaluate`<sup>Optional</sup> <a name="Evaluate" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression.property.evaluate"></a>

```csharp
public SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate Evaluate { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#evaluate SesMailManagerTrafficPolicy#evaluate}.

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#operator SesMailManagerTrafficPolicy#operator}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#values SesMailManagerTrafficPolicy#values}.

---

### SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate <a name="SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate {
    string Attribute = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate.property.attribute">Attribute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#attribute SesMailManagerTrafficPolicy#attribute}. |

---

##### `Attribute`<sup>Optional</sup> <a name="Attribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate.property.attribute"></a>

```csharp
public string Attribute { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#attribute SesMailManagerTrafficPolicy#attribute}.

---

### SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression <a name="SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression {
    SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate Evaluate = null,
    string Operator = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression.property.evaluate">Evaluate</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#evaluate SesMailManagerTrafficPolicy#evaluate}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#operator SesMailManagerTrafficPolicy#operator}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#values SesMailManagerTrafficPolicy#values}. |

---

##### `Evaluate`<sup>Optional</sup> <a name="Evaluate" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression.property.evaluate"></a>

```csharp
public SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate Evaluate { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#evaluate SesMailManagerTrafficPolicy#evaluate}.

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#operator SesMailManagerTrafficPolicy#operator}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#values SesMailManagerTrafficPolicy#values}.

---

### SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate <a name="SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate {
    string Attribute = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate.property.attribute">Attribute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#attribute SesMailManagerTrafficPolicy#attribute}. |

---

##### `Attribute`<sup>Optional</sup> <a name="Attribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate.property.attribute"></a>

```csharp
public string Attribute { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#attribute SesMailManagerTrafficPolicy#attribute}.

---

### SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression <a name="SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression {
    SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate Evaluate = null,
    string Operator = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression.property.evaluate">Evaluate</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#evaluate SesMailManagerTrafficPolicy#evaluate}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#operator SesMailManagerTrafficPolicy#operator}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#values SesMailManagerTrafficPolicy#values}. |

---

##### `Evaluate`<sup>Optional</sup> <a name="Evaluate" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression.property.evaluate"></a>

```csharp
public SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate Evaluate { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#evaluate SesMailManagerTrafficPolicy#evaluate}.

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#operator SesMailManagerTrafficPolicy#operator}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#values SesMailManagerTrafficPolicy#values}.

---

### SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate <a name="SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate {
    SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis Analysis = null,
    string Attribute = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate.property.analysis">Analysis</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis">SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#analysis SesMailManagerTrafficPolicy#analysis}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate.property.attribute">Attribute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#attribute SesMailManagerTrafficPolicy#attribute}. |

---

##### `Analysis`<sup>Optional</sup> <a name="Analysis" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate.property.analysis"></a>

```csharp
public SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis Analysis { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis">SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#analysis SesMailManagerTrafficPolicy#analysis}.

---

##### `Attribute`<sup>Optional</sup> <a name="Attribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate.property.attribute"></a>

```csharp
public string Attribute { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#attribute SesMailManagerTrafficPolicy#attribute}.

---

### SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis <a name="SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis {
    string Analyzer = null,
    string ResultField = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis.property.analyzer">Analyzer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#analyzer SesMailManagerTrafficPolicy#analyzer}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis.property.resultField">ResultField</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#result_field SesMailManagerTrafficPolicy#result_field}. |

---

##### `Analyzer`<sup>Optional</sup> <a name="Analyzer" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis.property.analyzer"></a>

```csharp
public string Analyzer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#analyzer SesMailManagerTrafficPolicy#analyzer}.

---

##### `ResultField`<sup>Optional</sup> <a name="ResultField" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis.property.resultField"></a>

```csharp
public string ResultField { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#result_field SesMailManagerTrafficPolicy#result_field}.

---

### SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression <a name="SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression {
    SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate Evaluate = null,
    string Operator = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression.property.evaluate">Evaluate</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#evaluate SesMailManagerTrafficPolicy#evaluate}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#operator SesMailManagerTrafficPolicy#operator}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#value SesMailManagerTrafficPolicy#value}. |

---

##### `Evaluate`<sup>Optional</sup> <a name="Evaluate" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression.property.evaluate"></a>

```csharp
public SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate Evaluate { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#evaluate SesMailManagerTrafficPolicy#evaluate}.

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#operator SesMailManagerTrafficPolicy#operator}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#value SesMailManagerTrafficPolicy#value}.

---

### SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate <a name="SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate {
    string Attribute = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate.property.attribute">Attribute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#attribute SesMailManagerTrafficPolicy#attribute}. |

---

##### `Attribute`<sup>Optional</sup> <a name="Attribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate.property.attribute"></a>

```csharp
public string Attribute { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#attribute SesMailManagerTrafficPolicy#attribute}.

---

### SesMailManagerTrafficPolicyTags <a name="SesMailManagerTrafficPolicyTags" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesMailManagerTrafficPolicyTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#key SesMailManagerTrafficPolicy#key}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#value SesMailManagerTrafficPolicy#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#key SesMailManagerTrafficPolicy#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#value SesMailManagerTrafficPolicy#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference <a name="SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.resetAnalyzer">ResetAnalyzer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.resetResultField">ResetResultField</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnalyzer` <a name="ResetAnalyzer" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.resetAnalyzer"></a>

```csharp
private void ResetAnalyzer()
```

##### `ResetResultField` <a name="ResetResultField" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.resetResultField"></a>

```csharp
private void ResetResultField()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.analyzerInput">AnalyzerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.resultFieldInput">ResultFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.analyzer">Analyzer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.resultField">ResultField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AnalyzerInput`<sup>Optional</sup> <a name="AnalyzerInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.analyzerInput"></a>

```csharp
public string AnalyzerInput { get; }
```

- *Type:* string

---

##### `ResultFieldInput`<sup>Optional</sup> <a name="ResultFieldInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.resultFieldInput"></a>

```csharp
public string ResultFieldInput { get; }
```

- *Type:* string

---

##### `Analyzer`<sup>Required</sup> <a name="Analyzer" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.analyzer"></a>

```csharp
public string Analyzer { get; }
```

- *Type:* string

---

##### `ResultField`<sup>Required</sup> <a name="ResultField" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.resultField"></a>

```csharp
public string ResultField { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis</a>

---


### SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference <a name="SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.resetAddressLists">ResetAddressLists</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.resetAttribute">ResetAttribute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddressLists` <a name="ResetAddressLists" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.resetAddressLists"></a>

```csharp
private void ResetAddressLists()
```

##### `ResetAttribute` <a name="ResetAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.resetAttribute"></a>

```csharp
private void ResetAttribute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.addressListsInput">AddressListsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.attributeInput">AttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.addressLists">AddressLists</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.attribute">Attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressListsInput`<sup>Optional</sup> <a name="AddressListsInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.addressListsInput"></a>

```csharp
public string[] AddressListsInput { get; }
```

- *Type:* string[]

---

##### `AttributeInput`<sup>Optional</sup> <a name="AttributeInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.attributeInput"></a>

```csharp
public string AttributeInput { get; }
```

- *Type:* string

---

##### `AddressLists`<sup>Required</sup> <a name="AddressLists" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.addressLists"></a>

```csharp
public string[] AddressLists { get; }
```

- *Type:* string[]

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.attribute"></a>

```csharp
public string Attribute { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct</a>

---


### SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference <a name="SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.putAnalysis">PutAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.putIsInAddressList">PutIsInAddressList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.resetAnalysis">ResetAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.resetIsInAddressList">ResetIsInAddressList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAnalysis` <a name="PutAnalysis" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.putAnalysis"></a>

```csharp
private void PutAnalysis(SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.putAnalysis.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis</a>

---

##### `PutIsInAddressList` <a name="PutIsInAddressList" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.putIsInAddressList"></a>

```csharp
private void PutIsInAddressList(SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.putIsInAddressList.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct</a>

---

##### `ResetAnalysis` <a name="ResetAnalysis" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.resetAnalysis"></a>

```csharp
private void ResetAnalysis()
```

##### `ResetIsInAddressList` <a name="ResetIsInAddressList" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.resetIsInAddressList"></a>

```csharp
private void ResetIsInAddressList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.property.analysis">Analysis</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.property.isInAddressList">IsInAddressList</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.property.analysisInput">AnalysisInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.property.isInAddressListInput">IsInAddressListInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Analysis`<sup>Required</sup> <a name="Analysis" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.property.analysis"></a>

```csharp
public SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference Analysis { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference</a>

---

##### `IsInAddressList`<sup>Required</sup> <a name="IsInAddressList" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.property.isInAddressList"></a>

```csharp
public SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference IsInAddressList { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference</a>

---

##### `AnalysisInput`<sup>Optional</sup> <a name="AnalysisInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.property.analysisInput"></a>

```csharp
public IResolvable|SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis AnalysisInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis</a>

---

##### `IsInAddressListInput`<sup>Optional</sup> <a name="IsInAddressListInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.property.isInAddressListInput"></a>

```csharp
public IResolvable|SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct IsInAddressListInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate</a>

---


### SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference <a name="SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.putEvaluate">PutEvaluate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.resetEvaluate">ResetEvaluate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEvaluate` <a name="PutEvaluate" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.putEvaluate"></a>

```csharp
private void PutEvaluate(SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.putEvaluate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate</a>

---

##### `ResetEvaluate` <a name="ResetEvaluate" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.resetEvaluate"></a>

```csharp
private void ResetEvaluate()
```

##### `ResetOperator` <a name="ResetOperator" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.resetOperator"></a>

```csharp
private void ResetOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.property.evaluate">Evaluate</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.property.evaluateInput">EvaluateInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Evaluate`<sup>Required</sup> <a name="Evaluate" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.property.evaluate"></a>

```csharp
public SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference Evaluate { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference</a>

---

##### `EvaluateInput`<sup>Optional</sup> <a name="EvaluateInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.property.evaluateInput"></a>

```csharp
public IResolvable|SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate EvaluateInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate</a>

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression</a>

---


### SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference <a name="SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.resetAttribute">ResetAttribute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttribute` <a name="ResetAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.resetAttribute"></a>

```csharp
private void ResetAttribute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.property.attributeInput">AttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.property.attribute">Attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttributeInput`<sup>Optional</sup> <a name="AttributeInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.property.attributeInput"></a>

```csharp
public string AttributeInput { get; }
```

- *Type:* string

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.property.attribute"></a>

```csharp
public string Attribute { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate</a>

---


### SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference <a name="SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.putEvaluate">PutEvaluate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.resetEvaluate">ResetEvaluate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEvaluate` <a name="PutEvaluate" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.putEvaluate"></a>

```csharp
private void PutEvaluate(SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.putEvaluate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate</a>

---

##### `ResetEvaluate` <a name="ResetEvaluate" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.resetEvaluate"></a>

```csharp
private void ResetEvaluate()
```

##### `ResetOperator` <a name="ResetOperator" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.resetOperator"></a>

```csharp
private void ResetOperator()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.property.evaluate">Evaluate</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.property.evaluateInput">EvaluateInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Evaluate`<sup>Required</sup> <a name="Evaluate" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.property.evaluate"></a>

```csharp
public SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference Evaluate { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference</a>

---

##### `EvaluateInput`<sup>Optional</sup> <a name="EvaluateInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.property.evaluateInput"></a>

```csharp
public IResolvable|SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate EvaluateInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate</a>

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression</a>

---


### SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference <a name="SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.resetAttribute">ResetAttribute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttribute` <a name="ResetAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.resetAttribute"></a>

```csharp
private void ResetAttribute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.property.attributeInput">AttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.property.attribute">Attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttributeInput`<sup>Optional</sup> <a name="AttributeInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.property.attributeInput"></a>

```csharp
public string AttributeInput { get; }
```

- *Type:* string

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.property.attribute"></a>

```csharp
public string Attribute { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate</a>

---


### SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference <a name="SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.putEvaluate">PutEvaluate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.resetEvaluate">ResetEvaluate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEvaluate` <a name="PutEvaluate" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.putEvaluate"></a>

```csharp
private void PutEvaluate(SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.putEvaluate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate</a>

---

##### `ResetEvaluate` <a name="ResetEvaluate" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.resetEvaluate"></a>

```csharp
private void ResetEvaluate()
```

##### `ResetOperator` <a name="ResetOperator" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.resetOperator"></a>

```csharp
private void ResetOperator()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.property.evaluate">Evaluate</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.property.evaluateInput">EvaluateInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Evaluate`<sup>Required</sup> <a name="Evaluate" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.property.evaluate"></a>

```csharp
public SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference Evaluate { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference</a>

---

##### `EvaluateInput`<sup>Optional</sup> <a name="EvaluateInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.property.evaluateInput"></a>

```csharp
public IResolvable|SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate EvaluateInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate</a>

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression</a>

---


### SesMailManagerTrafficPolicyPolicyStatementsConditionsList <a name="SesMailManagerTrafficPolicyPolicyStatementsConditionsList" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesMailManagerTrafficPolicyPolicyStatementsConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsList.get"></a>

```csharp
private SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditions">SesMailManagerTrafficPolicyPolicyStatementsConditions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsList.property.internalValue"></a>

```csharp
public IResolvable|SesMailManagerTrafficPolicyPolicyStatementsConditions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditions">SesMailManagerTrafficPolicyPolicyStatementsConditions</a>[]

---


### SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference <a name="SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.putBooleanExpression">PutBooleanExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.putIpExpression">PutIpExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.putIpv6Expression">PutIpv6Expression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.putStringExpression">PutStringExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.putTlsExpression">PutTlsExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.resetBooleanExpression">ResetBooleanExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.resetIpExpression">ResetIpExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.resetIpv6Expression">ResetIpv6Expression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.resetStringExpression">ResetStringExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.resetTlsExpression">ResetTlsExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBooleanExpression` <a name="PutBooleanExpression" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.putBooleanExpression"></a>

```csharp
private void PutBooleanExpression(SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.putBooleanExpression.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression</a>

---

##### `PutIpExpression` <a name="PutIpExpression" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.putIpExpression"></a>

```csharp
private void PutIpExpression(SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.putIpExpression.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression</a>

---

##### `PutIpv6Expression` <a name="PutIpv6Expression" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.putIpv6Expression"></a>

```csharp
private void PutIpv6Expression(SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.putIpv6Expression.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression</a>

---

##### `PutStringExpression` <a name="PutStringExpression" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.putStringExpression"></a>

```csharp
private void PutStringExpression(SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.putStringExpression.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression">SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression</a>

---

##### `PutTlsExpression` <a name="PutTlsExpression" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.putTlsExpression"></a>

```csharp
private void PutTlsExpression(SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.putTlsExpression.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression">SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression</a>

---

##### `ResetBooleanExpression` <a name="ResetBooleanExpression" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.resetBooleanExpression"></a>

```csharp
private void ResetBooleanExpression()
```

##### `ResetIpExpression` <a name="ResetIpExpression" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.resetIpExpression"></a>

```csharp
private void ResetIpExpression()
```

##### `ResetIpv6Expression` <a name="ResetIpv6Expression" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.resetIpv6Expression"></a>

```csharp
private void ResetIpv6Expression()
```

##### `ResetStringExpression` <a name="ResetStringExpression" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.resetStringExpression"></a>

```csharp
private void ResetStringExpression()
```

##### `ResetTlsExpression` <a name="ResetTlsExpression" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.resetTlsExpression"></a>

```csharp
private void ResetTlsExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.booleanExpression">BooleanExpression</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.ipExpression">IpExpression</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.ipv6Expression">Ipv6Expression</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.stringExpression">StringExpression</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference">SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.tlsExpression">TlsExpression</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference">SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.booleanExpressionInput">BooleanExpressionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.ipExpressionInput">IpExpressionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.ipv6ExpressionInput">Ipv6ExpressionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.stringExpressionInput">StringExpressionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression">SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.tlsExpressionInput">TlsExpressionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression">SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditions">SesMailManagerTrafficPolicyPolicyStatementsConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BooleanExpression`<sup>Required</sup> <a name="BooleanExpression" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.booleanExpression"></a>

```csharp
public SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference BooleanExpression { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference</a>

---

##### `IpExpression`<sup>Required</sup> <a name="IpExpression" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.ipExpression"></a>

```csharp
public SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference IpExpression { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference</a>

---

##### `Ipv6Expression`<sup>Required</sup> <a name="Ipv6Expression" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.ipv6Expression"></a>

```csharp
public SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference Ipv6Expression { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference</a>

---

##### `StringExpression`<sup>Required</sup> <a name="StringExpression" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.stringExpression"></a>

```csharp
public SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference StringExpression { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference">SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference</a>

---

##### `TlsExpression`<sup>Required</sup> <a name="TlsExpression" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.tlsExpression"></a>

```csharp
public SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference TlsExpression { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference">SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference</a>

---

##### `BooleanExpressionInput`<sup>Optional</sup> <a name="BooleanExpressionInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.booleanExpressionInput"></a>

```csharp
public IResolvable|SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression BooleanExpressionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression</a>

---

##### `IpExpressionInput`<sup>Optional</sup> <a name="IpExpressionInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.ipExpressionInput"></a>

```csharp
public IResolvable|SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression IpExpressionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression</a>

---

##### `Ipv6ExpressionInput`<sup>Optional</sup> <a name="Ipv6ExpressionInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.ipv6ExpressionInput"></a>

```csharp
public IResolvable|SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression Ipv6ExpressionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression</a>

---

##### `StringExpressionInput`<sup>Optional</sup> <a name="StringExpressionInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.stringExpressionInput"></a>

```csharp
public IResolvable|SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression StringExpressionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression">SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression</a>

---

##### `TlsExpressionInput`<sup>Optional</sup> <a name="TlsExpressionInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.tlsExpressionInput"></a>

```csharp
public IResolvable|SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression TlsExpressionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression">SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SesMailManagerTrafficPolicyPolicyStatementsConditions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditions">SesMailManagerTrafficPolicyPolicyStatementsConditions</a>

---


### SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference <a name="SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.resetAnalyzer">ResetAnalyzer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.resetResultField">ResetResultField</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnalyzer` <a name="ResetAnalyzer" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.resetAnalyzer"></a>

```csharp
private void ResetAnalyzer()
```

##### `ResetResultField` <a name="ResetResultField" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.resetResultField"></a>

```csharp
private void ResetResultField()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.property.analyzerInput">AnalyzerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.property.resultFieldInput">ResultFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.property.analyzer">Analyzer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.property.resultField">ResultField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis">SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AnalyzerInput`<sup>Optional</sup> <a name="AnalyzerInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.property.analyzerInput"></a>

```csharp
public string AnalyzerInput { get; }
```

- *Type:* string

---

##### `ResultFieldInput`<sup>Optional</sup> <a name="ResultFieldInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.property.resultFieldInput"></a>

```csharp
public string ResultFieldInput { get; }
```

- *Type:* string

---

##### `Analyzer`<sup>Required</sup> <a name="Analyzer" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.property.analyzer"></a>

```csharp
public string Analyzer { get; }
```

- *Type:* string

---

##### `ResultField`<sup>Required</sup> <a name="ResultField" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.property.resultField"></a>

```csharp
public string ResultField { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis">SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis</a>

---


### SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference <a name="SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.putAnalysis">PutAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.resetAnalysis">ResetAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.resetAttribute">ResetAttribute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAnalysis` <a name="PutAnalysis" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.putAnalysis"></a>

```csharp
private void PutAnalysis(SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.putAnalysis.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis">SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis</a>

---

##### `ResetAnalysis` <a name="ResetAnalysis" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.resetAnalysis"></a>

```csharp
private void ResetAnalysis()
```

##### `ResetAttribute` <a name="ResetAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.resetAttribute"></a>

```csharp
private void ResetAttribute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.property.analysis">Analysis</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference">SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.property.analysisInput">AnalysisInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis">SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.property.attributeInput">AttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.property.attribute">Attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Analysis`<sup>Required</sup> <a name="Analysis" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.property.analysis"></a>

```csharp
public SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference Analysis { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference">SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference</a>

---

##### `AnalysisInput`<sup>Optional</sup> <a name="AnalysisInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.property.analysisInput"></a>

```csharp
public IResolvable|SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis AnalysisInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis">SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis</a>

---

##### `AttributeInput`<sup>Optional</sup> <a name="AttributeInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.property.attributeInput"></a>

```csharp
public string AttributeInput { get; }
```

- *Type:* string

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.property.attribute"></a>

```csharp
public string Attribute { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate</a>

---


### SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference <a name="SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.putEvaluate">PutEvaluate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.resetEvaluate">ResetEvaluate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEvaluate` <a name="PutEvaluate" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.putEvaluate"></a>

```csharp
private void PutEvaluate(SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.putEvaluate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate</a>

---

##### `ResetEvaluate` <a name="ResetEvaluate" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.resetEvaluate"></a>

```csharp
private void ResetEvaluate()
```

##### `ResetOperator` <a name="ResetOperator" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.resetOperator"></a>

```csharp
private void ResetOperator()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.property.evaluate">Evaluate</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference">SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.property.evaluateInput">EvaluateInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression">SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Evaluate`<sup>Required</sup> <a name="Evaluate" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.property.evaluate"></a>

```csharp
public SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference Evaluate { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference">SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference</a>

---

##### `EvaluateInput`<sup>Optional</sup> <a name="EvaluateInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.property.evaluateInput"></a>

```csharp
public IResolvable|SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate EvaluateInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate</a>

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression">SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression</a>

---


### SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference <a name="SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.resetAttribute">ResetAttribute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttribute` <a name="ResetAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.resetAttribute"></a>

```csharp
private void ResetAttribute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.property.attributeInput">AttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.property.attribute">Attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttributeInput`<sup>Optional</sup> <a name="AttributeInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.property.attributeInput"></a>

```csharp
public string AttributeInput { get; }
```

- *Type:* string

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.property.attribute"></a>

```csharp
public string Attribute { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate</a>

---


### SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference <a name="SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.putEvaluate">PutEvaluate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.resetEvaluate">ResetEvaluate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEvaluate` <a name="PutEvaluate" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.putEvaluate"></a>

```csharp
private void PutEvaluate(SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.putEvaluate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate</a>

---

##### `ResetEvaluate` <a name="ResetEvaluate" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.resetEvaluate"></a>

```csharp
private void ResetEvaluate()
```

##### `ResetOperator` <a name="ResetOperator" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.resetOperator"></a>

```csharp
private void ResetOperator()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.property.evaluate">Evaluate</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference">SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.property.evaluateInput">EvaluateInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression">SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Evaluate`<sup>Required</sup> <a name="Evaluate" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.property.evaluate"></a>

```csharp
public SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference Evaluate { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference">SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference</a>

---

##### `EvaluateInput`<sup>Optional</sup> <a name="EvaluateInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.property.evaluateInput"></a>

```csharp
public IResolvable|SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate EvaluateInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate</a>

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression">SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression</a>

---


### SesMailManagerTrafficPolicyPolicyStatementsList <a name="SesMailManagerTrafficPolicyPolicyStatementsList" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesMailManagerTrafficPolicyPolicyStatementsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsList.get"></a>

```csharp
private SesMailManagerTrafficPolicyPolicyStatementsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatements">SesMailManagerTrafficPolicyPolicyStatements</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsList.property.internalValue"></a>

```csharp
public IResolvable|SesMailManagerTrafficPolicyPolicyStatements[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatements">SesMailManagerTrafficPolicyPolicyStatements</a>[]

---


### SesMailManagerTrafficPolicyPolicyStatementsOutputReference <a name="SesMailManagerTrafficPolicyPolicyStatementsOutputReference" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesMailManagerTrafficPolicyPolicyStatementsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.putConditions">PutConditions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConditions` <a name="PutConditions" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.putConditions"></a>

```csharp
private void PutConditions(IResolvable|SesMailManagerTrafficPolicyPolicyStatementsConditions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.putConditions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditions">SesMailManagerTrafficPolicyPolicyStatementsConditions</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsList">SesMailManagerTrafficPolicyPolicyStatementsConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.property.conditionsInput">ConditionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditions">SesMailManagerTrafficPolicyPolicyStatementsConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatements">SesMailManagerTrafficPolicyPolicyStatements</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.property.conditions"></a>

```csharp
public SesMailManagerTrafficPolicyPolicyStatementsConditionsList Conditions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsList">SesMailManagerTrafficPolicyPolicyStatementsConditionsList</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.property.conditionsInput"></a>

```csharp
public IResolvable|SesMailManagerTrafficPolicyPolicyStatementsConditions[] ConditionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditions">SesMailManagerTrafficPolicyPolicyStatementsConditions</a>[]

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SesMailManagerTrafficPolicyPolicyStatements InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatements">SesMailManagerTrafficPolicyPolicyStatements</a>

---


### SesMailManagerTrafficPolicyTagsList <a name="SesMailManagerTrafficPolicyTagsList" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesMailManagerTrafficPolicyTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsList.get"></a>

```csharp
private SesMailManagerTrafficPolicyTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTags">SesMailManagerTrafficPolicyTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsList.property.internalValue"></a>

```csharp
public IResolvable|SesMailManagerTrafficPolicyTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTags">SesMailManagerTrafficPolicyTags</a>[]

---


### SesMailManagerTrafficPolicyTagsOutputReference <a name="SesMailManagerTrafficPolicyTagsOutputReference" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesMailManagerTrafficPolicyTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTags">SesMailManagerTrafficPolicyTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SesMailManagerTrafficPolicyTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTags">SesMailManagerTrafficPolicyTags</a>

---



