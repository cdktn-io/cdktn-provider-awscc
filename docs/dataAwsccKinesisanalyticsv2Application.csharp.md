# `dataAwsccKinesisanalyticsv2Application` Submodule <a name="`dataAwsccKinesisanalyticsv2Application` Submodule" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccKinesisanalyticsv2Application <a name="DataAwsccKinesisanalyticsv2Application" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/kinesisanalyticsv2_application awscc_kinesisanalyticsv2_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2Application(Construct Scope, string Id, DataAwsccKinesisanalyticsv2ApplicationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationConfig">DataAwsccKinesisanalyticsv2ApplicationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationConfig">DataAwsccKinesisanalyticsv2ApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccKinesisanalyticsv2Application resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccKinesisanalyticsv2Application.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccKinesisanalyticsv2Application.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccKinesisanalyticsv2Application.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccKinesisanalyticsv2Application.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccKinesisanalyticsv2Application resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccKinesisanalyticsv2Application to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccKinesisanalyticsv2Application that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/kinesisanalyticsv2_application#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccKinesisanalyticsv2Application to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.applicationConfiguration">ApplicationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.applicationDescription">ApplicationDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.applicationMaintenanceConfiguration">ApplicationMaintenanceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.applicationMode">ApplicationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.applicationName">ApplicationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.runConfiguration">RunConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.runtimeEnvironment">RuntimeEnvironment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.serviceExecutionRole">ServiceExecutionRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsList">DataAwsccKinesisanalyticsv2ApplicationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ApplicationConfiguration`<sup>Required</sup> <a name="ApplicationConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.applicationConfiguration"></a>

```csharp
public DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference ApplicationConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference</a>

---

##### `ApplicationDescription`<sup>Required</sup> <a name="ApplicationDescription" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.applicationDescription"></a>

```csharp
public string ApplicationDescription { get; }
```

- *Type:* string

---

##### `ApplicationMaintenanceConfiguration`<sup>Required</sup> <a name="ApplicationMaintenanceConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.applicationMaintenanceConfiguration"></a>

```csharp
public DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference ApplicationMaintenanceConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference</a>

---

##### `ApplicationMode`<sup>Required</sup> <a name="ApplicationMode" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.applicationMode"></a>

```csharp
public string ApplicationMode { get; }
```

- *Type:* string

---

##### `ApplicationName`<sup>Required</sup> <a name="ApplicationName" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.applicationName"></a>

```csharp
public string ApplicationName { get; }
```

- *Type:* string

---

##### `RunConfiguration`<sup>Required</sup> <a name="RunConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.runConfiguration"></a>

```csharp
public DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference RunConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference</a>

---

##### `RuntimeEnvironment`<sup>Required</sup> <a name="RuntimeEnvironment" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.runtimeEnvironment"></a>

```csharp
public string RuntimeEnvironment { get; }
```

- *Type:* string

---

##### `ServiceExecutionRole`<sup>Required</sup> <a name="ServiceExecutionRole" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.serviceExecutionRole"></a>

```csharp
public string ServiceExecutionRole { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.tags"></a>

```csharp
public DataAwsccKinesisanalyticsv2ApplicationTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsList">DataAwsccKinesisanalyticsv2ApplicationTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccKinesisanalyticsv2ApplicationApplicationConfiguration <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2ApplicationApplicationConfiguration {

};
```


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration {

};
```


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent {

};
```


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation {

};
```


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration {

};
```


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration {

};
```


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfiguration <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfiguration {

};
```


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties {

};
```


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups {

};
```


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration {

};
```


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration {

};
```


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration {

};
```


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration {

};
```


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations {

};
```


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration {

};
```


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfiguration <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfiguration {

};
```


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfiguration <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfiguration {

};
```


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration {

};
```


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference {

};
```


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation {

};
```


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfiguration <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfiguration {

};
```


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation {

};
```


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfiguration <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfiguration {

};
```


### DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration {

};
```


### DataAwsccKinesisanalyticsv2ApplicationConfig <a name="DataAwsccKinesisanalyticsv2ApplicationConfig" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2ApplicationConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/kinesisanalyticsv2_application#id DataAwsccKinesisanalyticsv2Application#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccKinesisanalyticsv2ApplicationRunConfiguration <a name="DataAwsccKinesisanalyticsv2ApplicationRunConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2ApplicationRunConfiguration {

};
```


### DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration <a name="DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration {

};
```


### DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfiguration <a name="DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfiguration {

};
```


### DataAwsccKinesisanalyticsv2ApplicationTags <a name="DataAwsccKinesisanalyticsv2ApplicationTags" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2ApplicationTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.property.s3ContentLocation">S3ContentLocation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.property.textContent">TextContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.property.zipFileContent">ZipFileContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3ContentLocation`<sup>Required</sup> <a name="S3ContentLocation" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.property.s3ContentLocation"></a>

```csharp
public DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference S3ContentLocation { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference</a>

---

##### `TextContent`<sup>Required</sup> <a name="TextContent" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.property.textContent"></a>

```csharp
public string TextContent { get; }
```

- *Type:* string

---

##### `ZipFileContent`<sup>Required</sup> <a name="ZipFileContent" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.property.zipFileContent"></a>

```csharp
public string ZipFileContent { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.property.internalValue"></a>

```csharp
public DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent</a>

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.property.bucketArn">BucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.property.fileKey">FileKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.property.objectVersion">ObjectVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketArn`<sup>Required</sup> <a name="BucketArn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.property.bucketArn"></a>

```csharp
public string BucketArn { get; }
```

- *Type:* string

---

##### `FileKey`<sup>Required</sup> <a name="FileKey" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.property.fileKey"></a>

```csharp
public string FileKey { get; }
```

- *Type:* string

---

##### `ObjectVersion`<sup>Required</sup> <a name="ObjectVersion" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.property.objectVersion"></a>

```csharp
public string ObjectVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation</a>

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.property.codeContent">CodeContent</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.property.codeContentType">CodeContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CodeContent`<sup>Required</sup> <a name="CodeContent" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.property.codeContent"></a>

```csharp
public DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference CodeContent { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference</a>

---

##### `CodeContentType`<sup>Required</sup> <a name="CodeContentType" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.property.codeContentType"></a>

```csharp
public string CodeContentType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration</a>

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.property.keyId">KeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.property.keyType">KeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.property.keyId"></a>

```csharp
public string KeyId { get; }
```

- *Type:* string

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.property.keyType"></a>

```csharp
public string KeyType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration</a>

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.property.snapshotMode">SnapshotMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.property.snapshotsEnabled">SnapshotsEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SnapshotMode`<sup>Required</sup> <a name="SnapshotMode" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.property.snapshotMode"></a>

```csharp
public string SnapshotMode { get; }
```

- *Type:* string

---

##### `SnapshotsEnabled`<sup>Required</sup> <a name="SnapshotsEnabled" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.property.snapshotsEnabled"></a>

```csharp
public IResolvable SnapshotsEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration</a>

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.property.rollbackEnabled">RollbackEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RollbackEnabled`<sup>Required</sup> <a name="RollbackEnabled" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.property.rollbackEnabled"></a>

```csharp
public IResolvable RollbackEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfiguration</a>

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.property.propertyGroups">PropertyGroups</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PropertyGroups`<sup>Required</sup> <a name="PropertyGroups" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.property.propertyGroups"></a>

```csharp
public DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList PropertyGroups { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties</a>

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.get"></a>

```csharp
private DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.property.propertyGroupId">PropertyGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.property.propertyMap">PropertyMap</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PropertyGroupId`<sup>Required</sup> <a name="PropertyGroupId" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.property.propertyGroupId"></a>

```csharp
public string PropertyGroupId { get; }
```

- *Type:* string

---

##### `PropertyMap`<sup>Required</sup> <a name="PropertyMap" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.property.propertyMap"></a>

```csharp
public StringMap PropertyMap { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups</a>

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.property.checkpointingEnabled">CheckpointingEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.property.checkpointInterval">CheckpointInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.property.configurationType">ConfigurationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.property.minPauseBetweenCheckpoints">MinPauseBetweenCheckpoints</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CheckpointingEnabled`<sup>Required</sup> <a name="CheckpointingEnabled" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.property.checkpointingEnabled"></a>

```csharp
public IResolvable CheckpointingEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `CheckpointInterval`<sup>Required</sup> <a name="CheckpointInterval" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.property.checkpointInterval"></a>

```csharp
public double CheckpointInterval { get; }
```

- *Type:* double

---

##### `ConfigurationType`<sup>Required</sup> <a name="ConfigurationType" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.property.configurationType"></a>

```csharp
public string ConfigurationType { get; }
```

- *Type:* string

---

##### `MinPauseBetweenCheckpoints`<sup>Required</sup> <a name="MinPauseBetweenCheckpoints" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.property.minPauseBetweenCheckpoints"></a>

```csharp
public double MinPauseBetweenCheckpoints { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration</a>

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.property.configurationType">ConfigurationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.property.logLevel">LogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.property.metricsLevel">MetricsLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConfigurationType`<sup>Required</sup> <a name="ConfigurationType" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.property.configurationType"></a>

```csharp
public string ConfigurationType { get; }
```

- *Type:* string

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.property.logLevel"></a>

```csharp
public string LogLevel { get; }
```

- *Type:* string

---

##### `MetricsLevel`<sup>Required</sup> <a name="MetricsLevel" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.property.metricsLevel"></a>

```csharp
public string MetricsLevel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration</a>

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.property.checkpointConfiguration">CheckpointConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.property.monitoringConfiguration">MonitoringConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.property.parallelismConfiguration">ParallelismConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CheckpointConfiguration`<sup>Required</sup> <a name="CheckpointConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.property.checkpointConfiguration"></a>

```csharp
public DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference CheckpointConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference</a>

---

##### `MonitoringConfiguration`<sup>Required</sup> <a name="MonitoringConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.property.monitoringConfiguration"></a>

```csharp
public DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference MonitoringConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference</a>

---

##### `ParallelismConfiguration`<sup>Required</sup> <a name="ParallelismConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.property.parallelismConfiguration"></a>

```csharp
public DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference ParallelismConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration</a>

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.property.autoScalingEnabled">AutoScalingEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.property.configurationType">ConfigurationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.property.parallelism">Parallelism</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.property.parallelismPerKpu">ParallelismPerKpu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoScalingEnabled`<sup>Required</sup> <a name="AutoScalingEnabled" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.property.autoScalingEnabled"></a>

```csharp
public IResolvable AutoScalingEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ConfigurationType`<sup>Required</sup> <a name="ConfigurationType" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.property.configurationType"></a>

```csharp
public string ConfigurationType { get; }
```

- *Type:* string

---

##### `Parallelism`<sup>Required</sup> <a name="Parallelism" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.property.parallelism"></a>

```csharp
public double Parallelism { get; }
```

- *Type:* double

---

##### `ParallelismPerKpu`<sup>Required</sup> <a name="ParallelismPerKpu" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.property.parallelismPerKpu"></a>

```csharp
public double ParallelismPerKpu { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration</a>

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.applicationCodeConfiguration">ApplicationCodeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.applicationEncryptionConfiguration">ApplicationEncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.applicationSnapshotConfiguration">ApplicationSnapshotConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.applicationSystemRollbackConfiguration">ApplicationSystemRollbackConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.environmentProperties">EnvironmentProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.flinkApplicationConfiguration">FlinkApplicationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.vpcConfigurations">VpcConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.zeppelinApplicationConfiguration">ZeppelinApplicationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplicationCodeConfiguration`<sup>Required</sup> <a name="ApplicationCodeConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.applicationCodeConfiguration"></a>

```csharp
public DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference ApplicationCodeConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference</a>

---

##### `ApplicationEncryptionConfiguration`<sup>Required</sup> <a name="ApplicationEncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.applicationEncryptionConfiguration"></a>

```csharp
public DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference ApplicationEncryptionConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference</a>

---

##### `ApplicationSnapshotConfiguration`<sup>Required</sup> <a name="ApplicationSnapshotConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.applicationSnapshotConfiguration"></a>

```csharp
public DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference ApplicationSnapshotConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference</a>

---

##### `ApplicationSystemRollbackConfiguration`<sup>Required</sup> <a name="ApplicationSystemRollbackConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.applicationSystemRollbackConfiguration"></a>

```csharp
public DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference ApplicationSystemRollbackConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference</a>

---

##### `EnvironmentProperties`<sup>Required</sup> <a name="EnvironmentProperties" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.environmentProperties"></a>

```csharp
public DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference EnvironmentProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference</a>

---

##### `FlinkApplicationConfiguration`<sup>Required</sup> <a name="FlinkApplicationConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.flinkApplicationConfiguration"></a>

```csharp
public DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference FlinkApplicationConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference</a>

---

##### `VpcConfigurations`<sup>Required</sup> <a name="VpcConfigurations" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.vpcConfigurations"></a>

```csharp
public DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList VpcConfigurations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList</a>

---

##### `ZeppelinApplicationConfiguration`<sup>Required</sup> <a name="ZeppelinApplicationConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.zeppelinApplicationConfiguration"></a>

```csharp
public DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference ZeppelinApplicationConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccKinesisanalyticsv2ApplicationApplicationConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfiguration</a>

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.get"></a>

```csharp
private DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations</a>

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.property.databaseArn">DatabaseArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatabaseArn`<sup>Required</sup> <a name="DatabaseArn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.property.databaseArn"></a>

```csharp
public string DatabaseArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfiguration</a>

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.property.glueDataCatalogConfiguration">GlueDataCatalogConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GlueDataCatalogConfiguration`<sup>Required</sup> <a name="GlueDataCatalogConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.property.glueDataCatalogConfiguration"></a>

```csharp
public DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference GlueDataCatalogConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfiguration</a>

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.get"></a>

```csharp
private DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.property.artifactId">ArtifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.property.groupId">GroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArtifactId`<sup>Required</sup> <a name="ArtifactId" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.property.artifactId"></a>

```csharp
public string ArtifactId { get; }
```

- *Type:* string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.property.groupId"></a>

```csharp
public string GroupId { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.property.internalValue"></a>

```csharp
public DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference</a>

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.property.artifactType">ArtifactType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.property.mavenReference">MavenReference</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.property.s3ContentLocation">S3ContentLocation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArtifactType`<sup>Required</sup> <a name="ArtifactType" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.property.artifactType"></a>

```csharp
public string ArtifactType { get; }
```

- *Type:* string

---

##### `MavenReference`<sup>Required</sup> <a name="MavenReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.property.mavenReference"></a>

```csharp
public DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference MavenReference { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference</a>

---

##### `S3ContentLocation`<sup>Required</sup> <a name="S3ContentLocation" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.property.s3ContentLocation"></a>

```csharp
public DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference S3ContentLocation { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration</a>

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.property.bucketArn">BucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.property.fileKey">FileKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.property.objectVersion">ObjectVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketArn`<sup>Required</sup> <a name="BucketArn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.property.bucketArn"></a>

```csharp
public string BucketArn { get; }
```

- *Type:* string

---

##### `FileKey`<sup>Required</sup> <a name="FileKey" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.property.fileKey"></a>

```csharp
public string FileKey { get; }
```

- *Type:* string

---

##### `ObjectVersion`<sup>Required</sup> <a name="ObjectVersion" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.property.objectVersion"></a>

```csharp
public string ObjectVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation</a>

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.property.s3ContentLocation">S3ContentLocation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3ContentLocation`<sup>Required</sup> <a name="S3ContentLocation" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.property.s3ContentLocation"></a>

```csharp
public DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference S3ContentLocation { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfiguration</a>

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.property.basePath">BasePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.property.bucketArn">BucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BasePath`<sup>Required</sup> <a name="BasePath" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.property.basePath"></a>

```csharp
public string BasePath { get; }
```

- *Type:* string

---

##### `BucketArn`<sup>Required</sup> <a name="BucketArn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.property.bucketArn"></a>

```csharp
public string BucketArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation</a>

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.property.logLevel">LogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.property.logLevel"></a>

```csharp
public string LogLevel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfiguration</a>

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.property.catalogConfiguration">CatalogConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.property.customArtifactsConfiguration">CustomArtifactsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.property.deployAsApplicationConfiguration">DeployAsApplicationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.property.monitoringConfiguration">MonitoringConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CatalogConfiguration`<sup>Required</sup> <a name="CatalogConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.property.catalogConfiguration"></a>

```csharp
public DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference CatalogConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference</a>

---

##### `CustomArtifactsConfiguration`<sup>Required</sup> <a name="CustomArtifactsConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.property.customArtifactsConfiguration"></a>

```csharp
public DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList CustomArtifactsConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList</a>

---

##### `DeployAsApplicationConfiguration`<sup>Required</sup> <a name="DeployAsApplicationConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.property.deployAsApplicationConfiguration"></a>

```csharp
public DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference DeployAsApplicationConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference</a>

---

##### `MonitoringConfiguration`<sup>Required</sup> <a name="MonitoringConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.property.monitoringConfiguration"></a>

```csharp
public DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference MonitoringConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration</a>

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.property.applicationMaintenanceWindowStartTime">ApplicationMaintenanceWindowStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplicationMaintenanceWindowStartTime`<sup>Required</sup> <a name="ApplicationMaintenanceWindowStartTime" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.property.applicationMaintenanceWindowStartTime"></a>

```csharp
public string ApplicationMaintenanceWindowStartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration</a>

---


### DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.property.applicationRestoreType">ApplicationRestoreType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.property.snapshotArn">SnapshotArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.property.snapshotName">SnapshotName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration">DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplicationRestoreType`<sup>Required</sup> <a name="ApplicationRestoreType" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.property.applicationRestoreType"></a>

```csharp
public string ApplicationRestoreType { get; }
```

- *Type:* string

---

##### `SnapshotArn`<sup>Required</sup> <a name="SnapshotArn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.property.snapshotArn"></a>

```csharp
public string SnapshotArn { get; }
```

- *Type:* string

---

##### `SnapshotName`<sup>Required</sup> <a name="SnapshotName" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.property.snapshotName"></a>

```csharp
public string SnapshotName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration">DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration</a>

---


### DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.property.allowNonRestoredState">AllowNonRestoredState</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfiguration">DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowNonRestoredState`<sup>Required</sup> <a name="AllowNonRestoredState" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.property.allowNonRestoredState"></a>

```csharp
public IResolvable AllowNonRestoredState { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfiguration">DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfiguration</a>

---


### DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.property.applicationRestoreConfiguration">ApplicationRestoreConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.property.flinkRunConfiguration">FlinkRunConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfiguration">DataAwsccKinesisanalyticsv2ApplicationRunConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplicationRestoreConfiguration`<sup>Required</sup> <a name="ApplicationRestoreConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.property.applicationRestoreConfiguration"></a>

```csharp
public DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference ApplicationRestoreConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference</a>

---

##### `FlinkRunConfiguration`<sup>Required</sup> <a name="FlinkRunConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.property.flinkRunConfiguration"></a>

```csharp
public DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference FlinkRunConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccKinesisanalyticsv2ApplicationRunConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfiguration">DataAwsccKinesisanalyticsv2ApplicationRunConfiguration</a>

---


### DataAwsccKinesisanalyticsv2ApplicationTagsList <a name="DataAwsccKinesisanalyticsv2ApplicationTagsList" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2ApplicationTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsList.get"></a>

```csharp
private DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTags">DataAwsccKinesisanalyticsv2ApplicationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccKinesisanalyticsv2ApplicationTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTags">DataAwsccKinesisanalyticsv2ApplicationTags</a>

---



