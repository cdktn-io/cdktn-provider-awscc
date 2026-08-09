# `networkmanagerTransitGatewayRegistration` Submodule <a name="`networkmanagerTransitGatewayRegistration` Submodule" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkmanagerTransitGatewayRegistration <a name="NetworkmanagerTransitGatewayRegistration" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_transit_gateway_registration awscc_networkmanager_transit_gateway_registration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkmanagerTransitGatewayRegistration(Construct Scope, string Id, NetworkmanagerTransitGatewayRegistrationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig">NetworkmanagerTransitGatewayRegistrationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig">NetworkmanagerTransitGatewayRegistrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkmanagerTransitGatewayRegistration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

NetworkmanagerTransitGatewayRegistration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

NetworkmanagerTransitGatewayRegistration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

NetworkmanagerTransitGatewayRegistration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

NetworkmanagerTransitGatewayRegistration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a NetworkmanagerTransitGatewayRegistration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkmanagerTransitGatewayRegistration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkmanagerTransitGatewayRegistration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_transit_gateway_registration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the NetworkmanagerTransitGatewayRegistration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.globalNetworkIdInput">GlobalNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.transitGatewayArnInput">TransitGatewayArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.globalNetworkId">GlobalNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.transitGatewayArn">TransitGatewayArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `GlobalNetworkIdInput`<sup>Optional</sup> <a name="GlobalNetworkIdInput" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.globalNetworkIdInput"></a>

```csharp
public string GlobalNetworkIdInput { get; }
```

- *Type:* string

---

##### `TransitGatewayArnInput`<sup>Optional</sup> <a name="TransitGatewayArnInput" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.transitGatewayArnInput"></a>

```csharp
public string TransitGatewayArnInput { get; }
```

- *Type:* string

---

##### `GlobalNetworkId`<sup>Required</sup> <a name="GlobalNetworkId" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.globalNetworkId"></a>

```csharp
public string GlobalNetworkId { get; }
```

- *Type:* string

---

##### `TransitGatewayArn`<sup>Required</sup> <a name="TransitGatewayArn" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.transitGatewayArn"></a>

```csharp
public string TransitGatewayArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkmanagerTransitGatewayRegistrationConfig <a name="NetworkmanagerTransitGatewayRegistrationConfig" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkmanagerTransitGatewayRegistrationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string GlobalNetworkId,
    string TransitGatewayArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.globalNetworkId">GlobalNetworkId</a></code> | <code>string</code> | The ID of the global network. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.transitGatewayArn">TransitGatewayArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the transit gateway. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `GlobalNetworkId`<sup>Required</sup> <a name="GlobalNetworkId" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.globalNetworkId"></a>

```csharp
public string GlobalNetworkId { get; set; }
```

- *Type:* string

The ID of the global network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_transit_gateway_registration#global_network_id NetworkmanagerTransitGatewayRegistration#global_network_id}

---

##### `TransitGatewayArn`<sup>Required</sup> <a name="TransitGatewayArn" id="@cdktn/provider-awscc.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.transitGatewayArn"></a>

```csharp
public string TransitGatewayArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the transit gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_transit_gateway_registration#transit_gateway_arn NetworkmanagerTransitGatewayRegistration#transit_gateway_arn}

---



