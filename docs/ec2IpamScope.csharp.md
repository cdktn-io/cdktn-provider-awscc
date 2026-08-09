# `ec2IpamScope` Submodule <a name="`ec2IpamScope` Submodule" id="@cdktn/provider-awscc.ec2IpamScope"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2IpamScope <a name="Ec2IpamScope" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_scope awscc_ec2_ipam_scope}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2IpamScope(Construct Scope, string Id, Ec2IpamScopeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeConfig">Ec2IpamScopeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeConfig">Ec2IpamScopeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.putExternalAuthorityConfiguration">PutExternalAuthorityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.resetExternalAuthorityConfiguration">ResetExternalAuthorityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExternalAuthorityConfiguration` <a name="PutExternalAuthorityConfiguration" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.putExternalAuthorityConfiguration"></a>

```csharp
private void PutExternalAuthorityConfiguration(Ec2IpamScopeExternalAuthorityConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.putExternalAuthorityConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfiguration">Ec2IpamScopeExternalAuthorityConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.putTags"></a>

```csharp
private void PutTags(IResolvable|Ec2IpamScopeTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTags">Ec2IpamScopeTags</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetExternalAuthorityConfiguration` <a name="ResetExternalAuthorityConfiguration" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.resetExternalAuthorityConfiguration"></a>

```csharp
private void ResetExternalAuthorityConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2IpamScope resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2IpamScope.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2IpamScope.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2IpamScope.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2IpamScope.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Ec2IpamScope resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2IpamScope to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2IpamScope that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_scope#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Ec2IpamScope to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.property.externalAuthorityConfiguration">ExternalAuthorityConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference">Ec2IpamScopeExternalAuthorityConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.property.ipamArn">IpamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.property.ipamScopeId">IpamScopeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.property.ipamScopeType">IpamScopeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.property.isDefault">IsDefault</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.property.poolCount">PoolCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsList">Ec2IpamScopeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.property.externalAuthorityConfigurationInput">ExternalAuthorityConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfiguration">Ec2IpamScopeExternalAuthorityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.property.ipamIdInput">IpamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTags">Ec2IpamScopeTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.property.ipamId">IpamId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ExternalAuthorityConfiguration`<sup>Required</sup> <a name="ExternalAuthorityConfiguration" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.property.externalAuthorityConfiguration"></a>

```csharp
public Ec2IpamScopeExternalAuthorityConfigurationOutputReference ExternalAuthorityConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference">Ec2IpamScopeExternalAuthorityConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpamArn`<sup>Required</sup> <a name="IpamArn" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.property.ipamArn"></a>

```csharp
public string IpamArn { get; }
```

- *Type:* string

---

##### `IpamScopeId`<sup>Required</sup> <a name="IpamScopeId" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.property.ipamScopeId"></a>

```csharp
public string IpamScopeId { get; }
```

- *Type:* string

---

##### `IpamScopeType`<sup>Required</sup> <a name="IpamScopeType" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.property.ipamScopeType"></a>

```csharp
public string IpamScopeType { get; }
```

- *Type:* string

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.property.isDefault"></a>

```csharp
public IResolvable IsDefault { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `PoolCount`<sup>Required</sup> <a name="PoolCount" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.property.poolCount"></a>

```csharp
public double PoolCount { get; }
```

- *Type:* double

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.property.tags"></a>

```csharp
public Ec2IpamScopeTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsList">Ec2IpamScopeTagsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExternalAuthorityConfigurationInput`<sup>Optional</sup> <a name="ExternalAuthorityConfigurationInput" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.property.externalAuthorityConfigurationInput"></a>

```csharp
public IResolvable|Ec2IpamScopeExternalAuthorityConfiguration ExternalAuthorityConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfiguration">Ec2IpamScopeExternalAuthorityConfiguration</a>

---

##### `IpamIdInput`<sup>Optional</sup> <a name="IpamIdInput" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.property.ipamIdInput"></a>

```csharp
public string IpamIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.property.tagsInput"></a>

```csharp
public IResolvable|Ec2IpamScopeTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTags">Ec2IpamScopeTags</a>[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `IpamId`<sup>Required</sup> <a name="IpamId" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.property.ipamId"></a>

```csharp
public string IpamId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScope.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2IpamScopeConfig <a name="Ec2IpamScopeConfig" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2IpamScopeConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string IpamId,
    string Description = null,
    Ec2IpamScopeExternalAuthorityConfiguration ExternalAuthorityConfiguration = null,
    IResolvable|Ec2IpamScopeTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeConfig.property.ipamId">IpamId</a></code> | <code>string</code> | The Id of the IPAM this scope is a part of. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_scope#description Ec2IpamScope#description}. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeConfig.property.externalAuthorityConfiguration">ExternalAuthorityConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfiguration">Ec2IpamScopeExternalAuthorityConfiguration</a></code> | External service configuration to connect your AWS IPAM scope. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTags">Ec2IpamScopeTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `IpamId`<sup>Required</sup> <a name="IpamId" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeConfig.property.ipamId"></a>

```csharp
public string IpamId { get; set; }
```

- *Type:* string

The Id of the IPAM this scope is a part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_scope#ipam_id Ec2IpamScope#ipam_id}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_scope#description Ec2IpamScope#description}.

---

##### `ExternalAuthorityConfiguration`<sup>Optional</sup> <a name="ExternalAuthorityConfiguration" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeConfig.property.externalAuthorityConfiguration"></a>

```csharp
public Ec2IpamScopeExternalAuthorityConfiguration ExternalAuthorityConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfiguration">Ec2IpamScopeExternalAuthorityConfiguration</a>

External service configuration to connect your AWS IPAM scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_scope#external_authority_configuration Ec2IpamScope#external_authority_configuration}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeConfig.property.tags"></a>

```csharp
public IResolvable|Ec2IpamScopeTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTags">Ec2IpamScopeTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_scope#tags Ec2IpamScope#tags}

---

### Ec2IpamScopeExternalAuthorityConfiguration <a name="Ec2IpamScopeExternalAuthorityConfiguration" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2IpamScopeExternalAuthorityConfiguration {
    string ExternalResourceIdentifier = null,
    string IpamScopeExternalAuthorityType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfiguration.property.externalResourceIdentifier">ExternalResourceIdentifier</a></code> | <code>string</code> | Resource identifier of the scope in the external service connecting to your AWS IPAM scope. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfiguration.property.ipamScopeExternalAuthorityType">IpamScopeExternalAuthorityType</a></code> | <code>string</code> | An external service connecting to your AWS IPAM scope. |

---

##### `ExternalResourceIdentifier`<sup>Optional</sup> <a name="ExternalResourceIdentifier" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfiguration.property.externalResourceIdentifier"></a>

```csharp
public string ExternalResourceIdentifier { get; set; }
```

- *Type:* string

Resource identifier of the scope in the external service connecting to your AWS IPAM scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_scope#external_resource_identifier Ec2IpamScope#external_resource_identifier}

---

##### `IpamScopeExternalAuthorityType`<sup>Optional</sup> <a name="IpamScopeExternalAuthorityType" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfiguration.property.ipamScopeExternalAuthorityType"></a>

```csharp
public string IpamScopeExternalAuthorityType { get; set; }
```

- *Type:* string

An external service connecting to your AWS IPAM scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_scope#ipam_scope_external_authority_type Ec2IpamScope#ipam_scope_external_authority_type}

---

### Ec2IpamScopeTags <a name="Ec2IpamScopeTags" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2IpamScopeTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_scope#key Ec2IpamScope#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_scope#value Ec2IpamScope#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2IpamScopeExternalAuthorityConfigurationOutputReference <a name="Ec2IpamScopeExternalAuthorityConfigurationOutputReference" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2IpamScopeExternalAuthorityConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference.resetExternalResourceIdentifier">ResetExternalResourceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference.resetIpamScopeExternalAuthorityType">ResetIpamScopeExternalAuthorityType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExternalResourceIdentifier` <a name="ResetExternalResourceIdentifier" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference.resetExternalResourceIdentifier"></a>

```csharp
private void ResetExternalResourceIdentifier()
```

##### `ResetIpamScopeExternalAuthorityType` <a name="ResetIpamScopeExternalAuthorityType" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference.resetIpamScopeExternalAuthorityType"></a>

```csharp
private void ResetIpamScopeExternalAuthorityType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference.property.externalResourceIdentifierInput">ExternalResourceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference.property.ipamScopeExternalAuthorityTypeInput">IpamScopeExternalAuthorityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference.property.externalResourceIdentifier">ExternalResourceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference.property.ipamScopeExternalAuthorityType">IpamScopeExternalAuthorityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfiguration">Ec2IpamScopeExternalAuthorityConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExternalResourceIdentifierInput`<sup>Optional</sup> <a name="ExternalResourceIdentifierInput" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference.property.externalResourceIdentifierInput"></a>

```csharp
public string ExternalResourceIdentifierInput { get; }
```

- *Type:* string

---

##### `IpamScopeExternalAuthorityTypeInput`<sup>Optional</sup> <a name="IpamScopeExternalAuthorityTypeInput" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference.property.ipamScopeExternalAuthorityTypeInput"></a>

```csharp
public string IpamScopeExternalAuthorityTypeInput { get; }
```

- *Type:* string

---

##### `ExternalResourceIdentifier`<sup>Required</sup> <a name="ExternalResourceIdentifier" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference.property.externalResourceIdentifier"></a>

```csharp
public string ExternalResourceIdentifier { get; }
```

- *Type:* string

---

##### `IpamScopeExternalAuthorityType`<sup>Required</sup> <a name="IpamScopeExternalAuthorityType" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference.property.ipamScopeExternalAuthorityType"></a>

```csharp
public string IpamScopeExternalAuthorityType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2IpamScopeExternalAuthorityConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeExternalAuthorityConfiguration">Ec2IpamScopeExternalAuthorityConfiguration</a>

---


### Ec2IpamScopeTagsList <a name="Ec2IpamScopeTagsList" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2IpamScopeTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsList.get"></a>

```csharp
private Ec2IpamScopeTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTags">Ec2IpamScopeTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsList.property.internalValue"></a>

```csharp
public IResolvable|Ec2IpamScopeTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTags">Ec2IpamScopeTags</a>[]

---


### Ec2IpamScopeTagsOutputReference <a name="Ec2IpamScopeTagsOutputReference" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2IpamScopeTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTags">Ec2IpamScopeTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2IpamScopeTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2IpamScope.Ec2IpamScopeTags">Ec2IpamScopeTags</a>

---



