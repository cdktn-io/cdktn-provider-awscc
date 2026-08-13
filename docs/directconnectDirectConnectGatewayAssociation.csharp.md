# `directconnectDirectConnectGatewayAssociation` Submodule <a name="`directconnectDirectConnectGatewayAssociation` Submodule" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectconnectDirectConnectGatewayAssociation <a name="DirectconnectDirectConnectGatewayAssociation" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/directconnect_direct_connect_gateway_association awscc_directconnect_direct_connect_gateway_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DirectconnectDirectConnectGatewayAssociation(Construct Scope, string Id, DirectconnectDirectConnectGatewayAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig">DirectconnectDirectConnectGatewayAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig">DirectconnectDirectConnectGatewayAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.resetAcceptDirectConnectGatewayAssociationProposalRoleArn">ResetAcceptDirectConnectGatewayAssociationProposalRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.resetAllowedPrefixesToDirectConnectGateway">ResetAllowedPrefixesToDirectConnectGateway</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAcceptDirectConnectGatewayAssociationProposalRoleArn` <a name="ResetAcceptDirectConnectGatewayAssociationProposalRoleArn" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.resetAcceptDirectConnectGatewayAssociationProposalRoleArn"></a>

```csharp
private void ResetAcceptDirectConnectGatewayAssociationProposalRoleArn()
```

##### `ResetAllowedPrefixesToDirectConnectGateway` <a name="ResetAllowedPrefixesToDirectConnectGateway" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.resetAllowedPrefixesToDirectConnectGateway"></a>

```csharp
private void ResetAllowedPrefixesToDirectConnectGateway()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DirectconnectDirectConnectGatewayAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DirectconnectDirectConnectGatewayAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DirectconnectDirectConnectGatewayAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DirectconnectDirectConnectGatewayAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DirectconnectDirectConnectGatewayAssociation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DirectconnectDirectConnectGatewayAssociation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DirectconnectDirectConnectGatewayAssociation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DirectconnectDirectConnectGatewayAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/directconnect_direct_connect_gateway_association#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DirectconnectDirectConnectGatewayAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.associationId">AssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.acceptDirectConnectGatewayAssociationProposalRoleArnInput">AcceptDirectConnectGatewayAssociationProposalRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.allowedPrefixesToDirectConnectGatewayInput">AllowedPrefixesToDirectConnectGatewayInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.associatedGatewayIdInput">AssociatedGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.directConnectGatewayIdInput">DirectConnectGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.acceptDirectConnectGatewayAssociationProposalRoleArn">AcceptDirectConnectGatewayAssociationProposalRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.allowedPrefixesToDirectConnectGateway">AllowedPrefixesToDirectConnectGateway</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.associatedGatewayId">AssociatedGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.directConnectGatewayId">DirectConnectGatewayId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AssociationId`<sup>Required</sup> <a name="AssociationId" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.associationId"></a>

```csharp
public string AssociationId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `AcceptDirectConnectGatewayAssociationProposalRoleArnInput`<sup>Optional</sup> <a name="AcceptDirectConnectGatewayAssociationProposalRoleArnInput" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.acceptDirectConnectGatewayAssociationProposalRoleArnInput"></a>

```csharp
public string AcceptDirectConnectGatewayAssociationProposalRoleArnInput { get; }
```

- *Type:* string

---

##### `AllowedPrefixesToDirectConnectGatewayInput`<sup>Optional</sup> <a name="AllowedPrefixesToDirectConnectGatewayInput" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.allowedPrefixesToDirectConnectGatewayInput"></a>

```csharp
public string[] AllowedPrefixesToDirectConnectGatewayInput { get; }
```

- *Type:* string[]

---

##### `AssociatedGatewayIdInput`<sup>Optional</sup> <a name="AssociatedGatewayIdInput" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.associatedGatewayIdInput"></a>

```csharp
public string AssociatedGatewayIdInput { get; }
```

- *Type:* string

---

##### `DirectConnectGatewayIdInput`<sup>Optional</sup> <a name="DirectConnectGatewayIdInput" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.directConnectGatewayIdInput"></a>

```csharp
public string DirectConnectGatewayIdInput { get; }
```

- *Type:* string

---

##### `AcceptDirectConnectGatewayAssociationProposalRoleArn`<sup>Required</sup> <a name="AcceptDirectConnectGatewayAssociationProposalRoleArn" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.acceptDirectConnectGatewayAssociationProposalRoleArn"></a>

```csharp
public string AcceptDirectConnectGatewayAssociationProposalRoleArn { get; }
```

- *Type:* string

---

##### `AllowedPrefixesToDirectConnectGateway`<sup>Required</sup> <a name="AllowedPrefixesToDirectConnectGateway" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.allowedPrefixesToDirectConnectGateway"></a>

```csharp
public string[] AllowedPrefixesToDirectConnectGateway { get; }
```

- *Type:* string[]

---

##### `AssociatedGatewayId`<sup>Required</sup> <a name="AssociatedGatewayId" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.associatedGatewayId"></a>

```csharp
public string AssociatedGatewayId { get; }
```

- *Type:* string

---

##### `DirectConnectGatewayId`<sup>Required</sup> <a name="DirectConnectGatewayId" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.directConnectGatewayId"></a>

```csharp
public string DirectConnectGatewayId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DirectconnectDirectConnectGatewayAssociationConfig <a name="DirectconnectDirectConnectGatewayAssociationConfig" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DirectconnectDirectConnectGatewayAssociationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AssociatedGatewayId,
    string DirectConnectGatewayId,
    string AcceptDirectConnectGatewayAssociationProposalRoleArn = null,
    string[] AllowedPrefixesToDirectConnectGateway = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.associatedGatewayId">AssociatedGatewayId</a></code> | <code>string</code> | The ID or ARN of the virtual private gateway or transit gateway. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.directConnectGatewayId">DirectConnectGatewayId</a></code> | <code>string</code> | The ID or ARN of the Direct Connect gateway. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.acceptDirectConnectGatewayAssociationProposalRoleArn">AcceptDirectConnectGatewayAssociationProposalRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the role to accept the Direct Connect Gateway association proposal. Needs directconnect:AcceptDirectConnectGatewayAssociationProposal permissions. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.allowedPrefixesToDirectConnectGateway">AllowedPrefixesToDirectConnectGateway</a></code> | <code>string[]</code> | The Amazon VPC prefixes to advertise to the Direct Connect gateway. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AssociatedGatewayId`<sup>Required</sup> <a name="AssociatedGatewayId" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.associatedGatewayId"></a>

```csharp
public string AssociatedGatewayId { get; set; }
```

- *Type:* string

The ID or ARN of the virtual private gateway or transit gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/directconnect_direct_connect_gateway_association#associated_gateway_id DirectconnectDirectConnectGatewayAssociation#associated_gateway_id}

---

##### `DirectConnectGatewayId`<sup>Required</sup> <a name="DirectConnectGatewayId" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.directConnectGatewayId"></a>

```csharp
public string DirectConnectGatewayId { get; set; }
```

- *Type:* string

The ID or ARN of the Direct Connect gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/directconnect_direct_connect_gateway_association#direct_connect_gateway_id DirectconnectDirectConnectGatewayAssociation#direct_connect_gateway_id}

---

##### `AcceptDirectConnectGatewayAssociationProposalRoleArn`<sup>Optional</sup> <a name="AcceptDirectConnectGatewayAssociationProposalRoleArn" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.acceptDirectConnectGatewayAssociationProposalRoleArn"></a>

```csharp
public string AcceptDirectConnectGatewayAssociationProposalRoleArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the role to accept the Direct Connect Gateway association proposal. Needs directconnect:AcceptDirectConnectGatewayAssociationProposal permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/directconnect_direct_connect_gateway_association#accept_direct_connect_gateway_association_proposal_role_arn DirectconnectDirectConnectGatewayAssociation#accept_direct_connect_gateway_association_proposal_role_arn}

---

##### `AllowedPrefixesToDirectConnectGateway`<sup>Optional</sup> <a name="AllowedPrefixesToDirectConnectGateway" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.allowedPrefixesToDirectConnectGateway"></a>

```csharp
public string[] AllowedPrefixesToDirectConnectGateway { get; set; }
```

- *Type:* string[]

The Amazon VPC prefixes to advertise to the Direct Connect gateway.

This parameter is required when you create an association to a transit gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/directconnect_direct_connect_gateway_association#allowed_prefixes_to_direct_connect_gateway DirectconnectDirectConnectGatewayAssociation#allowed_prefixes_to_direct_connect_gateway}

---



