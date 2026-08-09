# `securitylakeSubscriberNotification` Submodule <a name="`securitylakeSubscriberNotification` Submodule" id="@cdktn/provider-awscc.securitylakeSubscriberNotification"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecuritylakeSubscriberNotification <a name="SecuritylakeSubscriberNotification" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securitylake_subscriber_notification awscc_securitylake_subscriber_notification}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecuritylakeSubscriberNotification(Construct Scope, string Id, SecuritylakeSubscriberNotificationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig">SecuritylakeSubscriberNotificationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig">SecuritylakeSubscriberNotificationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.putNotificationConfiguration">PutNotificationConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutNotificationConfiguration` <a name="PutNotificationConfiguration" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.putNotificationConfiguration"></a>

```csharp
private void PutNotificationConfiguration(SecuritylakeSubscriberNotificationNotificationConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.putNotificationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfiguration">SecuritylakeSubscriberNotificationNotificationConfiguration</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SecuritylakeSubscriberNotification resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SecuritylakeSubscriberNotification.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SecuritylakeSubscriberNotification.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SecuritylakeSubscriberNotification.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SecuritylakeSubscriberNotification.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SecuritylakeSubscriberNotification resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecuritylakeSubscriberNotification to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecuritylakeSubscriberNotification that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securitylake_subscriber_notification#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SecuritylakeSubscriberNotification to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.notificationConfiguration">NotificationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference">SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.subscriberEndpoint">SubscriberEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.notificationConfigurationInput">NotificationConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfiguration">SecuritylakeSubscriberNotificationNotificationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.subscriberArnInput">SubscriberArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.subscriberArn">SubscriberArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NotificationConfiguration`<sup>Required</sup> <a name="NotificationConfiguration" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.notificationConfiguration"></a>

```csharp
public SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference NotificationConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference">SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference</a>

---

##### `SubscriberEndpoint`<sup>Required</sup> <a name="SubscriberEndpoint" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.subscriberEndpoint"></a>

```csharp
public string SubscriberEndpoint { get; }
```

- *Type:* string

---

##### `NotificationConfigurationInput`<sup>Optional</sup> <a name="NotificationConfigurationInput" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.notificationConfigurationInput"></a>

```csharp
public IResolvable|SecuritylakeSubscriberNotificationNotificationConfiguration NotificationConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfiguration">SecuritylakeSubscriberNotificationNotificationConfiguration</a>

---

##### `SubscriberArnInput`<sup>Optional</sup> <a name="SubscriberArnInput" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.subscriberArnInput"></a>

```csharp
public string SubscriberArnInput { get; }
```

- *Type:* string

---

##### `SubscriberArn`<sup>Required</sup> <a name="SubscriberArn" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.subscriberArn"></a>

```csharp
public string SubscriberArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecuritylakeSubscriberNotificationConfig <a name="SecuritylakeSubscriberNotificationConfig" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecuritylakeSubscriberNotificationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    SecuritylakeSubscriberNotificationNotificationConfiguration NotificationConfiguration,
    string SubscriberArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.notificationConfiguration">NotificationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfiguration">SecuritylakeSubscriberNotificationNotificationConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securitylake_subscriber_notification#notification_configuration SecuritylakeSubscriberNotification#notification_configuration}. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.subscriberArn">SubscriberArn</a></code> | <code>string</code> | The ARN for the subscriber. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `NotificationConfiguration`<sup>Required</sup> <a name="NotificationConfiguration" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.notificationConfiguration"></a>

```csharp
public SecuritylakeSubscriberNotificationNotificationConfiguration NotificationConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfiguration">SecuritylakeSubscriberNotificationNotificationConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securitylake_subscriber_notification#notification_configuration SecuritylakeSubscriberNotification#notification_configuration}.

---

##### `SubscriberArn`<sup>Required</sup> <a name="SubscriberArn" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.subscriberArn"></a>

```csharp
public string SubscriberArn { get; set; }
```

- *Type:* string

The ARN for the subscriber.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securitylake_subscriber_notification#subscriber_arn SecuritylakeSubscriberNotification#subscriber_arn}

---

### SecuritylakeSubscriberNotificationNotificationConfiguration <a name="SecuritylakeSubscriberNotificationNotificationConfiguration" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecuritylakeSubscriberNotificationNotificationConfiguration {
    SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration HttpsNotificationConfiguration = null,
    string SqsNotificationConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfiguration.property.httpsNotificationConfiguration">HttpsNotificationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration">SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration</a></code> | The configuration for HTTPS subscriber notification. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfiguration.property.sqsNotificationConfiguration">SqsNotificationConfiguration</a></code> | <code>string</code> | The configurations for SQS subscriber notification. The members of this structure are context-dependent. |

---

##### `HttpsNotificationConfiguration`<sup>Optional</sup> <a name="HttpsNotificationConfiguration" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfiguration.property.httpsNotificationConfiguration"></a>

```csharp
public SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration HttpsNotificationConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration">SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration</a>

The configuration for HTTPS subscriber notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securitylake_subscriber_notification#https_notification_configuration SecuritylakeSubscriberNotification#https_notification_configuration}

---

##### `SqsNotificationConfiguration`<sup>Optional</sup> <a name="SqsNotificationConfiguration" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfiguration.property.sqsNotificationConfiguration"></a>

```csharp
public string SqsNotificationConfiguration { get; set; }
```

- *Type:* string

The configurations for SQS subscriber notification. The members of this structure are context-dependent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securitylake_subscriber_notification#sqs_notification_configuration SecuritylakeSubscriberNotification#sqs_notification_configuration}

---

### SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration <a name="SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration {
    string AuthorizationApiKeyName = null,
    string AuthorizationApiKeyValue = null,
    string Endpoint = null,
    string HttpMethod = null,
    string TargetRoleArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration.property.authorizationApiKeyName">AuthorizationApiKeyName</a></code> | <code>string</code> | The key name for the notification subscription. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration.property.authorizationApiKeyValue">AuthorizationApiKeyValue</a></code> | <code>string</code> | The key value for the notification subscription. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration.property.endpoint">Endpoint</a></code> | <code>string</code> | The subscription endpoint in Security Lake. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration.property.httpMethod">HttpMethod</a></code> | <code>string</code> | The HTTPS method used for the notification subscription. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration.property.targetRoleArn">TargetRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the EventBridge API destinations IAM role that you created. |

---

##### `AuthorizationApiKeyName`<sup>Optional</sup> <a name="AuthorizationApiKeyName" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration.property.authorizationApiKeyName"></a>

```csharp
public string AuthorizationApiKeyName { get; set; }
```

- *Type:* string

The key name for the notification subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securitylake_subscriber_notification#authorization_api_key_name SecuritylakeSubscriberNotification#authorization_api_key_name}

---

##### `AuthorizationApiKeyValue`<sup>Optional</sup> <a name="AuthorizationApiKeyValue" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration.property.authorizationApiKeyValue"></a>

```csharp
public string AuthorizationApiKeyValue { get; set; }
```

- *Type:* string

The key value for the notification subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securitylake_subscriber_notification#authorization_api_key_value SecuritylakeSubscriberNotification#authorization_api_key_value}

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration.property.endpoint"></a>

```csharp
public string Endpoint { get; set; }
```

- *Type:* string

The subscription endpoint in Security Lake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securitylake_subscriber_notification#endpoint SecuritylakeSubscriberNotification#endpoint}

---

##### `HttpMethod`<sup>Optional</sup> <a name="HttpMethod" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration.property.httpMethod"></a>

```csharp
public string HttpMethod { get; set; }
```

- *Type:* string

The HTTPS method used for the notification subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securitylake_subscriber_notification#http_method SecuritylakeSubscriberNotification#http_method}

---

##### `TargetRoleArn`<sup>Optional</sup> <a name="TargetRoleArn" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration.property.targetRoleArn"></a>

```csharp
public string TargetRoleArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the EventBridge API destinations IAM role that you created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securitylake_subscriber_notification#target_role_arn SecuritylakeSubscriberNotification#target_role_arn}

---

## Classes <a name="Classes" id="Classes"></a>

### SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference <a name="SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.resetAuthorizationApiKeyName">ResetAuthorizationApiKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.resetAuthorizationApiKeyValue">ResetAuthorizationApiKeyValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.resetHttpMethod">ResetHttpMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.resetTargetRoleArn">ResetTargetRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthorizationApiKeyName` <a name="ResetAuthorizationApiKeyName" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.resetAuthorizationApiKeyName"></a>

```csharp
private void ResetAuthorizationApiKeyName()
```

##### `ResetAuthorizationApiKeyValue` <a name="ResetAuthorizationApiKeyValue" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.resetAuthorizationApiKeyValue"></a>

```csharp
private void ResetAuthorizationApiKeyValue()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.resetEndpoint"></a>

```csharp
private void ResetEndpoint()
```

##### `ResetHttpMethod` <a name="ResetHttpMethod" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.resetHttpMethod"></a>

```csharp
private void ResetHttpMethod()
```

##### `ResetTargetRoleArn` <a name="ResetTargetRoleArn" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.resetTargetRoleArn"></a>

```csharp
private void ResetTargetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.authorizationApiKeyNameInput">AuthorizationApiKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.authorizationApiKeyValueInput">AuthorizationApiKeyValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.endpointInput">EndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.httpMethodInput">HttpMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.targetRoleArnInput">TargetRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.authorizationApiKeyName">AuthorizationApiKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.authorizationApiKeyValue">AuthorizationApiKeyValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.httpMethod">HttpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.targetRoleArn">TargetRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration">SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizationApiKeyNameInput`<sup>Optional</sup> <a name="AuthorizationApiKeyNameInput" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.authorizationApiKeyNameInput"></a>

```csharp
public string AuthorizationApiKeyNameInput { get; }
```

- *Type:* string

---

##### `AuthorizationApiKeyValueInput`<sup>Optional</sup> <a name="AuthorizationApiKeyValueInput" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.authorizationApiKeyValueInput"></a>

```csharp
public string AuthorizationApiKeyValueInput { get; }
```

- *Type:* string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.endpointInput"></a>

```csharp
public string EndpointInput { get; }
```

- *Type:* string

---

##### `HttpMethodInput`<sup>Optional</sup> <a name="HttpMethodInput" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.httpMethodInput"></a>

```csharp
public string HttpMethodInput { get; }
```

- *Type:* string

---

##### `TargetRoleArnInput`<sup>Optional</sup> <a name="TargetRoleArnInput" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.targetRoleArnInput"></a>

```csharp
public string TargetRoleArnInput { get; }
```

- *Type:* string

---

##### `AuthorizationApiKeyName`<sup>Required</sup> <a name="AuthorizationApiKeyName" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.authorizationApiKeyName"></a>

```csharp
public string AuthorizationApiKeyName { get; }
```

- *Type:* string

---

##### `AuthorizationApiKeyValue`<sup>Required</sup> <a name="AuthorizationApiKeyValue" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.authorizationApiKeyValue"></a>

```csharp
public string AuthorizationApiKeyValue { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `HttpMethod`<sup>Required</sup> <a name="HttpMethod" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.httpMethod"></a>

```csharp
public string HttpMethod { get; }
```

- *Type:* string

---

##### `TargetRoleArn`<sup>Required</sup> <a name="TargetRoleArn" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.targetRoleArn"></a>

```csharp
public string TargetRoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration">SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration</a>

---


### SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference <a name="SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.putHttpsNotificationConfiguration">PutHttpsNotificationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.resetHttpsNotificationConfiguration">ResetHttpsNotificationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.resetSqsNotificationConfiguration">ResetSqsNotificationConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHttpsNotificationConfiguration` <a name="PutHttpsNotificationConfiguration" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.putHttpsNotificationConfiguration"></a>

```csharp
private void PutHttpsNotificationConfiguration(SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.putHttpsNotificationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration">SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration</a>

---

##### `ResetHttpsNotificationConfiguration` <a name="ResetHttpsNotificationConfiguration" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.resetHttpsNotificationConfiguration"></a>

```csharp
private void ResetHttpsNotificationConfiguration()
```

##### `ResetSqsNotificationConfiguration` <a name="ResetSqsNotificationConfiguration" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.resetSqsNotificationConfiguration"></a>

```csharp
private void ResetSqsNotificationConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.httpsNotificationConfiguration">HttpsNotificationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference">SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.httpsNotificationConfigurationInput">HttpsNotificationConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration">SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.sqsNotificationConfigurationInput">SqsNotificationConfigurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.sqsNotificationConfiguration">SqsNotificationConfiguration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfiguration">SecuritylakeSubscriberNotificationNotificationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HttpsNotificationConfiguration`<sup>Required</sup> <a name="HttpsNotificationConfiguration" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.httpsNotificationConfiguration"></a>

```csharp
public SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference HttpsNotificationConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference">SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference</a>

---

##### `HttpsNotificationConfigurationInput`<sup>Optional</sup> <a name="HttpsNotificationConfigurationInput" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.httpsNotificationConfigurationInput"></a>

```csharp
public IResolvable|SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration HttpsNotificationConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration">SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration</a>

---

##### `SqsNotificationConfigurationInput`<sup>Optional</sup> <a name="SqsNotificationConfigurationInput" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.sqsNotificationConfigurationInput"></a>

```csharp
public string SqsNotificationConfigurationInput { get; }
```

- *Type:* string

---

##### `SqsNotificationConfiguration`<sup>Required</sup> <a name="SqsNotificationConfiguration" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.sqsNotificationConfiguration"></a>

```csharp
public string SqsNotificationConfiguration { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecuritylakeSubscriberNotificationNotificationConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfiguration">SecuritylakeSubscriberNotificationNotificationConfiguration</a>

---



