# `dataAwsccDataexchangeEventAction` Submodule <a name="`dataAwsccDataexchangeEventAction` Submodule" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDataexchangeEventAction <a name="DataAwsccDataexchangeEventAction" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/dataexchange_event_action awscc_dataexchange_event_action}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDataexchangeEventAction(Construct Scope, string Id, DataAwsccDataexchangeEventActionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionConfig">DataAwsccDataexchangeEventActionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionConfig">DataAwsccDataexchangeEventActionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDataexchangeEventAction resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccDataexchangeEventAction.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccDataexchangeEventAction.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccDataexchangeEventAction.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccDataexchangeEventAction.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccDataexchangeEventAction resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccDataexchangeEventAction to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccDataexchangeEventAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/dataexchange_event_action#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDataexchangeEventAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.action">Action</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference">DataAwsccDataexchangeEventActionActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.event">Event</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference">DataAwsccDataexchangeEventActionEventOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.eventActionId">EventActionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList">DataAwsccDataexchangeEventActionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.action"></a>

```csharp
public DataAwsccDataexchangeEventActionActionOutputReference Action { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference">DataAwsccDataexchangeEventActionActionOutputReference</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Event`<sup>Required</sup> <a name="Event" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.event"></a>

```csharp
public DataAwsccDataexchangeEventActionEventOutputReference Event { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference">DataAwsccDataexchangeEventActionEventOutputReference</a>

---

##### `EventActionId`<sup>Required</sup> <a name="EventActionId" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.eventActionId"></a>

```csharp
public string EventActionId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.tags"></a>

```csharp
public DataAwsccDataexchangeEventActionTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList">DataAwsccDataexchangeEventActionTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDataexchangeEventActionAction <a name="DataAwsccDataexchangeEventActionAction" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionAction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDataexchangeEventActionAction {

};
```


### DataAwsccDataexchangeEventActionActionExportRevisionToS3 <a name="DataAwsccDataexchangeEventActionActionExportRevisionToS3" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDataexchangeEventActionActionExportRevisionToS3 {

};
```


### DataAwsccDataexchangeEventActionActionExportRevisionToS3Encryption <a name="DataAwsccDataexchangeEventActionActionExportRevisionToS3Encryption" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3Encryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3Encryption.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDataexchangeEventActionActionExportRevisionToS3Encryption {

};
```


### DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestination <a name="DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestination" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestination {

};
```


### DataAwsccDataexchangeEventActionConfig <a name="DataAwsccDataexchangeEventActionConfig" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDataexchangeEventActionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Id
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/dataexchange_event_action#id DataAwsccDataexchangeEventAction#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDataexchangeEventActionEvent <a name="DataAwsccDataexchangeEventActionEvent" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEvent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEvent.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDataexchangeEventActionEvent {

};
```


### DataAwsccDataexchangeEventActionEventRevisionPublished <a name="DataAwsccDataexchangeEventActionEventRevisionPublished" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublished"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublished.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDataexchangeEventActionEventRevisionPublished {

};
```


### DataAwsccDataexchangeEventActionTags <a name="DataAwsccDataexchangeEventActionTags" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDataexchangeEventActionTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference <a name="DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3Encryption">DataAwsccDataexchangeEventActionActionExportRevisionToS3Encryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDataexchangeEventActionActionExportRevisionToS3Encryption InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3Encryption">DataAwsccDataexchangeEventActionActionExportRevisionToS3Encryption</a>

---


### DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference <a name="DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.property.encryption">Encryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference">DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.property.revisionDestination">RevisionDestination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference">DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3">DataAwsccDataexchangeEventActionActionExportRevisionToS3</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.property.encryption"></a>

```csharp
public DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference Encryption { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference">DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference</a>

---

##### `RevisionDestination`<sup>Required</sup> <a name="RevisionDestination" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.property.revisionDestination"></a>

```csharp
public DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference RevisionDestination { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference">DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.property.internalValue"></a>

```csharp
public DataAwsccDataexchangeEventActionActionExportRevisionToS3 InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3">DataAwsccDataexchangeEventActionActionExportRevisionToS3</a>

---


### DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference <a name="DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.keyPattern">KeyPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestination">DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `KeyPattern`<sup>Required</sup> <a name="KeyPattern" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.keyPattern"></a>

```csharp
public string KeyPattern { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestination InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestination">DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestination</a>

---


### DataAwsccDataexchangeEventActionActionOutputReference <a name="DataAwsccDataexchangeEventActionActionOutputReference" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDataexchangeEventActionActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.property.exportRevisionToS3">ExportRevisionToS3</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference">DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionAction">DataAwsccDataexchangeEventActionAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExportRevisionToS3`<sup>Required</sup> <a name="ExportRevisionToS3" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.property.exportRevisionToS3"></a>

```csharp
public DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference ExportRevisionToS3 { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference">DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDataexchangeEventActionAction InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionAction">DataAwsccDataexchangeEventActionAction</a>

---


### DataAwsccDataexchangeEventActionEventOutputReference <a name="DataAwsccDataexchangeEventActionEventOutputReference" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDataexchangeEventActionEventOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.property.revisionPublished">RevisionPublished</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference">DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEvent">DataAwsccDataexchangeEventActionEvent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RevisionPublished`<sup>Required</sup> <a name="RevisionPublished" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.property.revisionPublished"></a>

```csharp
public DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference RevisionPublished { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference">DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDataexchangeEventActionEvent InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEvent">DataAwsccDataexchangeEventActionEvent</a>

---


### DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference <a name="DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.property.dataSetId">DataSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublished">DataAwsccDataexchangeEventActionEventRevisionPublished</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataSetId`<sup>Required</sup> <a name="DataSetId" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.property.dataSetId"></a>

```csharp
public string DataSetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDataexchangeEventActionEventRevisionPublished InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublished">DataAwsccDataexchangeEventActionEventRevisionPublished</a>

---


### DataAwsccDataexchangeEventActionTagsList <a name="DataAwsccDataexchangeEventActionTagsList" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDataexchangeEventActionTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.get"></a>

```csharp
private DataAwsccDataexchangeEventActionTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccDataexchangeEventActionTagsOutputReference <a name="DataAwsccDataexchangeEventActionTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDataexchangeEventActionTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTags">DataAwsccDataexchangeEventActionTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDataexchangeEventActionTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTags">DataAwsccDataexchangeEventActionTags</a>

---



