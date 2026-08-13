# `dataAwsccGlueCatalog` Submodule <a name="`dataAwsccGlueCatalog` Submodule" id="@cdktn/provider-awscc.dataAwsccGlueCatalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccGlueCatalog <a name="DataAwsccGlueCatalog" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/glue_catalog awscc_glue_catalog}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGlueCatalog(Construct Scope, string Id, DataAwsccGlueCatalogConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogConfig">DataAwsccGlueCatalogConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogConfig">DataAwsccGlueCatalogConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccGlueCatalog resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccGlueCatalog.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccGlueCatalog.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccGlueCatalog.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccGlueCatalog.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccGlueCatalog resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccGlueCatalog to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccGlueCatalog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/glue_catalog#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccGlueCatalog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.allowFullTableExternalDataAccess">AllowFullTableExternalDataAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.catalogId">CatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.catalogProperties">CatalogProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference">DataAwsccGlueCatalogCatalogPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.createDatabaseDefaultPermissions">CreateDatabaseDefaultPermissions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList">DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.createTableDefaultPermissions">CreateTableDefaultPermissions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsList">DataAwsccGlueCatalogCreateTableDefaultPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.createTime">CreateTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.federatedCatalog">FederatedCatalog</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference">DataAwsccGlueCatalogFederatedCatalogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.overwriteChildResourcePermissionsWithDefault">OverwriteChildResourcePermissionsWithDefault</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.parameters">Parameters</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.resourceArn">ResourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsList">DataAwsccGlueCatalogTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.targetRedshiftCatalog">TargetRedshiftCatalog</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference">DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.updateTime">UpdateTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AllowFullTableExternalDataAccess`<sup>Required</sup> <a name="AllowFullTableExternalDataAccess" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.allowFullTableExternalDataAccess"></a>

```csharp
public string AllowFullTableExternalDataAccess { get; }
```

- *Type:* string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.catalogId"></a>

```csharp
public string CatalogId { get; }
```

- *Type:* string

---

##### `CatalogProperties`<sup>Required</sup> <a name="CatalogProperties" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.catalogProperties"></a>

```csharp
public DataAwsccGlueCatalogCatalogPropertiesOutputReference CatalogProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference">DataAwsccGlueCatalogCatalogPropertiesOutputReference</a>

---

##### `CreateDatabaseDefaultPermissions`<sup>Required</sup> <a name="CreateDatabaseDefaultPermissions" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.createDatabaseDefaultPermissions"></a>

```csharp
public DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList CreateDatabaseDefaultPermissions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList">DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList</a>

---

##### `CreateTableDefaultPermissions`<sup>Required</sup> <a name="CreateTableDefaultPermissions" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.createTableDefaultPermissions"></a>

```csharp
public DataAwsccGlueCatalogCreateTableDefaultPermissionsList CreateTableDefaultPermissions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsList">DataAwsccGlueCatalogCreateTableDefaultPermissionsList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.createTime"></a>

```csharp
public double CreateTime { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FederatedCatalog`<sup>Required</sup> <a name="FederatedCatalog" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.federatedCatalog"></a>

```csharp
public DataAwsccGlueCatalogFederatedCatalogOutputReference FederatedCatalog { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference">DataAwsccGlueCatalogFederatedCatalogOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OverwriteChildResourcePermissionsWithDefault`<sup>Required</sup> <a name="OverwriteChildResourcePermissionsWithDefault" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.overwriteChildResourcePermissionsWithDefault"></a>

```csharp
public string OverwriteChildResourcePermissionsWithDefault { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.parameters"></a>

```csharp
public StringMap Parameters { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.resourceArn"></a>

```csharp
public string ResourceArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.tags"></a>

```csharp
public DataAwsccGlueCatalogTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsList">DataAwsccGlueCatalogTagsList</a>

---

##### `TargetRedshiftCatalog`<sup>Required</sup> <a name="TargetRedshiftCatalog" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.targetRedshiftCatalog"></a>

```csharp
public DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference TargetRedshiftCatalog { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference">DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.updateTime"></a>

```csharp
public double UpdateTime { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccGlueCatalogCatalogProperties <a name="DataAwsccGlueCatalogCatalogProperties" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGlueCatalogCatalogProperties {

};
```


### DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessProperties <a name="DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessProperties" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessProperties {

};
```


### DataAwsccGlueCatalogConfig <a name="DataAwsccGlueCatalogConfig" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGlueCatalogConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/glue_catalog#id DataAwsccGlueCatalog#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccGlueCatalogCreateDatabaseDefaultPermissions <a name="DataAwsccGlueCatalogCreateDatabaseDefaultPermissions" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGlueCatalogCreateDatabaseDefaultPermissions {

};
```


### DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipal <a name="DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipal" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipal.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipal {

};
```


### DataAwsccGlueCatalogCreateTableDefaultPermissions <a name="DataAwsccGlueCatalogCreateTableDefaultPermissions" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGlueCatalogCreateTableDefaultPermissions {

};
```


### DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipal <a name="DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipal" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipal.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipal {

};
```


### DataAwsccGlueCatalogFederatedCatalog <a name="DataAwsccGlueCatalogFederatedCatalog" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalog.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGlueCatalogFederatedCatalog {

};
```


### DataAwsccGlueCatalogTags <a name="DataAwsccGlueCatalogTags" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGlueCatalogTags {

};
```


### DataAwsccGlueCatalogTargetRedshiftCatalog <a name="DataAwsccGlueCatalogTargetRedshiftCatalog" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalog.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGlueCatalogTargetRedshiftCatalog {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference <a name="DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.allowFullTableExternalDataAccess">AllowFullTableExternalDataAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.catalogType">CatalogType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.dataLakeAccess">DataLakeAccess</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.dataTransferRole">DataTransferRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.kmsKey">KmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.managedWorkgroupName">ManagedWorkgroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.managedWorkgroupStatus">ManagedWorkgroupStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.redshiftDatabaseName">RedshiftDatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessProperties">DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowFullTableExternalDataAccess`<sup>Required</sup> <a name="AllowFullTableExternalDataAccess" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.allowFullTableExternalDataAccess"></a>

```csharp
public string AllowFullTableExternalDataAccess { get; }
```

- *Type:* string

---

##### `CatalogType`<sup>Required</sup> <a name="CatalogType" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.catalogType"></a>

```csharp
public string CatalogType { get; }
```

- *Type:* string

---

##### `DataLakeAccess`<sup>Required</sup> <a name="DataLakeAccess" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.dataLakeAccess"></a>

```csharp
public IResolvable DataLakeAccess { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `DataTransferRole`<sup>Required</sup> <a name="DataTransferRole" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.dataTransferRole"></a>

```csharp
public string DataTransferRole { get; }
```

- *Type:* string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.kmsKey"></a>

```csharp
public string KmsKey { get; }
```

- *Type:* string

---

##### `ManagedWorkgroupName`<sup>Required</sup> <a name="ManagedWorkgroupName" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.managedWorkgroupName"></a>

```csharp
public string ManagedWorkgroupName { get; }
```

- *Type:* string

---

##### `ManagedWorkgroupStatus`<sup>Required</sup> <a name="ManagedWorkgroupStatus" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.managedWorkgroupStatus"></a>

```csharp
public string ManagedWorkgroupStatus { get; }
```

- *Type:* string

---

##### `RedshiftDatabaseName`<sup>Required</sup> <a name="RedshiftDatabaseName" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.redshiftDatabaseName"></a>

```csharp
public string RedshiftDatabaseName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessProperties">DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessProperties</a>

---


### DataAwsccGlueCatalogCatalogPropertiesOutputReference <a name="DataAwsccGlueCatalogCatalogPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGlueCatalogCatalogPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.property.customProperties">CustomProperties</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.property.dataLakeAccessProperties">DataLakeAccessProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference">DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogProperties">DataAwsccGlueCatalogCatalogProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomProperties`<sup>Required</sup> <a name="CustomProperties" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.property.customProperties"></a>

```csharp
public StringMap CustomProperties { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `DataLakeAccessProperties`<sup>Required</sup> <a name="DataLakeAccessProperties" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.property.dataLakeAccessProperties"></a>

```csharp
public DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference DataLakeAccessProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference">DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGlueCatalogCatalogProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogProperties">DataAwsccGlueCatalogCatalogProperties</a>

---


### DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList <a name="DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList.get"></a>

```csharp
private DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference <a name="DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.permissions">Permissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.principal">Principal</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference">DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissions">DataAwsccGlueCatalogCreateDatabaseDefaultPermissions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.permissions"></a>

```csharp
public string[] Permissions { get; }
```

- *Type:* string[]

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.principal"></a>

```csharp
public DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference Principal { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference">DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGlueCatalogCreateDatabaseDefaultPermissions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissions">DataAwsccGlueCatalogCreateDatabaseDefaultPermissions</a>

---


### DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference <a name="DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifier">DataLakePrincipalIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipal">DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipal</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataLakePrincipalIdentifier`<sup>Required</sup> <a name="DataLakePrincipalIdentifier" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifier"></a>

```csharp
public string DataLakePrincipalIdentifier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipal InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipal">DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipal</a>

---


### DataAwsccGlueCatalogCreateTableDefaultPermissionsList <a name="DataAwsccGlueCatalogCreateTableDefaultPermissionsList" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGlueCatalogCreateTableDefaultPermissionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsList.get"></a>

```csharp
private DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference <a name="DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.property.permissions">Permissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.property.principal">Principal</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference">DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissions">DataAwsccGlueCatalogCreateTableDefaultPermissions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.property.permissions"></a>

```csharp
public string[] Permissions { get; }
```

- *Type:* string[]

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.property.principal"></a>

```csharp
public DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference Principal { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference">DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGlueCatalogCreateTableDefaultPermissions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissions">DataAwsccGlueCatalogCreateTableDefaultPermissions</a>

---


### DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference <a name="DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifier">DataLakePrincipalIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipal">DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipal</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataLakePrincipalIdentifier`<sup>Required</sup> <a name="DataLakePrincipalIdentifier" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifier"></a>

```csharp
public string DataLakePrincipalIdentifier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipal InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipal">DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipal</a>

---


### DataAwsccGlueCatalogFederatedCatalogOutputReference <a name="DataAwsccGlueCatalogFederatedCatalogOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGlueCatalogFederatedCatalogOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.property.connectionName">ConnectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.property.identifier">Identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalog">DataAwsccGlueCatalogFederatedCatalog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionName`<sup>Required</sup> <a name="ConnectionName" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.property.connectionName"></a>

```csharp
public string ConnectionName { get; }
```

- *Type:* string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.property.identifier"></a>

```csharp
public string Identifier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGlueCatalogFederatedCatalog InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalog">DataAwsccGlueCatalogFederatedCatalog</a>

---


### DataAwsccGlueCatalogTagsList <a name="DataAwsccGlueCatalogTagsList" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGlueCatalogTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsList.get"></a>

```csharp
private DataAwsccGlueCatalogTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccGlueCatalogTagsOutputReference <a name="DataAwsccGlueCatalogTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGlueCatalogTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTags">DataAwsccGlueCatalogTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGlueCatalogTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTags">DataAwsccGlueCatalogTags</a>

---


### DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference <a name="DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.property.catalogArn">CatalogArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalog">DataAwsccGlueCatalogTargetRedshiftCatalog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CatalogArn`<sup>Required</sup> <a name="CatalogArn" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.property.catalogArn"></a>

```csharp
public string CatalogArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGlueCatalogTargetRedshiftCatalog InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalog">DataAwsccGlueCatalogTargetRedshiftCatalog</a>

---



