# `dataAwsccApplicationsignalsInstrumentationConfig` Submodule <a name="`dataAwsccApplicationsignalsInstrumentationConfig` Submodule" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccApplicationsignalsInstrumentationConfig <a name="DataAwsccApplicationsignalsInstrumentationConfig" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/applicationsignals_instrumentation_config awscc_applicationsignals_instrumentation_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApplicationsignalsInstrumentationConfig(Construct Scope, string Id, DataAwsccApplicationsignalsInstrumentationConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig">DataAwsccApplicationsignalsInstrumentationConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig">DataAwsccApplicationsignalsInstrumentationConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccApplicationsignalsInstrumentationConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccApplicationsignalsInstrumentationConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccApplicationsignalsInstrumentationConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccApplicationsignalsInstrumentationConfig.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccApplicationsignalsInstrumentationConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccApplicationsignalsInstrumentationConfig resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccApplicationsignalsInstrumentationConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccApplicationsignalsInstrumentationConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/applicationsignals_instrumentation_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccApplicationsignalsInstrumentationConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.attributeFilters">AttributeFilters</a></code> | <code>Io.Cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.captureConfiguration">CaptureConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference">DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.environment">Environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.expiresAt">ExpiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.instrumentationType">InstrumentationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.location">Location</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference">DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.locationHash">LocationHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.signalType">SignalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList">DataAwsccApplicationsignalsInstrumentationConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AttributeFilters`<sup>Required</sup> <a name="AttributeFilters" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.attributeFilters"></a>

```csharp
public StringMapList AttributeFilters { get; }
```

- *Type:* Io.Cdktn.StringMapList

---

##### `CaptureConfiguration`<sup>Required</sup> <a name="CaptureConfiguration" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.captureConfiguration"></a>

```csharp
public DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference CaptureConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference">DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.environment"></a>

```csharp
public string Environment { get; }
```

- *Type:* string

---

##### `ExpiresAt`<sup>Required</sup> <a name="ExpiresAt" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.expiresAt"></a>

```csharp
public string ExpiresAt { get; }
```

- *Type:* string

---

##### `InstrumentationType`<sup>Required</sup> <a name="InstrumentationType" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.instrumentationType"></a>

```csharp
public string InstrumentationType { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.location"></a>

```csharp
public DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference Location { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference">DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference</a>

---

##### `LocationHash`<sup>Required</sup> <a name="LocationHash" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.locationHash"></a>

```csharp
public string LocationHash { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `SignalType`<sup>Required</sup> <a name="SignalType" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.signalType"></a>

```csharp
public string SignalType { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.tags"></a>

```csharp
public DataAwsccApplicationsignalsInstrumentationConfigTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList">DataAwsccApplicationsignalsInstrumentationConfigTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccApplicationsignalsInstrumentationConfigCaptureConfiguration <a name="DataAwsccApplicationsignalsInstrumentationConfigCaptureConfiguration" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApplicationsignalsInstrumentationConfigCaptureConfiguration {

};
```


### DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture <a name="DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture {

};
```


### DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits <a name="DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits {

};
```


### DataAwsccApplicationsignalsInstrumentationConfigConfig <a name="DataAwsccApplicationsignalsInstrumentationConfigConfig" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApplicationsignalsInstrumentationConfigConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/applicationsignals_instrumentation_config#id DataAwsccApplicationsignalsInstrumentationConfig#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccApplicationsignalsInstrumentationConfigLocation <a name="DataAwsccApplicationsignalsInstrumentationConfigLocation" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApplicationsignalsInstrumentationConfigLocation {

};
```


### DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocation <a name="DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocation" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocation {

};
```


### DataAwsccApplicationsignalsInstrumentationConfigTags <a name="DataAwsccApplicationsignalsInstrumentationConfigTags" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApplicationsignalsInstrumentationConfigTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference <a name="DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxCollectionDepth">MaxCollectionDepth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxCollectionWidth">MaxCollectionWidth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxFieldsPerObject">MaxFieldsPerObject</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxHits">MaxHits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxObjectDepth">MaxObjectDepth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStackFrames">MaxStackFrames</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStackTraceSize">MaxStackTraceSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStringLength">MaxStringLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits">DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxCollectionDepth`<sup>Required</sup> <a name="MaxCollectionDepth" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxCollectionDepth"></a>

```csharp
public double MaxCollectionDepth { get; }
```

- *Type:* double

---

##### `MaxCollectionWidth`<sup>Required</sup> <a name="MaxCollectionWidth" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxCollectionWidth"></a>

```csharp
public double MaxCollectionWidth { get; }
```

- *Type:* double

---

##### `MaxFieldsPerObject`<sup>Required</sup> <a name="MaxFieldsPerObject" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxFieldsPerObject"></a>

```csharp
public double MaxFieldsPerObject { get; }
```

- *Type:* double

---

##### `MaxHits`<sup>Required</sup> <a name="MaxHits" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxHits"></a>

```csharp
public double MaxHits { get; }
```

- *Type:* double

---

##### `MaxObjectDepth`<sup>Required</sup> <a name="MaxObjectDepth" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxObjectDepth"></a>

```csharp
public double MaxObjectDepth { get; }
```

- *Type:* double

---

##### `MaxStackFrames`<sup>Required</sup> <a name="MaxStackFrames" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStackFrames"></a>

```csharp
public double MaxStackFrames { get; }
```

- *Type:* double

---

##### `MaxStackTraceSize`<sup>Required</sup> <a name="MaxStackTraceSize" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStackTraceSize"></a>

```csharp
public double MaxStackTraceSize { get; }
```

- *Type:* double

---

##### `MaxStringLength`<sup>Required</sup> <a name="MaxStringLength" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStringLength"></a>

```csharp
public double MaxStringLength { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits">DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits</a>

---


### DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference <a name="DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureArguments">CaptureArguments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureLimits">CaptureLimits</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference">DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureLocals">CaptureLocals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureReturn">CaptureReturn</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureStackTrace">CaptureStackTrace</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture">DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CaptureArguments`<sup>Required</sup> <a name="CaptureArguments" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureArguments"></a>

```csharp
public string[] CaptureArguments { get; }
```

- *Type:* string[]

---

##### `CaptureLimits`<sup>Required</sup> <a name="CaptureLimits" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureLimits"></a>

```csharp
public DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference CaptureLimits { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference">DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference</a>

---

##### `CaptureLocals`<sup>Required</sup> <a name="CaptureLocals" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureLocals"></a>

```csharp
public string[] CaptureLocals { get; }
```

- *Type:* string[]

---

##### `CaptureReturn`<sup>Required</sup> <a name="CaptureReturn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureReturn"></a>

```csharp
public IResolvable CaptureReturn { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `CaptureStackTrace`<sup>Required</sup> <a name="CaptureStackTrace" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureStackTrace"></a>

```csharp
public IResolvable CaptureStackTrace { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.internalValue"></a>

```csharp
public DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture">DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture</a>

---


### DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference <a name="DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.codeCapture">CodeCapture</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference">DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfiguration">DataAwsccApplicationsignalsInstrumentationConfigCaptureConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CodeCapture`<sup>Required</sup> <a name="CodeCapture" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.codeCapture"></a>

```csharp
public DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference CodeCapture { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference">DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccApplicationsignalsInstrumentationConfigCaptureConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfiguration">DataAwsccApplicationsignalsInstrumentationConfigCaptureConfiguration</a>

---


### DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference <a name="DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.className">ClassName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.codeUnit">CodeUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.filePath">FilePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.language">Language</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.lineNumber">LineNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.methodName">MethodName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocation">DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClassName`<sup>Required</sup> <a name="ClassName" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.className"></a>

```csharp
public string ClassName { get; }
```

- *Type:* string

---

##### `CodeUnit`<sup>Required</sup> <a name="CodeUnit" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.codeUnit"></a>

```csharp
public string CodeUnit { get; }
```

- *Type:* string

---

##### `FilePath`<sup>Required</sup> <a name="FilePath" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.filePath"></a>

```csharp
public string FilePath { get; }
```

- *Type:* string

---

##### `Language`<sup>Required</sup> <a name="Language" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.language"></a>

```csharp
public string Language { get; }
```

- *Type:* string

---

##### `LineNumber`<sup>Required</sup> <a name="LineNumber" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.lineNumber"></a>

```csharp
public double LineNumber { get; }
```

- *Type:* double

---

##### `MethodName`<sup>Required</sup> <a name="MethodName" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.methodName"></a>

```csharp
public string MethodName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocation InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocation">DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocation</a>

---


### DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference <a name="DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.property.codeLocation">CodeLocation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference">DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocation">DataAwsccApplicationsignalsInstrumentationConfigLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CodeLocation`<sup>Required</sup> <a name="CodeLocation" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.property.codeLocation"></a>

```csharp
public DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference CodeLocation { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference">DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccApplicationsignalsInstrumentationConfigLocation InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocation">DataAwsccApplicationsignalsInstrumentationConfigLocation</a>

---


### DataAwsccApplicationsignalsInstrumentationConfigTagsList <a name="DataAwsccApplicationsignalsInstrumentationConfigTagsList" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApplicationsignalsInstrumentationConfigTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.get"></a>

```csharp
private DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference <a name="DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTags">DataAwsccApplicationsignalsInstrumentationConfigTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccApplicationsignalsInstrumentationConfigTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTags">DataAwsccApplicationsignalsInstrumentationConfigTags</a>

---



