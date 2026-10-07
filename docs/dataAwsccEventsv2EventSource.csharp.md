# `dataAwsccEventsv2EventSource` Submodule <a name="`dataAwsccEventsv2EventSource` Submodule" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEventsv2EventSource <a name="DataAwsccEventsv2EventSource" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/eventsv2_event_source awscc_eventsv2_event_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsv2EventSource(Construct Scope, string Id, DataAwsccEventsv2EventSourceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfig">DataAwsccEventsv2EventSourceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfig">DataAwsccEventsv2EventSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEventsv2EventSource resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEventsv2EventSource.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEventsv2EventSource.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEventsv2EventSource.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEventsv2EventSource.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccEventsv2EventSource resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEventsv2EventSource to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEventsv2EventSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/eventsv2_event_source#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEventsv2EventSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference">DataAwsccEventsv2EventSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.eventBusArn">EventBusArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.eventSourceArn">EventSourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.lastModifiedTime">LastModifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.revoked">Revoked</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsList">DataAwsccEventsv2EventSourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.configuration"></a>

```csharp
public DataAwsccEventsv2EventSourceConfigurationOutputReference Configuration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference">DataAwsccEventsv2EventSourceConfigurationOutputReference</a>

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EventBusArn`<sup>Required</sup> <a name="EventBusArn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.eventBusArn"></a>

```csharp
public string EventBusArn { get; }
```

- *Type:* string

---

##### `EventSourceArn`<sup>Required</sup> <a name="EventSourceArn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.eventSourceArn"></a>

```csharp
public string EventSourceArn { get; }
```

- *Type:* string

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.lastModifiedTime"></a>

```csharp
public string LastModifiedTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Revoked`<sup>Required</sup> <a name="Revoked" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.revoked"></a>

```csharp
public IResolvable Revoked { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.tags"></a>

```csharp
public DataAwsccEventsv2EventSourceTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsList">DataAwsccEventsv2EventSourceTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEventsv2EventSourceConfig <a name="DataAwsccEventsv2EventSourceConfig" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsv2EventSourceConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/eventsv2_event_source#id DataAwsccEventsv2EventSource#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEventsv2EventSourceConfiguration <a name="DataAwsccEventsv2EventSourceConfiguration" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsv2EventSourceConfiguration {

};
```


### DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfiguration <a name="DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfiguration" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfiguration {

};
```


### DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration <a name="DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration {

};
```


### DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfiguration <a name="DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfiguration" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfiguration {

};
```


### DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration <a name="DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration {

};
```


### DataAwsccEventsv2EventSourceTags <a name="DataAwsccEventsv2EventSourceTags" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsv2EventSourceTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference <a name="DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration">DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration">DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration</a>

---


### DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference <a name="DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.property.awsService">AwsService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.property.onFailureConfiguration">OnFailureConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference">DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.property.pattern">Pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfiguration">DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsService`<sup>Required</sup> <a name="AwsService" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.property.awsService"></a>

```csharp
public string AwsService { get; }
```

- *Type:* string

---

##### `OnFailureConfiguration`<sup>Required</sup> <a name="OnFailureConfiguration" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.property.onFailureConfiguration"></a>

```csharp
public DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference OnFailureConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference">DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference</a>

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.property.pattern"></a>

```csharp
public string Pattern { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfiguration">DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfiguration</a>

---


### DataAwsccEventsv2EventSourceConfigurationOutputReference <a name="DataAwsccEventsv2EventSourceConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsv2EventSourceConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.property.awsServiceEventsConfiguration">AwsServiceEventsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference">DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.property.partnerEventsConfiguration">PartnerEventsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference">DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfiguration">DataAwsccEventsv2EventSourceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsServiceEventsConfiguration`<sup>Required</sup> <a name="AwsServiceEventsConfiguration" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.property.awsServiceEventsConfiguration"></a>

```csharp
public DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference AwsServiceEventsConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference">DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference</a>

---

##### `PartnerEventsConfiguration`<sup>Required</sup> <a name="PartnerEventsConfiguration" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.property.partnerEventsConfiguration"></a>

```csharp
public DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference PartnerEventsConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference">DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEventsv2EventSourceConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfiguration">DataAwsccEventsv2EventSourceConfiguration</a>

---


### DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference <a name="DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration">DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration">DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration</a>

---


### DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference <a name="DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.onFailureConfiguration">OnFailureConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference">DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.partnerBusKmsKeyIdentifier">PartnerBusKmsKeyIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.partnerEventSourceArn">PartnerEventSourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.pattern">Pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfiguration">DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OnFailureConfiguration`<sup>Required</sup> <a name="OnFailureConfiguration" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.onFailureConfiguration"></a>

```csharp
public DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference OnFailureConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference">DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference</a>

---

##### `PartnerBusKmsKeyIdentifier`<sup>Required</sup> <a name="PartnerBusKmsKeyIdentifier" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.partnerBusKmsKeyIdentifier"></a>

```csharp
public string PartnerBusKmsKeyIdentifier { get; }
```

- *Type:* string

---

##### `PartnerEventSourceArn`<sup>Required</sup> <a name="PartnerEventSourceArn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.partnerEventSourceArn"></a>

```csharp
public string PartnerEventSourceArn { get; }
```

- *Type:* string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.pattern"></a>

```csharp
public string Pattern { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfiguration">DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfiguration</a>

---


### DataAwsccEventsv2EventSourceTagsList <a name="DataAwsccEventsv2EventSourceTagsList" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsv2EventSourceTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsList.get"></a>

```csharp
private DataAwsccEventsv2EventSourceTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccEventsv2EventSourceTagsOutputReference <a name="DataAwsccEventsv2EventSourceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsv2EventSourceTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTags">DataAwsccEventsv2EventSourceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEventsv2EventSourceTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTags">DataAwsccEventsv2EventSourceTags</a>

---



