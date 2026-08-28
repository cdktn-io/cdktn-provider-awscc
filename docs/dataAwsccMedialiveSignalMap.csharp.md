# `dataAwsccMedialiveSignalMap` Submodule <a name="`dataAwsccMedialiveSignalMap` Submodule" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMedialiveSignalMap <a name="DataAwsccMedialiveSignalMap" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/medialive_signal_map awscc_medialive_signal_map}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMedialiveSignalMap(Construct Scope, string Id, DataAwsccMedialiveSignalMapConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig">DataAwsccMedialiveSignalMapConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig">DataAwsccMedialiveSignalMapConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccMedialiveSignalMap resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccMedialiveSignalMap.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccMedialiveSignalMap.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccMedialiveSignalMap.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccMedialiveSignalMap.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccMedialiveSignalMap resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccMedialiveSignalMap to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccMedialiveSignalMap that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/medialive_signal_map#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMedialiveSignalMap to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.cloudwatchAlarmTemplateGroupIdentifiers">CloudwatchAlarmTemplateGroupIdentifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.cloudwatchAlarmTemplateGroupIds">CloudwatchAlarmTemplateGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.discoveryEntryPointArn">DiscoveryEntryPointArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.errorMessage">ErrorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.eventBridgeRuleTemplateGroupIdentifiers">EventBridgeRuleTemplateGroupIdentifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.eventBridgeRuleTemplateGroupIds">EventBridgeRuleTemplateGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.failedMediaResourceMap">FailedMediaResourceMap</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap">DataAwsccMedialiveSignalMapFailedMediaResourceMapMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.forceRediscovery">ForceRediscovery</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.identifier">Identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.lastDiscoveredAt">LastDiscoveredAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.lastSuccessfulMonitorDeployment">LastSuccessfulMonitorDeployment</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference">DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.mediaResourceMap">MediaResourceMap</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap">DataAwsccMedialiveSignalMapMediaResourceMapMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.modifiedAt">ModifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.monitorChangesPendingDeployment">MonitorChangesPendingDeployment</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.monitorDeployment">MonitorDeployment</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference">DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.signalMapId">SignalMapId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.tags">Tags</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CloudwatchAlarmTemplateGroupIdentifiers`<sup>Required</sup> <a name="CloudwatchAlarmTemplateGroupIdentifiers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.cloudwatchAlarmTemplateGroupIdentifiers"></a>

```csharp
public string[] CloudwatchAlarmTemplateGroupIdentifiers { get; }
```

- *Type:* string[]

---

##### `CloudwatchAlarmTemplateGroupIds`<sup>Required</sup> <a name="CloudwatchAlarmTemplateGroupIds" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.cloudwatchAlarmTemplateGroupIds"></a>

```csharp
public string[] CloudwatchAlarmTemplateGroupIds { get; }
```

- *Type:* string[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DiscoveryEntryPointArn`<sup>Required</sup> <a name="DiscoveryEntryPointArn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.discoveryEntryPointArn"></a>

```csharp
public string DiscoveryEntryPointArn { get; }
```

- *Type:* string

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.errorMessage"></a>

```csharp
public string ErrorMessage { get; }
```

- *Type:* string

---

##### `EventBridgeRuleTemplateGroupIdentifiers`<sup>Required</sup> <a name="EventBridgeRuleTemplateGroupIdentifiers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.eventBridgeRuleTemplateGroupIdentifiers"></a>

```csharp
public string[] EventBridgeRuleTemplateGroupIdentifiers { get; }
```

- *Type:* string[]

---

##### `EventBridgeRuleTemplateGroupIds`<sup>Required</sup> <a name="EventBridgeRuleTemplateGroupIds" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.eventBridgeRuleTemplateGroupIds"></a>

```csharp
public string[] EventBridgeRuleTemplateGroupIds { get; }
```

- *Type:* string[]

---

##### `FailedMediaResourceMap`<sup>Required</sup> <a name="FailedMediaResourceMap" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.failedMediaResourceMap"></a>

```csharp
public DataAwsccMedialiveSignalMapFailedMediaResourceMapMap FailedMediaResourceMap { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap">DataAwsccMedialiveSignalMapFailedMediaResourceMapMap</a>

---

##### `ForceRediscovery`<sup>Required</sup> <a name="ForceRediscovery" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.forceRediscovery"></a>

```csharp
public IResolvable ForceRediscovery { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.identifier"></a>

```csharp
public string Identifier { get; }
```

- *Type:* string

---

##### `LastDiscoveredAt`<sup>Required</sup> <a name="LastDiscoveredAt" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.lastDiscoveredAt"></a>

```csharp
public string LastDiscoveredAt { get; }
```

- *Type:* string

---

##### `LastSuccessfulMonitorDeployment`<sup>Required</sup> <a name="LastSuccessfulMonitorDeployment" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.lastSuccessfulMonitorDeployment"></a>

```csharp
public DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference LastSuccessfulMonitorDeployment { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference">DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference</a>

---

##### `MediaResourceMap`<sup>Required</sup> <a name="MediaResourceMap" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.mediaResourceMap"></a>

```csharp
public DataAwsccMedialiveSignalMapMediaResourceMapMap MediaResourceMap { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap">DataAwsccMedialiveSignalMapMediaResourceMapMap</a>

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.modifiedAt"></a>

```csharp
public string ModifiedAt { get; }
```

- *Type:* string

---

##### `MonitorChangesPendingDeployment`<sup>Required</sup> <a name="MonitorChangesPendingDeployment" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.monitorChangesPendingDeployment"></a>

```csharp
public IResolvable MonitorChangesPendingDeployment { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `MonitorDeployment`<sup>Required</sup> <a name="MonitorDeployment" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.monitorDeployment"></a>

```csharp
public DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference MonitorDeployment { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference">DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SignalMapId`<sup>Required</sup> <a name="SignalMapId" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.signalMapId"></a>

```csharp
public string SignalMapId { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMedialiveSignalMapConfig <a name="DataAwsccMedialiveSignalMapConfig" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMedialiveSignalMapConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/medialive_signal_map#id DataAwsccMedialiveSignalMap#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMedialiveSignalMapFailedMediaResourceMap <a name="DataAwsccMedialiveSignalMapFailedMediaResourceMap" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMap"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMap.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMedialiveSignalMapFailedMediaResourceMap {

};
```


### DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinations <a name="DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinations" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinations {

};
```


### DataAwsccMedialiveSignalMapFailedMediaResourceMapSources <a name="DataAwsccMedialiveSignalMapFailedMediaResourceMapSources" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSources.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMedialiveSignalMapFailedMediaResourceMapSources {

};
```


### DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeployment <a name="DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeployment" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeployment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeployment {

};
```


### DataAwsccMedialiveSignalMapMediaResourceMap <a name="DataAwsccMedialiveSignalMapMediaResourceMap" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMap"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMap.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMedialiveSignalMapMediaResourceMap {

};
```


### DataAwsccMedialiveSignalMapMediaResourceMapDestinations <a name="DataAwsccMedialiveSignalMapMediaResourceMapDestinations" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMedialiveSignalMapMediaResourceMapDestinations {

};
```


### DataAwsccMedialiveSignalMapMediaResourceMapSources <a name="DataAwsccMedialiveSignalMapMediaResourceMapSources" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSources.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMedialiveSignalMapMediaResourceMapSources {

};
```


### DataAwsccMedialiveSignalMapMonitorDeployment <a name="DataAwsccMedialiveSignalMapMonitorDeployment" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeployment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMedialiveSignalMapMonitorDeployment {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList <a name="DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.get"></a>

```csharp
private DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference <a name="DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinations">DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinations InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinations">DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinations</a>

---


### DataAwsccMedialiveSignalMapFailedMediaResourceMapMap <a name="DataAwsccMedialiveSignalMapFailedMediaResourceMapMap" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMedialiveSignalMapFailedMediaResourceMapMap(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.get"></a>

```csharp
private DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference Get(string Key)
```

###### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference <a name="DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, string ComplexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.Initializer.parameter.complexObjectKey">ComplexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectKey`<sup>Required</sup> <a name="ComplexObjectKey" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.property.destinations">Destinations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList">DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.property.sources">Sources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList">DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMap">DataAwsccMedialiveSignalMapFailedMediaResourceMap</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.property.destinations"></a>

```csharp
public DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList Destinations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList">DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Sources`<sup>Required</sup> <a name="Sources" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.property.sources"></a>

```csharp
public DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList Sources { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList">DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMedialiveSignalMapFailedMediaResourceMap InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMap">DataAwsccMedialiveSignalMapFailedMediaResourceMap</a>

---


### DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList <a name="DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.get"></a>

```csharp
private DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference <a name="DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSources">DataAwsccMedialiveSignalMapFailedMediaResourceMapSources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMedialiveSignalMapFailedMediaResourceMapSources InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSources">DataAwsccMedialiveSignalMapFailedMediaResourceMapSources</a>

---


### DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference <a name="DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.property.detailsUri">DetailsUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeployment">DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeployment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DetailsUri`<sup>Required</sup> <a name="DetailsUri" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.property.detailsUri"></a>

```csharp
public string DetailsUri { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeployment InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeployment">DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeployment</a>

---


### DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList <a name="DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.get"></a>

```csharp
private DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference <a name="DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinations">DataAwsccMedialiveSignalMapMediaResourceMapDestinations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMedialiveSignalMapMediaResourceMapDestinations InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinations">DataAwsccMedialiveSignalMapMediaResourceMapDestinations</a>

---


### DataAwsccMedialiveSignalMapMediaResourceMapMap <a name="DataAwsccMedialiveSignalMapMediaResourceMapMap" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMedialiveSignalMapMediaResourceMapMap(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.get"></a>

```csharp
private DataAwsccMedialiveSignalMapMediaResourceMapOutputReference Get(string Key)
```

###### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccMedialiveSignalMapMediaResourceMapOutputReference <a name="DataAwsccMedialiveSignalMapMediaResourceMapOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMedialiveSignalMapMediaResourceMapOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, string ComplexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.Initializer.parameter.complexObjectKey">ComplexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectKey`<sup>Required</sup> <a name="ComplexObjectKey" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.property.destinations">Destinations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList">DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.property.sources">Sources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList">DataAwsccMedialiveSignalMapMediaResourceMapSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMap">DataAwsccMedialiveSignalMapMediaResourceMap</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.property.destinations"></a>

```csharp
public DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList Destinations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList">DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Sources`<sup>Required</sup> <a name="Sources" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.property.sources"></a>

```csharp
public DataAwsccMedialiveSignalMapMediaResourceMapSourcesList Sources { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList">DataAwsccMedialiveSignalMapMediaResourceMapSourcesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMedialiveSignalMapMediaResourceMap InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMap">DataAwsccMedialiveSignalMapMediaResourceMap</a>

---


### DataAwsccMedialiveSignalMapMediaResourceMapSourcesList <a name="DataAwsccMedialiveSignalMapMediaResourceMapSourcesList" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMedialiveSignalMapMediaResourceMapSourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.get"></a>

```csharp
private DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference <a name="DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSources">DataAwsccMedialiveSignalMapMediaResourceMapSources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMedialiveSignalMapMediaResourceMapSources InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSources">DataAwsccMedialiveSignalMapMediaResourceMapSources</a>

---


### DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference <a name="DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.property.detailsUri">DetailsUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.property.errorMessage">ErrorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeployment">DataAwsccMedialiveSignalMapMonitorDeployment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DetailsUri`<sup>Required</sup> <a name="DetailsUri" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.property.detailsUri"></a>

```csharp
public string DetailsUri { get; }
```

- *Type:* string

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.property.errorMessage"></a>

```csharp
public string ErrorMessage { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMedialiveSignalMapMonitorDeployment InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeployment">DataAwsccMedialiveSignalMapMonitorDeployment</a>

---



