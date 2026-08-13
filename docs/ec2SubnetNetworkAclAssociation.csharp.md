# `ec2SubnetNetworkAclAssociation` Submodule <a name="`ec2SubnetNetworkAclAssociation` Submodule" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2SubnetNetworkAclAssociation <a name="Ec2SubnetNetworkAclAssociation" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_subnet_network_acl_association awscc_ec2_subnet_network_acl_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2SubnetNetworkAclAssociation(Construct Scope, string Id, Ec2SubnetNetworkAclAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociationConfig">Ec2SubnetNetworkAclAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociationConfig">Ec2SubnetNetworkAclAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2SubnetNetworkAclAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2SubnetNetworkAclAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2SubnetNetworkAclAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2SubnetNetworkAclAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2SubnetNetworkAclAssociation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Ec2SubnetNetworkAclAssociation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2SubnetNetworkAclAssociation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2SubnetNetworkAclAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_subnet_network_acl_association#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Ec2SubnetNetworkAclAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.property.associationId">AssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.property.networkAclIdInput">NetworkAclIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.property.networkAclId">NetworkAclId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AssociationId`<sup>Required</sup> <a name="AssociationId" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.property.associationId"></a>

```csharp
public string AssociationId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NetworkAclIdInput`<sup>Optional</sup> <a name="NetworkAclIdInput" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.property.networkAclIdInput"></a>

```csharp
public string NetworkAclIdInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `NetworkAclId`<sup>Required</sup> <a name="NetworkAclId" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.property.networkAclId"></a>

```csharp
public string NetworkAclId { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2SubnetNetworkAclAssociationConfig <a name="Ec2SubnetNetworkAclAssociationConfig" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2SubnetNetworkAclAssociationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string NetworkAclId,
    string SubnetId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociationConfig.property.networkAclId">NetworkAclId</a></code> | <code>string</code> | The ID of the network ACL. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociationConfig.property.subnetId">SubnetId</a></code> | <code>string</code> | The ID of the subnet. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `NetworkAclId`<sup>Required</sup> <a name="NetworkAclId" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociationConfig.property.networkAclId"></a>

```csharp
public string NetworkAclId { get; set; }
```

- *Type:* string

The ID of the network ACL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_subnet_network_acl_association#network_acl_id Ec2SubnetNetworkAclAssociation#network_acl_id}

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.ec2SubnetNetworkAclAssociation.Ec2SubnetNetworkAclAssociationConfig.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

The ID of the subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_subnet_network_acl_association#subnet_id Ec2SubnetNetworkAclAssociation#subnet_id}

---



