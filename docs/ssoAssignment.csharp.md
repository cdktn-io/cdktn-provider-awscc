# `ssoAssignment` Submodule <a name="`ssoAssignment` Submodule" id="@cdktn/provider-awscc.ssoAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsoAssignment <a name="SsoAssignment" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sso_assignment awscc_sso_assignment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsoAssignment(Construct Scope, string Id, SsoAssignmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignmentConfig">SsoAssignmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignmentConfig">SsoAssignmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SsoAssignment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SsoAssignment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SsoAssignment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SsoAssignment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SsoAssignment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SsoAssignment resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SsoAssignment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SsoAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sso_assignment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SsoAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignment.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignment.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignment.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignment.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignment.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignment.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignment.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignment.property.instanceArnInput">InstanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignment.property.permissionSetArnInput">PermissionSetArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignment.property.principalIdInput">PrincipalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignment.property.principalTypeInput">PrincipalTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignment.property.targetIdInput">TargetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignment.property.targetTypeInput">TargetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignment.property.instanceArn">InstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignment.property.permissionSetArn">PermissionSetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignment.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignment.property.principalType">PrincipalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignment.property.targetId">TargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignment.property.targetType">TargetType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceArnInput`<sup>Optional</sup> <a name="InstanceArnInput" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.property.instanceArnInput"></a>

```csharp
public string InstanceArnInput { get; }
```

- *Type:* string

---

##### `PermissionSetArnInput`<sup>Optional</sup> <a name="PermissionSetArnInput" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.property.permissionSetArnInput"></a>

```csharp
public string PermissionSetArnInput { get; }
```

- *Type:* string

---

##### `PrincipalIdInput`<sup>Optional</sup> <a name="PrincipalIdInput" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.property.principalIdInput"></a>

```csharp
public string PrincipalIdInput { get; }
```

- *Type:* string

---

##### `PrincipalTypeInput`<sup>Optional</sup> <a name="PrincipalTypeInput" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.property.principalTypeInput"></a>

```csharp
public string PrincipalTypeInput { get; }
```

- *Type:* string

---

##### `TargetIdInput`<sup>Optional</sup> <a name="TargetIdInput" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.property.targetIdInput"></a>

```csharp
public string TargetIdInput { get; }
```

- *Type:* string

---

##### `TargetTypeInput`<sup>Optional</sup> <a name="TargetTypeInput" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.property.targetTypeInput"></a>

```csharp
public string TargetTypeInput { get; }
```

- *Type:* string

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.property.instanceArn"></a>

```csharp
public string InstanceArn { get; }
```

- *Type:* string

---

##### `PermissionSetArn`<sup>Required</sup> <a name="PermissionSetArn" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.property.permissionSetArn"></a>

```csharp
public string PermissionSetArn { get; }
```

- *Type:* string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `PrincipalType`<sup>Required</sup> <a name="PrincipalType" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.property.principalType"></a>

```csharp
public string PrincipalType { get; }
```

- *Type:* string

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.property.targetId"></a>

```csharp
public string TargetId { get; }
```

- *Type:* string

---

##### `TargetType`<sup>Required</sup> <a name="TargetType" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.property.targetType"></a>

```csharp
public string TargetType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SsoAssignmentConfig <a name="SsoAssignmentConfig" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignmentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsoAssignmentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string InstanceArn,
    string PermissionSetArn,
    string PrincipalId,
    string PrincipalType,
    string TargetId,
    string TargetType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignmentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignmentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignmentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignmentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignmentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignmentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignmentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignmentConfig.property.instanceArn">InstanceArn</a></code> | <code>string</code> | The sso instance that the permission set is owned. |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignmentConfig.property.permissionSetArn">PermissionSetArn</a></code> | <code>string</code> | The permission set that the assignment will be assigned. |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignmentConfig.property.principalId">PrincipalId</a></code> | <code>string</code> | The assignee's identifier, user id/group id. |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignmentConfig.property.principalType">PrincipalType</a></code> | <code>string</code> | The assignee's type, user/group. |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignmentConfig.property.targetId">TargetId</a></code> | <code>string</code> | The account id to be provisioned. |
| <code><a href="#@cdktn/provider-awscc.ssoAssignment.SsoAssignmentConfig.property.targetType">TargetType</a></code> | <code>string</code> | The type of resource to be provisioned to, only aws account now. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignmentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignmentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignmentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignmentConfig.property.instanceArn"></a>

```csharp
public string InstanceArn { get; set; }
```

- *Type:* string

The sso instance that the permission set is owned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sso_assignment#instance_arn SsoAssignment#instance_arn}

---

##### `PermissionSetArn`<sup>Required</sup> <a name="PermissionSetArn" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignmentConfig.property.permissionSetArn"></a>

```csharp
public string PermissionSetArn { get; set; }
```

- *Type:* string

The permission set that the assignment will be assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sso_assignment#permission_set_arn SsoAssignment#permission_set_arn}

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignmentConfig.property.principalId"></a>

```csharp
public string PrincipalId { get; set; }
```

- *Type:* string

The assignee's identifier, user id/group id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sso_assignment#principal_id SsoAssignment#principal_id}

---

##### `PrincipalType`<sup>Required</sup> <a name="PrincipalType" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignmentConfig.property.principalType"></a>

```csharp
public string PrincipalType { get; set; }
```

- *Type:* string

The assignee's type, user/group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sso_assignment#principal_type SsoAssignment#principal_type}

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignmentConfig.property.targetId"></a>

```csharp
public string TargetId { get; set; }
```

- *Type:* string

The account id to be provisioned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sso_assignment#target_id SsoAssignment#target_id}

---

##### `TargetType`<sup>Required</sup> <a name="TargetType" id="@cdktn/provider-awscc.ssoAssignment.SsoAssignmentConfig.property.targetType"></a>

```csharp
public string TargetType { get; set; }
```

- *Type:* string

The type of resource to be provisioned to, only aws account now.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sso_assignment#target_type SsoAssignment#target_type}

---



