# `ec2ClientVpnRoute` Submodule <a name="`ec2ClientVpnRoute` Submodule" id="@cdktn/provider-awscc.ec2ClientVpnRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2ClientVpnRoute <a name="Ec2ClientVpnRoute" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ec2_client_vpn_route awscc_ec2_client_vpn_route}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2ClientVpnRoute(Construct Scope, string Id, Ec2ClientVpnRouteConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRouteConfig">Ec2ClientVpnRouteConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRouteConfig">Ec2ClientVpnRouteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.resetTargetVpcSubnetId">ResetTargetVpcSubnetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetTargetVpcSubnetId` <a name="ResetTargetVpcSubnetId" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.resetTargetVpcSubnetId"></a>

```csharp
private void ResetTargetVpcSubnetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2ClientVpnRoute resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2ClientVpnRoute.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2ClientVpnRoute.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2ClientVpnRoute.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2ClientVpnRoute.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Ec2ClientVpnRoute resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2ClientVpnRoute to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2ClientVpnRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ec2_client_vpn_route#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Ec2ClientVpnRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.property.clientVpnRouteId">ClientVpnRouteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.property.clientVpnEndpointIdInput">ClientVpnEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.property.destinationCidrBlockInput">DestinationCidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.property.targetVpcSubnetIdInput">TargetVpcSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.property.clientVpnEndpointId">ClientVpnEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.property.destinationCidrBlock">DestinationCidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.property.targetVpcSubnetId">TargetVpcSubnetId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ClientVpnRouteId`<sup>Required</sup> <a name="ClientVpnRouteId" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.property.clientVpnRouteId"></a>

```csharp
public string ClientVpnRouteId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ClientVpnEndpointIdInput`<sup>Optional</sup> <a name="ClientVpnEndpointIdInput" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.property.clientVpnEndpointIdInput"></a>

```csharp
public string ClientVpnEndpointIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DestinationCidrBlockInput`<sup>Optional</sup> <a name="DestinationCidrBlockInput" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.property.destinationCidrBlockInput"></a>

```csharp
public string DestinationCidrBlockInput { get; }
```

- *Type:* string

---

##### `TargetVpcSubnetIdInput`<sup>Optional</sup> <a name="TargetVpcSubnetIdInput" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.property.targetVpcSubnetIdInput"></a>

```csharp
public string TargetVpcSubnetIdInput { get; }
```

- *Type:* string

---

##### `ClientVpnEndpointId`<sup>Required</sup> <a name="ClientVpnEndpointId" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.property.clientVpnEndpointId"></a>

```csharp
public string ClientVpnEndpointId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DestinationCidrBlock`<sup>Required</sup> <a name="DestinationCidrBlock" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.property.destinationCidrBlock"></a>

```csharp
public string DestinationCidrBlock { get; }
```

- *Type:* string

---

##### `TargetVpcSubnetId`<sup>Required</sup> <a name="TargetVpcSubnetId" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.property.targetVpcSubnetId"></a>

```csharp
public string TargetVpcSubnetId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRoute.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2ClientVpnRouteConfig <a name="Ec2ClientVpnRouteConfig" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRouteConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2ClientVpnRouteConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ClientVpnEndpointId,
    string DestinationCidrBlock,
    string Description = null,
    string TargetVpcSubnetId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRouteConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRouteConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRouteConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRouteConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRouteConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRouteConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRouteConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRouteConfig.property.clientVpnEndpointId">ClientVpnEndpointId</a></code> | <code>string</code> | The ID of the Client VPN endpoint to which to add the route. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRouteConfig.property.destinationCidrBlock">DestinationCidrBlock</a></code> | <code>string</code> | The IPv4 address range, in CIDR notation, of the route destination. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRouteConfig.property.description">Description</a></code> | <code>string</code> | A brief description of the route. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRouteConfig.property.targetVpcSubnetId">TargetVpcSubnetId</a></code> | <code>string</code> | The ID of the subnet through which you want to route traffic. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRouteConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRouteConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRouteConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRouteConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRouteConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRouteConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRouteConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ClientVpnEndpointId`<sup>Required</sup> <a name="ClientVpnEndpointId" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRouteConfig.property.clientVpnEndpointId"></a>

```csharp
public string ClientVpnEndpointId { get; set; }
```

- *Type:* string

The ID of the Client VPN endpoint to which to add the route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ec2_client_vpn_route#client_vpn_endpoint_id Ec2ClientVpnRoute#client_vpn_endpoint_id}

---

##### `DestinationCidrBlock`<sup>Required</sup> <a name="DestinationCidrBlock" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRouteConfig.property.destinationCidrBlock"></a>

```csharp
public string DestinationCidrBlock { get; set; }
```

- *Type:* string

The IPv4 address range, in CIDR notation, of the route destination.

For example: To add a route for Internet access, enter 0.0.0.0/0. To add a route for a peered VPC, enter the peered VPC's IPv4 CIDR range. To add a route for an on-premises network, enter the AWS Site-to-Site VPN connection's IPv4 CIDR range. To add a route for the local network, enter the client CIDR range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ec2_client_vpn_route#destination_cidr_block Ec2ClientVpnRoute#destination_cidr_block}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRouteConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A brief description of the route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ec2_client_vpn_route#description Ec2ClientVpnRoute#description}

---

##### `TargetVpcSubnetId`<sup>Optional</sup> <a name="TargetVpcSubnetId" id="@cdktn/provider-awscc.ec2ClientVpnRoute.Ec2ClientVpnRouteConfig.property.targetVpcSubnetId"></a>

```csharp
public string TargetVpcSubnetId { get; set; }
```

- *Type:* string

The ID of the subnet through which you want to route traffic.

The specified subnet must be an existing target network of the Client VPN endpoint. Alternatively, if you're adding a route for the local network, specify local.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ec2_client_vpn_route#target_vpc_subnet_id Ec2ClientVpnRoute#target_vpc_subnet_id}

---



