# `dataAwsccCustomerprofilesRecommenderFilter` Submodule <a name="`dataAwsccCustomerprofilesRecommenderFilter` Submodule" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCustomerprofilesRecommenderFilter <a name="DataAwsccCustomerprofilesRecommenderFilter" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/customerprofiles_recommender_filter awscc_customerprofiles_recommender_filter}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCustomerprofilesRecommenderFilter(Construct Scope, string Id, DataAwsccCustomerprofilesRecommenderFilterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterConfig">DataAwsccCustomerprofilesRecommenderFilterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterConfig">DataAwsccCustomerprofilesRecommenderFilterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCustomerprofilesRecommenderFilter resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCustomerprofilesRecommenderFilter.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCustomerprofilesRecommenderFilter.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCustomerprofilesRecommenderFilter.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCustomerprofilesRecommenderFilter.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccCustomerprofilesRecommenderFilter resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccCustomerprofilesRecommenderFilter to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccCustomerprofilesRecommenderFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/customerprofiles_recommender_filter#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCustomerprofilesRecommenderFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.recommenderFilterArn">RecommenderFilterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.recommenderFilterExpression">RecommenderFilterExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.recommenderFilterName">RecommenderFilterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.recommenderSchemaName">RecommenderSchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsList">DataAwsccCustomerprofilesRecommenderFilterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `RecommenderFilterArn`<sup>Required</sup> <a name="RecommenderFilterArn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.recommenderFilterArn"></a>

```csharp
public string RecommenderFilterArn { get; }
```

- *Type:* string

---

##### `RecommenderFilterExpression`<sup>Required</sup> <a name="RecommenderFilterExpression" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.recommenderFilterExpression"></a>

```csharp
public string RecommenderFilterExpression { get; }
```

- *Type:* string

---

##### `RecommenderFilterName`<sup>Required</sup> <a name="RecommenderFilterName" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.recommenderFilterName"></a>

```csharp
public string RecommenderFilterName { get; }
```

- *Type:* string

---

##### `RecommenderSchemaName`<sup>Required</sup> <a name="RecommenderSchemaName" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.recommenderSchemaName"></a>

```csharp
public string RecommenderSchemaName { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.tags"></a>

```csharp
public DataAwsccCustomerprofilesRecommenderFilterTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsList">DataAwsccCustomerprofilesRecommenderFilterTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCustomerprofilesRecommenderFilterConfig <a name="DataAwsccCustomerprofilesRecommenderFilterConfig" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCustomerprofilesRecommenderFilterConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/customerprofiles_recommender_filter#id DataAwsccCustomerprofilesRecommenderFilter#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCustomerprofilesRecommenderFilterTags <a name="DataAwsccCustomerprofilesRecommenderFilterTags" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCustomerprofilesRecommenderFilterTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCustomerprofilesRecommenderFilterTagsList <a name="DataAwsccCustomerprofilesRecommenderFilterTagsList" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCustomerprofilesRecommenderFilterTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsList.get"></a>

```csharp
private DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference <a name="DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTags">DataAwsccCustomerprofilesRecommenderFilterTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCustomerprofilesRecommenderFilterTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTags">DataAwsccCustomerprofilesRecommenderFilterTags</a>

---



