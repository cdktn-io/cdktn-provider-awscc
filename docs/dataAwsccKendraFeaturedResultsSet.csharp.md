# `dataAwsccKendraFeaturedResultsSet` Submodule <a name="`dataAwsccKendraFeaturedResultsSet` Submodule" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccKendraFeaturedResultsSet <a name="DataAwsccKendraFeaturedResultsSet" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/kendra_featured_results_set awscc_kendra_featured_results_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKendraFeaturedResultsSet(Construct Scope, string Id, DataAwsccKendraFeaturedResultsSetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetConfig">DataAwsccKendraFeaturedResultsSetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetConfig">DataAwsccKendraFeaturedResultsSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccKendraFeaturedResultsSet resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccKendraFeaturedResultsSet.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccKendraFeaturedResultsSet.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccKendraFeaturedResultsSet.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccKendraFeaturedResultsSet.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccKendraFeaturedResultsSet resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccKendraFeaturedResultsSet to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccKendraFeaturedResultsSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/kendra_featured_results_set#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccKendraFeaturedResultsSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.featuredDocuments">FeaturedDocuments</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList">DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.featuredResultsSetId">FeaturedResultsSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.featuredResultsSetName">FeaturedResultsSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.indexId">IndexId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.queryTexts">QueryTexts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsList">DataAwsccKendraFeaturedResultsSetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FeaturedDocuments`<sup>Required</sup> <a name="FeaturedDocuments" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.featuredDocuments"></a>

```csharp
public DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList FeaturedDocuments { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList">DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList</a>

---

##### `FeaturedResultsSetId`<sup>Required</sup> <a name="FeaturedResultsSetId" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.featuredResultsSetId"></a>

```csharp
public string FeaturedResultsSetId { get; }
```

- *Type:* string

---

##### `FeaturedResultsSetName`<sup>Required</sup> <a name="FeaturedResultsSetName" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.featuredResultsSetName"></a>

```csharp
public string FeaturedResultsSetName { get; }
```

- *Type:* string

---

##### `IndexId`<sup>Required</sup> <a name="IndexId" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.indexId"></a>

```csharp
public string IndexId { get; }
```

- *Type:* string

---

##### `QueryTexts`<sup>Required</sup> <a name="QueryTexts" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.queryTexts"></a>

```csharp
public string[] QueryTexts { get; }
```

- *Type:* string[]

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.tags"></a>

```csharp
public DataAwsccKendraFeaturedResultsSetTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsList">DataAwsccKendraFeaturedResultsSetTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccKendraFeaturedResultsSetConfig <a name="DataAwsccKendraFeaturedResultsSetConfig" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKendraFeaturedResultsSetConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/kendra_featured_results_set#id DataAwsccKendraFeaturedResultsSet#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccKendraFeaturedResultsSetFeaturedDocuments <a name="DataAwsccKendraFeaturedResultsSetFeaturedDocuments" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocuments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocuments.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKendraFeaturedResultsSetFeaturedDocuments {

};
```


### DataAwsccKendraFeaturedResultsSetTags <a name="DataAwsccKendraFeaturedResultsSetTags" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKendraFeaturedResultsSetTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList <a name="DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList.get"></a>

```csharp
private DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference <a name="DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocuments">DataAwsccKendraFeaturedResultsSetFeaturedDocuments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccKendraFeaturedResultsSetFeaturedDocuments InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocuments">DataAwsccKendraFeaturedResultsSetFeaturedDocuments</a>

---


### DataAwsccKendraFeaturedResultsSetTagsList <a name="DataAwsccKendraFeaturedResultsSetTagsList" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKendraFeaturedResultsSetTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsList.get"></a>

```csharp
private DataAwsccKendraFeaturedResultsSetTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccKendraFeaturedResultsSetTagsOutputReference <a name="DataAwsccKendraFeaturedResultsSetTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKendraFeaturedResultsSetTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTags">DataAwsccKendraFeaturedResultsSetTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccKendraFeaturedResultsSetTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTags">DataAwsccKendraFeaturedResultsSetTags</a>

---



