# `dataAwsccHealthlakeFhirDatastore` Submodule <a name="`dataAwsccHealthlakeFhirDatastore` Submodule" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccHealthlakeFhirDatastore <a name="DataAwsccHealthlakeFhirDatastore" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/healthlake_fhir_datastore awscc_healthlake_fhir_datastore}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccHealthlakeFhirDatastore(Construct Scope, string Id, DataAwsccHealthlakeFhirDatastoreConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig">DataAwsccHealthlakeFhirDatastoreConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig">DataAwsccHealthlakeFhirDatastoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccHealthlakeFhirDatastore resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccHealthlakeFhirDatastore.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccHealthlakeFhirDatastore.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccHealthlakeFhirDatastore.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccHealthlakeFhirDatastore.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccHealthlakeFhirDatastore resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccHealthlakeFhirDatastore to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccHealthlakeFhirDatastore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/healthlake_fhir_datastore#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccHealthlakeFhirDatastore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.createdAt">CreatedAt</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference">DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.datastoreArn">DatastoreArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.datastoreEndpoint">DatastoreEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.datastoreId">DatastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.datastoreName">DatastoreName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.datastoreStatus">DatastoreStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.datastoreTypeVersion">DatastoreTypeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.identityProviderConfiguration">IdentityProviderConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference">DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.preloadDataConfig">PreloadDataConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference">DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.sseConfiguration">SseConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference">DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList">DataAwsccHealthlakeFhirDatastoreTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.createdAt"></a>

```csharp
public DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference CreatedAt { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference">DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference</a>

---

##### `DatastoreArn`<sup>Required</sup> <a name="DatastoreArn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.datastoreArn"></a>

```csharp
public string DatastoreArn { get; }
```

- *Type:* string

---

##### `DatastoreEndpoint`<sup>Required</sup> <a name="DatastoreEndpoint" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.datastoreEndpoint"></a>

```csharp
public string DatastoreEndpoint { get; }
```

- *Type:* string

---

##### `DatastoreId`<sup>Required</sup> <a name="DatastoreId" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.datastoreId"></a>

```csharp
public string DatastoreId { get; }
```

- *Type:* string

---

##### `DatastoreName`<sup>Required</sup> <a name="DatastoreName" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.datastoreName"></a>

```csharp
public string DatastoreName { get; }
```

- *Type:* string

---

##### `DatastoreStatus`<sup>Required</sup> <a name="DatastoreStatus" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.datastoreStatus"></a>

```csharp
public string DatastoreStatus { get; }
```

- *Type:* string

---

##### `DatastoreTypeVersion`<sup>Required</sup> <a name="DatastoreTypeVersion" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.datastoreTypeVersion"></a>

```csharp
public string DatastoreTypeVersion { get; }
```

- *Type:* string

---

##### `IdentityProviderConfiguration`<sup>Required</sup> <a name="IdentityProviderConfiguration" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.identityProviderConfiguration"></a>

```csharp
public DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference IdentityProviderConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference">DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference</a>

---

##### `PreloadDataConfig`<sup>Required</sup> <a name="PreloadDataConfig" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.preloadDataConfig"></a>

```csharp
public DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference PreloadDataConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference">DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference</a>

---

##### `SseConfiguration`<sup>Required</sup> <a name="SseConfiguration" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.sseConfiguration"></a>

```csharp
public DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference SseConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference">DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.tags"></a>

```csharp
public DataAwsccHealthlakeFhirDatastoreTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList">DataAwsccHealthlakeFhirDatastoreTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccHealthlakeFhirDatastoreConfig <a name="DataAwsccHealthlakeFhirDatastoreConfig" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccHealthlakeFhirDatastoreConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/healthlake_fhir_datastore#id DataAwsccHealthlakeFhirDatastore#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccHealthlakeFhirDatastoreCreatedAt <a name="DataAwsccHealthlakeFhirDatastoreCreatedAt" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAt"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAt.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccHealthlakeFhirDatastoreCreatedAt {

};
```


### DataAwsccHealthlakeFhirDatastoreIdentityProviderConfiguration <a name="DataAwsccHealthlakeFhirDatastoreIdentityProviderConfiguration" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccHealthlakeFhirDatastoreIdentityProviderConfiguration {

};
```


### DataAwsccHealthlakeFhirDatastorePreloadDataConfig <a name="DataAwsccHealthlakeFhirDatastorePreloadDataConfig" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccHealthlakeFhirDatastorePreloadDataConfig {

};
```


### DataAwsccHealthlakeFhirDatastoreSseConfiguration <a name="DataAwsccHealthlakeFhirDatastoreSseConfiguration" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccHealthlakeFhirDatastoreSseConfiguration {

};
```


### DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig <a name="DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig {

};
```


### DataAwsccHealthlakeFhirDatastoreTags <a name="DataAwsccHealthlakeFhirDatastoreTags" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccHealthlakeFhirDatastoreTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference <a name="DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.property.nanos">Nanos</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.property.seconds">Seconds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAt">DataAwsccHealthlakeFhirDatastoreCreatedAt</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.property.nanos"></a>

```csharp
public double Nanos { get; }
```

- *Type:* double

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.property.seconds"></a>

```csharp
public string Seconds { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.property.internalValue"></a>

```csharp
public DataAwsccHealthlakeFhirDatastoreCreatedAt InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAt">DataAwsccHealthlakeFhirDatastoreCreatedAt</a>

---


### DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference <a name="DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.authorizationStrategy">AuthorizationStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.fineGrainedAuthorizationEnabled">FineGrainedAuthorizationEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.idpLambdaArn">IdpLambdaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.metadata">Metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfiguration">DataAwsccHealthlakeFhirDatastoreIdentityProviderConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizationStrategy`<sup>Required</sup> <a name="AuthorizationStrategy" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.authorizationStrategy"></a>

```csharp
public string AuthorizationStrategy { get; }
```

- *Type:* string

---

##### `FineGrainedAuthorizationEnabled`<sup>Required</sup> <a name="FineGrainedAuthorizationEnabled" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.fineGrainedAuthorizationEnabled"></a>

```csharp
public IResolvable FineGrainedAuthorizationEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IdpLambdaArn`<sup>Required</sup> <a name="IdpLambdaArn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.idpLambdaArn"></a>

```csharp
public string IdpLambdaArn { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.metadata"></a>

```csharp
public string Metadata { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccHealthlakeFhirDatastoreIdentityProviderConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfiguration">DataAwsccHealthlakeFhirDatastoreIdentityProviderConfiguration</a>

---


### DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference <a name="DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.property.preloadDataType">PreloadDataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfig">DataAwsccHealthlakeFhirDatastorePreloadDataConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PreloadDataType`<sup>Required</sup> <a name="PreloadDataType" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.property.preloadDataType"></a>

```csharp
public string PreloadDataType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccHealthlakeFhirDatastorePreloadDataConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfig">DataAwsccHealthlakeFhirDatastorePreloadDataConfig</a>

---


### DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference <a name="DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.cmkType">CmkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig">DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CmkType`<sup>Required</sup> <a name="CmkType" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.cmkType"></a>

```csharp
public string CmkType { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig">DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig</a>

---


### DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference <a name="DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.property.kmsEncryptionConfig">KmsEncryptionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference">DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfiguration">DataAwsccHealthlakeFhirDatastoreSseConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsEncryptionConfig`<sup>Required</sup> <a name="KmsEncryptionConfig" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.property.kmsEncryptionConfig"></a>

```csharp
public DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference KmsEncryptionConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference">DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccHealthlakeFhirDatastoreSseConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfiguration">DataAwsccHealthlakeFhirDatastoreSseConfiguration</a>

---


### DataAwsccHealthlakeFhirDatastoreTagsList <a name="DataAwsccHealthlakeFhirDatastoreTagsList" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccHealthlakeFhirDatastoreTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.get"></a>

```csharp
private DataAwsccHealthlakeFhirDatastoreTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccHealthlakeFhirDatastoreTagsOutputReference <a name="DataAwsccHealthlakeFhirDatastoreTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccHealthlakeFhirDatastoreTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTags">DataAwsccHealthlakeFhirDatastoreTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccHealthlakeFhirDatastoreTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTags">DataAwsccHealthlakeFhirDatastoreTags</a>

---



