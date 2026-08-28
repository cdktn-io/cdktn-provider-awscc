# `dataAwsccMgnNetworkMigrationDefinition` Submodule <a name="`dataAwsccMgnNetworkMigrationDefinition` Submodule" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMgnNetworkMigrationDefinition <a name="DataAwsccMgnNetworkMigrationDefinition" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/mgn_network_migration_definition awscc_mgn_network_migration_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMgnNetworkMigrationDefinition(Construct Scope, string Id, DataAwsccMgnNetworkMigrationDefinitionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionConfig">DataAwsccMgnNetworkMigrationDefinitionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionConfig">DataAwsccMgnNetworkMigrationDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccMgnNetworkMigrationDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccMgnNetworkMigrationDefinition.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccMgnNetworkMigrationDefinition.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccMgnNetworkMigrationDefinition.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccMgnNetworkMigrationDefinition.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccMgnNetworkMigrationDefinition resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccMgnNetworkMigrationDefinition to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccMgnNetworkMigrationDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/mgn_network_migration_definition#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMgnNetworkMigrationDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.networkMigrationDefinitionId">NetworkMigrationDefinitionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.scopeTags">ScopeTags</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.sourceConfigurations">SourceConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList">DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList">DataAwsccMgnNetworkMigrationDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.targetDeployment">TargetDeployment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.targetNetwork">TargetNetwork</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference">DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.targetS3Configuration">TargetS3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference">DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkMigrationDefinitionId`<sup>Required</sup> <a name="NetworkMigrationDefinitionId" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.networkMigrationDefinitionId"></a>

```csharp
public string NetworkMigrationDefinitionId { get; }
```

- *Type:* string

---

##### `ScopeTags`<sup>Required</sup> <a name="ScopeTags" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.scopeTags"></a>

```csharp
public StringMap ScopeTags { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `SourceConfigurations`<sup>Required</sup> <a name="SourceConfigurations" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.sourceConfigurations"></a>

```csharp
public DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList SourceConfigurations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList">DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.tags"></a>

```csharp
public DataAwsccMgnNetworkMigrationDefinitionTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList">DataAwsccMgnNetworkMigrationDefinitionTagsList</a>

---

##### `TargetDeployment`<sup>Required</sup> <a name="TargetDeployment" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.targetDeployment"></a>

```csharp
public string TargetDeployment { get; }
```

- *Type:* string

---

##### `TargetNetwork`<sup>Required</sup> <a name="TargetNetwork" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.targetNetwork"></a>

```csharp
public DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference TargetNetwork { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference">DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference</a>

---

##### `TargetS3Configuration`<sup>Required</sup> <a name="TargetS3Configuration" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.targetS3Configuration"></a>

```csharp
public DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference TargetS3Configuration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference">DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMgnNetworkMigrationDefinitionConfig <a name="DataAwsccMgnNetworkMigrationDefinitionConfig" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMgnNetworkMigrationDefinitionConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/mgn_network_migration_definition#id DataAwsccMgnNetworkMigrationDefinition#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMgnNetworkMigrationDefinitionSourceConfigurations <a name="DataAwsccMgnNetworkMigrationDefinitionSourceConfigurations" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMgnNetworkMigrationDefinitionSourceConfigurations {

};
```


### DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration <a name="DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration {

};
```


### DataAwsccMgnNetworkMigrationDefinitionTags <a name="DataAwsccMgnNetworkMigrationDefinitionTags" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMgnNetworkMigrationDefinitionTags {

};
```


### DataAwsccMgnNetworkMigrationDefinitionTargetNetwork <a name="DataAwsccMgnNetworkMigrationDefinitionTargetNetwork" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetwork.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMgnNetworkMigrationDefinitionTargetNetwork {

};
```


### DataAwsccMgnNetworkMigrationDefinitionTargetS3Configuration <a name="DataAwsccMgnNetworkMigrationDefinitionTargetS3Configuration" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3Configuration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMgnNetworkMigrationDefinitionTargetS3Configuration {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList <a name="DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.get"></a>

```csharp
private DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference <a name="DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.sourceEnvironment">SourceEnvironment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.sourceS3Configuration">SourceS3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference">DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurations">DataAwsccMgnNetworkMigrationDefinitionSourceConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SourceEnvironment`<sup>Required</sup> <a name="SourceEnvironment" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.sourceEnvironment"></a>

```csharp
public string SourceEnvironment { get; }
```

- *Type:* string

---

##### `SourceS3Configuration`<sup>Required</sup> <a name="SourceS3Configuration" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.sourceS3Configuration"></a>

```csharp
public DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference SourceS3Configuration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference">DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMgnNetworkMigrationDefinitionSourceConfigurations InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurations">DataAwsccMgnNetworkMigrationDefinitionSourceConfigurations</a>

---


### DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference <a name="DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.s3Bucket">S3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.s3BucketOwner">S3BucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.s3Key">S3Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration">DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.s3Bucket"></a>

```csharp
public string S3Bucket { get; }
```

- *Type:* string

---

##### `S3BucketOwner`<sup>Required</sup> <a name="S3BucketOwner" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.s3BucketOwner"></a>

```csharp
public string S3BucketOwner { get; }
```

- *Type:* string

---

##### `S3Key`<sup>Required</sup> <a name="S3Key" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.s3Key"></a>

```csharp
public string S3Key { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration">DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration</a>

---


### DataAwsccMgnNetworkMigrationDefinitionTagsList <a name="DataAwsccMgnNetworkMigrationDefinitionTagsList" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMgnNetworkMigrationDefinitionTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.get"></a>

```csharp
private DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference <a name="DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTags">DataAwsccMgnNetworkMigrationDefinitionTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMgnNetworkMigrationDefinitionTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTags">DataAwsccMgnNetworkMigrationDefinitionTags</a>

---


### DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference <a name="DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.inboundCidr">InboundCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.inspectionCidr">InspectionCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.outboundCidr">OutboundCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.topology">Topology</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetwork">DataAwsccMgnNetworkMigrationDefinitionTargetNetwork</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InboundCidr`<sup>Required</sup> <a name="InboundCidr" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.inboundCidr"></a>

```csharp
public string InboundCidr { get; }
```

- *Type:* string

---

##### `InspectionCidr`<sup>Required</sup> <a name="InspectionCidr" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.inspectionCidr"></a>

```csharp
public string InspectionCidr { get; }
```

- *Type:* string

---

##### `OutboundCidr`<sup>Required</sup> <a name="OutboundCidr" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.outboundCidr"></a>

```csharp
public string OutboundCidr { get; }
```

- *Type:* string

---

##### `Topology`<sup>Required</sup> <a name="Topology" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.topology"></a>

```csharp
public string Topology { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMgnNetworkMigrationDefinitionTargetNetwork InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetwork">DataAwsccMgnNetworkMigrationDefinitionTargetNetwork</a>

---


### DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference <a name="DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.s3Bucket">S3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.s3BucketOwner">S3BucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3Configuration">DataAwsccMgnNetworkMigrationDefinitionTargetS3Configuration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.s3Bucket"></a>

```csharp
public string S3Bucket { get; }
```

- *Type:* string

---

##### `S3BucketOwner`<sup>Required</sup> <a name="S3BucketOwner" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.s3BucketOwner"></a>

```csharp
public string S3BucketOwner { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMgnNetworkMigrationDefinitionTargetS3Configuration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3Configuration">DataAwsccMgnNetworkMigrationDefinitionTargetS3Configuration</a>

---



