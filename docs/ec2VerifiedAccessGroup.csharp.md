# `ec2VerifiedAccessGroup` Submodule <a name="`ec2VerifiedAccessGroup` Submodule" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2VerifiedAccessGroup <a name="Ec2VerifiedAccessGroup" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_group awscc_ec2_verified_access_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VerifiedAccessGroup(Construct Scope, string Id, Ec2VerifiedAccessGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupConfig">Ec2VerifiedAccessGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupConfig">Ec2VerifiedAccessGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.putSseSpecification">PutSseSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.resetPolicyDocument">ResetPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.resetPolicyEnabled">ResetPolicyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.resetSseSpecification">ResetSseSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSseSpecification` <a name="PutSseSpecification" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.putSseSpecification"></a>

```csharp
private void PutSseSpecification(Ec2VerifiedAccessGroupSseSpecification Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.putSseSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecification">Ec2VerifiedAccessGroupSseSpecification</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.putTags"></a>

```csharp
private void PutTags(IResolvable|Ec2VerifiedAccessGroupTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTags">Ec2VerifiedAccessGroupTags</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetPolicyDocument` <a name="ResetPolicyDocument" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.resetPolicyDocument"></a>

```csharp
private void ResetPolicyDocument()
```

##### `ResetPolicyEnabled` <a name="ResetPolicyEnabled" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.resetPolicyEnabled"></a>

```csharp
private void ResetPolicyEnabled()
```

##### `ResetSseSpecification` <a name="ResetSseSpecification" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.resetSseSpecification"></a>

```csharp
private void ResetSseSpecification()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2VerifiedAccessGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2VerifiedAccessGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2VerifiedAccessGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2VerifiedAccessGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2VerifiedAccessGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Ec2VerifiedAccessGroup resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2VerifiedAccessGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2VerifiedAccessGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Ec2VerifiedAccessGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.sseSpecification">SseSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference">Ec2VerifiedAccessGroupSseSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsList">Ec2VerifiedAccessGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.verifiedAccessGroupArn">VerifiedAccessGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.verifiedAccessGroupId">VerifiedAccessGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.policyDocumentInput">PolicyDocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.policyEnabledInput">PolicyEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.sseSpecificationInput">SseSpecificationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecification">Ec2VerifiedAccessGroupSseSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTags">Ec2VerifiedAccessGroupTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.verifiedAccessInstanceIdInput">VerifiedAccessInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.policyDocument">PolicyDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.policyEnabled">PolicyEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.verifiedAccessInstanceId">VerifiedAccessInstanceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastUpdatedTime`<sup>Required</sup> <a name="LastUpdatedTime" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.lastUpdatedTime"></a>

```csharp
public string LastUpdatedTime { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `SseSpecification`<sup>Required</sup> <a name="SseSpecification" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.sseSpecification"></a>

```csharp
public Ec2VerifiedAccessGroupSseSpecificationOutputReference SseSpecification { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference">Ec2VerifiedAccessGroupSseSpecificationOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.tags"></a>

```csharp
public Ec2VerifiedAccessGroupTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsList">Ec2VerifiedAccessGroupTagsList</a>

---

##### `VerifiedAccessGroupArn`<sup>Required</sup> <a name="VerifiedAccessGroupArn" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.verifiedAccessGroupArn"></a>

```csharp
public string VerifiedAccessGroupArn { get; }
```

- *Type:* string

---

##### `VerifiedAccessGroupId`<sup>Required</sup> <a name="VerifiedAccessGroupId" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.verifiedAccessGroupId"></a>

```csharp
public string VerifiedAccessGroupId { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `PolicyDocumentInput`<sup>Optional</sup> <a name="PolicyDocumentInput" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.policyDocumentInput"></a>

```csharp
public string PolicyDocumentInput { get; }
```

- *Type:* string

---

##### `PolicyEnabledInput`<sup>Optional</sup> <a name="PolicyEnabledInput" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.policyEnabledInput"></a>

```csharp
public bool|IResolvable PolicyEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SseSpecificationInput`<sup>Optional</sup> <a name="SseSpecificationInput" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.sseSpecificationInput"></a>

```csharp
public IResolvable|Ec2VerifiedAccessGroupSseSpecification SseSpecificationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecification">Ec2VerifiedAccessGroupSseSpecification</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.tagsInput"></a>

```csharp
public IResolvable|Ec2VerifiedAccessGroupTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTags">Ec2VerifiedAccessGroupTags</a>[]

---

##### `VerifiedAccessInstanceIdInput`<sup>Optional</sup> <a name="VerifiedAccessInstanceIdInput" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.verifiedAccessInstanceIdInput"></a>

```csharp
public string VerifiedAccessInstanceIdInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `PolicyDocument`<sup>Required</sup> <a name="PolicyDocument" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.policyDocument"></a>

```csharp
public string PolicyDocument { get; }
```

- *Type:* string

---

##### `PolicyEnabled`<sup>Required</sup> <a name="PolicyEnabled" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.policyEnabled"></a>

```csharp
public bool|IResolvable PolicyEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `VerifiedAccessInstanceId`<sup>Required</sup> <a name="VerifiedAccessInstanceId" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.verifiedAccessInstanceId"></a>

```csharp
public string VerifiedAccessInstanceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2VerifiedAccessGroupConfig <a name="Ec2VerifiedAccessGroupConfig" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VerifiedAccessGroupConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string VerifiedAccessInstanceId,
    string Description = null,
    string PolicyDocument = null,
    bool|IResolvable PolicyEnabled = null,
    Ec2VerifiedAccessGroupSseSpecification SseSpecification = null,
    IResolvable|Ec2VerifiedAccessGroupTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupConfig.property.verifiedAccessInstanceId">VerifiedAccessInstanceId</a></code> | <code>string</code> | The ID of the AWS Verified Access instance. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupConfig.property.description">Description</a></code> | <code>string</code> | A description for the AWS Verified Access group. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupConfig.property.policyDocument">PolicyDocument</a></code> | <code>string</code> | The AWS Verified Access policy document. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupConfig.property.policyEnabled">PolicyEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | The status of the Verified Access policy. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupConfig.property.sseSpecification">SseSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecification">Ec2VerifiedAccessGroupSseSpecification</a></code> | The configuration options for customer provided KMS encryption. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTags">Ec2VerifiedAccessGroupTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `VerifiedAccessInstanceId`<sup>Required</sup> <a name="VerifiedAccessInstanceId" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupConfig.property.verifiedAccessInstanceId"></a>

```csharp
public string VerifiedAccessInstanceId { get; set; }
```

- *Type:* string

The ID of the AWS Verified Access instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_group#verified_access_instance_id Ec2VerifiedAccessGroup#verified_access_instance_id}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description for the AWS Verified Access group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_group#description Ec2VerifiedAccessGroup#description}

---

##### `PolicyDocument`<sup>Optional</sup> <a name="PolicyDocument" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupConfig.property.policyDocument"></a>

```csharp
public string PolicyDocument { get; set; }
```

- *Type:* string

The AWS Verified Access policy document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_group#policy_document Ec2VerifiedAccessGroup#policy_document}

---

##### `PolicyEnabled`<sup>Optional</sup> <a name="PolicyEnabled" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupConfig.property.policyEnabled"></a>

```csharp
public bool|IResolvable PolicyEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

The status of the Verified Access policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_group#policy_enabled Ec2VerifiedAccessGroup#policy_enabled}

---

##### `SseSpecification`<sup>Optional</sup> <a name="SseSpecification" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupConfig.property.sseSpecification"></a>

```csharp
public Ec2VerifiedAccessGroupSseSpecification SseSpecification { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecification">Ec2VerifiedAccessGroupSseSpecification</a>

The configuration options for customer provided KMS encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_group#sse_specification Ec2VerifiedAccessGroup#sse_specification}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupConfig.property.tags"></a>

```csharp
public IResolvable|Ec2VerifiedAccessGroupTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTags">Ec2VerifiedAccessGroupTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_group#tags Ec2VerifiedAccessGroup#tags}

---

### Ec2VerifiedAccessGroupSseSpecification <a name="Ec2VerifiedAccessGroupSseSpecification" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecification.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VerifiedAccessGroupSseSpecification {
    bool|IResolvable CustomerManagedKeyEnabled = null,
    string KmsKeyArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecification.property.customerManagedKeyEnabled">CustomerManagedKeyEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to encrypt the policy with the provided key or disable encryption. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecification.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | KMS Key Arn used to encrypt the group policy. |

---

##### `CustomerManagedKeyEnabled`<sup>Optional</sup> <a name="CustomerManagedKeyEnabled" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecification.property.customerManagedKeyEnabled"></a>

```csharp
public bool|IResolvable CustomerManagedKeyEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to encrypt the policy with the provided key or disable encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_group#customer_managed_key_enabled Ec2VerifiedAccessGroup#customer_managed_key_enabled}

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecification.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

KMS Key Arn used to encrypt the group policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_group#kms_key_arn Ec2VerifiedAccessGroup#kms_key_arn}

---

### Ec2VerifiedAccessGroupTags <a name="Ec2VerifiedAccessGroupTags" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VerifiedAccessGroupTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_group#key Ec2VerifiedAccessGroup#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_group#value Ec2VerifiedAccessGroup#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2VerifiedAccessGroupSseSpecificationOutputReference <a name="Ec2VerifiedAccessGroupSseSpecificationOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VerifiedAccessGroupSseSpecificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.resetCustomerManagedKeyEnabled">ResetCustomerManagedKeyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomerManagedKeyEnabled` <a name="ResetCustomerManagedKeyEnabled" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.resetCustomerManagedKeyEnabled"></a>

```csharp
private void ResetCustomerManagedKeyEnabled()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.property.customerManagedKeyEnabledInput">CustomerManagedKeyEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.property.customerManagedKeyEnabled">CustomerManagedKeyEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecification">Ec2VerifiedAccessGroupSseSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomerManagedKeyEnabledInput`<sup>Optional</sup> <a name="CustomerManagedKeyEnabledInput" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.property.customerManagedKeyEnabledInput"></a>

```csharp
public bool|IResolvable CustomerManagedKeyEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `CustomerManagedKeyEnabled`<sup>Required</sup> <a name="CustomerManagedKeyEnabled" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.property.customerManagedKeyEnabled"></a>

```csharp
public bool|IResolvable CustomerManagedKeyEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2VerifiedAccessGroupSseSpecification InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecification">Ec2VerifiedAccessGroupSseSpecification</a>

---


### Ec2VerifiedAccessGroupTagsList <a name="Ec2VerifiedAccessGroupTagsList" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VerifiedAccessGroupTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsList.get"></a>

```csharp
private Ec2VerifiedAccessGroupTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTags">Ec2VerifiedAccessGroupTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsList.property.internalValue"></a>

```csharp
public IResolvable|Ec2VerifiedAccessGroupTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTags">Ec2VerifiedAccessGroupTags</a>[]

---


### Ec2VerifiedAccessGroupTagsOutputReference <a name="Ec2VerifiedAccessGroupTagsOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VerifiedAccessGroupTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTags">Ec2VerifiedAccessGroupTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2VerifiedAccessGroupTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTags">Ec2VerifiedAccessGroupTags</a>

---



